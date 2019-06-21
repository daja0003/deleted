// Save the reference to text-field into a variable. | <input type="text">
let shopitem = document.getElementById("item");
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button>
let btn = document.getElementById("submit");
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let list = document.querySelector("form");
// Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = list.querySelector('p');

console.clear();
// Start function addItem.
function shoppingList() {
    // Create list-item and store output in a variable.
    let listItem = shopitem.value;
    // Check if user entered the value in input text-field.
    if (listItem !== "") {
    // If so:
       // Use textContent property on created list-item
        let li= document.createElement('li');
        let txt = document.createTextNode(listItem);
       // and assign it with the value of the text written in the text-field
        li.appendChild(txt);
       // Append list item to unordered list.
        let ul = document.createElement ('ul');
        list.appendChild(ul);
        ul.appendChild(li);
       // Clear a feedback-message.
            feedback.innerHTML="";
       // Clear the text-field.
            shopitem.value="";
       // Put the cursor back to text-field  
    // End if. 
    } else {
    // Otherwise:
    // Print the message nothing entered in the paragraph "feedback"
        feedback.innerHTML= "Nothing entered!";
    // End otherwise.
// End function addItem.
}
    }
    // Register your function addItem for click event on button.
btn.addEventListener("click", shoppingList);