/// <reference path='../ts/JQuery.d.ts' />
$(function () {
    $("#mail_address1").on("change", function () {
        alert($("#mail_address1").val());
    });
});
