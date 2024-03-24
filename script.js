const h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerHTML = "WEB DEVELOPER TASK";
document.body.appendChild(h1);

const p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML = "DOM Manipulation with Forms";
document.body.appendChild(p);

const myForm = document.createElement("form");
myForm.setAttribute("id", "survey-form");
myForm.setAttribute("class", "survey-form");
document.body.appendChild(myForm);

const firstNameDiv = document.createElement("div");
firstNameDiv.setAttribute("class", "form-group");
myForm.appendChild(firstNameDiv);

const firstName = document.createElement("input");
firstName.setAttribute("id", "first-name");
firstName.setAttribute("class", "form-group");
firstName.setAttribute("type", "text");
firstName.setAttribute("placeholder", "first name");
firstName.setAttribute("required", "");
firstNameDiv.appendChild(firstName);

const lastNameDiv = document.createElement("div");
lastNameDiv.setAttribute("class", "form-group");
myForm.appendChild(lastNameDiv);

const lastName = document.createElement("input");
lastName.setAttribute("id", "last-name");
lastName.setAttribute("class", "form-group");
lastName.setAttribute("type", "text");
lastName.setAttribute("required", "");
lastName.setAttribute("placeholder", "last name");
lastNameDiv.appendChild(lastName);

const emailDiv = document.createElement("div");
emailDiv.setAttribute("class", "form-group");
myForm.appendChild(emailDiv);

const email = document.createElement("input");
email.setAttribute("id", "email");
email.setAttribute("class", "form-group");
email.setAttribute("type", "email");
email.setAttribute("required", "");
email.setAttribute("placeholder", "email");
emailDiv.appendChild(email);

const labelGroup = document.createElement("div");
labelGroup.setAttribute("class", "form-group");
myForm.appendChild(labelGroup);

const NameLabel = document.createElement("label");
NameLabel.setAttribute("id", "name-label");
NameLabel.innerHTML = "Name";
labelGroup.appendChild(NameLabel);

const emailLabel = document.createElement("label");
emailLabel.setAttribute("id", "email-label");
emailLabel.innerHTML = "Email";
labelGroup.appendChild(emailLabel);

const numberLabel = document.createElement("label");
numberLabel.setAttribute("id", "number-label");
numberLabel.innerHTML = "Number";

labelGroup.appendChild(numberLabel);

const fieldset1 = document.createElement("fieldset");
fieldset1.setAttribute("id", "group1");
myForm.appendChild(fieldset1);

const groupOneRadio1 = document.createElement("input");
groupOneRadio1.setAttribute("type", "radio");
groupOneRadio1.setAttribute("name", "group1");
groupOneRadio1.setAttribute("value", "value1");
fieldset1.appendChild(groupOneRadio1);

const groupOneRadio2 = document.createElement("input");
groupOneRadio2.setAttribute("type", "radio");
groupOneRadio2.setAttribute("name", "group1");
groupOneRadio2.setAttribute("value", "value2");
fieldset1.appendChild(groupOneRadio2);

const fieldset2 = document.createElement("fieldset");
fieldset1.setAttribute("id", "group2");
myForm.appendChild(fieldset2);

const groupTwoRadio1 = document.createElement("input");
groupTwoRadio1.setAttribute("type", "radio");
groupTwoRadio1.setAttribute("name", "group2");
groupTwoRadio1.setAttribute("value", "value1");
fieldset2.appendChild(groupTwoRadio1);

const groupTwoRadio2 = document.createElement("input");
groupTwoRadio2.setAttribute("type", "radio");
groupTwoRadio2.setAttribute("name", "group2");
groupTwoRadio2.setAttribute("value", "value2");
fieldset2.appendChild(groupTwoRadio2);

const textareaDiv = document.createElement("div");
textareaDiv.setAttribute("class", "form-group");
myForm.appendChild(textareaDiv);

const textarea = document.createElement("textarea");
textarea.setAttribute("id", "comments");
textareaDiv.appendChild(textarea);

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.classList.add("btn", "btn-primary");
submitBtn.setAttribute("id", "submit");

myForm.appendChild(submitBtn);
