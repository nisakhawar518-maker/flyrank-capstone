document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('form-status');

    const inputs = {
        name: {
            element: document.getElementById('full-name'),
            error: document.getElementById('name-error'),
            validate: (value) => value.trim().length >= 2 ? '' : 'Name must be at least 2 characters long.'
        },
        email: {
            element: document.getElementById('email'),
            error: document.getElementById('email-error'),
            validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) return 'Email is required.';
                return emailRegex.test(value) ? '' : 'Please enter a valid email address.';
            }
        },
        message: {
            element: document.getElementById('message'),
            error: document.getElementById('message-error'),
            validate: (value) => value.trim().length >= 10 ? '' : 'Message must be at least 10 characters long.'
        }
    };

    const validateField = (fieldKey) => {
        const field = inputs[fieldKey];
        const errorMessage = field.validate(field.element.value);
        
        if (errorMessage) {
            field.element.classList.add('invalid');
            field.error.textContent = errorMessage;
            field.error.classList.add('visible');
            return false;
        } else {
            field.element.classList.remove('invalid');
            field.error.textContent = '';
            field.error.classList.remove('visible');
            return true;
        }
    };

    // Only validate after the user leaves the field
    Object.keys(inputs).forEach(key => {
        inputs[key].element.addEventListener('blur', () => {
            validateField(key);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        Object.keys(inputs).forEach(key => {
            if (!validateField(key)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show success message
            statusMessage.textContent = 'Thank you! Your message has been sent successfully.';
            statusMessage.className = 'success';
            
            // Clear form
            form.reset();
            
            // Clear any error states (in case of manual reset etc)
            Object.values(inputs).forEach(field => {
                field.element.classList.remove('invalid');
                field.error.classList.remove('visible');
                field.error.textContent = '';
            });

            // Scroll to status message for mobile users
            statusMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Hide success message after 5 seconds
            setTimeout(() => {
                statusMessage.textContent = '';
                statusMessage.className = '';
            }, 5000);
        } else {
            statusMessage.textContent = 'Please fix the errors above before submitting.';
            statusMessage.className = 'error';
        }
    });
});
