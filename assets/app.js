const birthdateInput = document.querySelector("#birthdate");
const form = document.querySelector("#registration-form");
const successMessage = document.querySelector("#success-message");
const successSummary = document.querySelector("#success-summary");
const registerAnotherButton = document.querySelector("#register-another");

if (birthdateInput) {
    const today = new Date();
    birthdateInput.max = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-");
}

form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const memberName = document.querySelector("#name").value.trim();
    const status = document.querySelector("#status").selectedOptions[0].textContent;
    successSummary.textContent = `Details for ${memberName} were received with status ${status}. This demo does not save the submission.`;
    form.hidden = true;
    successMessage.hidden = false;
    successMessage.focus();
});

registerAnotherButton?.addEventListener("click", () => {
    form.reset();
    successMessage.hidden = true;
    form.hidden = false;
    form.elements.name.focus();
});
