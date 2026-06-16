document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('mid-input');
    const signUpButton = document.querySelector('.input-mail button');

    if (!emailInput || !signUpButton) {
        return;
    }

    signUpButton.addEventListener('click', function () {
        const email = emailInput.value.trim();

        if (!email) {
            alert('Please enter your email to sign up.');
            return;
        }

        alert(`Thanks for signing up with ${email}!`);
        emailInput.value = '';
    });
});
