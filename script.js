'use strict';

const birthDate = document.getElementById('birth');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',() => {
    const now = new Date().getFullYear();
    let years = new Date(birthDate.value).getFullYear();
    result.textContent = `Your age is ${now-years} years old`
})