# School of Purpose - Remaining Implementation Guide

## 🎯 Complete Implementation Instructions

This guide provides step-by-step instructions to implement all remaining features.

---

## 1. Admin View of Attendance Methods

### Location: sopministry.html
### Function to Update: `loadStudentTable()` or `loadFilteredStudentTable()`

### Code to Add:

```javascript
// Add this function after the existing student table functions
function loadStudentTableWithAttendance() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';
    
    // Get today's check-ins from localStorage
    const today = new Date().toDateString();
    const savedCheckIns = localStorage.getItem('studentCheckIns');
    const allCheckIns = savedCheckIns ? JSON.parse(savedCheckIns) : {};
    const todayCheckIns = allCheckIns[today] || {};
    
    let studentsToShow = filteredStudents.length > 0 ? filteredStudents : allStudents;
    
    studentsToShow.forEach((student, index) => {
        const actualIndex = allStudents.indexOf(student);
        const checkInData = todayCheckIns[student.email];
        
        // Determine check-in status
        let checkInStatus = '';
        if (checkInData) {
            const icon = checkInData.method === 'online' ? '💻' : '🏫';
            const method = checkInData.method === 'online' ? 'Online' : 'In-Person';
            checkInStatus = `<span class="status-badge status-paid">${icon} ${method} ${checkInData.time}</span>`;
        } else {
            checkInStatus = '<span style="color: #999;">Not checked in</span>';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="checkbox-cell">
                <input type="checkbox" class="student-checkbox" onchange="updateSelectedCount()">
            </td>
            <td><strong>${student.name}</strong></td>
            <td>Year ${student.year}</td>
            <td>${student.email}</td>
            <td><span class="status-badge status-${student.status.toLowerCase()}">${student.status}</span></td>
            <td>${checkInStatus}</td>
            <td>$${student.balance}</td>
            <td>
                <button class="action-btn btn-info" style="padding: 5px 10px;" onclick="viewStudentDetails(${actualIndex})">View</button>
                <button class="action-btn btn-success" style="padding: 5px 10px;" onclick="showPaymentProcessing(${actualIndex})">💳 Pay</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
```

### Update Table Header:

Find the student table header in sopministry.html and add "Today's Attendance" column:

```html
<thead>
    <tr>
        <th class="checkbox-cell">
            <input type="checkbox" class="student-checkbox" id="selectAll" onchange="toggleSelectAll(this)">
        </th>
        <th>Name</th>
        <th>Year</th>
        <th>Email</th>
        <th>Payment Status</th>
        <th>Today's Attendance</th>  <!-- ADD THIS -->
        <th>Balance</th>
        <th>Actions</th>
    </tr>
</thead>
```

### Update Function Calls:

Replace all calls to `loadStudentTable()` with `loadStudentTableWithAttendance()`:
- In `showDashboard()`
- In `filterStudents()`
- In `switchTab()`

---

## 2. Add Year 1/Year 2 Sub-Tabs

### Location: sopministry.html - Students Section

### Find this section (around line 1470):

```html
<!-- Year Selection Tabs -->
<div style="background: var(--light); padding: 10px; border-radius: 10px; margin-bottom: 20px; display: flex; gap: 10px;">
    <button class="action-btn btn-info" id="allYearsBtn" onclick="switchYearView('all', this)" style="flex: 1;">
        📚 All Students
    </button>
    <button class="action-btn" id="year1Btn" onclick="switchYearView(1, this)" style="flex: 1; background: white; color: var(--primary); border: 2px solid var(--primary);">
        📖 Year 1 Students
    </button>
    <button class="action-btn" id="year2Btn" onclick="switchYearView(2, this)" style="flex: 1; background: white; color: var(--primary); border: 2px solid var(--primary);">
        📗 Year 2 Students
    </button>
</div>
```

### The JavaScript function `switchYearView()` already exists! Just make sure it's working:

```javascript
function switchYearView(year, element) {
    currentYearView = year;
    
    // Update button styles
    document.getElementById('allYearsBtn').style.background = 'white';
    document.getElementById('allYearsBtn').style.color = 'var(--primary)';
    document.getElementById('year1Btn').style.background = 'white';
    document.getElementById('year1Btn').style.color = 'var(--primary)';
    document.getElementById('year2Btn').style.background = 'white';
    document.getElementById('year2Btn').style.color = 'var(--primary)';
    
    // Highlight selected button
    element.style.background = 'var(--primary)';
    element.style.color = 'white';
    
    // Update year filter dropdown to match
    document.getElementById('yearFilter').value = year === 'all' ? 'all' : year.toString();
    
    // Reload table with filtered students
    filterStudents();
}
```

---

## 3. Add Real Class Schedule

### Location: sopministry.html

### Find the Schedule/Class section and replace with:

```javascript
// Real 5-Unit Schedule for 2025-2026
const realClassSchedule = [
    {
        unit: 1,
        title: 'Unit 1 - Introduction to Ministry',
        startDate: '2025-10-21',
        endDate: '2025-11-11',
        breakStart: '2025-11-12',
        breakEnd: '2025-11-12',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Biblical Foundations',
            'Ministry Calling',
            'Spiritual Gifts',
            'Prayer & Worship'
        ]
    },
    {
        unit: 2,
        title: 'Unit 2 - Biblical Studies',
        startDate: '2025-12-02',
        endDate: '2025-12-30',
        breakStart: '2025-12-31',
        breakEnd: '2026-01-19',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Old Testament Survey',
            'New Testament Survey',
            'Biblical Interpretation',
            'Theology Basics'
        ]
    },
    {
        unit: 3,
        title: 'Unit 3 - Ministry Practice',
        startDate: '2026-01-20',
        endDate: '2026-02-20',
        breakStart: '2026-02-11',
        breakEnd: '2026-03-02',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Teaching & Preaching',
            'Counseling Basics',
            'Leadership Development',
            'Church Administration'
        ]
    },
    {
        unit: 4,
        title: 'Unit 4 - Advanced Ministry',
        startDate: '2026-03-03',
        endDate: '2026-03-24',
        breakStart: '2026-03-25',
        breakEnd: '2026-04-13',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Evangelism & Outreach',
            'Discipleship',
            'Worship Leading',
            'Youth Ministry'
        ]
    },
    {
        unit: 5,
        title: 'Unit 5 - Ministry Capstone',
        startDate: '2026-04-14',
        endDate: '2026-05-05',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Ministry Project',
            'Practical Application',
            'Final Presentations',
            'Graduation Preparation'
        ]
    }
];

const graduationDate = '2026-05-08';

// Function to display schedule
function displayClassSchedule() {
    const container = document.getElementById('scheduleContainer');
    if (!container) return;
    
    let html = '<h2 style="margin-bottom: 20px;">📅 2025-2026 Class Schedule</h2>';
    html += '<p style="margin-bottom: 30px; color: var(--grey-dark);">Classes meet every <strong>Tuesday from 6:30 PM - 9:30 PM</strong></p>';
    
    realClassSchedule.forEach((unit, index) => {
        const startDate = new Date(unit.startDate);
        const endDate = new Date(unit.endDate);
        const isCurrentUnit = new Date() >= startDate && new Date() <= endDate;
        
        html += `
            <div class="workflow-card" style="${isCurrentUnit ? 'border: 3px solid var(--primary); background: #f0f8ff;' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div>
                        <h3 style="color: var(--primary); margin-bottom: 5px;">${unit.title}</h3>
                        <p style="color: var(--grey-dark); font-size: 14px;">
                            ${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - 
                            ${endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p style="color: var(--grey-dark); font-size: 14px; margin-top: 5px;">
                            <strong>${unit.day}s, ${unit.time}</strong>
                        </p>
                    </div>
                    ${isCurrentUnit ? '<span class="status-badge status-paid">CURRENT UNIT</span>' : ''}
                </div>
                <div style="margin-top: 15px;">
                    <strong style="color: var(--dark);">Topics Covered:</strong>
                    <ul style="margin-top: 10px; margin-left: 20px; color: var(--grey-dark);">
                        ${unit.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
                ${unit.breakStart ? `
                    <div style="margin-top: 15px; padding: 10px; background: var(--light); border-radius: 8px;">
                        <strong>Break Period:</strong> ${new Date(unit.breakStart).toLocaleDateString()} - ${new Date(unit.breakEnd).toLocaleDateString()}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    // Add graduation info
    const gradDate = new Date(graduationDate);
    html += `
        <div class="workflow-card" style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: white; margin-top: 30px;">
            <div style="text-align: center;">
                <h2 style="color: white; margin-bottom: 15px;">🎓 Graduation Ceremony</h2>
                <p style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
                    ${gradDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p style="opacity: 0.9;">Celebrate the completion of your ministry education journey!</p>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Call this function when the schedule tab is opened
// Add to switchTab() function:
// if (tabName === 'schedule') { displayClassSchedule(); }
```

---

## 4. Google Sign-In Integration

### Step 1: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project: "School of Purpose"
3. Enable Google Sign-In API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins:
   - `http://localhost`
   - `https://yourdomain.com`
6. Add authorized redirect URIs:
   - `http://localhost/student-portal.html`
   - `https://yourdomain.com/student-portal.html`

### Step 2: Add to student-portal.html

Add this in the `<head>` section:

```html
<!-- Google Sign-In -->
<script src="https://accounts.google.com/gsi/client" async defer></script>
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
```

### Step 3: Add Sign-In Button

Replace the existing auth section with:

```html
<div id="googleSignInDiv"></div>

<script>
function handleCredentialResponse(response) {
    // Decode JWT token
    const responsePayload = decodeJwtResponse(response.credential);
    
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Email: ' + responsePayload.email);
    
    // Store user info
    localStorage.setItem('studentUser', JSON.stringify({
        id: responsePayload.sub,
        name: responsePayload.name,
        email: responsePayload.email,
        picture: responsePayload.picture
    }));
    
    // Show student portal
    showStudentPortal(responsePayload);
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    
    google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { 
            theme: "outline", 
            size: "large",
            text: "signin_with",
            shape: "rectangular"
        }
    );
    
    google.accounts.id.prompt(); // Display One Tap dialog
};

function showStudentPortal(user) {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('student-portal').style.display = 'block';
    document.getElementById('studentName').textContent = user.name;
    document.getElementById('studentEmail').textContent = user.email;
}

function signOut() {
    google.accounts.id.disableAutoSelect();
    localStorage.removeItem('studentUser');
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('student-portal').style.display = 'none';
}
</script>
```

---

## 5. Email System Integration

### Option A: SendGrid

```javascript
// Add to sopministry.html

const SENDGRID_API_KEY = 'YOUR_SENDGRID_API_KEY';

async function sendEmail(to, subject, htmlContent) {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [{
                to: [{ email: to }],
                subject: subject
            }],
            from: {
                email: 'noreply@schoolofpurpose.org',
                name: 'School of Purpose'
            },
            content: [{
                type: 'text/html',
                value: htmlContent
            }]
        })
    });
    
    return response.ok;
}

// Usage:
function sendWelcomeEmail(studentEmail, studentName) {
    const subject = 'Welcome to School of Purpose!';
    const html = `
        <h1>Welcome ${studentName}!</h1>
        <p>We're excited to have you join our ministry education program.</p>
        <p>Classes begin on October 21, 2025.</p>
        <p>Every Tuesday, 6:30 PM - 9:30 PM</p>
    `;
    
    sendEmail(studentEmail, subject, html)
        .then(() => alert('Welcome email sent!'))
        .catch(err => alert('Error sending email: ' + err));
}
```

### Email Templates:

```javascript
const emailTemplates = {
    welcome: (name) => `
        <h1>Welcome ${name}!</h1>
        <p>We're excited to have you join School of Purpose.</p>
    `,
    
    paymentReminder: (name, amount, dueDate) => `
        <h1>Payment Reminder</h1>
        <p>Hi ${name},</p>
        <p>This is a friendly reminder that you have a payment of $${amount} due on ${dueDate}.</p>
    `,
    
    classReminder: (name, date, time) => `
        <h1>Class Reminder</h1>
        <p>Hi ${name},</p>
        <p>Don't forget! Class is tomorrow ${date} at ${time}.</p>
    `
};
```

---

## 6. SMS System Integration (Twilio)

```javascript
// Add to sopministry.html

const TWILIO_ACCOUNT_SID = 'YOUR_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = 'YOUR_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = '+1234567890';

async function sendSMS(to, message) {
    const auth = btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`);
    
    const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                To: to,
                From: TWILIO_PHONE_NUMBER,
                Body: message
            })
        }
    );
    
    return response.ok;
}

// Usage:
function sendClassReminder(studentPhone, studentName) {
    const message = `Hi ${studentName}! Reminder: Class tomorrow at 6:30 PM. See you there! - School of Purpose`;
    
    sendSMS(studentPhone, message)
        .then(() => alert('SMS sent!'))
        .catch(err => alert('Error sending SMS: ' + err));
}
```

### SMS Templates:

```javascript
const smsTemplates = {
    classReminder: (name) => 
        `Hi ${name}! Class tomorrow at 6:30 PM. See you there! - SOP`,
    
    paymentReminder: (name, amount) => 
        `Hi ${name}, payment of $${amount} is due soon. Visit our portal to pay. - SOP`,
    
    emergency: (message) => 
        `IMPORTANT: ${message} - School of Purpose`
};
```

---

## 7. Testing Checklist

### Before Launch:

- [ ] Test student sign-in on desktop
- [ ] Test student sign-in on mobile
- [ ] Test admin dashboard login
- [ ] Test all tabs in admin dashboard
- [ ] Test Year 1/Year 2 filtering
- [ ] Test attendance method display
- [ ] Test payment details editing
- [ ] Test CSV exports
- [ ] Test donation QR code
- [ ] Test Google Sign-In (if implemented)
- [ ] Test email sending (if implemented)
- [ ] Test SMS sending (if implemented)
- [ ] Test on Chrome
- [ ] Test on Safari
- [ ] Test on Firefox
- [ ] Test on mobile browsers

---

## 8. Deployment Steps

### Option A: GitHub Pages (Free)

1. Create GitHub repository
2. Push all files
3. Go to Settings > Pages
4. Select branch: main
5. Save
6. Access at: `https://username.github.io/repo-name`

### Option B: Netlify (Free)

1. Sign up at netlify.com
2. Drag and drop your folder
3. Get instant URL
4. Optional: Add custom domain

### Option C: Custom Domain

1. Purchase domain (GoDaddy, Namecheap, etc.)
2. Set up hosting (Bluehost, HostGator, etc.)
3. Upload files via FTP
4. Configure DNS
5. Install SSL certificate

---

## 9. Security Considerations

### Before Going Live:

1. **Change Default Password:**
   - Update admin login to use real authentication
   - Don't use "any password" in production

2. **Secure API Keys:**
   - Never commit API keys to GitHub
   - Use environment variables
   - Rotate keys regularly

3. **Enable HTTPS:**
   - Required for Google Sign-In
   - Required for payment processing
   - Use Let's Encrypt (free)

4. **Data Privacy:**
   - Add privacy policy
   - Get consent for data collection
   - Comply with GDPR/CCPA if applicable

5. **Backup Data:**
   - Export student data regularly
   - Store backups securely
   - Test restore procedures

---

## 10. Quick Implementation Priority

### Do This Week:
1. ✅ Test current functionality
2. ✅ Add attendance method display to admin
3. ✅ Verify Year 1/Year 2 tabs work
4. ✅ Add real class schedule

### Do Next Week:
5. Set up Google Sign-In
6. Test on multiple devices
7. Fix any bugs found

### Do When Ready:
8. Set up email system
9. Set up SMS system
10. Deploy to production

---

## Need Help?

### Common Issues:

**localStorage not persisting:**
- Check browser settings
- Ensure cookies enabled
- Try different browser

**Google Sign-In not working:**
- Verify client ID
- Check authorized domains
- Enable third-party cookies

**Emails not sending:**
- Verify API key
- Check spam folder
- Verify sender domain

---

**This guide contains everything needed to complete the remaining 40% of the project!**

**Estimated Time:** 15-20 hours total
**Priority:** Admin attendance view (2-3 hours) → Schedule (2-3 hours) → Google Sign-In (3-4 hours)
