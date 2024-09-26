if (document.readyState !== "loading") {
  console.log("Doc rdy");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Doc rdy soon");
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    console.log("Hei");
    //lista2.innerHTML = lista2.innerHTML + `<li>tassa</li>`;
  });
}

/*function addComment() {
  alert("Hello");
}

addComment();

function addComment(){
  lista.innerHTML = `
    <li><li>`;
}
*/
