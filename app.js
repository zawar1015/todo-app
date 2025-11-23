document.addEventListener("DOMContentLoaded", () => {
    const currentUserData = localStorage.getItem("currentUserData");
    const isIndexPage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html")

    if (!currentUserData && isIndexPage) {
        window.location.href = "signup.html";
    }
})


// function handleSignup(event){
//     // e.preventDefault();

//     console.log("zawar");
// }

function handleSignUp(e) {
    e.preventDefault();

    const { name: { value: name }, email: { value: email }, password: { value: password } } = e.target;
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
function handlelogin() {
    
}