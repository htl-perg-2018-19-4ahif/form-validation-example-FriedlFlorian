$(document).on("load change", function () {
    var valueFirstName = $("#firstName").val();
    var valueLastName = $("#lastName").val();
    var valueEmail = $("#email").val();
    var valueNewsletter = $("#newsletter").prop('checked');
    var valueMCS = $("#mediaChannelSelect").val();
    if ((valueFirstName == "" || valueLastName == "") && (valueNewsletter = true && valueEmail == "")) {
        $("#submitButton").hide();
    }
    else {
        $("#submitButton").show();
    }
    if (valueMCS == "Other") {
        $("#otherMediaChannel").show();
    }
    else {
        $("#otherMediaChannel").hide();
    }
});
