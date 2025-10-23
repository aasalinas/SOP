# Deployment Guide - School of Purpose Website

## 🚀 Deploy to GitHub Pages (Free Hosting)

Follow these steps to make your website publicly accessible:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create an account if you don't have one)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository settings:
   - **Repository name**: `SOP` (or `school-of-purpose`)
   - **Description**: "School of Purpose Ministry Education Platform"
   - **Visibility**: Choose "Public" (required for free GitHub Pages)
   - **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

GitHub will show you commands to run. Use these commands in your terminal:

```bash
# Set your Git identity (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add the remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/SOP.git

# Push your code
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/SOP/
```

**Main Pages:**
- Admin Dashboard: `https://YOUR-USERNAME.github.io/SOP/sopministry.html`
- Student Portal: `https://YOUR-USERNAME.github.io/SOP/student-portal.html`
- Sign-In Checklist: `https://YOUR-USERNAME.github.io/SOP/student-signin.html`

---

## 🔧 Alternative: Deploy to Netlify (Even Easier!)

If you prefer not to use GitHub:

### Option A: Drag & Drop Deployment

1. Go to [Netlify.com](https://www.netlify.com) and sign up (free)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your entire SOP folder
4. Your site will be live in seconds at: `https://random-name.netlify.app`
5. You can customize the subdomain in Site Settings

### Option B: Deploy from GitHub (Recommended)

1. Complete Steps 1-2 from GitHub Pages guide above
2. Go to [Netlify.com](https://www.netlify.com) and sign up
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account
5. Select your SOP repository
6. Click "Deploy site"
7. Your site will be live with automatic updates on every push!

---

## 📝 Important Notes

### Current Limitations (Using LocalStorage):
- Data is stored in the browser only
- Each user has their own separate data
- Data doesn't sync between devices
- Clearing browser data will erase all information

### For Production Use, You'll Need:
1. **Backend Server** - To store data centrally
2. **Database** - MongoDB, PostgreSQL, or Firebase
3. **API Integration** - Connect your Stripe, SendGrid, and Twilio APIs
4. **User Authentication** - Secure login system
5. **SSL Certificate** - HTTPS (GitHub Pages and Netlify provide this free)

---

## 🔐 Adding Your API Keys

Once deployed, you'll need to add your API credentials:

### Stripe Integration
Edit the payment processing functions in `sopministry.html` to use your Stripe publishable key.

### SendGrid (Email)
Add your SendGrid API key to the email functions.

### Twilio (SMS)
Add your Twilio credentials to the SMS functions.

**Security Note**: For production, these should be stored in environment variables on a backend server, not in the frontend code.

---

## 📞 Need Help?

If you encounter any issues during deployment, common solutions:

1. **404 Error**: Make sure GitHub Pages is enabled and pointing to the correct branch
2. **Images Not Loading**: Check that image paths are relative (they are)
3. **Styles Not Working**: Clear browser cache and hard refresh (Cmd+Shift+R on Mac)

---

## 🎯 Next Steps After Deployment

1. Test all pages on the live site
2. Share the URL with your team
3. Set up a custom domain (optional)
4. Consider upgrading to a backend solution for data persistence
5. Add SSL certificate (automatic with GitHub Pages/Netlify)
