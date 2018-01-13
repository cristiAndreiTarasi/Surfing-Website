
// Toggle menu on click hamburger
function toggleMenu() {
    var toChange = document.getElementById('navigation');
    var btn = document.getElementById("icon");

    if(toChange.style.display == 'block')
        toChange.style.display = 'none';
    else 
        toChange.style.display = 'block';

};


// Hamburger transfotm at click
$(document).ready(function() {
    $('#icon').click(function() {
        $('#icon').toggleClass('active');
    })
});






















