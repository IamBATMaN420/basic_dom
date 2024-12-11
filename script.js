// example-1
document.getElementById("change-text").addEventListener("click", function () {
  document.getElementById("para-1").textContent = "You have done it!!!";
});

// example-2
document.getElementById("change-button").addEventListener("click", function () {
  document.getElementById("list").firstElementChild.classList.add("highlight");
});
// classlist is used when we have to add remove or perform anything. that's why we have to use that.

// example-3
document.getElementById("change").addEventListener("click", function () {
  document.getElementById("biriyani").textContent = "MOMO";
});

//example-4 :->
document.getElementById("center-button").addEventListener("click", function () {
  let newItem = document.createElement("li");
  // to make it
  newItem.textContent = "soups!";
  // add the text content
  document.getElementById("tasklist").appendChild(newItem);
  // select the tastlist and appendchild means make a child in li group and add new item
});

//example-5->
document.getElementById("delete").addEventListener("click", function () {
  let delete_button = document.getElementById("del-list");
  delete_button.lastElementChild.remove();
});

//example-6 :->
const list = document.getElementById("myList");

list.addEventListener("click", function (event) {
  // Check if the clicked element is a list item
  if (event.target && event.target.nodeName === "LI") {
    alert("You clicked on" + " " + event.target.textContent);
  }
});

//example:-> 7
document
  .getElementById("feedback_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("input_feild").value;
    document.getElementById(
      "feedback_rep"
    ).textContent = `your feedback is ${feedback}  `;
  });

//example-8
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domstatus").textContent = "your DOM is loaded!!!";
});

//example-9
document
  .getElementById("toHighlight_btn")
  .addEventListener("click", function () {
    let toggle_69 = document.getElementById("toHighlight");
    toggle_69.classList.toggle("highlight")
  });
