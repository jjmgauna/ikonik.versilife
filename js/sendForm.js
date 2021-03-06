function sendForm(tobaccoornicotine, coverageamount, beneficiary, firstName, lastName, email, telephone, age, genero) {
    /*var input_1 = document.getElementsByClassName("inputForm")[0];
    var input_2 = document.getElementsByClassName("inputForm")[1];
    var input_3 = document.getElementsByClassName("inputForm")[2];
    var input_4 = document.getElementsByClassName("inputForm")[3];
    var input_5 = document.getElementsByClassName("inputForm")[4];
    var optionMale = document.getElementsByClassName("genero")[0];
    var optionFemale = document.getElementsByClassName("genero")[1];
    var acceptCheckbox = document.getElementsByClassName("acceptCheckbox")[0];
    if (input_1.value == "" && input_2.value == "" && input_3.value == "" && input_4.value == "" && input_5.value == "") {
        swal("Please complete all fields");
    } else if (!optionMale.checked && !optionFemale.checked) {
        swal("Please select any option");
    } else if (!acceptCheckbox.checked) {
        swal("Please Accept our Terms and Conditions to continue");
    }*/
    var parametros = {
        "tobaccoornicotine": tobaccoornicotine,
        "coverageamount": coverageamount,
        "beneficiary": beneficiary,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "telephone": telephone,
        "age": age,
        "genero": genero

    };

    $.ajax({
        data: parametros,
        url: 'sendForm.php',
        type: 'post',
        beforeSend: function() {
            $("#result").html("Processing...");
        },
        success: function(response) {
            $("#result").html(response);
            $("#part4Form").hide();
            $("#finalForm").show();
        }
    });
}