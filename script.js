let selectedYear = null;
let currentMinistry = {
    name: 'School of Purpose',
    year1Tuition: 250,
    year2Tuition: 280,
    admin: null
};

// Generate 58 realistic students (35 Year 1, 23 Year 2)
const allStudents = [
    // Year 1 Students (35 students) - $250 per semester
    { name: 'Emma Johnson', year: 1, email: 'emma.j@email.com', phone: '(555) 101-2001', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Liam Williams', year: 1, email: 'liam.w@email.com', phone: '(555) 101-2002', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Olivia Brown', year: 1, email: 'olivia.b@email.com', phone: '(555) 101-2003', status: 'PENDING', balance: 125, attendance: 95 },
    { name: 'Noah Davis', year: 1, email: 'noah.d@email.com', phone: '(555) 101-2004', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Ava Miller', year: 1, email: 'ava.m@email.com', phone: '(555) 101-2005', status: 'PAID', balance: 0, attendance: 97 },
    { name: 'Elijah Wilson', year: 1, email: 'elijah.w@email.com', phone: '(555) 101-2006', status: 'PENDING', balance: 250, attendance: 92 },
    { name: 'Sophia Moore', year: 1, email: 'sophia.m@email.com', phone: '(555) 101-2007', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'James Taylor', year: 1, email: 'james.t@email.com', phone: '(555) 101-2008', status: 'PAID', balance: 0, attendance: 96 },
    { name: 'Isabella Anderson', year: 1, email: 'isabella.a@email.com', phone: '(555) 101-2009', status: 'PAID', balance: 0, attendance: 99 },
    { name: 'Benjamin Thomas', year: 1, email: 'benjamin.t@email.com', phone: '(555) 101-2010', status: 'PENDING', balance: 125, attendance: 94 },
    { name: 'Mia Jackson', year: 1, email: 'mia.j@email.com', phone: '(555) 101-2011', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Lucas White', year: 1, email: 'lucas.w@email.com', phone: '(555) 101-2012', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Charlotte Harris', year: 1, email: 'charlotte.h@email.com', phone: '(555) 101-2013', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Mason Martin', year: 1, email: 'mason.m@email.com', phone: '(555) 101-2014', status: 'PAID', balance: 0, attendance: 97 },
    { name: 'Amelia Thompson', year: 1, email: 'amelia.t@email.com', phone: '(555) 101-2015', status: 'PENDING', balance: 250, attendance: 89 },
    { name: 'Ethan Garcia', year: 1, email: 'ethan.g@email.com', phone: '(555) 101-2016', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Harper Martinez', year: 1, email: 'harper.m@email.com', phone: '(555) 101-2017', status: 'PAID', balance: 0, attendance: 95 },
    { name: 'Alexander Robinson', year: 1, email: 'alex.r@email.com', phone: '(555) 101-2018', status: 'PAID', balance: 0, attendance: 99 },
    { name: 'Evelyn Clark', year: 1, email: 'evelyn.c@email.com', phone: '(555) 101-2019', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Daniel Rodriguez', year: 1, email: 'daniel.r@email.com', phone: '(555) 101-2020', status: 'PENDING', balance: 125, attendance: 93 },
    { name: 'Abigail Lewis', year: 1, email: 'abigail.l@email.com', phone: '(555) 101-2021', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Michael Lee', year: 1, email: 'michael.l@email.com', phone: '(555) 101-2022', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Emily Walker', year: 1, email: 'emily.w@email.com', phone: '(555) 101-2023', status: 'PAID', balance: 0, attendance: 96 },
    { name: 'Matthew Hall', year: 1, email: 'matthew.h@email.com', phone: '(555) 101-2024', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Elizabeth Allen', year: 1, email: 'elizabeth.a@email.com', phone: '(555) 101-2025', status: 'PENDING', balance: 250, attendance: 88 },
    { name: 'Joseph Young', year: 1, email: 'joseph.y@email.com', phone: '(555) 101-2026', status: 'PAID', balance: 0, attendance: 99 },
    { name: 'Sofia Hernandez', year: 1, email: 'sofia.h@email.com', phone: '(555) 101-2027', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'David King', year: 1, email: 'david.k@email.com', phone: '(555) 101-2028', status: 'PAID', balance: 0, attendance: 97 },
    { name: 'Avery Wright', year: 1, email: 'avery.w@email.com', phone: '(555) 101-2029', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Samuel Lopez', year: 1, email: 'samuel.l@email.com', phone: '(555) 101-2030', status: 'PAID', balance: 0, attendance: 95 },
    { name: 'Ella Hill', year: 1, email: 'ella.h@email.com', phone: '(555) 101-2031', status: 'PENDING', balance: 125, attendance: 91 },
    { name: 'Jackson Scott', year: 1, email: 'jackson.s@email.com', phone: '(555) 101-2032', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Scarlett Green', year: 1, email: 'scarlett.g@email.com', phone: '(555) 101-2033', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Sebastian Adams', year: 1, email: 'sebastian.a@email.com', phone: '(555) 101-2034', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Victoria Baker', year: 1, email: 'victoria.b@email.com', phone: '(555) 101-2035', status: 'PAID', balance: 0, attendance: 99 },

    // Year 2 Students (23 students) - $280 per semester
    { name: 'Grace Nelson', year: 2, email: 'grace.n@email.com', phone: '(555) 201-3001', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Henry Carter', year: 2, email: 'henry.c@email.com', phone: '(555) 201-3002', status: 'PENDING', balance: 140, attendance: 96 },
    { name: 'Chloe Mitchell', year: 2, email: 'chloe.m@email.com', phone: '(555) 201-3003', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Owen Perez', year: 2, email: 'owen.p@email.com', phone: '(555) 201-3004', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Lily Roberts', year: 2, email: 'lily.r@email.com', phone: '(555) 201-3005', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Jack Turner', year: 2, email: 'jack.t@email.com', phone: '(555) 201-3006', status: 'PENDING', balance: 280, attendance: 90 },
    { name: 'Zoey Phillips', year: 2, email: 'zoey.p@email.com', phone: '(555) 201-3007', status: 'PAID', balance: 0, attendance: 99 },
    { name: 'Luke Campbell', year: 2, email: 'luke.c@email.com', phone: '(555) 201-3008', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Nora Parker', year: 2, email: 'nora.p@email.com', phone: '(555) 201-3009', status: 'PAID', balance: 0, attendance: 97 },
    { name: 'Ryan Evans', year: 2, email: 'ryan.e@email.com', phone: '(555) 201-3010', status: 'PENDING', balance: 140, attendance: 94 },
    { name: 'Hannah Edwards', year: 2, email: 'hannah.e@email.com', phone: '(555) 201-3011', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Nathan Collins', year: 2, email: 'nathan.c@email.com', phone: '(555) 201-3012', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Layla Stewart', year: 2, email: 'layla.s@email.com', phone: '(555) 201-3013', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Isaac Sanchez', year: 2, email: 'isaac.s@email.com', phone: '(555) 201-3014', status: 'PAID', balance: 0, attendance: 99 },
    { name: 'Zoe Morris', year: 2, email: 'zoe.m@email.com', phone: '(555) 201-3015', status: 'PENDING', balance: 280, attendance: 87 },
    { name: 'Gabriel Rogers', year: 2, email: 'gabriel.r@email.com', phone: '(555) 201-3016', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Penelope Reed', year: 2, email: 'penelope.r@email.com', phone: '(555) 201-3017', status: 'PAID', balance: 0, attendance: 96 },
    { name: 'Julian Cook', year: 2, email: 'julian.c@email.com', phone: '(555) 201-3018', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Aria Morgan', year: 2, email: 'aria.m@email.com', phone: '(555) 201-3019', status: 'PAID', balance: 0, attendance: 98 },
    { name: 'Wyatt Bell', year: 2, email: 'wyatt.b@email.com', phone: '(555) 201-3020', status: 'PENDING', balance: 140, attendance: 92 },
    { name: 'Aurora Murphy', year: 2, email: 'aurora.m@email.com', phone: '(555) 201-3021', status: 'PAID', balance: 0, attendance: 100 },
    { name: 'Leo Bailey', year: 2, email: 'leo.b@email.com', phone: '(555) 201-3022', status: 'PAID', balance: 0, attendance: 99 },
    { name: 'Hazel Rivera', year: 2, email: 'hazel.r@email.com', phone: '(555) 201-3023', status: 'PAID', balance: 0, attendance: 100 }
];

// Landing Page Functions
function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function showSignup() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'flex';
}

function showStudentRegistration() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('studentRegistration').style.display = 'block';
    
    // Update the form with current ministry info if available
    const savedMinistry = localStorage.getItem('currentMinistry');
    if (savedMinistry) {
        const ministry = JSON.parse(savedMinistry);
        document.querySelector('.ministry-name').textContent = ministry.name;
        document.querySelector('.year-card:nth-child(1) .year-card-price').textContent = `${ministry.year1Tuition}`;
        document.querySelector('.year-card:nth-child(2) .year-card-price').textContent = `${ministry.year2Tuition}`;
        currentMinistry = ministry;
    }
}

function backToLanding() {
    document.getElementById('studentRegistration').style.display = 'none';
    document.getElementById('landingPage').style.display = 'flex';
    // Reset form
    document.querySelector('#studentRegistration form').reset();
    selectedYear = null;
    document.querySelectorAll('.year-card').forEach(card => card.classList.remove('selected'));
    document.getElementById('paymentSummary').style.display = 'none';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
}

// Ministry Authentication
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login - in production, this would validate against a database
    if (email && password) {
        // Check if there's a saved ministry account
        const savedMinistry = localStorage.getItem('ministryAccount');
        if (savedMinistry) {
            const ministry = JSON.parse(savedMinistry);
            if (ministry.email === email) {
                currentMinistry = ministry;
                localStorage.setItem('currentMinistry', JSON.stringify(ministry));
                showDashboard(ministry);
                closeModal();
                return;
            }
        }
        
        // Default demo account
        if (email === 'admin@schoolofpurpose.org') {
            const defaultMinistry = {
                name: 'School of Purpose',
                year1Tuition: 250,
                year2Tuition: 280,
                email: email,
                adminName: 'Admin User'
            };
            currentMinistry = defaultMinistry;
            localStorage.setItem('currentMinistry', JSON.stringify(defaultMinistry));
            showDashboard(defaultMinistry);
            closeModal();
        } else {
            alert('Invalid credentials. Try admin@schoolofpurpose.org with any password for demo.');
        }
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const ministry = {
        name: document.getElementById('ministryName').value,
        adminName: document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value,
        email: document.getElementById('signupEmail').value,
        phone: document.getElementById('phone').value,
        year1Tuition: parseInt(document.getElementById('year1Tuition').value),
        year2Tuition: parseInt(document.getElementById('year2Tuition').value),
        createdAt: new Date().toISOString()
    };
    
    // Save ministry account
    localStorage.setItem('ministryAccount', JSON.stringify(ministry));
    localStorage.setItem('currentMinistry', JSON.stringify(ministry));
    currentMinistry = ministry;
    
    alert(`Ministry account created successfully for ${ministry.name}!`);
    showDashboard(ministry);
    closeModal();
}

// Student Registration Functions
function selectYear(year, element) {
    selectedYear = year;
    document.querySelectorAll('.year-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    updatePaymentSummary();
}

function updatePaymentSummary() {
    if (!selectedYear) return;
    
    const paymentPlan = document.getElementById('paymentPlan').value;
    const tuition = selectedYear === 1 ? currentMinistry.year1Tuition : currentMinistry.year2Tuition;
    
    document.getElementById('paymentSummary').style.display = 'block';
    document.getElementById('selectedYear').textContent = `Year ${selectedYear}`;
    document.getElementById('baseTuition').textContent = `${tuition}`;
    
    let finalAmount = tuition;
    let showDiscount = false;
    
    if (paymentPlan === 'full') {
        // 5% discount for full payment
        const discount = tuition * 0.05;
        finalAmount = tuition - discount;
        showDiscount = true;
        document.getElementById('discount').textContent = `-${discount.toFixed(2)}`;
        document.getElementById('discountRow').style.display = 'flex';
    } else if (paymentPlan === 'semester') {
        document.getElementById('discountRow').style.display = 'none';
        document.getElementById('totalDue').textContent = `${(tuition/2).toFixed(2)} per semester`;
        return;
    } else if (paymentPlan === 'monthly') {
        document.getElementById('discountRow').style.display = 'none';
        document.getElementById('totalDue').textContent = `${(tuition/9).toFixed(2)} per month`;
        return;
    } else if (paymentPlan === 'scholarship') {
        document.getElementById('discountRow').style.display = 'none';
        document.getElementById('totalDue').textContent = 'Pending Review';
        return;
    } else {
        document.getElementById('discountRow').style.display = 'none';
    }
    
    document.getElementById('totalDue').textContent = `${finalAmount.toFixed(2)}`;
}

function handleStudentRegistration(event) {
    event.preventDefault();
    
    if (!selectedYear) {
        alert('Please select a program year (Year 1 or Year 2)');
        return;
    }
    
    const student = {
        firstName: document.getElementById('studentFirstName').value,
        lastName: document.getElementById('studentLastName').value,
        email: document.getElementById('studentEmail').value,
        phone: document.getElementById('studentPhone').value,
        dob: document.getElementById('studentDOB').value,
        parentName: document.getElementById('parentName').value,
        parentPhone: document.getElementById('parentPhone').value,
        year: selectedYear,
        tuition: selectedYear === 1 ? currentMinistry.year1Tuition : currentMinistry.year2Tuition,
        paymentPlan: document.getElementById('paymentPlan').value,
        referralSource: document.getElementById('referralSource').value,
        notes: document.getElementById('studentNotes').value,
        registrationDate: new Date().toISOString(),
        ministry: currentMinistry.name,
        status: 'pending'
    };
    
    // Save registration
    let registrations = JSON.parse(localStorage.getItem('studentRegistrations') || '[]');
    registrations.push(student);
    localStorage.setItem('studentRegistrations', JSON.stringify(registrations));
    
    // Show success message
    alert(`Thank you for registering, ${student.firstName}!\n\nYou have successfully registered for Year ${selectedYear} at ${currentMinistry.name}.\n\nYou will receive a confirmation email at ${student.email} with payment instructions.`);
    
    // Redirect to landing page
    backToLanding();
}

// Dashboard Functions
function showDashboard(ministry) {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('dashboardMinistryName').textContent = ministry.name;
    
    // Set user avatar initials
    const initials = ministry.adminName ? 
        ministry.adminName.split(' ').map(n => n[0]).join('').toUpperCase() : 
        'AD';
    document.getElementById('userAvatar').textContent = initials;
    
    // Update dashboard stats with real data
    updateDashboardStats();
    
    // Load student table
    loadStudentTable();
    
    // Load student registrations
    loadRegistrations();
}

function updateDashboardStats() {
    const year1Students = allStudents.filter(s => s.year === 1);
    const year2Students = allStudents.filter(s => s.year === 2);
    const totalStudents = allStudents.length;
    
    // Calculate revenue
    const year1Revenue = year1Students.filter(s => s.status === 'PAID').length * 250;
    const year2Revenue = year2Students.filter(s => s.status === 'PAID').length * 280;
    const totalRevenue = year1Revenue + year2Revenue;
    
    // Calculate outstanding balance
    const totalOutstanding = allStudents.reduce((sum, s) => sum + s.balance, 0);
    const collectionRate = ((totalRevenue / (totalRevenue + totalOutstanding)) * 100).toFixed(0);
    
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 4) {
        statCards[0].querySelector('.stat-value').textContent = totalStudents;
        statCards[0].querySelector('.stat-label').textContent = `${year1Students.length} Year 1, ${year2Students.length} Year 2`;
        
        statCards[1].querySelector('.stat-value').textContent = `$${totalRevenue.toLocaleString()}`;
        statCards[1].querySelector('.stat-label').textContent = `${collectionRate}% collected`;
        
        statCards[2].querySelector('.stat-value').textContent = year1Students.length;
        statCards[2].querySelector('.stat-label').textContent = '$250 per semester';
        
        statCards[3].querySelector('.stat-value').textContent = year2Students.length;
        statCards[3].querySelector('.stat-label').textContent = '$280 per semester';
    }
}

function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('studentRegistrations') || '[]');
    const ministryRegistrations = registrations.filter(r => r.ministry === currentMinistry.name);
    
    const year1Count = ministryRegistrations.filter(r => r.year === 1).length;
    const year2Count = ministryRegistrations.filter(r => r.year === 2).length;
    
    console.log(`New Registrations - Year 1: ${year1Count}, Year 2: ${year2Count}`);
}

function switchTab(tabName, element) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    
    // Hide all content sections
    const allContentSections = [
        'students-content',
        'materials-content',
        'announcements-content',
        'attendance-content',
        'registrations-content',
        'payments-content',
        'workflows-content',
        'financial-content',
        'communication-content',
        'reports-content',
        'settings-content'
    ];
    
    allContentSections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Show selected content
    const contentMap = {
        'students': 'students-content',
        'materials': 'materials-content',
        'announcements': 'announcements-content',
        'attendance': 'attendance-content',
        'registrations': 'registrations-content',
        'payments': 'payments-content',
        'workflows': 'workflows-content',
        'financial': 'financial-content',
        'communication': 'communication-content',
        'reports': 'reports-content',
        'settings': 'settings-content'
    };
    
    const contentId = contentMap[tabName];
    if (contentId) {
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.style.display = 'block';
            
            // Load data for specific tabs
            if (tabName === 'students') {
                loadStudentTable();
            } else if (tabName === 'materials') {
                loadMaterialsList();
            } else if (tabName === 'announcements') {
                loadAnnouncementsList();
            } else if (tabName === 'registrations') {
                showNewRegistrations();
            }
        } else {
            // Create placeholder for missing content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.innerHTML = `
                    <h2>${tabName.charAt(0).toUpperCase() + tabName.slice(1)}</h2>
                    <p>Content for ${tabName} coming soon...</p>
                `;
            }
        }
    }
}

// Load student table with all students
function loadStudentTable() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';
    
    allStudents.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="checkbox-cell">
                <input type="checkbox" class="student-checkbox" onchange="updateSelectedCount()">
            </td>
            <td><strong>${student.name}</strong></td>
            <td>Year ${student.year}</td>
            <td>${student.email}</td>
            <td><span class="status-badge status-${student.status.toLowerCase()}">${student.status}</span></td>
            <td>$${student.balance}</td>
            <td>
                <button class="action-btn btn-info" style="padding: 5px 10px;" onclick="viewStudentDetails(${index})">View</button>
                <button class="action-btn btn-success" style="padding: 5px 10px;" onclick="generatePaymentLink(${index})">💳 Pay Link</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// View student details
function viewStudentDetails(index) {
    const student = allStudents[index];
    alert(`Student Details:\n\nName: ${student.name}\nYear: ${student.year}\nEmail: ${student.email}\nPhone: ${student.phone}\nPayment Status: ${student.status}\nBalance: $${student.balance}\nAttendance: ${student.attendance}%`);
}

// Generate Sign-In Sheet
function generateSignInSheet(type) {
    let students = [];
    let title = '';
    
    if (type === 'all') {
        students = allStudents;
        title = 'All Students Sign-In Sheet';
    } else if (type === 'year1') {
        students = allStudents.filter(s => s.year === 1);
        title = 'Year 1 Students Sign-In Sheet';
    } else if (type === 'year2') {
        students = allStudents.filter(s => s.year === 2);
        title = 'Year 2 Students Sign-In Sheet';
    }
    
    const today = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    let html = `
        <div class="signin-sheet">
            <div class="signin-header">
                <div class="signin-title">${currentMinistry.name}</div>
                <div class="signin-title">${title}</div>
                <div class="signin-date">${today}</div>
            </div>
            
            <table class="signin-table">
                <thead>
                    <tr>
                        <th style="width: 40px;">#</th>
                        <th>Student Name</th>
                        <th>Year</th>
                        <th class="signature-cell">Signature</th>
                        <th class="time-cell">Time In</th>
                        <th class="notes-cell">Notes</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    students.forEach((student, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${student.name}</strong></td>
                <td>Year ${student.year}</td>
                <td class="signature-cell"></td>
                <td class="time-cell"></td>
                <td class="notes-cell"></td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #333;">
                <p><strong>Total Students:</strong> ${students.length}</p>
                <p><strong>Instructor Signature:</strong> ___________________________________ <strong>Date:</strong> _______________</p>
            </div>
        </div>
        
        <div class="print-button-container no-print">
            <button class="action-btn btn-success" onclick="window.print()" style="padding: 12px 30px; font-size: 16px;">
                🖨️ Print Sign-In Sheet
            </button>
            <button class="action-btn btn-info" onclick="downloadSignInSheet()" style="padding: 12px 30px; font-size: 16px;">
                📥 Download as PDF
            </button>
            <button class="action-btn btn-warning" onclick="document.getElementById('signInSheetContainer').innerHTML = '<p style=\\'color: #666; text-align: center; padding: 40px;\\'>Click one of the buttons above to generate a sign-in sheet</p>'" style="padding: 12px 30px; font-size: 16px;">
                ✕ Close
            </button>
        </div>
    `;
    
    document.getElementById('signInSheetContainer').innerHTML = html;
}

function downloadSignInSheet() {
    alert('In a production environment, this would generate a PDF file for download.\n\nFor now, please use the Print button and select "Save as PDF" from your browser\'s print dialog.');
    window.print();
}

function showNewRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('studentRegistrations') || '[]');
    const ministryRegistrations = registrations.filter(r => r.ministry === currentMinistry.name);
    
    let html = '<h2 style="margin-bottom: 20px;">New Student Registrations</h2>';
    
    if (ministryRegistrations.length === 0) {
        html += '<p>No new registrations yet.</p>';
    } else {
        html += '<table class="student-table"><thead><tr>';
        html += '<th>Name</th><th>Year</th><th>Email</th><th>Payment Plan</th><th>Registration Date</th><th>Actions</th>';
        html += '</tr></thead><tbody>';
        
        ministryRegistrations.forEach((reg, index) => {
            const regDate = new Date(reg.registrationDate).toLocaleDateString();
            html += `<tr>
                <td><strong>${reg.firstName} ${reg.lastName}</strong></td>
                <td>Year ${reg.year}</td>
                <td>${reg.email}</td>
                <td>${reg.paymentPlan}</td>
                <td>${regDate}</td>
                <td>
                    <button onclick="approveRegistration(${index})" style="padding: 5px 10px; background: var(--success); color: white; border: none; border-radius: 5px; margin-right: 5px;">Approve</button>
                    <button onclick="viewRegistration(${index})" style="padding: 5px 10px;">View</button>
                </td>
            </tr>`;
        });
        
        html += '</tbody></table>';
    }
    
    document.getElementById('registrations-content').innerHTML = html;
}

function approveRegistration(index) {
    const registrations = JSON.parse(localStorage.getItem('studentRegistrations') || '[]');
    const ministryRegistrations = registrations.filter(r => r.ministry === currentMinistry.name);
    
    if (ministryRegistrations[index]) {
        alert(`Registration approved for ${ministryRegistrations[index].firstName} ${ministryRegistrations[index].lastName}!`);
        showNewRegistrations();
    }
}

function viewRegistration(index) {
    const registrations = JSON.parse(localStorage.getItem('studentRegistrations') || '[]');
    const ministryRegistrations = registrations.filter(r => r.ministry === currentMinistry.name);
    
    if (ministryRegistrations[index]) {
        const reg = ministryRegistrations[index];
        let details = `Student Registration Details\n\n`;
        details += `Name: ${reg.firstName} ${reg.lastName}\n`;
        details += `Year: ${reg.year}\n`;
        details += `Email: ${reg.email}\n`;
        details += `Phone: ${reg.phone}\n`;
        details += `Tuition: ${reg.tuition}\n`;
        details += `Payment Plan: ${reg.paymentPlan}\n`;
        if (reg.parentName) details += `Parent/Guardian: ${reg.parentName}\n`;
        if (reg.notes) details += `Notes: ${reg.notes}\n`;
        
        alert(details);
    }
}

function showNotifications() {
    alert('Notifications:\n\n• 3 new student registrations\n• 5 payments received today\n• 2 students with overdue payments');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('landingPage').style.display = 'flex';
        localStorage.removeItem('currentMinistry');
    }
}

// ===== BULK OPERATIONS FUNCTIONS =====

function showBulkActions() {
    const bar = document.getElementById('bulkActionsBar');
    bar.classList.toggle('active');
}

function toggleSelectAll(checkbox) {
    const checkboxes = document.querySelectorAll('.student-checkbox:not(#selectAll)');
    checkboxes.forEach(cb => cb.checked = checkbox.checked);
    updateSelectedCount();
}

function updateSelectedCount() {
    const checkboxes = document.querySelectorAll('.student-checkbox:not(#selectAll)');
    const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    document.getElementById('selectedCount').textContent = `${selectedCount} student${selectedCount !== 1 ? 's' : ''} selected`;
    
    // Show/hide bulk actions bar
    const bar = document.getElementById('bulkActionsBar');
    if (selectedCount > 0) {
        bar.classList.add('active');
    } else {
        bar.classList.remove('active');
    }
}

function clearSelection() {
    document.querySelectorAll('.student-checkbox').forEach(cb => cb.checked = false);
    updateSelectedCount();
}

function getSelectedStudents() {
    const checkboxes = document.querySelectorAll('.student-checkbox:not(#selectAll)');
    const selected = [];
    checkboxes.forEach((cb, index) => {
        if (cb.checked) {
            selected.push(index);
        }
    });
    return selected;
}

// Bulk Attendance with QR Code
function bulkMarkAttendance() {
    const selected = getSelectedStudents();
    if (selected.length === 0) {
        alert('Please select at least one student');
        return;
    }
    
    // Show QR code modal
    document.getElementById('qrAttendanceModal').classList.add('active');
    generateQRCode();
    startQRTimer();
}

function generateQRCode() {
    const qrDisplay = document.getElementById('qrCodeDisplay');
    qrDisplay.innerHTML = '';
    
    // Generate unique session ID
    const sessionId = 'ATT-' + Date.now();
    const qrData = `${window.location.origin}/checkin?session=${sessionId}`;
    
    // Create QR code
    new QRCode(qrDisplay, {
        text: qrData,
        width: 256,
        height: 256,
        colorDark: "#667eea",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Simulate check-ins
    setTimeout(() => {
        document.getElementById('checkinCount').textContent = '3';
        document.getElementById('checkinList').innerHTML = '✓ Sarah Johnson<br>✓ Michael Brown<br>✓ Jennifer Davis';
    }, 2000);
}

function generateNewQR() {
    generateQRCode();
    document.getElementById('qrTimer').textContent = '15:00';
}

function startQRTimer() {
    let timeLeft = 900; // 15 minutes
    const timerElement = document.getElementById('qrTimer');
    
    const interval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerElement.textContent = 'Expired';
        }
    }, 1000);
}

function downloadQR() {
    const canvas = document.querySelector('#qrCodeDisplay canvas');
    if (canvas) {
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'attendance-qr-code.png';
        link.href = url;
        link.click();
        alert('QR Code downloaded successfully!');
    }
}

function closeQRModal() {
    document.getElementById('qrAttendanceModal').classList.remove('active');
}

// Bulk Payment Recording
function bulkRecordPayment() {
    const selected = getSelectedStudents();
    if (selected.length === 0) {
        alert('Please select at least one student');
        return;
    }
    
    document.getElementById('bulkPaymentModal').classList.add('active');
    document.getElementById('bulkPaymentStudentCount').textContent = selected.length;
    document.getElementById('bulkPaymentDate').valueAsDate = new Date();
    
    // Update total when amount changes
    document.getElementById('bulkPaymentAmount').oninput = function() {
        const amount = parseFloat(this.value) || 0;
        const total = amount * selected.length;
        document.getElementById('bulkPaymentTotal').textContent = total.toFixed(2);
    };
}

function processBulkPayment() {
    const amount = document.getElementById('bulkPaymentAmount').value;
    const method = document.getElementById('bulkPaymentMethod').value;
    const date = document.getElementById('bulkPaymentDate').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid payment amount');
        return;
    }
    
    showProgress('Recording payments...', () => {
        closeBulkPaymentModal();
        alert(`Successfully recorded ${getSelectedStudents().length} payments totaling $${document.getElementById('bulkPaymentTotal').textContent}`);
        clearSelection();
    });
}

function closeBulkPaymentModal() {
    document.getElementById('bulkPaymentModal').classList.remove('active');
}

// Bulk Messaging
function bulkSendMessage() {
    const selected = getSelectedStudents();
    if (selected.length === 0) {
        alert('Please select at least one student');
        return;
    }
    
    document.getElementById('bulkMessageModal').classList.add('active');
    document.getElementById('bulkMessageRecipientCount').textContent = selected.length;
}

function sendBulkMessage() {
    const subject = document.getElementById('messageSubject').value;
    const body = document.getElementById('messageBody').value;
    const type = document.getElementById('messageType').value;
    
    if (!body.trim()) {
        alert('Please enter a message');
        return;
    }
    
    showProgress('Sending messages...', () => {
        closeBulkMessageModal();
        alert(`Successfully sent ${getSelectedStudents().length} ${type} messages!`);
        clearSelection();
    });
}

function closeBulkMessageModal() {
    document.getElementById('bulkMessageModal').classList.remove('active');
}

// Bulk Promotion
function bulkPromote() {
    const selected = getSelectedStudents();
    if (selected.length === 0) {
        alert('Please select at least one student');
        return;
    }
    
    document.getElementById('bulkPromoteModal').classList.add('active');
    document.getElementById('bulkPromoteCount').textContent = selected.length;
    // Simulate year counts
    document.getElementById('promoteYear1Count').textContent = Math.floor(selected.length * 0.6);
    document.getElementById('promoteYear2Count').textContent = Math.ceil(selected.length * 0.4);
}

function processBulkPromotion() {
    const sendEmail = document.getElementById('sendPromotionEmail').checked;
    
    showProgress('Promoting students...', () => {
        closeBulkPromoteModal();
        alert(`Successfully promoted ${getSelectedStudents().length} students to the next year!`);
        clearSelection();
    });
}

function closeBulkPromoteModal() {
    document.getElementById('bulkPromoteModal').classList.remove('active');
}

// Bulk Invoice Generation
function bulkGenerateInvoices() {
    const selected = getSelectedStudents();
    if (selected.length === 0) {
        alert('Please select at least one student');
        return;
    }
    
    document.getElementById('bulkInvoiceModal').classList.add('active');
    document.getElementById('bulkInvoiceCount').textContent = selected.length;
    
    // Set default due date to 30 days from now
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);
    document.getElementById('invoiceDueDate').valueAsDate = dueDate;
}

function generateBulkInvoices() {
    const period = document.getElementById('invoicePeriod').value;
    const dueDate = document.getElementById('invoiceDueDate').value;
    const emailInvoices = document.getElementById('emailInvoices').checked;
    
    if (!dueDate) {
        alert('Please select a due date');
        return;
    }
    
    showProgress('Generating invoices...', () => {
        closeBulkInvoiceModal();
        const message = `Successfully generated ${getSelectedStudents().length} invoices!`;
        alert(emailInvoices ? message + '\nInvoices have been emailed to students/parents.' : message);
        clearSelection();
    });
}

function closeBulkInvoiceModal() {
    document.getElementById('bulkInvoiceModal').classList.remove('active');
}

// Progress Modal
function showProgress(message, callback) {
    document.getElementById('progressModal').classList.add('active');
    document.getElementById('progressText').textContent = message;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('progressFill').textContent = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('progressModal').classList.remove('active');
                document.getElementById('progressFill').style.width = '0%';
                if (callback) callback();
            }, 500);
        }
    }, 200);
}

// ===== FINANCIAL TOOLS FUNCTIONS =====

function generatePaymentLink(studentIndex) {
    const student = allStudents[studentIndex];
    
    document.getElementById('paymentLinkModal').classList.add('active');
    document.getElementById('paymentLinkStudent').value = student.name;
    document.getElementById('paymentLinkAmount').value = student.balance || '';
    document.getElementById('generatedLinkSection').style.display = 'none';
}

function createPaymentLink() {
    const student = document.getElementById('paymentLinkStudent').value;
    const amount = document.getElementById('paymentLinkAmount').value;
    const description = document.getElementById('paymentLinkDescription').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    // Generate payment link
    const linkId = 'PAY-' + Date.now();
    const paymentLink = `${window.location.origin}/pay?id=${linkId}&amount=${amount}`;
    
    document.getElementById('generatedPaymentLink').value = paymentLink;
    document.getElementById('generatedLinkSection').style.display = 'block';
}

function copyPaymentLink() {
    const linkInput = document.getElementById('generatedPaymentLink');
    linkInput.select();
    document.execCommand('copy');
    alert('Payment link copied to clipboard!');
}

function emailPaymentLink() {
    alert('Payment link has been emailed to the student!');
}

function smsPaymentLink() {
    alert('Payment link has been sent via SMS!');
}

function closePaymentLinkModal() {
    document.getElementById('paymentLinkModal').classList.remove('active');
}

function showPaymentLinkGenerator() {
    alert('Select a student from the Students tab and click "Pay Link" to generate a payment link.');
}

function showFamilyAccounts() {
    document.getElementById('familyAccountsModal').classList.add('active');
}

function closeFamilyAccountsModal() {
    document.getElementById('familyAccountsModal').classList.remove('active');
}

function createNewFamily() {
    alert('Family account creation form would open here. This would allow linking multiple students under one parent/guardian account.');
}

function manageFamilyAccount(familyIndex) {
    alert('Family account management interface would open here, allowing you to:\n\n• Add/remove students\n• View combined balance\n• Make family payments\n• Update contact information');
}

function showScholarships() {
    document.getElementById('scholarshipsModal').classList.add('active');
}

function closeScholarshipsModal() {
    document.getElementById('scholarshipsModal').classList.remove('active');
}

function createScholarship() {
    alert('Scholarship creation form would open here.');
}

function filterScholarships(status) {
    alert(`Filtering scholarships by status: ${status}`);
}

function approveScholarship(index) {
    if (confirm('Approve this scholarship application?')) {
        alert('Scholarship approved! Student and parent have been notified.');
    }
}

function denyScholarship(index) {
    if (confirm('Deny this scholarship application?')) {
        alert('Scholarship application denied. Notification sent.');
    }
}

function viewScholarshipDetails(index) {
    alert('Detailed scholarship application view would open here.');
}

function showDonations() {
    document.getElementById('donationsModal').classList.add('active');
}

function closeDonationsModal() {
    document.getElementById('donationsModal').classList.remove('active');
}

function recordDonation() {
    alert('Donation recording form would open here, allowing you to:\n\n• Record donor information\n• Enter donation amount\n• Specify purpose/fund\n• Mark as tax-deductible\n• Generate receipt');
}

// ===== WORKFLOW FUNCTIONS =====

function toggleWorkflow(workflowType) {
    const workflows = {
        'welcome': 'Welcome Email Automation',
        'payment-reminders': 'Payment Reminder Sequences',
        'attendance': 'Attendance Alerts',
        'birthdays': 'Birthday & Anniversary Greetings',
        'certificates': 'Course Completion Certificates',
        'reenrollment': 'Re-enrollment Campaigns'
    };
    
    console.log(`Workflow "${workflows[workflowType]}" toggled`);
    alert(`Workflow "${workflows[workflowType]}" has been ${event.target.checked ? 'enabled' : 'disabled'}`);
}

function showWorkflowSettings() {
    alert('Workflow configuration panel would open here, allowing you to:\n\n• Edit email templates\n• Set timing schedules\n• Configure triggers\n• View workflow history\n• Test workflows');
}


// ===== CSV EXPORT FUNCTION =====

function exportToCSV() {
    const headers = ['Name', 'Year', 'Email', 'Phone', 'Payment Status', 'Balance', 'Attendance %'];
    const csvData = [headers];
    
    allStudents.forEach(student => {
        csvData.push([
            student.name,
            `Year ${student.year}`,
            student.email,
            student.phone,
            student.status,
            student.balance,
            student.attendance
        ]);
    });
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `students_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    alert('✅ Student data exported successfully!');
}

// ===== SEARCH AND FILTER FUNCTIONS =====

let filteredStudents = [...allStudents];

function filterStudents() {
    const searchTerm = document.getElementById('studentSearch').value.toLowerCase();
    const yearFilter = document.getElementById('yearFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    
    filteredStudents = allStudents.filter(student => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            student.name.toLowerCase().includes(searchTerm) ||
            student.email.toLowerCase().includes(searchTerm) ||
            student.phone.includes(searchTerm);
        
        // Year filter
        const matchesYear = yearFilter === 'all' || student.year === parseInt(yearFilter);
        
        // Status filter
        const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
        
        return matchesSearch && matchesYear && matchesStatus;
    });
    
    // Update results count
    document.getElementById('filterResults').textContent = 
        `Showing ${filteredStudents.length} of ${allStudents.length} students`;
    
    // Reload table with filtered students
    loadFilteredStudentTable();
}

function loadFilteredStudentTable() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';
    
    if (filteredStudents.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #999;">No students found matching your filters</td></tr>';
        return;
    }
    
    filteredStudents.forEach((student, index) => {
        const actualIndex = allStudents.indexOf(student);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="checkbox-cell">
                <input type="checkbox" class="student-checkbox" onchange="updateSelectedCount()">
            </td>
            <td><strong>${student.name}</strong></td>
            <td>Year ${student.year}</td>
            <td>${student.email}</td>
            <td><span class="status-badge status-${student.status.toLowerCase()}">${student.status}</span></td>
            <td>$${student.balance}</td>
            <td>
                <button class="action-btn btn-info" style="padding: 5px 10px;" onclick="viewStudentDetails(${actualIndex})">View</button>
                <button class="action-btn btn-success" style="padding: 5px 10px;" onclick="showPaymentProcessing(${actualIndex})">💳 Pay</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// ===== PAYMENT PROCESSING FUNCTIONS =====

let currentPaymentStudent = null;

function showPaymentProcessing(studentIndex) {
    currentPaymentStudent = allStudents[studentIndex];
    
    document.getElementById('paymentProcessingModal').classList.add('active');
    document.getElementById('paymentStudentName').textContent = currentPaymentStudent.name;
    document.getElementById('paymentStudentYear').textContent = `Year ${currentPaymentStudent.year}`;
    document.getElementById('paymentAmountDue').textContent = currentPaymentStudent.balance;
    document.getElementById('paymentAmount').value = currentPaymentStudent.balance;
    
    // Set today's date for manual payment
    document.getElementById('manualPaymentDate').valueAsDate = new Date();
    
    // Reset payment method selection
    document.getElementById('stripePayment').style.display = 'none';
    document.getElementById('squarePayment').style.display = 'none';
    document.getElementById('manualPayment').style.display = 'none';
}

function closePaymentProcessingModal() {
    document.getElementById('paymentProcessingModal').classList.remove('active');
    currentPaymentStudent = null;
}

function selectPaymentMethod(method) {
    // Hide all payment forms
    document.getElementById('stripePayment').style.display = 'none';
    document.getElementById('squarePayment').style.display = 'none';
    document.getElementById('manualPayment').style.display = 'none';
    
    // Reset button styles
    document.getElementById('stripeBtn').style.background = '';
    document.getElementById('squareBtn').style.background = '';
    document.getElementById('manualBtn').style.background = '';
    
    // Show selected payment form and highlight button
    if (method === 'stripe') {
        document.getElementById('stripePayment').style.display = 'block';
        document.getElementById('stripeBtn').style.background = 'var(--primary)';
        document.getElementById('stripeBtn').style.color = 'white';
    } else if (method === 'square') {
        document.getElementById('squarePayment').style.display = 'block';
        document.getElementById('squareBtn').style.background = 'var(--primary)';
        document.getElementById('squareBtn').style.color = 'white';
    } else if (method === 'manual') {
        document.getElementById('manualPayment').style.display = 'block';
        document.getElementById('manualBtn').style.background = 'var(--primary)';
        document.getElementById('manualBtn').style.color = 'white';
    }
}

function processStripePayment() {
    const amount = document.getElementById('paymentAmount').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid payment amount');
        return;
    }
    
    // In production, this would call Stripe API
    showProgress('Processing Stripe payment...', () => {
        // Update student balance
        currentPaymentStudent.balance = Math.max(0, currentPaymentStudent.balance - parseFloat(amount));
        currentPaymentStudent.status = currentPaymentStudent.balance === 0 ? 'PAID' : 'PENDING';
        
        closePaymentProcessingModal();
        alert(`✅ Payment of $${amount} processed successfully via Stripe!\n\nReceipt sent to ${currentPaymentStudent.email}`);
        loadStudentTable();
        updateDashboardStats();
    });
}

function processSquarePayment() {
    const amount = document.getElementById('paymentAmount').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid payment amount');
        return;
    }
    
    // In production, this would call Square API
    showProgress('Processing Square payment...', () => {
        // Update student balance
        currentPaymentStudent.balance = Math.max(0, currentPaymentStudent.balance - parseFloat(amount));
        currentPaymentStudent.status = currentPaymentStudent.balance === 0 ? 'PAID' : 'PENDING';
        
        closePaymentProcessingModal();
        alert(`✅ Payment of $${amount} processed successfully via Square!\n\nReceipt sent to ${currentPaymentStudent.email}`);
        loadStudentTable();
        updateDashboardStats();
    });
}

function processManualPayment() {
    const amount = document.getElementById('paymentAmount').value;
    const paymentType = document.getElementById('manualPaymentType').value;
    const reference = document.getElementById('referenceNumber').value;
    const date = document.getElementById('manualPaymentDate').value;
    const notes = document.getElementById('manualPaymentNotes').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid payment amount');
        return;
    }
    
    if (!date) {
        alert('Please select a payment date');
        return;
    }
    
    // Update student balance
    currentPaymentStudent.balance = Math.max(0, currentPaymentStudent.balance - parseFloat(amount));
    currentPaymentStudent.status = currentPaymentStudent.balance === 0 ? 'PAID' : 'PENDING';
    
    closePaymentProcessingModal();
    
    let message = `✅ Payment of $${amount} recorded successfully!\n\n`;
    message += `Payment Type: ${paymentType.charAt(0).toUpperCase() + paymentType.slice(1)}\n`;
    message += `Date: ${new Date(date).toLocaleDateString()}\n`;
    if (reference) message += `Reference: ${reference}\n`;
    if (notes) message += `Notes: ${notes}`;
    
    alert(message);
    loadStudentTable();
    updateDashboardStats();
}

// ===== COMMUNICATION CENTER FUNCTIONS =====

function showCommunicationCenter() {
    document.getElementById('communicationModal').classList.add('active');
    
    // Setup schedule checkbox listener
    document.getElementById('scheduleMessage').onchange = function() {
        document.getElementById('scheduleOptions').style.display = this.checked ? 'block' : 'none';
    };
}

function closeCommunicationModal() {
    document.getElementById('communicationModal').classList.remove('active');
}

function setupEmailIntegration() {
    alert('Email Integration Setup\n\nIn production, this would allow you to connect:\n\n• SendGrid\n• Mailgun\n• Amazon SES\n• SMTP Server\n\nYou would enter your API keys and configure email templates.');
}

function setupSMSIntegration() {
    alert('SMS Integration Setup\n\nIn production, this would allow you to connect:\n\n• Twilio\n• Plivo\n• MessageBird\n\nYou would enter your API credentials and configure SMS templates.');
}

function sendCommunication() {
    const recipients = document.getElementById('messageRecipients').value;
    const messageType = document.getElementById('commMessageType').value;
    const subject = document.getElementById('commSubject').value;
    const message = document.getElementById('commMessage').value;
    const scheduled = document.getElementById('scheduleMessage').checked;
    
    if (!message.trim()) {
        alert('Please enter a message');
        return;
    }
    
    if (messageType.includes('email') && !subject.trim()) {
        alert('Please enter an email subject');
        return;
    }
    
    let recipientCount = 0;
    switch(recipients) {
        case 'all':
            recipientCount = allStudents.length;
            break;
        case 'year1':
            recipientCount = allStudents.filter(s => s.year === 1).length;
            break;
        case 'year2':
            recipientCount = allStudents.filter(s => s.year === 2).length;
            break;
        case 'pending':
            recipientCount = allStudents.filter(s => s.status === 'PENDING').length;
            break;
        case 'selected':
            recipientCount = getSelectedStudents().length;
            break;
    }
    
    if (scheduled) {
        const scheduleDate = document.getElementById('scheduleDate').value;
        const scheduleTime = document.getElementById('scheduleTime').value;
        
        if (!scheduleDate || !scheduleTime) {
            alert('Please select both date and time for scheduled message');
            return;
        }
        
        alert(`✅ Message scheduled successfully!\n\nRecipients: ${recipientCount} students\nType: ${messageType}\nScheduled for: ${new Date(scheduleDate + ' ' + scheduleTime).toLocaleString()}`);
    } else {
        showProgress('Sending messages...', () => {
            closeCommunicationModal();
            alert(`✅ Messages sent successfully!\n\nRecipients: ${recipientCount} students\nType: ${messageType}`);
        });
    }
}

// ===== UPLOAD MATERIALS FUNCTIONS =====

let selectedFile = null;

function showUploadMaterials() {
    document.getElementById('uploadMaterialsModal').classList.add('active');
}

function closeUploadMaterialsModal() {
    document.getElementById('uploadMaterialsModal').classList.remove('active');
    // Reset form
    document.getElementById('materialTitle').value = '';
    document.getElementById('materialCategory').value = '';
    document.getElementById('materialClass').value = 'all';
    document.getElementById('materialDescription').value = '';
    document.getElementById('materialFile').value = '';
    document.getElementById('filePreview').style.display = 'none';
    selectedFile = null;
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    
    if (!file) {
        document.getElementById('filePreview').style.display = 'none';
        selectedFile = null;
        return;
    }
    
    // Check file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
        alert('File size exceeds 10MB limit. Please choose a smaller file.');
        event.target.value = '';
        document.getElementById('filePreview').style.display = 'none';
        selectedFile = null;
        return;
    }
    
    // Check file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type. Please upload PDF, DOC, or DOCX files only.');
        event.target.value = '';
        document.getElementById('filePreview').style.display = 'none';
        selectedFile = null;
        return;
    }
    
    // Show file preview
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileSize').textContent = `Size: ${(file.size / 1024).toFixed(2)} KB`;
    document.getElementById('filePreview').style.display = 'block';
    
    // Read file as base64
    const reader = new FileReader();
    reader.onload = function(e) {
        selectedFile = {
            name: file.name,
            size: file.size,
            type: file.type,
            data: e.target.result
        };
    };
    reader.readAsDataURL(file);
}

function uploadMaterial() {
    const title = document.getElementById('materialTitle').value.trim();
    const category = document.getElementById('materialCategory').value;
    const classFor = document.getElementById('materialClass').value;
    const description = document.getElementById('materialDescription').value.trim();
    const notify = document.getElementById('notifyStudents').checked;
    
    // Validation
    if (!title) {
        alert('Please enter a material title');
        return;
    }
    
    if (!category) {
        alert('Please select a category');
        return;
    }
    
    if (!selectedFile) {
        alert('Please select a file to upload');
        return;
    }
    
    // Create material object
    const material = {
        id: Date.now(),
        title: title,
        category: category,
        classFor: classFor,
        description: description,
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
        fileType: selectedFile.type,
        fileData: selectedFile.data,
        uploadedBy: currentMinistry.adminName || 'Admin',
        uploadDate: new Date().toISOString(),
        downloads: 0,
        visible: true  // Default to visible
    };
    
    // Save to localStorage
    let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    materials.unshift(material); // Add to beginning
    localStorage.setItem('studyMaterials', JSON.stringify(materials));
    
    // Close modal and refresh list
    closeUploadMaterialsModal();
    loadMaterialsList();
    
    // Show success message
    let message = `✅ Material uploaded successfully!\n\n"${title}" is now available in the Student Portal.`;
    if (notify) {
        message += '\n\n📧 Notification sent to all students.';
    }
    alert(message);
}

function loadMaterialsList() {
    const materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    const materialsListDiv = document.getElementById('materialsList');
    
    if (!materialsListDiv) return;
    
    if (materials.length === 0) {
        materialsListDiv.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No materials uploaded yet.</p>';
        return;
    }
    
    let html = '';
    materials.forEach((material, index) => {
        const uploadDate = new Date(material.uploadDate).toLocaleDateString();
        const fileIcon = material.fileType && material.fileType.includes('pdf') ? '📕' : '📄';
        const categoryLabel = material.category ? material.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Material';
        
        // Default to visible if not set
        const isVisible = material.visible !== false;
        const visibilityClass = isVisible ? 'visible' : 'hidden';
        const visibilityIcon = isVisible ? '👁️' : '🚫';
        const visibilityText = isVisible ? 'Visible' : 'Hidden';
        
        html += `
            <div class="workflow-card" style="margin-bottom: 15px; ${!isVisible ? 'opacity: 0.6;' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                            <span style="font-size: 24px;">${fileIcon}</span>
                            <strong style="font-size: 18px; color: var(--primary);">${material.title}</strong>
                            ${!isVisible ? '<span style="background: #f5f5f5; color: #999; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600;">HIDDEN FROM STUDENTS</span>' : ''}
                        </div>
                        <div style="margin-bottom: 8px;">
                            <span class="badge" style="background: var(--light); color: var(--primary); padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-right: 8px;">${categoryLabel}</span>
                            ${material.classFor && material.classFor !== 'all' ? `<span class="badge" style="background: var(--light); color: var(--primary); padding: 4px 12px; border-radius: 20px; font-size: 12px;">${material.classFor.charAt(0).toUpperCase() + material.classFor.slice(1)} Class</span>` : ''}
                        </div>
                        ${material.description ? `<p style="color: #666; font-size: 14px; margin-bottom: 8px;">${material.description}</p>` : ''}
                        <p style="font-size: 13px; color: #999;">
                            📅 ${uploadDate} • 📦 ${(material.fileSize / 1024).toFixed(2)} KB • ⬇️ ${material.downloads || 0} downloads
                        </p>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button class="visibility-toggle ${visibilityClass}" onclick="toggleMaterialVisibility(${index})" title="Click to ${isVisible ? 'hide' : 'show'}">
                            ${visibilityIcon} ${visibilityText}
                        </button>
                        <button class="action-btn btn-danger" onclick="deleteMaterial(${index})" style="padding: 8px 16px;">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    materialsListDiv.innerHTML = html;
}

function deleteMaterial(index) {
    if (!confirm('Are you sure you want to delete this material? This action cannot be undone.')) {
        return;
    }
    
    let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    const deletedMaterial = materials[index];
    materials.splice(index, 1);
    localStorage.setItem('studyMaterials', JSON.stringify(materials));
    
    loadMaterialsList();
    alert(`✅ "${deletedMaterial.title}" has been deleted.`);
}

// ===== ANNOUNCEMENTS FUNCTIONS =====

function showAddAnnouncement() {
    document.getElementById('addAnnouncementModal').classList.add('active');
}

function closeAddAnnouncementModal() {
    document.getElementById('addAnnouncementModal').classList.remove('active');
    // Reset form
    document.getElementById('announcementTitle').value = '';
    document.getElementById('announcementMessage').value = '';
    document.getElementById('announcementPriority').value = 'normal';
}

function postAnnouncement() {
    const title = document.getElementById('announcementTitle').value.trim();
    const message = document.getElementById('announcementMessage').value.trim();
    const priority = document.getElementById('announcementPriority').value;
    const notify = document.getElementById('notifyStudentsAnnouncement').checked;
    
    // Validation
    if (!title) {
        alert('Please enter an announcement title');
        return;
    }
    
    if (!message) {
        alert('Please enter an announcement message');
        return;
    }
    
    // Create announcement object
    const announcement = {
        id: Date.now(),
        title: title,
        message: message,
        priority: priority,
        postedBy: currentMinistry.adminName || 'Admin',
        date: new Date().toISOString(),
        visible: true  // Default to visible
    };
    
    // Save to localStorage
    let announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
    announcements.unshift(announcement); // Add to beginning
    localStorage.setItem('announcements', JSON.stringify(announcements));
    
    // Close modal and refresh list
    closeAddAnnouncementModal();
    loadAnnouncementsList();
    
    // Show success message
    let successMessage = `✅ Announcement posted successfully!\n\n"${title}" is now visible in the Student Portal.`;
    if (notify) {
        successMessage += '\n\n📧 Notification sent to all students.';
    }
    alert(successMessage);
}

function loadAnnouncementsList() {
    const announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
    const announcementsListDiv = document.getElementById('announcementsList');
    
    if (!announcementsListDiv) return;
    
    if (announcements.length === 0) {
        announcementsListDiv.innerHTML = '<p style="color: #666; text-align: center; padding: 20px;">No announcements yet.</p>';
        return;
    }
    
    let html = '';
    announcements.forEach((announcement, index) => {
        const date = new Date(announcement.date).toLocaleDateString();
        const priorityColor = announcement.priority === 'urgent' ? '#f44336' : 
                                     announcement.priority === 'important' ? '#ff9800' : '#666';
        
        // Default to visible if not set
        const isVisible = announcement.visible !== false;
        const visibilityClass = isVisible ? 'visible' : 'hidden';
        const visibilityIcon = isVisible ? '👁️' : '🚫';
        const visibilityText = isVisible ? 'Visible' : 'Hidden';
        
        html += `
            <div class="workflow-card" style="margin-bottom: 15px; border-left: 4px solid ${priorityColor}; ${!isVisible ? 'opacity: 0.6;' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                            <strong style="font-size: 18px; color: var(--primary);">${announcement.title}</strong>
                            ${announcement.priority !== 'normal' ? `<span class="badge" style="background: ${priorityColor}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 11px; text-transform: uppercase;">${announcement.priority}</span>` : ''}
                            ${!isVisible ? '<span style="background: #f5f5f5; color: #999; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600;">HIDDEN FROM STUDENTS</span>' : ''}
                        </div>
                        <p style="color: #666; font-size: 14px; margin-bottom: 8px;">${announcement.message}</p>
                        <p style="font-size: 13px; color: #999;">
                            📅 Posted on ${date} by ${announcement.postedBy}
                        </p>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button class="visibility-toggle ${visibilityClass}" onclick="toggleAnnouncementVisibility(${index})" title="Click to ${isVisible ? 'hide' : 'show'}">
                            ${visibilityIcon} ${visibilityText}
                        </button>
                        <button class="action-btn btn-danger" onclick="deleteAnnouncement(${index})" style="padding: 8px 16px;">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    announcementsListDiv.innerHTML = html;
}

function deleteAnnouncement(index) {
    if (!confirm('Are you sure you want to delete this announcement?')) {
        return;
    }
    
    let announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
    const deletedAnnouncement = announcements[index];
    announcements.splice(index, 1);
    localStorage.setItem('announcements', JSON.stringify(announcements));
    
    loadAnnouncementsList();
    alert(`✅ "${deletedAnnouncement.title}" has been deleted.`);
}

// ===== REVENUE PRIVACY FUNCTIONS =====

let revenueVisible = false;

function toggleRevenue() {
    revenueVisible = !revenueVisible;
    const revenueCards = document.querySelectorAll('.revenue-card');
    const toggleBtn = document.getElementById('revenueToggleBtn');
    
    if (revenueVisible) {
        revenueCards.forEach(card => card.classList.remove('revenue-hidden'));
        toggleBtn.innerHTML = '🔓 Hide Revenue';
        toggleBtn.style.background = 'var(--danger)';
    } else {
        revenueCards.forEach(card => card.classList.add('revenue-hidden'));
        toggleBtn.innerHTML = '🔒 Show Revenue';
        toggleBtn.style.background = 'var(--primary)';
    }
}


// ===== VISIBILITY CONTROL FUNCTIONS =====

function toggleMaterialVisibility(index) {
    let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
    
    if (materials[index]) {
        materials[index].visible = !materials[index].visible;
        localStorage.setItem('studyMaterials', JSON.stringify(materials));
        loadMaterialsList();
        
        const status = materials[index].visible ? 'visible' : 'hidden';
        console.log(`Material "${materials[index].title}" is now ${status}`);
    }
}

function toggleAnnouncementVisibility(index) {
    let announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
    
    if (announcements[index]) {
        announcements[index].visible = !announcements[index].visible;
        localStorage.setItem('announcements', JSON.stringify(announcements));
        loadAnnouncementsList();
        
        const status = announcements[index].visible ? 'visible' : 'hidden';
        console.log(`Announcement "${announcements[index].title}" is now ${status}`);
    }
}

function bulkToggleVisibility(type, visible) {
    if (type === 'materials') {
        let materials = JSON.parse(localStorage.getItem('studyMaterials') || '[]');
        materials.forEach(m => m.visible = visible);
        localStorage.setItem('studyMaterials', JSON.stringify(materials));
        loadMaterialsList();
        alert(`All materials are now ${visible ? 'visible' : 'hidden'} to students`);
    } else if (type === 'announcements') {
        let announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
        announcements.forEach(a => a.visible = visible);
        localStorage.setItem('announcements', JSON.stringify(announcements));
        loadAnnouncementsList();
        alert(`All announcements are now ${visible ? 'visible' : 'hidden'} to students`);
    }
}

// Initialize - Check if user is already logged in
window.onload = function() {
    const savedMinistry = localStorage.getItem('currentMinistry');
    if (savedMinistry) {
        const ministry = JSON.parse(savedMinistry);
        currentMinistry = ministry;
        // Uncomment to auto-login if already signed in
        // showDashboard(ministry);
    }
    
    // Set today's date for payment date field
    const today = new Date().toISOString().split('T')[0];
    if (document.getElementById('bulkPaymentDate')) {
        document.getElementById('bulkPaymentDate').value = today;
    }
    
    // Log that script loaded successfully
    console.log('✅ School of Purpose - All scripts loaded successfully!');
    console.log('📝 Demo Login: admin@schoolofpurpose.org + any password');
}
