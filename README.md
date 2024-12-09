# iSpeakAnglo - English Courses Landing Page 🌐

**A modern landing page built with React, TypeScript, and Vite.**  
**Deployed on Vercel:** [iSpeakAnglo](https://ispeakanglo.vercel.app)  

This landing page seamlessly integrates form submissions with a Google Sheet for efficient data management.  
Check out the sheet: [Google Sheet Link](https://docs.google.com/spreadsheets/d/1MqjnSELucZI-DMGa30dbmY0JLZPtUOzkRTiwahsjlks/edit?usp=sharing).

---

## ✨ Features

1. **Smart Form Handling**  
   - **Uncompleted forms**: Automatically moved to a separate sheet tab after 20 seconds of inactivity.  
   - **Follow-up emails**: If the user hasn't completed the form within 2 minutes, an email is sent as a reminder.  

2. **Dynamic Updates**  
   - The **Returned** column in the sheet is updated to `"Yes"` every hour if the user completes their registration after initially leaving.

3. **Automation Integration**  
   - All backend tasks, including data handling and email automation, are powered by **Pabbly Connect**.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, PageUI  
- **Deployment**: Vercel  
- **Backend Automation**: Pabbly Connect  

---

## 🚀 How It Works

1. **User Interaction**  
   - Users fill out the form on the landing page.

2. **Google Sheet Sync**  
   - Form submissions are logged in a connected Google Sheet.

3. **Automated Actions**  
   - Unfinished forms are tracked and followed up automatically.

---

## 🔗 Live Demo

Explore the live site: [iSpeakAnglo](https://ispeakanglo.vercel.app)  

For any feedback or contributions, feel free to open an issue or create a pull request!
