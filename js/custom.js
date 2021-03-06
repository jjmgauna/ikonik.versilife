function gotoSurvey() {
    window.location.href = "survey.html";
}

function gotoScheduleACall() {
    window.location.href = "#";
}

function gotoHome() {
    window.location.href = "index.html";
}

function next1() {
    var option1_1 = document.getElementsByClassName("optionf1")[0];
    var option1_2 = document.getElementsByClassName("optionf1")[1];
    var option1_3 = document.getElementsByClassName("optionf1")[2];
    if (!option1_1.checked && !option1_2.checked && !option1_3.checked) {
        swal("Please select any option");
    } else {


        document.getElementsByClassName("part1Form")[0].style.display = "none";
        document.getElementsByClassName("part2Form")[0].style.display = "block";
    }
}

function next2() {
    var option2_1 = document.getElementsByClassName("optionf2")[0];
    var option2_2 = document.getElementsByClassName("optionf2")[1];
    var option2_3 = document.getElementsByClassName("optionf2")[2];
    var option2_4 = document.getElementsByClassName("optionf2")[3];
    if (!option2_1.checked && !option2_2.checked && !option2_3.checked && !option2_4.checked) {
        swal("Please select any option");
    } else {
        document.getElementsByClassName("part2Form")[0].style.display = "none";
        document.getElementsByClassName("part3Form")[0].style.display = "block";
    }
}

function prev1() {
    document.getElementsByClassName("part2Form")[0].style.display = "none";
    document.getElementsByClassName("part1Form")[0].style.display = "block";
}

function prev2() {
    document.getElementsByClassName("part3Form")[0].style.display = "none";
    document.getElementsByClassName("part2Form")[0].style.display = "block";
}

function prev3() {
    document.getElementsByClassName("part4Form")[0].style.display = "none";
    document.getElementsByClassName("part3Form")[0].style.display = "block";
}

function next3() {
    var option3_1 = document.getElementsByClassName("optionf3")[0];
    var option3_2 = document.getElementsByClassName("optionf3")[1];
    var option3_3 = document.getElementsByClassName("optionf3")[2];
    var option3_4 = document.getElementsByClassName("optionf3")[3];
    var option3_5 = document.getElementsByClassName("optionf3")[4];
    if (!option3_1.checked && !option3_2.checked && !option3_3.checked && !option3_4.checked && !option3_5.checked) {
        swal("Please select any option");
    } else {
        document.getElementsByClassName("part3Form")[0].style.display = "none";
        document.getElementsByClassName("part4Form")[0].style.display = "block";
    }
}

function submitForm() {
    var input_1 = document.getElementsByClassName("inputForm")[0];
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
    }


}