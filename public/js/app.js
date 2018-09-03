(function() {

    console.log('Walidujemy form :)');

    const form = document.getElementById("form");
    const username = form.querySelector("#username");
    const email = form.querySelector("#email");
    const pin = form.querySelector("#pin");
    const amount = form.querySelector("#amount");
    const agreement1 = form.querySelector("#agreement-1");
    const agreement2 = form.querySelector("#agreement-2");
    const agreement3 = form.querySelector("#agreement-3");
    const submit = form.querySelector("button");

    const usernameRegex = new RegExp(/[a-z]+/g);
    const pinRegex = new RegExp(/^[0-9]{1,8}$/g);
    const amountRegex = new RegExp(/^[1-9][0-9]?$|^100$/g);

    function validateUsername() {
        const usernameValue = username.value;
        const usernameTest = usernameRegex.test(usernameValue);
        const emptyDiv = document.createElement("div");

        if (usernameValue === "") {
            username.classList.add("is-invalid");
            document.querySelector("[data-name='username']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("nie może być puste");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        } else if (usernameTest) {
            username.classList.add("is-valid");
            document.querySelector("[data-name='username']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("pięknie");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("valid-feedback");
        } else {
            username.classList.add("is-invalid");
            document.querySelector("[data-name='username']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("spróbuj ponownie");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        }
    }

    function validateEmail() {
        const emailValue = email.value;
        const emptyDiv = document.createElement("div");

        if (email.validity.valid) {
            if (email.value !== "") {
                email.classList.add("is-valid");
                document.querySelector("[data-name='email']").appendChild(emptyDiv);
                const emptyDivText = document.createTextNode("pięknie");
                const emptyFinal = emptyDiv.appendChild(emptyDivText);
                emptyDiv.classList.add("valid-feedback");
            }
        } else {
            email.classList.add("is-invalid");
            document.querySelector("[data-name='email']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("zły format");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        }
    }

    function validatePin() {
        const pinValue = pin.value;
        const pinTest = pinRegex.test(pinValue);
        const emptyDiv = document.createElement("div");

        if (pinValue !== "") {
            if (pinTest) {
                pin.classList.add("is-valid");
                document.querySelector("[data-name='pin']").appendChild(emptyDiv);
                const emptyDivText = document.createTextNode("pięknie");
                const emptyFinal = emptyDiv.appendChild(emptyDivText);
                emptyDiv.classList.add("valid-feedback");
                console.log("ok");
            } else {
                pin.classList.add("is-invalid");
                document.querySelector("[data-name='pin']").appendChild(emptyDiv);
                const emptyDivText = document.createTextNode("spróbuj ponownie");
                const emptyFinal = emptyDiv.appendChild(emptyDivText);
                emptyDiv.classList.add("invalid-feedback");
                console.log("nieok");
            }
        }
    }

    function validateAmout() {
        const amountValue = amount.value;
        const amountTest = amountRegex.test(amountValue);
        const emptyDiv = document.createElement("div");

        if (amountValue === "") {
            amount.classList.add("is-invalid");
            document.querySelector("[data-name='amount']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("nie może być puste");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        } else if (amountTest) {
            amount.classList.add("is-valid");
            document.querySelector("[data-name='amount']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("pięknie");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("valid-feedback");
        } else {
            amount.classList.add("is-invalid");
            document.querySelector("[data-name='amount']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("spróbuj ponownie");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        }
    }

    function validateRequiredCheckbox1() {
        const check1Value = agreement1.checked;
        const emptyDiv = document.createElement("div");

        if (check1Value) {
            agreement1.classList.add("is-valid");
            document.querySelector("[data-name='check1']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("wszystko ok");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("valid-feedback");

        } else {
            agreement1.classList.add("is-invalid");
            document.querySelector("[data-name='check1']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("zaznacz zgodę");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        }
    }


    function validateRequiredCheckbox2() {
        const check2Value = agreement2.checked;
        const emptyDiv = document.createElement("div");

        if (check2Value) {
            agreement2.classList.add("is-valid");
            document.querySelector("[data-name='check2']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("wszystko ok");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("valid-feedback");

        } else {
            agreement2.classList.add("is-invalid");
            document.querySelector("[data-name='check2']").appendChild(emptyDiv);
            const emptyDivText = document.createTextNode("zaznacz zgodę");
            const emptyFinal = emptyDiv.appendChild(emptyDivText);
            emptyDiv.classList.add("invalid-feedback");
        }
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
