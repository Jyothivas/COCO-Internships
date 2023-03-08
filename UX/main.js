var selectedRow=null;
// $document.ready(function(){
//     $('#t1').DataTable();
// });

function onFormSubmit(event){
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow==null)
    {
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    var formData={};
    formData["Email"]=document.getElementById('e1').value;
    formData["Age"]=document.getElementById('age').value;
    formData["Gender"]=document.getElementById('i2').value;
    return formData;
}

function insertNewRecord(data)
{
    var table=document.getElementById("t1").getElementsByTagName('tbody')[0];
    // var newRow=table.insertRow(table.length);
    // cell1=newRow.insertCell(0);
    // cell1.innerHTML=data.Email;
    // cell2=newRow.insertCell(1);
    // cell2.innerHTML=data.Age;
    // cell3=newRow.insertCell(2);
    // cell3.innerHTML=data.Gender;
    // cell4=newRow.insertCell(3);
    // cell4.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    

}

function onEdit(td)
{
    selectedRow=td.parentElement.parentElement;
    document.getElementById('e1').value=selectedRow.cells[0].innerHTML;
    document.getElementById('age').value=selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Email;
    selectedRow.cells[1].innerHTML = formData.Age;
  }

function onDelete(td)
{
    row=td.parentElement.parentElement;
     document.getElementById("t1").deleteRow(row.rowIndex);
     resetForm();
 }
// event.preventDefault() , onFormSubmit()

// function onClickSubmit()
// {
//     var name=document.getElementById('e1').value;
//     var age=document.getElementById('a1').value;
//     // var radio=document.getElementById('r1').value;
//     // var radio1=document.getElementById('r2').value;
   

// }
// function insertNewRecord(data){
//     var table=document.getElementById('t1').getElementsByTagName('tbody')[0];
//     var newRow=table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.email;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.age;
// }

function resetForm()
{
    document.getElementById('e1').value='';
    document.getElementById('age').value='';
    selectedRow=null;
}
