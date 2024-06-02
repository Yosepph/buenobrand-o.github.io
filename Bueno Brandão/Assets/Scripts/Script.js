document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});


//Automação Carrosel
let count = 1;
document.getElementById("radio1").checked = true;

setInterval ( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if (count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
//Fim Carrosel!