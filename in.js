const form = document.querySelector(".form-item");
const inp = form.querySelector("#email")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const val = inp.value;
    alert(`${val } !successfully Submit`)
})