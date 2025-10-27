# 🔧 Fix Google OAuth Error for Student Portal

## Problem
You're getting this error when students try to sign in with Google:
```
Error 400: origin_mismatch
Access blocked: Authorization Error
You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy.
```

## Solution: Register Your GitHub Pages URL

### Step 1: Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/
2. Sign in with your Google account (aidenalexandersalinas@gmail.com)

### Step 2: Select Your Project
1. Click the project dropdown at the top
2. Select "School of Purpose Student Portal" project
3. If you don't see it, you may need to create a new project

### Step 3: Configure OAuth Consent Screen
1. In the left sidebar, go to **APIs & Services** > **OAuth consent screen**
2. Make sure your app is configured:
   - App name: School of Purpose Student Portal
   - User support email: Your email
   - Developer contact: Your email
3. Click **Save and Continue**

### Step 4: Add Authorized JavaScript Origins
1. In the left sidebar, go to **APIs & Services** > **Credentials**
2. Find your OAuth 2.0 Client ID (the one starting with `550269360727-...`)
3. Click the **Edit** button (pencil icon)
4. Scroll down to **Authorized JavaScript origins**
5. Click **+ ADD URI** and add these URLs:
   ```
   https://aasalinas.github.io
   ```
6. Click **+ ADD URI** again and add:
   ```
   http://localhost:8000
   ```
   (This is for local testing)
7. Click **SAVE** at the bottom

### Step 5: Add Authorized Redirect URIs (if needed)
1. Scroll down to **Authorized redirect URIs**
2. Click **+ ADD URI** and add:
   ```
   https://aasalinas.github.io/SOP/student-portal.html
   ```
3. Click **SAVE**

### Step 6: Wait and Test
1. Wait 5-10 minutes for changes to propagate
2. Clear your browser cache (Cmd+Shift+Delete on Mac)
3. Try signing in again at: https://aasalinas.github.io/SOP/student-portal.html

## Alternative: Use Regular Login Instead

If you don't want to deal with Google OAuth setup, students can use the regular username/password login:

### Default Student Accounts:
All students can log in with:
- **Username**: firstname.lastname (lowercase, e.g., "sarah.johnson")
- **Password**: student123

### Example Logins:
- Username: `sarah.johnson` | Password: `student123`
- Username: `michael.brown` | Password: `student123`
- Username: `jennifer.davis` | Password: `student123`

## Creating Student Accounts for All 84 Students

I can create accounts for all your students automatically. Each student will have:
- **Username**: firstname.lastname (from their name in the system)
- **Password**: student123 (they can change it later)

Would you like me to generate login credentials for all 84 students?

## Quick Fix: Disable Google Sign-In Temporarily

If you want to launch immediately without Google Sign-In, I can:
1. Remove the Google Sign-In requirement
2. Make YouTube videos accessible without Google authentication
3. Keep only the username/password login

This way students can access everything right away while you set up Google OAuth properly.

---

## Need Help?

If you're still having issues:
1. Make sure you're using the correct Google Cloud project
2. Verify the Client ID in the code matches your Google Cloud Console
3. Check that JavaScript origins are saved correctly
4. Clear browser cache and try again

**Current Client ID in code**: `550269360727-qk6jqecderpa477k09k34fmbffrspsk9.apps.googleusercontent.com`

Make sure this matches the Client ID in your Google Cloud Console!
