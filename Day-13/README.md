### Day 13 – JavaScript Form Validation & User Input Verification

On **Day 13** of the **50 Days Dev Web Development Challenge**, I learned how to validate user input using JavaScript before allowing a form to be submitted. This introduced me to client-side form validation, where I intercepted the default form submission process and verified the entered data before it could be processed.

I selected the membership form and its input fields using `document.querySelector()` and `document.getElementById()`, then attached a `submit` event listener to the form. Using `event.preventDefault()`, I prevented the browser's default page reload so that JavaScript could perform validation. I extracted user input with `.value.trim()` and used conditional statements to verify that the Full Name field was not empty and that the Email field contained a valid `@` symbol. When validation failed, the corresponding input field was highlighted with a red border and an appropriate error message was displayed. If all validations passed, a success message was shown, the application status was logged to the console, and the form was reset for the next submission.

### What I Learned

* Handling form submissions using the `submit` event.
* Preventing default browser behavior with `event.preventDefault()`.
* Selecting form elements using `document.querySelector()` and `document.getElementById()`.
* Extracting and cleaning user input using `.value.trim()`.
* Validating user input with `if`, `else if`, and `else` statements.
* Verifying email format using `.includes('@')`.
* Dynamically updating input styles to indicate validation errors.
* Resetting form fields using `form.reset()`.
* Understanding the importance of client-side validation before sending data to a server.

### Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)
* DOM Manipulation
* JavaScript Form Validation

### Outcome

Successfully implemented client-side form validation for the Membership Application form. The webpage now prevents invalid submissions, provides instant feedback for incorrect inputs, highlights validation errors, and only accepts properly formatted user data before clearing the form, creating a more reliable and user-friendly experience.