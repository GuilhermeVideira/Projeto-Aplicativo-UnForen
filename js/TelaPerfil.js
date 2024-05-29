function toggleMenu() {
    document.getElementById("myMenu").classList.toggle('active');
    document.getElementById("overlay").classList.toggle('active');
}

function closeMenu() {
    document.getElementById("myMenu").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}
