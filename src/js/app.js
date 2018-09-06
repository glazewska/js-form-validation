(function() {

    console.log('Walidujemy form :)');

    //     const formValidationConfig = {
    //     "userName": [{
    //         "name": "required",
    //         "text": "Pole musi być wypełnione"
    //     }, {
    //         "name": "minLength",
    //         "text": "Minimalna długość to: "
    //         "value": 4
    //     }],
    //     "pin": [{
    //         "name": "minLength",
    //         "text": "Minimalna długość to: ",
    //         "value": 5
    //     }, {
    //         "name": "maxLength",
    //         "text": "Maxymalna długość to: ",
    //         "value": 16
    //     }]
    // }

    const form = document.getElementById("form");
    const agreement1 = form.querySelector("#agreement-1");
    const agreement2 = form.querySelector("#agreement-2");
    const agreement3 = form.querySelector("#agreement-3");

    const usernameRegex = new RegExp(/[a-z]+/);
    const pinRegex = new RegExp(/^[0-9]{1,8}$/);
    const amountRegex = new RegExp(/^[1-9][0-9]?$|^100$/);

    // var floatValue = parseFloat(toFloat);
    //
    // if (isNaN(floatValue)) {
    //     notFloat();
    // } else {
    //     isFloat();
    // }

    //zły regex - przyjmuje spacje i cyfry
    function validateUsername() {
        const usernameValue = username.value;
        const usernameTest = usernameRegex.test(usernameValue);

        if (usernameValue === "") {
            addErrorMessage("username", "Musisz wpisać nazwę użytkownika");
        } else if (usernameTest === false) {
            addErrorMessage("username", "Niepoprawna nazwa użytkownika. Spróbuj ponownie");
        } else {
            addSuccessMessage("username", "Świetna nazwa użytkownika");
        }
        console.log(usernameTest);
    }

    function validateEmail() {
        const emailValue = email.value;

        if (email.validity.valid) {
            if (email.value !== "") {
                addSuccessMessage("email", "Piękny e-mail");
            }
        } else {
            addErrorMessage("email", "Niepoprawny e-mail. Spróbuj ponownie");
        }
    }

    function validatePin() {
        const pinValue = pin.value;
        const pinTest = pinRegex.test(pinValue);

        if (pinValue !== "") {
            if (pinTest) {
                addSuccessMessage("pin", "Wszystko się zgadza");
            } else {
                addErrorMessage("pin", "Niepoprawny PIN. Spróbuj ponownie");
            }
        }
    }

    function validateAmout() {
        const amountValue = amount.value;
        const amountTest = amountRegex.test(amountValue);

        if (amountValue === "") {
            addErrorMessage("amount", "Musisz wpisać kwotę");
        } else if (amountTest) {
            addSuccessMessage("amount", "Bardzo piękna kwota");
        } else {
            addErrorMessage("amount", "Niepoprawna kwota. Spróbuj ponownie");
        }
    }

    //zrobić jedną funkcję do walidacji obu checkboxów z podanym argumentem, wg którego się sprawdza konkretny

    function validateRequiredCheckbox1() {
        const check1Value = agreement1.checked;

        if (check1Value) {
            addSuccessMessage("agreement-1", "Wszystko przepięknie");
        } else {
            addErrorMessage("agreement-1", "Musisz zaznaczyć tę zgodę");
        }
    }


    function validateRequiredCheckbox2() {
        const check2Value = agreement2.checked;

        if (check2Value) {
            addSuccessMessage("agreement-2", "Wszystko cudownie");
        } else {
            addErrorMessage("agreement-2", "Musisz zaznaczyć tę zgodę");
        }
    }

    //usuwanie poprzednich komunikatów

    function addSuccessMessage(fieldName, messageText) {
        const emptyDiv = document.createElement("div");
        const fieldElement = form.querySelector(`[name='${fieldName}']`);
        const emptyDivText = document.createTextNode(messageText);
        const invalidDiv = document.querySelector("invalid-feedback");

        // fieldElement.classList.add("is-valid");
        // fieldElement.parentNode.appendChild(emptyDiv);
        // emptyDiv.appendChild(emptyDivText);
        // emptyDiv.classList.add("valid-feedback");

        if (!fieldElement.classList.contains("is-valid") && !fieldElement.classList.contains("is-invalid")) {
            console.log("nie ma klasy");
            fieldElement.classList.add("is-valid");
            fieldElement.parentNode.appendChild(emptyDiv);
            emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("valid-feedback");
        } else if (fieldElement.classList.contains("is-invalid")) {
            console.log("ma inna klasę");
            fieldElement.classList.remove("is-invalid");
            fieldElement.classList.add("is-valid");
            invalidDiv.parentNode.removeChild(invalidDiv);
        }

    }

    function addErrorMessage(fieldName, messageText) {
        const emptyDiv = document.createElement("div");
        const fieldElement = form.querySelector(`[name='${fieldName}']`);
        const emptyDivText = document.createTextNode(messageText);

        // fieldElement.classList.add("is-invalid");
        // fieldElement.parentNode.appendChild(emptyDiv);
        // emptyDiv.appendChild(emptyDivText);
        // emptyDiv.classList.add("invalid-feedback");

        if (!fieldElement.classList.contains("is-valid") && !fieldElement.classList.contains("is-invalid")) {
            fieldElement.classList.add("is-invalid");
            fieldElement.parentNode.appendChild(emptyDiv);
            emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        } else if (fieldElement.classList.contains("is-valid")) {
            fieldElement.classList.remove("is-valid").add("is-invalid");
            fieldElement.parentNode.removeChild(emptyDiv);
            emptyDiv.classList.remove("valid-feedback").add("invalid-feedback");
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(username.value);
        validateUsername();
        validateEmail();
        validatePin();
        validateAmout();
        validateRequiredCheckbox1();
        validateRequiredCheckbox2();
    })
})();
