// Main application functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for appointment booking
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const status = document.getElementById('formStatus');
            status.classList.remove('hidden', 'text-red-500', 'text-green-500');
            
            // Get form values
            const name = this.name.value;
            const email = this.email.value;
            const phone = this.phone.value;
            const department = this.department.value;
            const date = new Date(this.date.value);

            // Validation
            if (!name || !email || !phone || !department || !this.date.value) {
                status.textContent = 'Please fill all fields';
                status.classList.add('text-red-500');
                return;
            }

            if (!/^\d{10}$/.test(phone)) {
                status.textContent = 'Please enter a valid 10-digit phone number';
                status.classList.add('text-red-500');
                return;
            }

            if (date < new Date()) {
                status.textContent = 'Please select a future date';
                status.classList.add('text-red-500');
                return;
            }

            // Simulate form submission
            status.textContent = 'Booking your appointment...';
            status.classList.add('text-white');
            
            setTimeout(() => {
                status.textContent = 'Appointment booked successfully! We will contact you shortly.';
                status.classList.add('text-green-500');
                console.log('Appointment details:', { name, email, phone, department, date });
                this.reset();
            }, 1500);
        });
    }

    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('hidden');
            nav.classList.toggle('block');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-16');
            nav.classList.toggle('left-0');
            nav.classList.toggle('right-0');
            nav.classList.toggle('bg-blue-800');
            nav.classList.toggle('p-4');
            nav.classList.toggle('z-50');
        });
    }
});
