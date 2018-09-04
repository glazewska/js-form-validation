(function() {

    console.log('Walidujemy form :)');

    const form = document.getElementById("form");
    const agreement1 = form.querySelector("#agreement-1");
    const agreement2 = form.querySelector("#agreement-2");
    const agreement3 = form.querySelector("#agreement-3");

    const usernameRegex = new RegExp(/[a-z]+/g);
    const pinRegex = new RegExp(/^[0-9]{1,8}$/g);
    const amountRegex = new RegExp(/^[1-9][0-9]?$|^100$/g);

    function validateUsername() {
        const usernameValue = username.value;
        const usernameTest = usernameRegex.test(usernameValue);

        if (usernameValue === "") {
            addErrorMessage("username", "Musisz wpisać nazwę użytkownika");
        } else if (usernameTest) {
            addSuccessMessage("username", "Świetna nazwa użytkownika");
        } else {
            addErrorMessage("username", "Niepoprawna nazwa użytkownika. Spróbuj ponownie");
        }
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

    function addSuccessMessage(fieldName, messageText) {
        const emptyDiv = document.createElement("div");
        const fieldElement = form.querySelector(`[name='${fieldName}']`);
        const emptyDivText = document.createTextNode(messageText);

        fieldElement.classList.add("is-valid");
        fieldElement.parentNode.appendChild(emptyDiv);
        emptyDiv.appendChild(emptyDivText);
        emptyDiv.classList.add("valid-feedback");
    }

    function addErrorMessage(fieldName, messageText) {
        const emptyDiv = document.createElement("div");
        const fieldElement = form.querySelector(`[name='${fieldName}']`);
        const emptyDivText = document.createTextNode(messageText);

        fieldElement.classList.add("is-invalid");
        fieldElement.parentNode.appendChild(emptyDiv);
        emptyDiv.appendChild(emptyDivText);
        emptyDiv.classList.add("invalid-feedback");
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateUsername();
        validateEmail();
        validatePin();
        validateAmout();
        validateRequiredCheckbox1();
        validateRequiredCheckbox2();
    })
})();
