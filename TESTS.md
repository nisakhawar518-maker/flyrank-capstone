# Contact Form Test Checklist

## 1. Empty Submission
- [ ] Open `contact-v2.html`
- [ ] Click "Send Message" without filling any fields
- [ ] **Expected Result:**
    - Full Name shows error "Name must be at least 2 characters long."
    - Email shows error "Email is required."
    - Message shows error "Message must be at least 10 characters long."
    - Status message at bottom says "Please fix the errors above before submitting."

## 2. Invalid Email Format
- [ ] Fill "Full Name" with "John Doe"
- [ ] Fill "Email" with "invalid-email"
- [ ] Click "Send Message" or blur the email field
- [ ] **Expected Result:**
    - Email shows error "Please enter a valid email address."

## 3. Short Message
- [ ] Fill "Message" with "Hi"
- [ ] Blur the message field
- [ ] **Expected Result:**
    - Message shows error "Message must be at least 10 characters long."

## 4. Successful Submission
- [ ] Fill "Full Name" with "Jane Smith"
- [ ] Fill "Email" with "jane@example.com"
- [ ] Select "Collaboration" from dropdown
- [ ] Fill "Message" with "Hello, I would like to work with you on a project." (>= 10 chars)
- [ ] Click "Send Message"
- [ ] **Expected Result:**
    - Form clears completely
    - Status message shows "Thank you! Your message has been sent successfully." in green
    - All error messages and red borders disappear

## 5. Mobile Responsiveness
- [ ] Resize window to 320px width
- [ ] **Expected Result:**
    - Form fits within the screen without horizontal scrolling
    - Inputs are still easy to tap/focus

## 6. Accessibility
- [ ] Tab through the form
- [ ] **Expected Result:**
    - Clear focus states (outline) on all fields and button
    - Screen reader (if tested) should read labels correctly
