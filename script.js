document.addEventListener("DOMContentLoaded", ()=>{
    const themaToggle = document.getElementById("thema");
    const body = document.body;

    const savedThema = localStorage.getItem("thema");
    if (savedThema === "dark"){
        body.classList.add("dark-mode");
    }

    themaToggle.addEventListener("click", ()=>{
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")){
            localStorage.setItem("thema", "dark");
        }
        else{
            localStorage.setItem("thema", "light");
        }
    });
})