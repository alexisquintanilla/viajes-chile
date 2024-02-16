const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
    /*VARIABLES */
    let btnEnviarMensaje = $("#enviarMensaje");


    /*FUNCIONES */
    btnEnviarMensaje.click(function () {
        alert("El mensaje fue enviado correctamente...");
    });

});
// https://www.youtube.com/watch?v=ZeSkF7Jb2PU&ab_channel=Bluuweb  funcion creada por Ignacio
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-nav");
    } else {
        $("#menu").removeClass("bg-nav");
    }
});