var current = 'dubaimall';
function changeTab(Id) {
	document.getElementById(current).style.display = 'none';
	document.getElementById(Id).style.display = 'block';
	current = Id;
}