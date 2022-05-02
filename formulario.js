function validarDatos(){
    window.event.preventDefault();
    if(document.form.nom.value ==""){
        alert("Campo nombre obligatorio")
        document.form.nom.focus();
    }else if(document.form.em.value ==""){
        alert("Campo email obligatorio")
        document.form.em.focus();
    }
    else if(document.form.as.value ==""){
        alert("Campo Asunto obligatorio")
        document.form.as.focus();
    }
    else if(document.form.em.value.indexOf("@")==-1 || document.form.em.value.indexOf(".")==-1){
        alert("email es inválido")
        document.form.em.focus();
    }
    else if(document.form.msj.value =="" || documentform.msj.lenght <=50){
        alert("Campo mensaje es obligatorio y debe contener máximo 50 caracteres")
        document.form.msj.focus();
    }
}
/*falta mensaje boton enviar*/
    document.querySelector("form").addEventListener("submit", validarDatos)