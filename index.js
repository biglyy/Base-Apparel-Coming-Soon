function validateEmail() {
	var b = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
	var a = document.getElementById('email').value;

	if (a.match(b)) {
		alert('match');
	} else {
		alert('Invalid Email Address!');
	}
}
