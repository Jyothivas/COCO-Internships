// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
    
        form.classList.add('was-validated')
      }, false)
    })
})()

//---------------------------------------------------------------------------------------------------------------------------------------

var arr=[];
var formData={};
var index;
var i;

function onFormSubmit(event)
{
  event.preventDefault();
  //console.log("yes");

  var formData=readFormData();
  //console.log(formData);

  insertNewRecord(formData.Email,formData.Age);
  console.log(arr);
  resetForm();
}

function readFormData()
{
  var formData={};
  formData["Email"]=document.getElementById("Email").value;
  formData["Age"]=document.getElementById("Age").value;

  return formData;
}

function insertNewRecord(Email,Age)
{
  arr[arr.length]=[Email,Age];

  return arr;
}

//--------------------------------------------------------------------------------------------------------------------------------------

function resetForm()
{
  document.getElementById("Email").value="";
  document.getElementById("Age").value="";
}

//----------------------------------------------------------------------------------------------------------------------------------

function onShow(event)
{
  event.preventDefault();

  var index= readIndex();
  //console.log(index);
  //console.log(arr[0][0]);
  showData(index);
  console.log(arr);
}

function readIndex()
{
  var index;
  index= document.getElementById("Index").value;

  return index;
}

function showData(index)
{
  document.getElementById("Email").value=arr[index][0];
  document.getElementById("Age").value=arr[index][1];
}


//---------------------------------------------------------------------------------------------------------------------------------

function onUpdate(event)
{
  event.preventDefault();
  var index= readIndex();

  var formData=readFormData();
  insertNewRecord1(index,formData.Email,formData.Age);
  resetForm();
  console.log(arr);
}

function insertNewRecord1(index,Email,Age)
{
  arr[index]=[Email,Age];
  return arr;
}

//---------------------------------------------------------------------------------------------------------------------------------------

function onDelete(event)
{
  event.preventDefault();

  var index= readIndex();
  //console.log(index);

  //deleteRecord(index);
  //console.log(arr);
  //resetForm();


}

function deleteRecord(index)
{

  for(i=index;i<arr.length;i++)
  {
    if(i!=arr.length-1)
    {
      console.log(i);
      arr[i]=arr[i+1];
    }
    
    
  }
  //arr[arr.length].removeItem();
}
