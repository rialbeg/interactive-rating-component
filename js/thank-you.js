const selectedText = document.getElementById("selected-text");

const id = localStorage.getItem("id");

selectedText.innerText = `You selected ${id} out of 5`;
