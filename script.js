// Tailwind CSS Configuration Object
tailwind.config = {
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: "#DC143C",   // Crimson (Primary Red)
        secondary: "#990000", // Darker Red (for hover/accents)
        background: '#000000', // Set explicit black background
        text: '#ffffff',       // Set explicit white text
        'dark-card': '#111111', // Very dark gray for cards/items
        'medium-dark': '#1f1f1f', // Slightly lighter dark gray
        'light-gray': '#9CA3AF', // For subtle text/icons (Tailwind gray-400)
        'medium-gray': '#6B7280', // Tailwind gray-500
      },
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Pacifico', 'cursive'], // Example display font
      },
      // Custom border radius values
      borderRadius: {
        // Keep Tailwind defaults and add specific ones if needed
        // Example: 'button': '8px', (But we used rounded-lg in HTML for buttons)
      },
    },
  },
  plugins: [], // Add Tailwind plugins here if needed
};

// Optional: Add interactive JavaScript logic below

// Example: Basic form submission handling (replace with actual logic)
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form'); // Adjust selector if multiple forms
//   if (form) {
//     form.addEventListener('submit', (event) => {
//       event.preventDefault(); // Prevent default browser submission

//       // --- Replace with your form submission logic ---
//       // Example: Using FormData and fetch
//       const formData = new FormData(form);
//       const data = Object.fromEntries(formData.entries());
//       console.log('Form Data:', data);

//       // Example: Sending data to a backend endpoint or service (like Formspree, Netlify Forms, etc.)
//       // fetch('/api/contact', { // Replace with your actual endpoint
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(data),
//       // })
//       // .then(response => response.json())
//       // .then(result => {
//       //   console.log('Success:', result);
//       //   alert('Message sent successfully!');
//       //   form.reset(); // Clear the form
//       // })
//       // .catch(error => {
//       //   console.error('Error:', error);
//       //   alert('Failed to send message. Please try again.');
//       // });

//       // --- Placeholder alert ---
//       alert('Message sent (simulation)!');
//       form.reset(); // Clear the form after simulated submission
//     });
//   }
// });