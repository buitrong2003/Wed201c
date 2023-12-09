function zoomout(image){
   
    var pic = document.getElementById('frame');

    pic.style.backgroundImage = "url("+image.src+")";

}

function warning(){
   
    var name = document.getElementsByTagName("input")[0].value;
    var email = document.getElementsByTagName("input")[1].value;
    var content = document.getElementById("content").value;
    if (name =="" || email =="" || content ==""){
        alert("Please fill out all fields");
    }
    else {
        var c = confirm("Are you sure about your information?");
        if (c == true) 
            alert("Message sent");
        else
            location.reload();
    }
}