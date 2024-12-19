"use strict";

//^ ده جزء اضافي من عندي
let quotes = [
   `Your work is going to fill a large part of your life,
   and the only way to be truly satisfied is to do what you
   believe is great work. And the only way to do great work
   is to love what you do. If you haven't found it yet, keep looking.
   Don't settle. As with all matters of the heart, you'll know when you find it.`,

   `I am a collection of thoughts and memories and likes and dislikes.
   I am the things that have happened to me and the sum of everything
   I've ever done. I am the clothes I wear on my back. I am every place and every
   person and every object I have ever come across. I am a bag of bones stuck
   to a very large rock spinning a thousand miles an hour.`,

   `If you're entering anything where there's an existing marketplace,
   against large, entrenched competitors, then your product or service
   needs to be much better than theirs. It can't be a little bit better,
   because then you put yourself in the shoes of the consumer...
   you're always going to buy the trusted brand unless there's a big difference.`,
];

const modal = document.querySelector(".modal");
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//^ 😂 لازم نتأكد بردو ان كل حاجة تمام
console.log(modal);
console.log(overlay);
console.log(btnCloseModal);
console.log(btnsOpenModal);

const openModal = function () {
   modal.classList.remove("hidden");
   overlay.classList.remove("hidden");
};

const closeModal = function () {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
   btnsOpenModal[i].addEventListener("click", function () {
      openModal();
      content.textContent = quotes[i];
   });
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
   if (modal.classList.contains("hidden") === false && e.key === "Escape") {
      closeModal();
   }
});
