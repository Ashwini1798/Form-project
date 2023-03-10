const form = document.querySelector('#user-details-form');
const submitButton = document.querySelector('#submit-button');

form.addEventListener('submit' ,function(e){

    e.preventDefault()

    const name = document.querySelector('#name-input').value;
    const email = document.querySelector('#email-input').value;
    const address = document.querySelector('#address-input').value;

    const userDetails = {
        name: name,
        email: email,
        address: address
      };

      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      alert('User details have been saved successfully!');
      show(userDetails)

})
window.addEventListener('load', function() {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  if (userDetails) {
    document.querySelector('#name-input').value = userDetails.name;
    document.querySelector('#email-input').value = userDetails.email;
    document.querySelector('#address-input').value = userDetails.address;
  }
});

function show(userDetails){
  var ele=document.getElementById("listofitem")
  var chaildele=document.createElement("li")
  chaildele.innerHTML=ele.innerHTML+`<li>${userDetails.name}-${userDetails.email}-${userDetails.address}</li>`

 var dlt=document.createElement("input")
dlt.type="button"
dlt.value="Delete"
dlt.id="submit-button"
dlt.onclick=()=>{
localStorage.removeItem(userDetails.value)
ele.removeChild(chaildele)
}
chaildele.appendChild(dlt)
ele.appendChild(chaildele)
}
