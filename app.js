const form = document.getElementById("formulaire")
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")


const alertSucess = document.getElementById("alertSuccess")
const alertEmail = document.getElementById("alertEmail")
const alertName = document.getElementById("alertName")



const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const showErrorMsg = (errors) =>{
    errors.forEach(item =>{
        item.type.classList.remove("d-none");
        item.type.textContent = item.msg;     
    })
    
}


const showSuccessMsg = ()=>{
    alertSucess.classList.remove("d-none")
    alertSucess.textContent= "Message envoyé avec succès"
}


form.addEventListener("submit", e =>{
    e.preventDefault()

    alertSucess.classList.add("d-none");
  
    const errors = []


    if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add("is-invalid")

        errors.push({
            type: alertName,
            msg : "Format non valide dans le champ nom,seulement des lettres"
        })
      
    }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    if(!regUserEmail.test(userEmail.value)|| !userEmail.value.trim()){
        userEmail.classList.add("is-invalid")
        
        errors.push({
            type: alertEmail,
            msg : "Veuillez utiliser une adresse email valide"
        })
    }else{
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }

    if(errors.length !== 0){
      showErrorMsg(errors)
      return;
    }

    showSuccessMsg()

})