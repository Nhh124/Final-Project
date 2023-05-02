'use strict';

// Selecting elements
const information = document.querySelector('.info');
const inputEmail = document.querySelector('.input-email');
const btnSubmit = document.querySelector('.submit-button');
const email = document.querySelector('#email');
const expContent = document.getElementById('experience--content');
const activityContent = document.getElementById('activity--content');
const educationContent = document.getElementById('education--content');
const hobbyContent = document.getElementById('hobby--content');
const languageContent = document.getElementById('language--content');
const skillsContent = document.querySelector('#skills--content');
const expbtn = document.querySelector('.button-view-exp');
const edubtn = document.querySelector('.button-view-edu');
const hobbybtn = document.querySelector('.button-view-hobby');
const skillsbtn = document.querySelector('.button-view-skills');
const langbtn = document.querySelector('.button-view-lang');
const actibtn = document.querySelector('.button-view-acti');

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

information.classList.add('hidden');
expContent.classList.add('hidden');
activityContent.classList.add('hidden');
educationContent.classList.add('hidden');
hobbyContent.classList.add('hidden');
languageContent.classList.add('hidden');
skillsContent.classList.add('hidden');

btnSubmit.addEventListener('click', function () {

    if (email.value.match(regex)) {
        information.classList.remove('hidden');
        inputEmail.classList.add('hidden');
    }
    else {
        alert("Vui lòng điền đúng email");
    }

});

function view(btn, id) {
    const content = btn.textContent;
    if (content === "View more🔻") {

        btn.textContent = "View less🔺";
        id.classList.remove('hidden')
    } else {
        id.classList.add('hidden');
        btn.textContent = "View more🔻";
    }
}

expbtn.addEventListener('click', function () {
    view(expbtn, expContent);
});

edubtn.addEventListener('click', function () {
    view(edubtn, educationContent);
});

hobbybtn.addEventListener('click', function () {
    view(hobbybtn, hobbyContent);
});

skillsbtn.addEventListener('click', function () {
    view(skillsbtn, skillsContent);
});

langbtn.addEventListener('click', function () {
    view(langbtn, languageContent);
});

actibtn.addEventListener('click', function () {
    view(actibtn, activityContent);
});

