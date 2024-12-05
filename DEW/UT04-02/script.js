const DOM = {
    form: document.getElementById("form"),
    username: document.getElementById("NombreUsuario"),
    password: document.getElementById("Contrasena"),
    name: document.getElementById("Nombre"),
    apellidos: document.getElementById("Apellidos"),
    telephone: document.getElementById("Telefono"),
    postal: document.getElementById("CodigoPostal"),
    nac: document.getElementById("AnioNacimiento"),
    particular: document.getElementById("Particular"),
    empresa: document.getElementById("Empresa"),
    documentoSel: document.getElementById("TipoDocumento"),
    documentoInp: document.getElementById("DniNie"),
    aficiones: document.getElementById("Aficiones"),
    c1: document.getElementById("c1"),
    c2: document.getElementById("c2"),
    titulo: document.getElementById("PublicacionTitulo"),
    descripcion: document.getElementById("PublicacionDescripcion"),
    checkbox: document.querySelectorAll('input[type="checkbox"]'),
    label: document.querySelectorAll("label"),
    mensajeError: document.querySelectorAll(".mensajeError")
}

let mostrar = document.getElementById("mostrar");

mostrar.addEventListener("change", ()=> {
    if(mostrar.checked){
        DOM.password.type = "text";
    }
    else{
        DOM.password.type = "password";
    }
})
DOM.documentoSel.addEventListener("change", ()=>{
    if(DOM.documentoSel.value == "dni" || DOM.documentoSel.value == "nie"){
        DOM.documentoInp.disabled = false
    }
    else{
        DOM.documentoInp.disabled = true
    }
})

DOM.titulo.addEventListener("input", ()=>{
    let curLength = DOM.titulo.value.length;
    DOM.c1.textContent = `${curLength}/15`;
;
})


DOM.descripcion.addEventListener("input", ()=>{
    let curLength = DOM.descripcion.value.length;
    DOM.c2.textContent = `${curLength}/120`;
})
DOM.form.addEventListener("submit", (e)=> {
    
    if(!DOM.username.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[0].textContent = DOM.username.validationMessage;
        DOM.username.style.border = "solid 2px red";
    };
    if(!DOM.password.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[1].textContent = DOM.password.validationMessage;
        DOM.password.style.border = "solid 2px red";
    };
    if(!DOM.name.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[2].textContent = DOM.name.validationMessage;
        DOM.name.style.border = "solid 2px red";
    };
    if(!DOM.apellidos.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[3].textContent = DOM.apellidos.validationMessage;
        DOM.apellidos.style.border = "solid 2px red";
    };
    if(!DOM.telephone.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[4].textContent = DOM.telephone.validationMessage;    
        DOM.telephone.style.border = "solid 2px red";
    };
    if(!DOM.postal.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[5].textContent = DOM.postal.validationMessage;
        DOM.postal.style.border = "solid 2px red";
    };
    if(!DOM.documentoInp.validationMessage == "" || !DOM.documentoSel.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[6].textContent = DOM.documentoSel.validationMessage;
        DOM.documentoInp.style.border = "solid 2px red";
    };
    
    if(!DOM.empresa.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[5].textContent = DOM.empresa.validationMessage;
        DOM.empresa.style.border = "solid 2px red";
    };
    if(!DOM.particular.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[5].textContent = DOM.particular.validationMessage;
        DOM.particular.style.border = "solid 2px red";
    };
    
    if(!DOM.nac.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[8].textContent = DOM.nac.validationMessage;
        DOM.nac.style.border = "solid 2px red";
    };
    if(!DOM.titulo.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[9].textContent = DOM.titulo.validationMessage;
        DOM.titulo.style.border = "solid 2px red";
    };
    if(!DOM.descripcion.validationMessage == ""){
        e.preventDefault();
        DOM.mensajeError[10].textContent = DOM.descripcion.validationMessage;
        DOM.descripcion.style.border = "solid 2px red";
    };
    
    
})

