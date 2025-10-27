# Demo Content Cleanup - sopministry.html

## Items to Remove/Update

### 1. Timeline Demo Entry (Line ~2007)
```html
<strong>Donation Received</strong> - Anonymous donor contributed $500
```
**Action:** Remove this demo timeline entry

### 2. Demo Login Message (Line ~4833)
```javascript
console.log('📝 Demo Login: admin@schoolofpurpose.org + any password');
```
**Action:** Remove or update this message

### 3. Demo Account Comment (Line ~2946)
```javascript
// Default demo account
```
**Action:** Update comment to reflect real admin account

### 4. Invalid Credentials Alert (Line ~2960)
```javascript
alert('Invalid credentials. Try admin@schoolofpurpose.org with any password for demo.');
```
**Action:** Update to remove "for demo" reference

### 5. Missing makeDonation Function
**Action:** Add function to show QR code modal with real donation QR code

### 6. localStorage Demo Data
**Action:** Users should run cleanup-demo-data.js in browser console to clear:
- Demo announcements
- Demo study materials
- Demo donations
- Demo class schedule (if any)

## Implementation Steps

1. ✅ Convert QR code image (IMG_3824.HEIC → donation-qr-code.png)
2. ✅ Update student-portal.html to use real QR code
3. ✅ Remove demo timeline entry (Line 2007)
4. ✅ Add makeDonation function to sopministry.html (Line 3777)
5. ✅ Update login messages:
   - ✅ Changed "Demo Login" to "Login" (Line 4848)
   - ✅ Removed "for demo" from invalid credentials alert (Line 2954)
   - ✅ Changed "Default demo account" to "Default admin account" (Line 2940)
6. ✅ Create instructions for running cleanup script (see below)

## localStorage Cleanup Instructions

To clear demo data from localStorage, open the browser console (F12) on sopministry.html and run:

```javascript
// Run the cleanup script
fetch('cleanup-demo-data.js')
  .then(response => response.text())
  .then(script => eval(script))
  .then(() => {
    console.log('✅ Demo data cleared successfully!');
    location.reload();
  });
```

Or manually clear specific items:
```javascript
localStorage.removeItem('announcements');
localStorage.removeItem('studyMaterials');
localStorage.removeItem('classSchedule');
console.log('✅ Demo content cleared!');
location.reload();
```

## Notes
- Keep real student data (Year 1 & Year 2)
- Keep ministry settings
- Keep authentication structure
- Only remove fake/demo content
