# Validation Form Application

## Description

This React application offers a sophisticated validation form, ensuring accurate and efficient data collection. The form includes fields for name, email, phone number, and roll number, each subjected to rigorous validation checks to maintain data integrity.

### Features

- **Fields:**
  - **Name:** Maximum 50 characters, no special characters allowed, and cannot be blank.
  - **Email:** Maximum 50 characters, validated using a regular expression for email format, and cannot be blank.
  - **Phone Number:** Exactly 10 digits, only numerical characters allowed, and cannot be blank.
  - **Roll Number:** Must be unique (unique check not implemented), and cannot be blank.
- **Validation:**
  - Real-time validation with dynamic error messages displayed for invalid inputs, enhancing user experience and data accuracy.
- **Submission:**
  - Displays entered data below the form upon successful submission, allowing users to review their input.
- **Styling:**
  - Clean and modern CSS styling for a professional appearance and user-friendly interface.
  - Responsive design ensuring compatibility across various devices and screen sizes.

## Setup Instructions

To run the application locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/apvastava/validation-form-app.git
   ```
2. **Navigate to the project directory:**
  ```
  cd validation-form-app
  ```
3. **Install dependencies:**
  ```
  npm install
  ```
4. **Start the development server:**
  ```
  npm start
  ```
5. **Open your web browser and visit:**
   ```
   http://localhost:3000
   ```
## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **JavaScript (ES6+):** Modern JavaScript for robust functionality.
- **HTML:** For structuring the content.
- **CSS:** For styling and responsive design.

## Credits

This project was created by Arpit Srivastava. Feel free to reach out for collaboration or inquiries.
