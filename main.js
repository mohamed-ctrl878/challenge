let email = document.querySelector(".email");
let form = document.querySelector(".form");
let btn = document.querySelector(".submit");
let container = document.querySelector(".container")
let bigBefore = document.querySelector(".big-box")
let bigAfter = document.querySelector(".big-b")
let mom = document.querySelector(".momayaz")
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
bigAfter.remove()


window.onload = function(){
    email.focus()
}
email.addEventListener("blur", (e)=>{
    if(!emailRegex.test(email.value)){
        email.classList.add("eror")
        document.querySelector(".label").style.display = "block"
        document.querySelector(".label").innerHTML = "Valid email required"
        document.querySelector(".label").classList.remove("valid");
    }else{
        document.querySelector(".label").classList.add("valid");
        document.querySelector(".label").innerHTML = "Your email is valid"
        email.classList.remove("eror")
    }
})

email.addEventListener("focus",()=> {
    email.classList.remove("eror");
    document.querySelector(".label").innerHTML = ""
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(e.currentTarget === form){
        document.querySelector(".label").innerHTML = ""
    }
    if(emailRegex.test(email.value)){
        bigBefore.style.opacity = 0 
        setTimeout(()=>{
            bigBefore.style.display = "none"
            bigBefore.remove()
        },300)
        setTimeout(()=>{
            container.appendChild(bigAfter)
            bigAfter.style.display = "flex"
            bigAfter.style.opacity = 1
        },300)
        mom.innerHTML = email.value
    }
    else{
        email.classList.add("eror")
        email.value = ""
        document.querySelector(".label").style.display = "block"
    }
});




















