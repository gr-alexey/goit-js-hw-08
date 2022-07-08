import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const textAreaRef = document.querySelector('.feedback-form textarea');
const STORAGEKEY = "feedback-form-state";
let formData = {};

formRef.addEventListener('submit', onFormSubmit);
textAreaRef.addEventListener('input', throttle(onTextAreaInput, 500));
formRef.addEventListener('input', throttle(savedData, 500));
populateForm();

 
function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGEKEY);
    formData = {};
}

function savedData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGEKEY,JSON.stringify(formData));
}

function onTextAreaInput(event) {
   let message = event.target.value;
    localStorage.setItem(STORAGEKEY,message);
}

function populateForm() {
    let savedInfo = JSON.parse(localStorage.getItem(STORAGEKEY));
    for (const key in savedInfo) {
      if (key) {
        formRef[key].value = savedInfo[key];
        formData = savedInfo;
      }
    }
  }
