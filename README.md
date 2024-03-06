
# React Contact Form with Google Sheets Integration

This project is a simple React application that implements a contact form. The form includes fields for name, email, phone number, and message. Upon submission, the data is stored in a Google Sheets spreadsheet.


## Features

- Input field validation for name, email, and phone number.
- Error messages displayed for invalid input.
- Toast message displayed for successful submission.
- Integration with Google Sheets for data storage.


## Technologies Used
- React.js
- React Hook Form for form handling
- Tailwind CSS for styling
- Google Sheets API for data storage
## Setup

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/princeragh1801/contact-form.git
```
   2.Navigate to the project directory:
```bash
  cd react-contact-form
```
3. Install dependencies:
```bash
  npm install
```
4. Create a `.env` file in the root directory and add the following environment variables:
```bash
VITE_SPREADSHEET_URL=<your-url>
```
## Usage

- Fill out the contact form with your name, email, phone number, and message.
- Upon submission, the data will be stored in the specified Google Sheets spreadsheet.
- Error messages will be displayed if any fields are invalid.
- A toast message will appear upon successful submission.


## Deployment

The project is deployed at vercel

[Link](https://contact-form-mcymkkazg-prince-raghuwanshis-projects.vercel.app/contact)

## License
This project is licensed under the
[MIT License](https://choosealicense.com/licenses/mit/)

