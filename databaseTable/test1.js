//variables
var create = document.getElementById("create");
var view = document.getElementById("view");
var display = document.getElementById("display");
var text = document.getElementById("text");
var push = document.getElementById("push");
var results = document.getElementById("results");
var arr1 = [];

//create button
create.onclick = function () {
  text.style.display = "inline";
  push.style.display = "inline";
};

//push button
push.onclick = function () {
  arr1.push(text.value);
  push.dataset.u_index;
  console.log(arr1);
  text.value = "";
};

//view button
view.onclick = function () {
  for (var i = 0; i < arr1.length; i++) {
    var disp = document.createElement("div");
    disp.innerHTML = arr1[i];
    results.appendChild(disp);
    var edit = document.createElement("button");
    var edit_t = document.createTextNode("Edit");
    disp.appendChild(edit);
    edit.appendChild(edit_t);
    var del = document.createElement("button");
    var del_t = document.createTextNode("Delete");
    disp.appendChild(edit);
    edit.appendChild(edit_t);
    disp.appendChild(del);
    del.appendChild(del_t);
    del.setAttribute("data-item-index", i);

    //set onclick fn for del button
    del.onclick = function () {
      var itemIndex = this.getAttribute("data-item-index");
      arr1.splice(itemIndex, 1);
      console.log(arr1);
      results.innerHTML = "";
      view.click();
    };
  }
};
