let menuVisble = false;

function mostrarOcultarMenu(){
    if(menuVisble){
        document.getElementById("nav").classList ="";
        menuVisble = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisble = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisble = false;
}

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades  = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("SOPORTE TECNICO TI");
        habilidades[1].classList.add("MANTENIMIENTO CORRECTIVO PREVENTIVO EQUIPOS");
        habilidades[2].classList.add("SOPORTE TECNICO REMOTO");
        habilidades[3].classList.add("COMUNICACION ACERTIVA");
        habilidades[4].classList.add("CUMPLIMIENTO DE CRONOGRAMAS");
        habilidades[5].classList.add("ENTREGA DE INFORMES");
        habilidades[6].classList.add("RETROALIMENTACION Y MEJORA CONTINUA");
    }


}

window.onscroll = function(){
    efectoHabilidades();
}