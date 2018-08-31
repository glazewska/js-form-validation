(function () {

  console.log('Walidujemy form :)');

  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const pin = document.querySelector("#pin");
  const amount = document.querySelector("#amount");
  const agreement1 = document.querySelector("#agreement-1");
  const agreement2 = document.querySelector("#agreement-2");
  const agreement3 = document.querySelector("#agreement-3");
  const submit = document.querySelector("button");

  const emptyDiv = document.createElement("div");
  const emptyDivText = document.createTextNode("nie może być puste");
  const wrongDivText = document.createTextNode("małe literki bez spacji");
  const goodDivText = document.createTextNode("wszystko cudownie");
  const emptyFinal = emptyDiv.appendChild(emptyDivText);
  const wrongFinal = emptyDiv.appendChild(wrongDivText);
  const goodFinal = emptyDiv.appendChild(goodDivText);

  const usernameRegex = new RegExp(/[a-z]+/g);

  function validateForm() {
    const usernameValue = username.value;
    const usernameTest = usernameRegex.test(usernameValue);

    if (username.value === "") {
      username.classList.add("is-invalid");
      // document.querySelector("[data-name='username']").appendChild(emptyFinal);
      document.querySelector("[data-name='username']").appendChild(emptyFinal);
    } else if (usernameTest) {
      username.classList.add("is-valid");
      document.querySelector("[data-name='username']").appendChild(goodFinal);
      console.log("brawo");
    } else {
      console.log("niebrawo");
      username.classList.add("is-invalid");
      document.querySelector("[data-name='username']").appendChild(wrongFinal);
    }
  }

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
  })
})();

