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

    var myobj_serialized = JSON.stringify("userDetails")

    localStorage.setItem("userDetails",myobj_serialized)
    
    var myobj_deserialized = JSON.parse(localStorage.getItem("userDetail"))
    console.log(myobj_deserialized)

})


