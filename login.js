const users = [
	{ username: 'anil', password: 'system123#' },
	{ username: 'user2', password: 'pass2' },
	{ username: 'user3', password: 'pass3' },
];
for (const user of users) {
  console.log(`Username: ${user.username}, Password: ${user.password}`);
}

// Get the login form and add an event listener for the submit event
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the input values
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Check if the user is in the list of credentials
	const authenticatedUser = users.find(user => user.username === username && user.password === password);

	if (authenticatedUser) {
		// Redirect to the dashboard page
		window.location.href = 'home.html';
	} else {
		// Display an error message
        window.location.href = 'error.html';
		//alert('Invalid username or password. Please try again.');
	}
});
