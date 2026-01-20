/*
  Hi kids! This tiny script listens for a button click
  and swaps in a cheerful message.
*/

const cheerButton = document.getElementById("cheer-button");
const cheerMessage = document.getElementById("cheer-message");

cheerButton.addEventListener("click", () => {
  cheerMessage.textContent = "Hooray! You are as awesome as a happy sloth!";
});
