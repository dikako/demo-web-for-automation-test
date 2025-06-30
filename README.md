# 💻 Demo Web App for Automation Testing

This is a simple static HTML web application designed for **automation testing practice**. It features a login page and a basic dashboard with a user data table.

---

## 🔧 Features

- 🛂 **Login Form** with validation
- 📊 **Dashboard View** shown upon successful login
- 🧑‍🤝‍🧑 **User Table** containing mock data
- 🏃‍♂️ **Logout Button** to return to login screen
- 📎 **Test IDs** on elements for easy automation targeting

---

## 🧪 Login Credentials

Use the following hardcoded credentials to login:

```env
Username: testuser
Password: testpass
```

Incorrect credentials will show an `error message`

---

## 🧰 Automation Ready

All interactive elements (inputs, buttons, containers, etc.) include `test-id` attributes to simplify integration with automation testing tools like:

- Playwright
- Selenium
- Cypress

Example:

```html
<input test-id="input-username" ... />
<button test-id="btn-login">Login</button>

## 📂 Project Structure

```bash
├── index.html    # Main HTML file
└── README.md     # Project documentation
```
