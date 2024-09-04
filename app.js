let dots = "";

setInterval(function(){
    dots += ".";
    if(dots.length > 3){
        dots = ".";
    }
    document.title = "Waiting Response" + dots;
}, 1000);

//

function hasScrollBar(element){
    if(element.clientHeight < element.scrollHeight){
        let textHeight = parseInt(getComputedStyle(element).height) + 10    ;
        element.style = "height: " + (textHeight + 60).toString() + "px";
    }
}

//

function sendText(){
    const caixaEntrada = document.getElementById("caixaEntrada");
    const caixaSaida = document.getElementById("caixaSaida");

    caixaSaida.value = caixaEntrada.value;
}