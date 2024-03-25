const textarea = document.querySelector("#textArea");
const text = document.querySelector(".text");
const maxChars = 40;

function updateCharacterCount() {
  let inputText = textarea.value.slice(0, maxChars); // Limit input to maxChars length
  textarea.value = inputText; // Update the textarea value

  const charCount = inputText.length;
  const charsLeft = maxChars - charCount;

  text.innerHTML = `<p>You have written <span class='text-success'>${charCount}</span> words and <span class='text-danger'>${charsLeft}</span> characters remaining</p>`;
}

textarea.addEventListener("input", updateCharacterCount);
