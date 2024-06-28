const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente");
})

$("h4").on("dblclick", function ( ){
    $(this).css("color", "red");

        // Eliminar la selección de texto
        if (window.getSelection) {
            var selection = window.getSelection();
            selection.removeAllRanges();
        }
})

$(".card-title").click(function (){
    $(".card-text").toggle();
})