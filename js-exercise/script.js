// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // prevent the default form submission behavior
  
//   // get the input values and store them in an array
//   const formData = [
//     document.getElementById("name").value,
//     document.getElementById("email").value,
//     document.getElementById("message").value
//   ];
  
//   console.log(formData); // print the form data to the console
// });



const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the default form submission behavior
  
  // loop through the form elements and store the input values in an array
  const formData = [];
  for (let i = 0; i < myForm.elements.length; i++) {
    const input = myForm.elements[i];
    if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
      formData.push(input.value);
    }
  }
  
  console.log(formData); // print the form data to the console
});