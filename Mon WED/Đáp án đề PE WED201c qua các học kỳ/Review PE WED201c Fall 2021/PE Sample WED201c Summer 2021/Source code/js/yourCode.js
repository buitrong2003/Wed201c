function Show(){
    var show = document.getElementById("myform");
    var hide = document.getElementById("mytext");
    if (show.style.display == 'none'){
        show.style.display = 'block';
        hide.innerHTML = 'Hide register form';
    }
    else {
        show.style.display = 'none';
         hide.innerHTML = 'Show register form';
    }
}
function checkForm(){
    var name = document.getElementById("t1").value;
    var email = document.getElementById("t2").value;
    if(name == "" || email == ""){
        alert("two text fields are not empty  ");
    }

}