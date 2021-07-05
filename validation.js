console.log("hello")

function call() {
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let address = document.getElementById("address");
    let city = document.getElementById("City");
    // let state = document.getElementById("firstname");
    let zipCode = document.getElementById("zipcode");
    let eMail = document.getElementById("eMail");
    let creditCard = document.getElementById("creditCard");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let cvvCode = document.getElementById("cvvcode");

    if (firstName.value.length === 0) {
        let errorElement = document.getElementById("error")
        errorElement.innerHTML = "please enter you first name";
        firstName.focus();
        return false;
    }
    else if (firstName.value.length < 2 || /[\d,~,!,@,#,$,%,^,&,*,(,),<,>,?,.]/ig.test(firstName.value)) {

        let errorElement = document.getElementById("error")
        errorElement.innerHTML = "please enter you first name without digits or symbols";
        firstName.focus();
        return false;
    }
    else if (lastName.value.length === 0) {
        let errorElement = document.getElementById("error")
        errorElement.innerHTML = "please enter you last name";
        lastName.focus();
        return false;
    }
    else if (lastName.value.length <= 2 ||  /[\d,~,!,@,#,$,%,^,&,*,(,),<,>,?,.]/ig.test(firstName.value)) {
        console.log(lastName);
        let errorElement = document.getElementById("error")
        errorElement.innerHTML = "please enter you last name atleast 2 characters required without digits or symbols.";
        lastName.focus();
        return false;
    }


    else if (address.value.length === 0) {
        let errorElement = document.getElementById("error")
        errorElement.innerHTML = "please enter your address";
        address.focus();
        return false;
    }

    else if (address.value.length <= 5) {
        let errorElement = document.getElementById("error")
        errorElement.innerHTML = "please enter your address atleast 5 characters expected";
        address.focus();
        return false;
    }

    else if (city.value.length == 0) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter city name";
        city.focus();
        return false;
    }
    else if (city.value.length < 3) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter city name atleast 3 characters expected";
        city.focus();
        return false;
    }

    else if (/[a-zA-Z]/.test(zipCode.value) === true) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid postal number expected";
        zipCode.focus();
        return false;
    }

    else if (zipCode.value.length != 6) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid postal only 6 digit expected";
        zipCode.focus();
        return false;
    }
    else if (eMail.value.length === 0) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter your email id";
        eMail.focus();
        return false;
    }
    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value) === false) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid email id";
        eMail.focus();
        return false;
    }
    else if (creditCard.value.length === 0) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter your credit card number";
        creditCard.focus();
        return false;
    }
    else if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(creditCard.value)) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid credit card number";
        creditCard.focus();
        return false;
    }
    else if (month.value.length === 0) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a month";
        month.focus();
        return false;
    }
    else if (/^[0][1-9]|[1][0-2]$/.test(month.value) === false) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid month";
        month.focus();
        return false;
    }
    else if (year.value.length === 0) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a year";
        year.focus();
        return false;
    }
    else if (/^[1-9][0-9][0-9][0-9]$/.test(year.value) === false) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid year";
        year.focus();
        return false;
    }

    else if (cvvCode.value.length === 0) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter your CVV code";
        cvvCode.focus();
        return false;
    }
    else if (/^[0-9][0-9][0-9]$/.test(cvvCode.value) === false) {
        let errorElement = document.getElementById("error");
        errorElement.innerHTML = "please enter a valid CVV code";
        cvvCode.focus();

    }
    else {
        document.getElementById("error") = "";
        return false;
    }
    return false;
}