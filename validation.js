console.log("hello");

function call() {
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let address = document.getElementById("address");
    let city = document.getElementById("City");
    let state = document.getElementById("State");
    let zipCode = document.getElementById("zipcode");
    let eMail = document.getElementById("eMail");
    let creditCard = document.getElementById("creditCard");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let cvvCode = document.getElementById("cvvcode");

    let status = false;

    if (firstName.value.length === 0) {
        let errorElement = document.getElementById("error1");

        errorElement.textContent = "please enter your first name";
        firstName.style.borderBottom = "2px solid red";
        firstName.focus();
        status = false;
        // return false;
    }
    else if (firstName.value.length != 0 && firstName.value.length < 2) {
        let errorElement = document.getElementById("error1");

        errorElement.innerHTML = "Please enter your first name atleast 2 characters required !!";
        firstName.style.borderBottom = "2px solid red";
        firstName.focus();
        status = false;

    }
    else if (/[\d,~,!,@,#,$,%,^,&,*,(,),<,>,?,.]/g.test(firstName.value)) {

        let errorElement = document.getElementById("error1");

        errorElement.innerHTML = "Please enter your first name without digits or symbols.";
        firstName.style.borderBottom = "2px solid red";
        firstName.focus();
        status = false;
        // return false;
    } else {
        firstName.style.borderBottom = "2px solid #C1F7D5"
        document.getElementById("error1").innerHTML = "";
        firstName.focus();
        status = true;

        // return true;
    }

    if (lastName.value.length === 0) {
        // document.getElementById("error1").innerText = "";

        let errorElement = document.getElementById("error2")

        lastName.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter your last name";
        lastName.focus();
        status = false;
        // return false;
    }
    else if (lastName.value.length != 0 && lastName.value.length < 2) {
        let errorElement = document.getElementById("error2");

        errorElement.innerHTML = "Please enter your last name atleast 2 characters required !!";
        lastName.style.borderBottom = "2px solid red";
        lastName.focus();
        status = false;
    }
    else if (/[\d,~,!,@,#,$,%,^,&,*,(,),<,>,?,.]/ig.test(firstName.value)) {

        let errorElement = document.getElementById("error2");

        lastName.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter you last name atleast 2 characters required without digits or symbols.";
        lastName.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error2").innerHTML = "";
        lastName.style.borderBottom = "2px solid #C1F7D5"
        lastName.focus();

        status = true;
        // return true;
    }

    if (address.value.length === 0) {
        let errorElement = document.getElementById("error3");

        address.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter your address";
        address.focus();
        status = false;
        // return false;
    }

    else if (address.value.length <= 5) {
        let errorElement = document.getElementById("error3");

        address.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter your address atleast 5 characters expected";
        address.focus();
        status = false;
        // return false;
    }

    else if (/[\[,\],\!,\@,\$,\%,\^,\&,\*,\(,\),\:,\;,\*,\+,\{,\},\;,\']/g.test(address.value) == true) {
        let errorElement = document.getElementById("error3")

        address.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter a valid address only (space,#,-,numbers) are are allowed";
        address.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error3").innerHTML = "";
        address.style.borderBottom = "2px solid #C1F7D5";
        address.focus();
        status = true;
        // return true;
    }



    if (city.value.length == 0) {
        let errorElement = document.getElementById("error4");

        city.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter city name";
        city.focus();
        status = false;
        // return false;
    }
    else if (/[0-9,\.,\[,\],\!,\@,\$,%,\^,\&,\*,\(,\),\:,\;,\*,\+,\{,\},\;,\']/g.test(city.value) == true) {
        let errorElement = document.getElementById("error4");

        city.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter city name instead of digits or symbols";
        city.focus();
        status = false;
        // return false;
    }
    else if (city.value.length < 3) {
        let errorElement = document.getElementById("error4");

        city.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please enter city name atleast 3 characters expected";
        city.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error4").innerHTML = "";
        city.style.borderBottom = "2px solid #C1F7D5";
        // return true;
        city.focus();
        status = true;
    }

    if (state.value == "") {
        let errorElement = document.getElementById("error11");

        state.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "Please select a State";
        state.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error11").innerHTML = "";
        state.style.borderBottom = "2px solid #C1F7D5";
        state.focus();
        status = true;
    }

    if (/[a-zA-Z]/.test(zipCode.value) === true) {
        let errorElement = document.getElementById("error5");

        zipCode.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a valid postal code 6 didgit number expected";
        zipCode.focus();
        status = false;
        // return false;
    }
    else if (zipCode.value.length != 6) {
        let errorElement = document.getElementById("error5");

        zipCode.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a valid postal only 6 digit expected";
        zipCode.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error5").innerHTML = "";
        zipCode.style.borderBottom = "2px solid #C1F7D5";
        zipCode.focus();
        status = true;
        // return true;
    }



    if (eMail.value.length === 0) {
        let errorElement = document.getElementById("error6");

        eMail.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter your email id";
        eMail.focus();
        status = false;
        // return false;
    }
    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value) === false) {
        let errorElement = document.getElementById("error6");

        errorElement.innerHTML = "please enter a valid email id";
        eMail.style.borderBottom = "2px solid red";
        eMail.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error6").innerHTML = "";
        eMail.style.borderBottom = "2px solid #C1F7D5";
        eMail.focus();
        status = true;
        // return true;
    }


    if (creditCard.value.length === 0) {
        let errorElement = document.getElementById("error7");

        creditCard.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter your credit card number";
        creditCard.focus();
        status = false;
        // return false;
    }
    else if (/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(creditCard.value) == false) {

        let errorElement = document.getElementById("error7");

        creditCard.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a valid credit card number with no (space,letters and \-)";
        creditCard.focus();
        status = false;
        // return false;
    }
    else if (/[a-z]/gi.test(creditCard.value) === false) {
        let errorElement = document.getElementById("error7");

        creditCard.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a credit card number and not words or symbols";
        creditCard.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error7").innerHTML = "";
        creditCard.style.borderBottom = "2px solid #C1F7D5";
        creditCard.focus();
        status = true;
        // return true;
    }


    if (month.value.length === 0) {
        let errorElement = document.getElementById("error8");

        month.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a month";
        month.focus();
        status = false;
        // return false;
    }
    else if (/^[0][1-9]|[1][0-2]$/.test(month.value) === false) {
        let errorElement = document.getElementById("error8");

        month.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a valid month like (\"02\" FOR FEBRUARY)";
        month.focus();
        status = false;
        // return false;
    } else {
        document.getElementById("error8").innerHTML = "";
        month.style.borderBottom = "2px solid #C1F7D5";
        month.focus();
        status = true;
        // return true;
    }


    if (year.value.length === 0) {
        let errorElement = document.getElementById("error9");

        year.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a year";
        year.focus();
        status = false;
        // return false;
    }
    else if (/^[1-9][0-9][0-9][0-9]$/.test(year.value) === false) {
        let errorElement = document.getElementById("error9");

        year.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a valid year like ( 2018 )";
        year.focus();
        status = false;
        // return false;
    }
    else {
        document.getElementById("error9").innerHTML = "";
        year.style.borderBottom = "2px solid #C1F7D5";
        year.focus();
        status = true;
        // return true;
    }


    if (cvvCode.value.length === 0) {
        let errorElement = document.getElementById("error10");

        cvvCode.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter your CVV code on the back of your card";
        cvvCode.focus();
        status = false;
        // return false;
    }
    else if (/^[0-9][0-9][0-9]$/.test(cvvCode.value) === false) {
        let errorElement = document.getElementById("error10");

        cvvCode.style.borderBottom = "2px solid red";
        errorElement.innerHTML = "please enter a valid CVV code 3 digit code";
        cvvCode.focus();
        status = false;
    }
    else {
        cvvCode.style.borderBottom = "2px solid #C1F7D5";
        document.getElementById("error10").innerHTML = "";
        // return true;
        cvvCode.focus();
        status = false;
    }

    return status;

}