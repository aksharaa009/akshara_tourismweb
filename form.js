function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!,@,#,$,%,^,&,*,?,_,~,-,(,)]{8,}$/;
    return re.test(password);
}
// function for validating Login form
function validateLoginForm() {
    // get the error message elemets abd clear any error message, if any
    var spnError = document.getElementById("spnEmailErrorMessage");
    spnError.innerText = "";
    // get the value of input elements in the form
    var emailInput = document.getElementById("txtUsername").value;
    var passwordInput = document.getElementById("txtPassword").value;
    // check for email regular expression
    var IsValid = validateEmail(emailInput);
    if (!IsValid) {

        spnError.style.color = "red";
        spnError.innerText = "Please enter a valid email address.";
        return false;
    }
    else {
        // checking required password again
        if (passwordInput != "") {
            alert('Login Success');
        }
        else {
            return false;
        }


    }
}


var IsValidSignInForm = true;
// function for validating signup form
function validateSignUpForm() {
    IsValidSignInForm = true;
    if (!IsValidEmail() && !IsValidPassword() && !ComparePassword() && !IsValidPhNo()) {
        return false;
    }
    else
    {
        alert("Success");
    }

}

function IsValidEmail() {
    // get the error message elemets abd clear any error message, if any
    var spnError = document.getElementById("spnEmailErrorMessage");
    spnError.innerText = "";
    // get the value of input elements in the form
    var emailInput = document.getElementById("txtEmail").value;
    var IsEmailValid = validateEmail(emailInput);
    if (!IsEmailValid) {

        spnError.style.color = "red";
        spnError.innerText = "Please enter a valid email address.";
        IsValidSignInForm = false;
    }
    return IsValidSignInForm;
}

function IsValidPassword() {
    // get the error message elemets abd clear any error message, if any
    var spnError = document.getElementById("spnPasswordErrorMessage");
    spnError.innerText = "";
    // get the value of input elements in the form
    var passwordInput = document.getElementById("inputPassword4").value;
    var IsPasswordValid = validatePassword(passwordInput);
    if (!IsPasswordValid) {

        spnError.style.color = "red";
        spnError.innerText = "Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number.";
        IsValidSignInForm = false;
    }
    return IsValidSignInForm;
}

function ComparePassword() {
    // get the error message elemets abd clear any error message, if any
    var spnError = document.getElementById("spnCnfmPasswordErrorMessage");
    spnError.innerText = "";
    // get the value of input elements in the form
    var passwordInput = document.getElementById("inputPassword4").value;
    var passwordReInput = document.getElementById("reinputPassword4").value;
    if (passwordInput != passwordReInput) {

        spnError.style.color = "red";
        spnError.innerText = "Password Mismatch";
        IsValidSignInForm = false;
    }
    return IsValidSignInForm;
}

function IsValidPhNo() {
    // get the error message elemets abd clear any error message, if any
    var spnError = document.getElementById("spnPhNoErrorMessage");
    spnError.innerText = "";
    // get the value of input elements in the form
    var phNoInput = document.getElementById("inputphone").value;
    var re = /^\d{10}$/;
    var re1=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (re.test(phNoInput) || re1.test(phNoInput)) {
        IsValidSignInForm= true;
    }
    else {
        spnError.style.color = "red";
        spnError.innerText = "Please enter a valid 10 digit phone number. Also format like XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX is accetable";
        IsValidSignInForm = false;
    }
    return IsValidSignInForm;
}

function ClearErrorMessage(obj)
{
    obj.nextElementSibling.innerText="";
}

function CheckPasswordStrength()
{
 var val=document.getElementById("inputPassword4").value;
 var no=0;
 var e = document.getElementById('progressBar');
 if(val!="")
 {
  // If the password length is less than or equal to 6
  if(val.length<=8)no=1;


  // If the password length is greater than 6 and contain alphabet,number,special character respectively
  if(val.length>8 && ((val.match(/[a-z]/) && val.match(/\d+/)) || (val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) || (val.match(/[a-z]/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))))no=3;

  // If the password length is greater than 6 and must contain alphabets,numbers and special characters
  if(val.length>8 && val.match(/[a-z]/) && val.match(/\d+/) && val.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))no=4;

  if(no==1)
  {
      e.style.display="flex";
      e.innerHTML = "";
    e.innerHTML = ' <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>';
  // document.getElementById("pass_type").innerHTML="Very Weak";
  }

  if(no==3)
  {
    e.style.display="flex";
    e.innerHTML = "";
    e.innerHTML = ' <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>';
  }

  if(no==4)
  {
    e.style.display="flex";
    e.innerHTML = "";
    e.innerHTML = ' <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>';
  }
 }

 else
 {
    e.style.display="none";
    e.innerHTML = "";
 }
}





