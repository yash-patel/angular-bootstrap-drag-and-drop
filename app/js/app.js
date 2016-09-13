$(document).ready(function () {

    $(".mailBody").sortable({
        appendTo: document.body
    });

    $(".draggable").draggable({
        containment: ".body-container",
        appendTo: "body",
        revert: true,
        helper: "clone",
        connectToSortable: ".mailBody",
        cursor: "crosshair",
        opacity: 0.7

    });


})