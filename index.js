"use strict";

// Selectors
const heading = document.querySelector("h1");

const userName = location.search.split(/[?|&|=]/g)[2];

heading.innerHTML = `Welcome ${userName}`;
