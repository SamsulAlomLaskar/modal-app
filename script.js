"use strict";
//! Gettting all the class names for implementing the functionality

const modal = document.querySelector(".modal");
const layer = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".show-modal");

//! If there's different modal needs to be displayed on clicking of different buttions
/*
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");

const closeModalBtn1 = document.querySelector(".close-modal1");
const closeModalBtn2 = document.querySelector(".close-modal2"); 

const openModal1 = () => {
  modal1.classList.remove("hidden");
  layer.classList.remove("hidden");
};
const openModal2 = () => {
  modal2.classList.remove("hidden");
  layer.classList.remove("hidden");
};

const closeModal1 = () => {
  modal1.classList.add("hidden");
  layer.classList.add("hidden");
};
const closeModal2 = () => {
  modal2.classList.add("hidden");
  layer.classList.add("hidden");
};

for (let i = 0; i < openModalBtn.length; i++) {
  if (openModalBtn[i].textContent === "Modal 1️⃣") {
    openModalBtn[i].addEventListener("click", openModal1);
  } else if (openModalBtn[i].textContent === "Modal 2️⃣") {
    console.log(openModalBtn[i].textContent);
    openModalBtn[i].addEventListener("click", openModal2);
  } else openModalBtn[i].addEventListener("click", openModal);
}

closeModalBtn1.addEventListener("click", closeModal1);
closeModalBtn2.addEventListener("click", closeModal2); 

*/
//! function to open the modal

const openModal = () => {
  modal.classList.remove("hidden");
  layer.classList.remove("hidden");
};

//! function to close the modal

const closeModal = () => {
  modal.classList.add("hidden");
  layer.classList.add("hidden");
};

//! Looping all the buttons & adding the functionality to it

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", openModal);
}

//! closing the modal on click of close button

closeModalBtn.addEventListener("click", closeModal);

//! removing the layer on closing of modal

layer.addEventListener("click", closeModal);

//! Closing modal on click of esc key

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
