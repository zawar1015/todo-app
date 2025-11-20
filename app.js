document.addEventListener("DOMContentLoaded",()=>{
    const currentUserData = localStorage.getItem("currentUserData");
    const isIndexPage = window.location.pathname ==="/" || window.location.pathname.endsWith("index.html")

    if(!currentUserData && isIndexPage){
        window.location.href="signup.html";
    }
})
