document.addEventListener("DOMContentLoaded", () => {
    const currentUserData = localStorage.getItem("currentUserData");
    const isIndexPage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html")

    if (!currentUserData && isIndexPage) {
        window.location.href = "signup.html";
    }
})

function showError(whereToPlaceError , errorMessage){ 
    let errorTag = document.getElementById(`${whereToPlaceError}`);
    errorTag.textContent = errorMessage;
    errorTag.style.display = "flex"
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
        
}
 
function handleSignUp(e) {
    e.preventDefault();

    const { name: { value: name }, email: { value: email }, password: { value: password } } = e.target;


    //  name validation
    if (name == "") {
        showError("nameError" , "name should not be empyt")
        return 
    }
    if (name.length < 3 || name.length > 20) {
        showError("nameError" , "name should be greater than 3 and less than 20 characters")
        return 
    }

    // email validation
    if(!isValidEmail(email)){
        showError("emailError" , "please enter a valid email")
        return 
    }

     //  password validation
    if (password == "") {
        showError("passwordError" , "password should not be empyt")
        return 
    }
    if (password.length < 8 || password.length > 20) {
        showError("passwordError" , "password should be greater than 8 and less than 20 character")
        return 
    }
    
    let newUser = {
        name,
        email,
        password
    }
    allUserData.push(newUser)
    currentUserData = newUser

    localStorage.setItem("allUsersData", JSON.stringify(allUserData))
    localStorage.setItem("currentUserData", JSON.stringify(currentUserData))

}



function handlelogin(e) {
    e.preventDefault();

    const {email: { value: email }, password: { value: password } } = e.target;


    // email validation
    if(!isValidEmail(email)){
        showError("emailError" , "please enter a valid email")
        return 
    }

     //  password validation
    if (password == "") {
        showError("passwordError" , "password should not be empyt")
        return 
    }
    if (password.length < 8 || password.length > 20) {
        showError("passwordError" , "password should be greater than 8 and less than 20 character")
        return 
    }
    
}