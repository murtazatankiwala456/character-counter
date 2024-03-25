const textarea = document.querySelector("#textArea"); //hold textarea dom
const text = document.querySelector(".text"); // hold paragraph dom
const maxChars = 40; //hold maxChar in var

// create function to be called while input is noticed in textarea
function updateCharacterCount() {
  let inputText = textarea.value.slice(0, maxChars); // Limit input to maxChars length
  textarea.value = inputText; // hold that maxChars in textarea

  const charCount = inputText.length; //calculate texarea lenght and hold it in var
  const charsLeft = maxChars - charCount; // subracts maxChars with total length

  text.innerHTML = `<p>You have written <span class='text-success'>${charCount}</span> words and <span class='text-danger'>${charsLeft}</span> characters remaining</p>`; // render it on paragraph
}

textarea.addEventListener("input", updateCharacterCount); // call the function while input is noticed in textarea
