// ============================================================================
// SCHOOL OF PURPOSE - CODE SNIPPETS TO ADD
// ============================================================================
// Copy and paste these code blocks into sopministry.html
// Add them in the <script> section before the closing </script> tag
// ============================================================================

// ============================================================================
// 1. ADMIN VIEW OF ATTENDANCE METHODS
// ============================================================================
// Replace the existing loadStudentTable() function with this enhanced version

function loadStudentTableWithAttendance() {
    const tbody = document.getElementById('studentTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Get today's check-ins from localStorage (saved by student-signin.html)
    const today = new Date().toDateString();
    const savedCheckIns = localStorage.getItem('studentCheckIns');
    const allCheckIns = savedCheckIns ? JSON.parse(savedCheckIns) : {};
    const todayCheckIns = allCheckIns[today] || {};
    
    // Use filtered students if available, otherwise show all
    let studentsToShow = filteredStudents && filteredStudents.length > 0 ? filteredStudents : allStudents;
    
    if (studentsToShow.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 40px; color: #999;">No students found matching your filters</td></tr>';
        return;
    }
    
    studentsToShow.forEach((student) => {
        const actualIndex = allStudents.indexOf(student);
        const checkInData = todayCheckIns[student.email];
        
        // Determine check-in status with icons
        let checkInStatus = '';
        if (checkInData) {
            const icon = checkInData.method === 'online' ? '💻' : '🏫';
            const method = checkInData.method === 'online' ? 'Online' : 'In-Person';
            const badgeClass = checkInData.method === 'online' ? 'status-badge' : 'status-badge status-paid';
            checkInStatus = `<span class="${badgeClass}" style="font-size: 12px;">${icon} ${method}<br><small>${checkInData.time}</small></span>`;
        } else {
            checkInStatus = '<span style="color: #999; font-size: 13px;">Not checked in</span>';
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
            <td style="text-align: center;">${checkInStatus}</td>
            <td>$${student.balance}</td>
            <td>
                <button class="action-btn btn-info" style="padding: 5px 10px;" onclick="viewStudentDetails(${actualIndex})">View</button>
                <button class="action-btn btn-success" style="padding: 5px 10px;" onclick="showPaymentProcessing(${actualIndex})">💳 Pay</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Update the filterStudents function to use the new table loader
// Find the filterStudents() function and update the last line to call:
// loadStudentTableWithAttendance();

// Also update showDashboard() to call loadStudentTableWithAttendance() instead of loadStudentTable()


// ============================================================================
// 2. REAL CLASS SCHEDULE DATA
// ============================================================================
// Add this after the allStudents array

const realClassSchedule = [
    {
        unit: 1,
        title: 'Unit 1 - Introduction to Ministry',
        startDate: '2025-10-21',
        endDate: '2025-11-11',
        breakStart: '2025-11-12',
        breakEnd: '2025-12-01',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Biblical Foundations of Ministry',
            'Understanding Your Calling',
            'Discovering Spiritual Gifts',
            'Prayer & Worship Fundamentals'
        ],
        description: 'Introduction to ministry principles and spiritual foundations'
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
            'Biblical Interpretation Methods',
            'Theology Basics'
        ],
        description: 'Comprehensive study of Scripture and theological foundations'
    },
    {
        unit: 3,
        title: 'Unit 3 - Ministry Practice',
        startDate: '2026-01-20',
        endDate: '2026-02-17',
        breakStart: '2026-02-18',
        breakEnd: '2026-03-02',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Teaching & Preaching Skills',
            'Pastoral Counseling Basics',
            'Leadership Development',
            'Church Administration'
        ],
        description: 'Practical ministry skills and leadership training'
    },
    {
        unit: 4,
        title: 'Unit 4 - Advanced Ministry',
        startDate: '2026-03-03',
        endDate: '2026-03-31',
        breakStart: '2026-04-01',
        breakEnd: '2026-04-13',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Evangelism & Outreach Strategies',
            'Discipleship Methods',
            'Worship Leading',
            'Youth & Children Ministry'
        ],
        description: 'Advanced ministry techniques and specialized areas'
    },
    {
        unit: 5,
        title: 'Unit 5 - Ministry Capstone',
        startDate: '2026-04-14',
        endDate: '2026-05-05',
        day: 'Tuesday',
        time: '6:30 PM - 9:30 PM',
        topics: [
            'Ministry Capstone Project',
            'Practical Field Application',
            'Final Presentations',
            'Graduation Preparation'
        ],
        description: 'Culminating project and preparation for ministry'
    }
];

const graduationInfo = {
    date: '2026-05-08',
    time: '6:00 PM',
    location: 'Main Sanctuary',
    description: 'Celebrate the completion of your ministry education journey!'
};

// Function to display the schedule
function displayClassSchedule() {
    const container = document.getElementById('scheduleContainer');
    if (!container) {
        console.error('Schedule container not found');
        return;
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let html = `
        <div style="margin-bottom: 30px;">
            <h2 style="margin-bottom: 15px;">📅 2025-2026 Academic Year Schedule</h2>
            <div style="background: var(--light); padding: 20px; border-radius: 10px; border-left: 4px solid var(--primary);">
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Class Day:</strong> Every Tuesday</p>
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Class Time:</strong> 6:30 PM - 9:30 PM</p>
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Program Duration:</strong> 5 Units (October 2025 - May 2026)</p>
                <p style="font-size: 16px;"><strong>Graduation:</strong> May 8, 2026</p>
            </div>
        </div>
    `;
    
    realClassSchedule.forEach((unit, index) => {
        const startDate = new Date(unit.startDate);
        const endDate = new Date(unit.endDate);
        const isCurrentUnit = today >= startDate && today <= endDate;
        const isPastUnit = today > endDate;
        const isFutureUnit = today < startDate;
        
        let statusBadge = '';
        let cardStyle = '';
        
        if (isCurrentUnit) {
            statusBadge = '<span class="status-badge status-paid" style="font-size: 14px;">📍 CURRENT UNIT</span>';
            cardStyle = 'border: 3px solid var(--primary); background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);';
        } else if (isPastUnit) {
            statusBadge = '<span class="status-badge" style="background: #e0e0e0; color: #666; font-size: 14px;">✓ Completed</span>';
        } else {
            statusBadge = '<span class="status-badge" style="background: #fff3cd; color: #856404; font-size: 14px;">⏳ Upcoming</span>';
        }
        
        html += `
            <div class="workflow-card" style="${cardStyle} margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="color: var(--primary); margin-bottom: 8px; font-size: 20px;">${unit.title}</h3>
                        <p style="color: var(--grey-dark); font-size: 15px; margin-bottom: 5px;">
                            📅 ${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - 
                            ${endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p style="color: var(--grey-dark); font-size: 14px;">
                            🕐 <strong>${unit.day}s, ${unit.time}</strong>
                        </p>
                    </div>
                    <div>
                        ${statusBadge}
                    </div>
                </div>
                
                <p style="color: var(--dark); margin-bottom: 15px; font-style: italic;">${unit.description}</p>
                
                <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <strong style="color: var(--dark); font-size: 15px;">📖 Topics Covered:</strong>
                    <ul style="margin-top: 10px; margin-left: 20px; color: var(--grey-dark); line-height: 1.8;">
                        ${unit.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
                
                ${unit.breakStart ? `
                    <div style="margin-top: 15px; padding: 12px; background: #fff3cd; border-radius: 8px; border-left: 3px solid #ffc107;">
                        <strong style="color: #856404;">☕ Break Period:</strong> 
                        <span style="color: #856404;">
                            ${new Date(unit.breakStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                            ${new Date(unit.breakEnd).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    // Add graduation ceremony card
    const gradDate = new Date(graduationInfo.date);
    html += `
        <div class="workflow-card" style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: white; margin-top: 40px; padding: 30px;">
            <div style="text-align: center;">
                <div style="font-size: 48px; margin-bottom: 15px;">🎓</div>
                <h2 style="color: white; margin-bottom: 15px; font-size: 28px;">Graduation Ceremony</h2>
                <p style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">
                    ${gradDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p style="font-size: 18px; margin-bottom: 5px;">${graduationInfo.time}</p>
                <p style="font-size: 16px; opacity: 0.9; margin-bottom: 20px;">${graduationInfo.location}</p>
                <p style="font-size: 16px; opacity: 0.95; font-style: italic;">${graduationInfo.description}</p>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Add this to the switchTab function - find the line that says:
// if (tabName === 'schedule') {
//     displayClassSchedule();
// }


// ============================================================================
// 3. ATTENDANCE FILTER BUTTONS
// ============================================================================
// Add these functions to filter students by attendance method

function filterByAttendanceMethod(method) {
    const today = new Date().toDateString();
    const savedCheckIns = localStorage.getItem('studentCheckIns');
    const allCheckIns = savedCheckIns ? JSON.parse(savedCheckIns) : {};
    const todayCheckIns = allCheckIns[today] || {};
    
    if (method === 'all') {
        filteredStudents = [...allStudents];
    } else if (method === 'checked-in') {
        filteredStudents = allStudents.filter(s => todayCheckIns[s.email]);
    } else if (method === 'not-checked-in') {
        filteredStudents = allStudents.filter(s => !todayCheckIns[s.email]);
    } else if (method === 'in-person') {
        filteredStudents = allStudents.filter(s => 
            todayCheckIns[s.email] && todayCheckIns[s.email].method === 'in-person'
        );
    } else if (method === 'online') {
        filteredStudents = allStudents.filter(s => 
            todayCheckIns[s.email] && todayCheckIns[s.email].method === 'online'
        );
    }
    
    document.getElementById('filterResults').textContent = 
        `Showing ${filteredStudents.length} of ${allStudents.length} students`;
    
    loadStudentTableWithAttendance();
}

// Function to get attendance statistics
function getAttendanceStats() {
    const today = new Date().toDateString();
    const savedCheckIns = localStorage.getItem('studentCheckIns');
    const allCheckIns = savedCheckIns ? JSON.parse(savedCheckIns) : {};
    const todayCheckIns = allCheckIns[today] || {};
    
    const totalStudents = allStudents.length;
    const checkedIn = Object.keys(todayCheckIns).length;
    const inPerson = Object.values(todayCheckIns).filter(c => c.method === 'in-person').length;
    const online = Object.values(todayCheckIns).filter(c => c.method === 'online').length;
    const notCheckedIn = totalStudents - checkedIn;
    const attendanceRate = totalStudents > 0 ? ((checkedIn / totalStudents) * 100).toFixed(1) : 0;
    
    return {
        total: totalStudents,
        checkedIn,
        inPerson,
        online,
        notCheckedIn,
        attendanceRate
    };
}

// Function to display attendance statistics
function displayAttendanceStats() {
    const stats = getAttendanceStats();
    
    return `
        <div style="background: var(--light); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="margin-bottom: 15px; color: var(--primary);">📊 Today's Attendance Statistics</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; color: var(--primary);">${stats.checkedIn}</div>
                    <div style="color: var(--grey-dark); font-size: 14px;">Checked In</div>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; color: #2e7d32;">🏫 ${stats.inPerson}</div>
                    <div style="color: var(--grey-dark); font-size: 14px;">In-Person</div>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; color: #1976d2;">💻 ${stats.online}</div>
                    <div style="color: var(--grey-dark); font-size: 14px;">Online</div>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; color: #d32f2f;">${stats.notCheckedIn}</div>
                    <div style="color: var(--grey-dark); font-size: 14px;">Not Checked In</div>
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; color: var(--primary);">${stats.attendanceRate}%</div>
                    <div style="color: var(--grey-dark); font-size: 14px;">Attendance Rate</div>
                </div>
            </div>
            <div style="margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="action-btn btn-info" onclick="filterByAttendanceMethod('all')" style="flex: 1; min-width: 120px;">
                    📚 All Students
                </button>
                <button class="action-btn btn-success" onclick="filterByAttendanceMethod('checked-in')" style="flex: 1; min-width: 120px;">
                    ✓ Checked In
                </button>
                <button class="action-btn" onclick="filterByAttendanceMethod('in-person')" style="flex: 1; min-width: 120px; background: #2e7d32; color: white;">
                    🏫 In-Person
                </button>
                <button class="action-btn" onclick="filterByAttendanceMethod('online')" style="flex: 1; min-width: 120px; background: #1976d2; color: white;">
                    💻 Online
                </button>
                <button class="action-btn btn-warning" onclick="filterByAttendanceMethod('not-checked-in')" style="flex: 1; min-width: 120px;">
                    ⏳ Not Checked In
                </button>
            </div>
        </div>
    `;
}


// ============================================================================
// 4. REFRESH ATTENDANCE DATA
// ============================================================================
// Add a refresh button to update attendance data in real-time

function refreshAttendanceData() {
    loadStudentTableWithAttendance();
    
    // Update stats if they're displayed
    const statsContainer = document.getElementById('attendanceStatsContainer');
    if (statsContainer) {
        statsContainer.innerHTML = displayAttendanceStats();
    }
    
    alert('✅ Attendance data refreshed!');
}


// ============================================================================
// 5. EXPORT ATTENDANCE REPORT
// ============================================================================
// Export today's attendance with methods to CSV

function exportAttendanceReport() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    }).replace(/\//g, '-');
    
    const savedCheckIns = localStorage.getItem('studentCheckIns');
    const allCheckIns = savedCheckIns ? JSON.parse(savedCheckIns) : {};
    const todayCheckIns = allCheckIns[today.toDateString()] || {};
    
    const headers = ['Name', 'Year', 'Email', 'Phone', 'Check-In Status', 'Attendance Method', 'Check-In Time'];
    const csvData = [headers];
    
    allStudents.forEach(student => {
        const checkIn = todayCheckIns[student.email];
        const status = checkIn ? 'Checked In' : 'Absent';
        const method = checkIn ? (checkIn.method === 'online' ? 'Online' : 'In-Person') : 'N/A';
        const time = checkIn ? checkIn.time : 'N/A';
        
        csvData.push([
            student.name,
            `Year ${student.year}`,
            student.email,
            student.phone || '',
            status,
            method,
            time
        ]);
    });
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `attendance_report_${dateStr}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    alert('✅ Attendance report exported successfully!');
}


// ============================================================================
// INSTRUCTIONS FOR ADDING THESE TO sopministry.html
// ============================================================================
/*

1. Open sopministry.html in your code editor

2. Find the <script> section (near the end of the file, before </body>)

3. Add these functions BEFORE the closing </script> tag

4. Update the student table header to include "Today's Attendance" column:
   - Find: <th>Payment Status</th>
   - Add after it: <th>Today's Attendance</th>

5. Update function calls:
   - Replace loadStudentTable() with loadStudentTableWithAttendance()
   - In showDashboard() function
   - In filterStudents() function
   - In switchTab() function

6. Add attendance stats display:
   - In the students-content div, add this at the top:
   <div id="attendanceStatsContainer"></div>
   
   - Then in the switchTab function, when tabName === 'students':
   document.getElementById('attendanceStatsContainer').innerHTML = displayAttendanceStats();

7. Add schedule display:
   - Create a div with id="scheduleContainer" in the schedule tab
   - In switchTab function, when tabName === 'schedule':
   displayClassSchedule();

8. Add refresh button:
   - In the students section header, add:
   <button class="action-btn btn-info" onclick="refreshAttendanceData()">🔄 Refresh</button>

9. Add export attendance button:
   - In the students section header, add:
   <button class="action-btn btn-success" onclick="exportAttendanceReport()">📥 Export Attendance</button>

10. Save the file and test in your browser!

*/
