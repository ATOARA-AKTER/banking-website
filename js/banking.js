//login section
document.getElementById('submit-button').addEventListener('click', function(){
     //console.log('submit button clicked');

    //get user email by user form
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    //console.log(userEmail);

    //get user password by user form
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    //console.log(userPassword);

    //check validation
    if (userEmail == 'ruby@gmail.com' && userPassword == 123456) {
        window.location.href = "banking.html";
    }
})


