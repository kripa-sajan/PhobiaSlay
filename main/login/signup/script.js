const form = document.querySelector("form");
const fNameField = form.querySelector(".first-name");
const fNameInput = fNameField.querySelector("input");
const lNameField = form.querySelector(".last-name");
const lNameInput = lNameField.querySelector("input");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (fNameInput.value == "") ? fNameField.classList.add("shake", "error") : checkFirstName();
    (lNameInput.value == "") ? lNameField.classList.add("shake", "error") : checkLastName();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(() => {
        fNameField.classList.remove("shake");
        lNameField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    fNameInput.onkeyup = () => { checkFirstName(); }
    lNameInput.onkeyup = () => { checkLastName(); }
    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkFirstName() {
        if (fNameInput.value == "") {
            fNameField.classList.add("error");
            fNameField.classList.remove("valid");
        } else {
            fNameField.classList.remove("error");
            fNameField.classList.add("valid");
        }
    }

    function checkLastName() {
        if (lNameInput.value == "") {
            lNameField.classList.add("error");
            lNameField.classList.remove("valid");
        } else {
            lNameField.classList.remove("error");
            lNameField.classList.add("valid");
        }
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!fNameField.classList.contains("error") && !lNameField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}
