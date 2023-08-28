let button = document.querySelector("#button");
button.addEventListener("click", changeBackground);

function changeBackground(event){
    event.target.classList.toggle('dark-mode');
    if(event.target.textContent == "Light Mode"){
        event.target.textContent = "Dark Mode"
    }
    else{
        event.target.textContent = "Light Mode"
    }
    document.querySelector("body").classList.toggle('dark-mode');
}