const formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector(".feedback-form");
const emailInputEL = document.querySelector('input[type="email"]');
const msgInputEL = document.querySelector('textarea[name="message"]');

function feedbackData() {
    const data = localStorage.getItem('feedback-form-state')
    if (data) {
    const dataStorage = JSON.parse(data);
    emailInputEL.value = dataStorage.email;
    msgInputEL.value = dataStorage.message;
    };
};
feedbackData();

function saveData (event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
};
formEl.addEventListener("input", saveData);

function sendForm(event) {
    console.log(formData);
    event.preventDefault();
    event.currentTarget.reset();
    // formData.email = "";
    // formData.message = "";
    localStorage.removeItem('feedback-form-state')
};

formEl.addEventListener("submit", sendForm);

