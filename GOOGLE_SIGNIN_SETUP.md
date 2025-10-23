# Google Sign-In Setup Guide

## Option 1: Full Google OAuth Setup (Recommended for Production)

### Step-by-Step Instructions:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click on the project dropdown at the top
   - Click "New Project"
   - Enter project name: "School of Purpose"
   - Click "Create"

3. **Enable Google Sign-In API**
   - In the left sidebar, go to "APIs & Services" > "Library"
   - Search for "Google Identity"
   - Click on "Google Identity Toolkit API" or "Google+ API"
   - Click "Enable"

4. **Create OAuth 2.0 Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - If prompted, configure the OAuth consent screen:
     - Choose "External" user type
     - Fill in app name: "School of Purpose Student Portal"
     - Add your email as support email
     - Click "Save and Continue"
   - Back to Create OAuth client ID:
     - Application type: "Web application"
     - Name: "Student Portal"
     - Authorized JavaScript origins: Add your domain (e.g., http://localhost:8000 for testing)
     - Click "Create"

5. **Copy Your Client ID**
   - You'll see a popup with your Client ID
   - Copy the Client ID (looks like: 123456789-abc123def456.apps.googleusercontent.com)

6. **Update student-portal.html**
   - Open student-portal.html
   - Find line 785: `const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';`
   - Replace with your actual Client ID

---

## Option 2: Simplified Alternative (No Google Cloud Setup Required)

If you can't access Google Cloud Console or want a simpler solution, I can implement an alternative approach:

### Alternative Approach:
Instead of requiring Google Sign-In, we can:
1. Add a simple "I agree to sign in with my Google account" checkbox
2. Show instructions for students to sign into YouTube separately in their browser
3. Then allow them to access the videos

This approach:
- ✅ No Google Cloud Console setup needed
- ✅ Works immediately
- ✅ Students still need to be signed into Google/YouTube to view unlisted videos
- ✅ Simpler implementation

Would you like me to implement this alternative approach instead?

---

## Troubleshooting

**Can't find Google Cloud Console?**
- Make sure you're signed in with a Google account
- Try this direct link: https://console.developers.google.com/

**Don't have access to create projects?**
- You may need to use a different Google account
- Or ask your organization's Google Workspace admin for access

**Need help?**
Let me know and I can implement the simplified alternative approach!
