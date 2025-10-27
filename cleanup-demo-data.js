// Cleanup Script - Remove Demo Data from School of Purpose
// Run this in browser console to clear demo content

console.log('🧹 Starting cleanup of demo data...');

// Clear demo announcements
localStorage.removeItem('announcements');
console.log('✅ Cleared demo announcements');

// Clear demo study materials
localStorage.removeItem('studyMaterials');
console.log('✅ Cleared demo study materials');

// Clear demo class schedule (keep if real schedule exists)
const schedule = JSON.parse(localStorage.getItem('classSchedule') || '[]');
if (schedule.length > 0 && schedule[0].title && schedule[0].title.includes('Demo')) {
    localStorage.removeItem('classSchedule');
    console.log('✅ Cleared demo class schedule');
}

// Clear demo donations data
localStorage.removeItem('donations');
console.log('✅ Cleared demo donations data');

// Keep real student data (Year 1 & Year 2)
// Keep real ministry data
// Keep real settings

console.log('🎉 Demo data cleanup complete!');
console.log('📝 Note: Real student data, ministry settings, and other important data has been preserved.');
console.log('🔄 Please refresh the page to see the clean interface.');

// Optional: Show current localStorage contents
console.log('📊 Current localStorage contents:');
for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        console.log(`  ${key}: ${localStorage[key].length} characters`);
    }
}
