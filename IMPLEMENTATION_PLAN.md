# Year 2 Student List Implementation Plan

## Overview
Add Year 2 student data with separate tabs for Year 1 and Year 2 students, plus a Payment Details section.

## Changes Required

### 1. Update Student Data Structure in sopministry.html

**Location**: JavaScript section where `const allStudents = [...]` is defined

**Action**: Replace the existing 23 Year 2 demo students with 35 real Year 2 students from YEAR2_STUDENTS_DATA.js

**New Fields to Add**:
- `acceptanceSent`: 'Y' or ''
- `regFee`: 'Y', 'COMP', 'PP', or ''
- `unit1` through `unit5`: 'Y' or ''
- `paidInFull`: 'Y' or ''
- `active`: 'Y' or ''

### 2. Add Year Sub-Tabs in Students Section

**Location**: Inside `<div id="students-content">`

**Add After**: The header with "Student Roster" title

**New HTML**:
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

### 3. Add Payment Details Tab

**Location**: Add new tab in main tabs section

**Action**: Add "💳 Payment Details" tab after "💰 Payments" tab

### 4. Create Payment Details Content Section

**New Section**: `<div id="payments-content" style="display: none;">`

**Features**:
- Table showing all payment tracking columns
- Filter by Year 1/Year 2
- Export to CSV with payment details
- Bulk update payment status

### 5. JavaScript Functions to Add/Modify

**New Functions**:
- `switchYearView(year, element)` - Switch between All/Year 1/Year 2 views
- `loadPaymentDetails()` - Load payment tracking table
- `updatePaymentStatus(studentIndex, field, value)` - Update individual payment fields
- `exportPaymentDetailsCSV()` - Export with all payment columns

**Modified Functions**:
- `loadStudentTable()` - Support year filtering
- `filterStudents()` - Work with year view selection
- `updateDashboardStats()` - Update with real Year 2 data

## Implementation Steps

1. ✅ Create YEAR2_STUDENTS_DATA.js with parsed student data
2. ✅ Create this implementation plan
3. ⏳ Update allStudents array in sopministry.html
4. ⏳ Add year sub-tabs to students section
5. ⏳ Add Payment Details tab and content section
6. ⏳ Implement switchYearView() function
7. ⏳ Implement payment details table and functions
8. ⏳ Test all functionality

## Testing Checklist

- [ ] Year 1 tab shows only Year 1 students (35 students)
- [ ] Year 2 tab shows only Year 2 students (35 students)
- [ ] All Students tab shows all 70 students
- [ ] Search works across all year views
- [ ] Payment Details tab displays correctly
- [ ] Can update payment status for individual students
- [ ] Export CSV includes payment tracking columns
- [ ] Dashboard stats update correctly
