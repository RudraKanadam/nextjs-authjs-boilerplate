# 🚀 Next.js Authentication with NextAuth and 2FA 🔐

This project demonstrates a comprehensive authentication and authorization system using Next.js and NextAuth, featuring credentials and OAuth providers, two-factor authentication (2FA), user roles, and more.

## ✨ Features

- **🔑 Credentials Provider**: Custom authentication using email and password.
- **🌐 OAuth Provider**: Social login support with Google & GitHub.
- **🔄 Forgot Password Functionality**: Easily reset forgotten passwords.
- **📧 Email Verification**: Ensure users verify their email addresses.
- **🔐 Two-Factor Authentication (2FA)**: Add an extra layer of security.
- **👥 User Roles (Admin & User)**: Manage permissions and access levels.
- **🔓 Login Component**: Flexible login options with redirect or modal.
- **📝 Register Component**: Simple user registration.
- **🔒 Forgot Password Component**: Streamlined password recovery.
- **✅ Verification Component**: Confirm user actions.
- **❗ Error Component**: User-friendly error handling.
- **🔘 Login Button**: Quick access to login.
- **🚪 Logout Button**: Securely log out users.
- **🔐 Role Gate**: Protect routes and components based on user roles.
- **🔧 Exploring Next.js Middleware**: Enhance your application with custom middleware.
- **🔄 Extending & Exploring next-auth Session**: Advanced session management.
- **🔀 Exploring next-auth Callbacks**: Customize authentication flows.
- **👤 useCurrentUser Hook**: Fetch the current user effortlessly.
- **🛠️ useRole Hook**: Manage user roles with ease.
- **👥 currentUser Utility**: Utility for accessing current user data.
- **🔐 currentRole Utility**: Utility for accessing current user role.
- **🖥️ Example with Server Component**: Demonstration of server-side rendering.
- **📱 Example with Client Component**: Demonstration of client-side rendering.
- **🔒 Render Content for Admins using RoleGate Component**: Conditional content rendering.
- **🔐 Protect API Routes for Admins Only**: Secure API endpoints.
- **🔐 Protect Server Actions for Admins Only**: Secure server actions.
- **📧 Change Email with New Verification in Settings Page**: Update email with verification.
- **🔑 Change Password with Old Password Confirmation in Settings Page**: Secure password change.
- **🔐 Enable/Disable Two-Factor Auth in Settings Page**: Manage 2FA settings.
- **👥 Change User Role in Settings Page (for Development Purposes Only)**: Adjust roles during development.
- **🛡️ Next-auth v5 (Auth.js)**: Secure authentication management with the latest version.
- **⚡ Next.js 14 with Server Actions**: Leverage the power of server-side actions for enhanced performance.

## 📦 Installation

1. **📥 Clone the repository**:
    ```sh
    git clone https://github.com/your-repo/nextjs-auth.git
    cd nextjs-auth
    ```

2. **📦 Install dependencies**:
    ```sh
    npm install
    ```

3. **⚙️ Create a `.env.local` file and configure the environment variables**:

    ```env
    NEXTAUTH_SECRET=your-secret
    NEXTAUTH_URL=http://localhost:3000

    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret

    GITHUB_CLIENT_ID=your-github-client-id
    GITHUB_CLIENT_SECRET=your-github-client-secret

    EMAIL_SERVER=smtp://your-email-server
    EMAIL_FROM=your-email@example.com
    ```

4. **🚀 Run the development server**:
    ```sh
    npm run dev
    ```

## 🛠️ Usage

### 🔑 Authentication Components

- **🔓 Login Component**: Provides a login form with options for credentials or social login.
- **📝 Register Component**: Handles user registration with email and password.
- **🔒 Forgot Password Component**: Allows users to reset their passwords via email.
- **✅ Verification Component**: Manages email verification processes.
- **❗ Error Component**: Displays user-friendly error messages.

### 🔘 Authentication Buttons

- **🔑 Login Button**: Initiates the login process.
- **🚪 Logout Button**: Logs out the user.

### ⚙️ Hooks and Utilities

- **👤 useCurrentUser Hook**: Fetches the currently authenticated user.
- **🛠️ useRole Hook**: Manages user roles and permissions.
- **👥 currentUser Utility**: Accesses current user data.
- **🔐 currentRole Utility**: Accesses current user role.

### 🔧 Middleware and Callbacks

- **🔧 Middleware**: Enhance your application with custom middleware for authentication.
- **🔀 Callbacks**: Customize authentication flows using NextAuth callbacks.

### 💻 Examples and Security

- **🖥️ Server Component Example**: Demonstrates server-side rendering.
- **📱 Client Component Example**: Demonstrates client-side rendering.
- **🔒 RoleGate Component**: Protects content based on user roles.
- **🔐 Protected API Routes**: Secures API endpoints for admins only.
- **🔐 Protected Server Actions**: Secures server actions for admins only.

### ⚙️ Settings and Management

- **⚙️ Settings Page**: Manage user settings, including changing email and password.
- **🔐 2FA Management**: Enable or disable two-factor authentication.
- **👥 Role Management**: Change user roles (for development purposes).

## 🤝 Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Made with ❤️ by [Your Name](https://yourwebsite.com)
