# School of Purpose - Unit Schedule & Pricing Information

## 📅 Unit Schedule (2025-2026)

### Unit 1 (4 weeks)
- **Start:** October 21, 2025
- **End:** November 11, 2025
- **Break:** November 12, 2025
- **Resume:** November 12, 2025 (continues immediately)
- **Duration:** 4 weeks

### Unit 2 (4 weeks)
- **Start:** December 2, 2025
- **End:** December 30, 2025
- **Break:** December 31, 2025
- **Resume:** January 19, 2026
- **Duration:** 4 weeks

### Unit 3 (4 weeks)
- **Start:** January 20, 2026
- **End:** February 20, 2026
- **Break:** February 11, 2026
- **Resume:** March 2, 2026
- **Duration:** 4 weeks

### Unit 4 (4 weeks)
- **Start:** March 3, 2026
- **End:** March 24, 2026
- **Break:** March 25, 2026
- **Resume:** April 13, 2026
- **Duration:** 4 weeks

### Unit 5 (4 weeks)
- **Start:** April 14, 2026
- **End:** May 5, 2026
- **Duration:** 4 weeks

### 🎓 Graduation
- **Date:** May 8, 2026

---

## 💰 Pricing Structure

### Base Tuition (Per Unit)
- **Year 1 Students:** $250 per unit
- **Year 2 Students:** $280 per unit

### Class Schedule
- **Day:** Tuesdays
- **Attendance:** In-person and Online options available

---

## 🎯 Discount Programs

### 1. Married Couples Discount
- **Discount:** 15% off per unit
- **Eligibility:** Both spouses enrolled
- **Applied to:** Each unit payment

**Calculation Examples:**
- Year 1: $250 - 15% = $212.50 per unit
- Year 2: $280 - 15% = $238.00 per unit

### 2. Pastor Discount
- **Discount:** 50% off per unit
- **Eligibility:** Active pastors/ministry leaders
- **Applied to:** Each unit payment

**Calculation Examples:**
- Year 1: $250 - 50% = $125.00 per unit
- Year 2: $280 - 50% = $140.00 per unit

### 3. Pay in Full Discount
- **Discount:** 10% off total tuition
- **Eligibility:** Payment for all 5 units upfront
- **Applied to:** Total annual tuition

**Calculation Examples:**
- Year 1: ($250 × 5) - 10% = $1,250 - $125 = $1,125 total
- Year 2: ($280 × 5) - 10% = $1,400 - $140 = $1,260 total

### Discount Combinations
**Note:** Discounts can be combined (e.g., Married Pastor paying in full)

**Example - Married Pastor, Pay in Full:**
- Year 1: $250 × 5 = $1,250
  - Pastor discount (50%): $1,250 - $625 = $625
  - Married discount (15%): $625 - $93.75 = $531.25
  - Pay in full (10%): $531.25 - $53.13 = $478.12 total
  
- Year 2: $280 × 5 = $1,400
  - Pastor discount (50%): $1,400 - $700 = $700
  - Married discount (15%): $700 - $105 = $595
  - Pay in full (10%): $595 - $59.50 = $535.50 total

---

## 📊 Total Tuition Summary

### Year 1 Students (5 Units)
| Payment Plan | Base Price | With Discounts |
|--------------|------------|----------------|
| Per Unit | $250/unit | Varies by discount |
| Full Year | $1,250 | $1,125 (10% off) |
| Married Couple | $212.50/unit | $1,062.50 total |
| Pastor | $125/unit | $625 total |
| Married Pastor | $106.25/unit | $531.25 total |

### Year 2 Students (5 Units)
| Payment Plan | Base Price | With Discounts |
|--------------|------------|----------------|
| Per Unit | $280/unit | Varies by discount |
| Full Year | $1,400 | $1,260 (10% off) |
| Married Couple | $238/unit | $1,190 total |
| Pastor | $140/unit | $700 total |
| Married Pastor | $119/unit | $595 total |

---

## 📍 Attendance Tracking

### Attendance Methods
1. **In-Person Check-In**
   - Students check in at physical location
   - Marked as "In-Person" in system

2. **Online Check-In**
   - Students check in via student portal login
   - Marked as "Online" in system
   - Visible in admin dashboard with "Online" indicator

### Check-In Display
- Admin dashboard shows attendance method for each student
- Interactive display shows:
  - ✅ Checked In (In-Person)
  - 💻 Checked In (Online)
  - ❌ Not Checked In

---

## 🔄 Implementation Requirements

### Features to Add:

#### 1. Unit Payment Tracking
- [ ] Add Unit 1-5 payment checkboxes in Payment Details section
- [ ] Track payment status per unit (Paid/Pending/Waived)
- [ ] Calculate remaining balance based on units paid

#### 2. Discount Management
- [ ] Add discount type field to student profile:
  - None
  - Married Couple (15%)
  - Pastor (50%)
  - Pay in Full (10%)
  - Combined discounts
- [ ] Auto-calculate discounted amounts
- [ ] Display original price vs. discounted price

#### 3. Attendance Method Tracking
- [ ] Add "attendanceMethod" field: "In-Person" or "Online"
- [ ] Update check-in system to track method
- [ ] Display attendance method in admin dashboard
- [ ] Show online check-ins from student portal

#### 4. Unit Schedule Display
- [ ] Add unit schedule calendar to dashboard
- [ ] Show current unit and upcoming units
- [ ] Display break periods
- [ ] Countdown to graduation

---

## 📝 Database Schema Updates Needed

### Student Record Fields to Add:
```javascript
{
  // Existing fields...
  name: "Student Name",
  year: 1 or 2,
  email: "email@example.com",
  
  // New fields needed:
  discountType: "none" | "married" | "pastor" | "payInFull" | "combined",
  discountPercentage: 0-65, // calculated based on type
  
  // Unit payments
  unit1Paid: true/false,
  unit2Paid: true/false,
  unit3Paid: true/false,
  unit4Paid: true/false,
  unit5Paid: true/false,
  
  // Attendance tracking
  attendanceMethod: "in-person" | "online",
  lastCheckIn: "timestamp",
  totalCheckIns: number,
  
  // Payment tracking
  totalOwed: number, // calculated with discounts
  totalPaid: number,
  remainingBalance: number
}
```

---

## 🎓 Academic Calendar

### Important Dates:
- **Program Start:** October 21, 2025
- **Unit 1:** Oct 21 - Nov 11, 2025
- **Unit 2:** Dec 2, 2025 - Jan 19, 2026
- **Unit 3:** Jan 20 - Mar 2, 2026
- **Unit 4:** Mar 3 - Apr 13, 2026
- **Unit 5:** Apr 14 - May 5, 2026
- **Graduation:** May 8, 2026

### Break Periods:
- After Unit 1: November 12, 2025
- After Unit 2: December 31, 2025 - January 19, 2026
- After Unit 3: February 11 - March 2, 2026
- After Unit 4: March 25 - April 13, 2026

---

## 💡 Next Steps for Implementation

### Priority 1: Payment System Enhancement
1. Add discount type selector to student profiles
2. Implement unit payment tracking (5 checkboxes per student)
3. Auto-calculate discounted amounts
4. Show payment progress (X of 5 units paid)

### Priority 2: Attendance Method Tracking
1. Update check-in system to capture method (in-person/online)
2. Add online check-in capability in student portal
3. Display attendance method in admin dashboard
4. Generate attendance reports by method

### Priority 3: Unit Schedule Integration
1. Add unit schedule calendar to dashboard
2. Show current unit and progress
3. Display upcoming units and breaks
4. Add countdown to graduation

---

**Last Updated:** January 2025
**Academic Year:** 2025-2026
