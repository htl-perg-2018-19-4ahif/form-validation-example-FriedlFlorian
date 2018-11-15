 $(document).on("load change", function () {

let valueFirstName = $("#firstName").val();
let valueLastName = $("#lastName").val();
let valueEmail = $("#email").val();
let valueNewsletter = $("#newsletter").prop('checked')
let valueMCS = $("#mediaChannelSelect").val();

if(valueFirstName == ""){
    $("#firstNameMandatory").show();
}else{
    $("#firstNameMandatory").hide();
}

if(valueLastName == ""){
    $("#lastNameMandatory").show();
}else{
    $("#lastNameMandatory").hide();
}

if(valueNewsletter = false){
    $("#email").hide();
}else{
    $("#email").show();
    if(valueEmail == ""){
        $("#emailMandatory").show();
    }else{
        $("emailMandatory").hide();
    }
}


if((valueFirstName == "" || valueLastName == "") && (valueNewsletter = true && valueEmail == "")){
    $("#submitButton").hide();
}else{
    $("#submitButton").show();
}

if( valueMCS == "Other"){
    $("#otherMediaChannel").show();
}else{
    $("#otherMediaChannel").hide();
}
});


