const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see yaa!! ";
  gif.src = "second.gif";

  // Hide buttons after clicking 'Yes'
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Show 'Thank You!' message after a delay
  setTimeout(() => {
    question.innerHTML = "Thank You!";
    gif.src = "second.gif";
  }, 1000);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
