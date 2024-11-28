let password = document.getElementById("password");
let mostrar = document.getElementById("mostrar");

mostrar.addEventListener("change", ()=> {
    if(mostrar.checked){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
})


let documentoSel = document.getElementById("doc-select");
let documentoInp = document.getElementById("doc-input");

documentoSel.addEventListener("change", ()=>{
    if(documentoSel.value == "dni" || documentoSel.value == "nie"){
        documentoInp.disabled = false
    }
    else{
        documentoInp.disabled = true
    }
})

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");

let title = document.getElementById("title");
let description = document.getElementById("descripcion");

title.addEventListener("input", ()=>{
    let curLength = title.value.length;
    c1.textContent = `${curLength}/15`;
})

description.addEventListener("input", ()=>{
    let curLength = description.value.length;
    c2.textContent = `${curLength}/120`;
})

