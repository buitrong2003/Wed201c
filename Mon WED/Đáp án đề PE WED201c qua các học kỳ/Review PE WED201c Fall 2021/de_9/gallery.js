function upDate(img) {
    var imgLink = img.src;
    var alt = img.alt;
    document.getElementById('image').innerText = ''+alt+'';
    document.getElementById('image').style.backgroundImage = 'url('+imgLink+')';
}
function unDo(){
    document.getElementById('image').innerText = 'Hover over an image below to display here.';
    document.getElementById('image').style.backgroundImage = 'url()';
}
