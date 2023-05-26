let regiterForm=document.querySelector("#register-form")
regiterForm.addEventListener("submit",function  (event) {

event.preventDefault()
if(validateForm()){

    alert("Form submiited Successfully");
    event.target.reset();
}
else{

    alert("Something Went wrong")

}


})

let validateForm = ()=>{

if(chechUserName() & checkEmail() & checkPassword() & confirmcheckPassword()){

    return true;
}
else{
    return false
}

}


let chechUserName = ()=>{

let inputEl=document.querySelector("#username");
let inputfeedbackEl=document.querySelector("#username-feedback");
let regExp=/^[a-zA-Z0-9]{4,10}$/;
if(regExp.test(inputEl.value)){

    markValid(inputEl,inputfeedbackEl);
    return true;
}
else{

    markinValid(inputEl,inputfeedbackEl);
    return false;
}


}


let checkEmail = ()=>{

    let inputEl=document.querySelector("#email");
    let inputfeedbackEl=document.querySelector("#email-feedback");
    let regExp= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regExp.test(inputEl.value)){
    
        markValid(inputEl,inputfeedbackEl);
        return true;
    }
    else{
    
        markinValid(inputEl,inputfeedbackEl);
        return false;
    }
    
    
    }    

    let checkPassword = ()=>{

        let inputEl=document.querySelector("#password");
        let inputfeedbackEl=document.querySelector("#password-feedback");
        let regExp=/^[A-Za-z]\w{7,14}$/;
        if(regExp.test(inputEl.value)){
        
            markValid(inputEl,inputfeedbackEl);
            return true;
        }
        else{
        
            markinValid(inputEl,inputfeedbackEl);
            return false;
        }
        
        
        }   
        let confirmcheckPassword = ()=>{

            let inputEl=document.querySelector("#c-password");
            let passwordEl=document.querySelector("#password")
            let inputfeedbackEl=document.querySelector("#c-password-feedback");
            let regExp=/^[A-Za-z]\w{7,14}$/;
            if(regExp.test(inputEl.value) && inputEl.value===passwordEl.value)  {
            
                markValid(inputEl,inputfeedbackEl);
                return true;
            }
            else{
            
                markinValid(inputEl,inputfeedbackEl);
                return false;
            }
            
            
            }   
    

let markValid=(inputEl,inputfeedbackEl)=>{

inputEl.classList.add("is-form-valid")
inputEl.classList.remove("is-form-Notvalid")
inputfeedbackEl.classList.add("text-success")
inputfeedbackEl.classList.remove("text-danger")
inputfeedbackEl.innerText="Looks Good"

}

let markinValid=(inputEl,inputfeedbackEl)=>{

    inputEl.classList.remove("is-form-valid")
    inputEl.classList.add("is-form-Notvalid")
    inputfeedbackEl.classList.remove("text-success")
    inputfeedbackEl.classList.add("text-danger")
    inputfeedbackEl.innerText=` Please Enter a ${inputEl.placeholder}`
    
    
    }

//username field with keyup event

let usernameEl=document.querySelector("#username")

usernameEl.addEventListener("keyup",function () {


chechUserName()

})


//email field with keyup event

let emailEl=document.querySelector("#email")

emailEl.addEventListener("keyup",function () {

checkEmail()

})

//password field with keyup event

let passwordEle=document.querySelector("#password")

passwordEle.addEventListener("keyup",function () {

checkPassword()

})

//confirm password field with keyup event

let checkpasswordEle=document.querySelector("#c-password")

checkpasswordEle.addEventListener("keyup",function () {

confirmcheckPassword()

})
