# Validation Form Application

## Description

This React application implements a validation form with the following features:

- Fields for name, email, phone number, and roll number.
- Validation for each field:
  - **Name:** Maximum 50 characters, no special characters allowed, and cannot be blank.
  - **Email:** Maximum 50 characters, validated using a regular expression for email format, and cannot be blank.
  - **Phone number:** Exactly 10 digits, only numerical characters allowed, and cannot be blank.
  - **Roll number:** Must be unique (not implemented), and cannot be blank.
- Error messages are displayed for invalid inputs.
- Upon successful submission, the entered data is displayed below the form.
- Basic CSS styling for layout and form elements.

## Setup Instructions

To run the application locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000`.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS

## Credits

This project was created by Arpit Srivastava.

