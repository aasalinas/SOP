# How to Fix the Google OAuth Error

## The Error You Saw:
```
Access blocked: Authorization Error
Error 400: invalid_request
You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy
```

## Why This Happened:
The error occurs because your website's domain needs to be added to the "Authorized JavaScript origins" in Google Cloud Console.

## Quick Fix (5 minutes):

### Step 1: Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/apis/credentials
2. Sign in with your Google account
3. You should see your project "School of Purpose Student Portal"

### Step 2: Edit OAuth Client
1. Find your OAuth 2.0 Client ID in the list (it starts with 550269360727...)
2. Click on it to edit
3. Scroll down to "Authorized JavaScript origins"

### Step 3: Add Your Domain
Since you're opening the HTML file directly (double-clicking it), add this EXACT origin:

**Click "+ ADD URI" and enter:**
```
file://
```

That's it! Just those 7 characters: `file://`

**Important:** Make sure there are NO spaces, NO extra slashes, just exactly: `file://`

### Step 4: Add Authorized Redirect URIs
Scroll to "Authorized redirect URIs" and add:
```
http://localhost
https://yourdomain.com
```

### Step 5: Save
1. Click "SAVE" at the bottom
2. Wait 5 minutes for changes to propagate
3. Refresh your student portal page
4. Try signing in again - it should work now!

---

## Alternative: Test with a Different Approach

If you're still having issues, you can also:

### Option A: Use a Local Server
Instead of opening the HTML file directly, run a local server:

```bash
# If you have Python installed:
python3 -m http.server 8000

# Then open: http://localhost:8000/student-portal.html
```

### Option B: Deploy to a Web Host
Upload your files to:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)

Then add that domain to your authorized origins.

---

## ✅ Your Client ID is Already Configured!

Yes, your Client ID is already in the student-portal.html file:
```
550269360727-qk6jqecderpa477k09k34fmbffrspsk9.apps.googleusercontent.com
```

You don't need to change anything in the code - just add `file://` to the authorized origins in Google Cloud Console!

## Step-by-Step Visual Guide:

1. **Go to:** https://console.cloud.google.com/apis/credentials
2. **Find this in the list:** OAuth 2.0 Client IDs section
3. **Click on:** The client that starts with "550269360727..."
4. **Scroll to:** "Authorized JavaScript origins"
5. **Click:** "+ ADD URI" button
6. **Type exactly:** `file://` (no quotes, no spaces)
7. **Click:** SAVE at the bottom
8. **Wait:** 5 minutes
9. **Try again:** Open student-portal.html and click "Sign in with Google"

That's it! The error will be gone.

---

## Need Help?
If you're still stuck, let me know:
1. How are you opening the file? (double-click, local server, web host?)
2. What's the URL in your browser when you see the error?

I can help you configure it correctly!
