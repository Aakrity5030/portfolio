function toggleDropdown() {
	let navbarToggle = document.getElementById("navbar-toggle");
	if(navbarToggle.className === 'topnav'){
	navbarToggle.className += ' responsive';
	} else {
		navbarToggle.className = 'topnav';
	}
}