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
    aficiones: document.getElementById("aficiones"),
    c1: document.getElementById("c1"),
    c2: document.getElementById("c2"),
    titulo: document.getElementById("title"),
    descripcion: document.getElementById("descripcion"),
    checkbox: document.querySelectorAll('input[type="checkbox"]'),
    label: document.querySelectorAll("label")
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
let mensajeError = document.createElement("span");
mensajeError.textContent = "Este campo es obligatorio";
DOM.form.addEventListener("submit", (e)=> {
    
    if(!DOM.username.validationMessage == ""){
        e.preventDefault();
        DOM.username.appendChild(mensajeError);
    };
    if(!DOM.password.validationMessage == ""){
        e.preventDefault();
        
    };
    if(!DOM.name.validationMessage == ""){
        e.preventDefault();

    };
    if(!DOM.apellidos.validationMessage == ""){
        e.preventDefault();

    };
    if(!DOM.telephone.validationMessage == ""){
        e.preventDefault();
        
    };
    if(!DOM.postal.validationMessage == ""){
        e.preventDefault();
        
    };
    if(!DOM.documentoInp.validationMessage == ""){
        e.preventDefault();
        
    };
    if(!DOM.empresa.validationMessage == ""){
        e.preventDefault();
        
    };
    if(!DOM.particular.validationMessage == ""){
        e.preventDefault();
        
    };
    
})

