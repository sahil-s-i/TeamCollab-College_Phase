const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


//Different pages of registeration form -->
function register() {
    const userType = document.querySelector('input[name="userType"]:checked');

    if (!userType) {
        // If no radio button is selected, display an alert message
        alert('Please select a type of user.');
        return;
    }

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (userType.value === 'student') {
        // Redirect to student.html
        console.log('Welcome, Student! Redirecting to student Registeration page.');
        window.location.href = '/SUSHMITA/Reg.html';
    } else if (userType.value === 'faculty') {
        // Redirect to faculty.html
        console.log('Welcome, Faculty! Redirecting to faculty Registeration page.');
        window.location.href = '/SAHIL/faculty/index.html';
    }
}

function login(e) {
    // Prevent form submission
    e.preventDefault();

    const userType = document.querySelector('input[name="userType"]:checked');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Ripples water effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('clicked');
        let x = e.clientX - btn.getBoundingClientRect().left;
        let y = e.clientY - btn.getBoundingClientRect().top;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        btn.appendChild(ripples);
    });

    // Display the alert message after a short delay
    setTimeout(() => {
        if (!userType) {
            // If no radio button is selected, display an alert message and remove the ripples effect
            alert('Please select a type of user.');
        } else if (userType.value === 'student' && (!email || !password)) {
            // If user type is student and email or password is empty, display an alert message and remove the ripples effect
            alert('Please fill in both email and password.');
        } else if (userType.value === 'faculty' && (!email || !password)) {
            // If user type is faculty and email or password is empty, display an alert message and remove the ripples effect
            alert('Please fill in both email and password.');
        } else {
            // At this point, both userType and email/password are provided
            if (userType.value === 'student') {
                // Redirect to student.html
                console.log('Welcome, Student! Redirecting to student Login page.');
                window.location.href = '/PRAJWAL/student_menu.html';
            } else if (userType.value === 'faculty') {
                // Redirect to faculty.html
                console.log('Welcome, Faculty! Redirecting to faculty Login page.');
                window.location.href = '/PRAJWAL/faculty_menu.html';
            }
        }

        // Remove the ripples effect once the alert message is displayed
        buttons.forEach(btn => {
            btn.classList.remove('clicked');
            const ripples = btn.querySelector('span');
            if (ripples) ripples.remove();
        });
    },1000);
}


