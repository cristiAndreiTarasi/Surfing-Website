

function toggleMenu() {
    var toChange = document.getElementById('navigation');
    var btn = document.getElementById("btn");

    if(toChange.style.display == 'none') {

        if(btn.style.display == "none" ) {
            toChange.style.display = "block";
        }else {
            toChange.style.display == "none";
        }
        toChange.style.display = 'block';
    }
    else 
        toChange.style.display = 'none';

};

























