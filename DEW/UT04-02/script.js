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
    mensajeError: document.querySelectorAll(".error"),
    musica: document.getElementById("musica"),
    manualidades: document.getElementById("manualidades"),
    deporte: document.getElementById("deporte"),
    arte: document.getElementById("arte"),
    videojuegos: document.getElementById("videojuegos"),
    lectura: document.getElementById("lectura"),
    msgUsername: document.getElementById("msgUser"),
    msgPassword: document.getElementById("msgPsw"),
    nombre: document.getElementById("msgName"),
    msgApellidos: document.getElementById("msgAp"),
    tel: document.getElementById("msgTel"),
    afi: document.getElementById("msgAfi"),
    cuenta: document.getElementById("msgCuenta"),
    anio: document.getElementById("msgAnio"),
    doc: document.getElementById("msgDoc"),
    CP: document.getElementById("msgCP"),
    msgTitulo: document.getElementById("msgTitulo"),
    desc: document.getElementById("msgDesc"),
}

const mostrar = document.getElementById("mostrar");

const currentYear = 2010; // Año más reciente
const earliestYear = 1920; // Año más antiguo

for (let year = currentYear; year >= earliestYear; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    DOM.nac.appendChild(option);
}
DOM.particular.addEventListener("click", ()=>{
    DOM.cuenta.innerHTML = "";
});
DOM.empresa.addEventListener("click", ()=> {
    DOM.cuenta.innerHTML = ""
    
});


mostrar.addEventListener("change", ()=> {
    if(mostrar.checked){
        DOM.password.type = "text";
    }
    else{
        DOM.password.type = "password";
    }
});
DOM.documentoSel.addEventListener("change", ()=>{
    if(DOM.documentoSel.value == "dni" || DOM.documentoSel.value == "nie"){
        DOM.documentoInp.disabled = false
    }
    else{
        DOM.documentoInp.disabled = true
    }
});

DOM.titulo.addEventListener("input", ()=>{
    let curLength = DOM.titulo.value.length;
    DOM.c1.textContent = `${curLength}/15`;
});

DOM.descripcion.addEventListener("input", ()=>{
    let curLength = DOM.descripcion.value.length;
    DOM.c2.textContent = `${curLength}/120`;
});

let seleccionados = [];

DOM.musica.addEventListener("click", () =>
{
    if (DOM.musica.checked)
    {
        seleccionados.push(DOM.musica.value);
    }
    else
    {
        borrarAficion(DOM.musica.value);
    }
    checkHobbies();
});

DOM.manualidades.addEventListener("click", () =>
{
    if (DOM.manualidades.checked)
    {
        seleccionados.push(DOM.manualidades.value);
    }
    else
    {
        borrarAficion(DOM.manualidades.value);
    }
    checkHobbies();
});

DOM.deporte.addEventListener("click", () =>
{
    if (DOM.deporte.checked)
    {
        seleccionados.push(DOM.deporte.value);
    }
    else
    {
        borrarAficion(DOM.deporte.value);
    }
    checkHobbies();
});

DOM.arte.addEventListener("click", () =>
{
    if (DOM.arte.checked)
    {
        seleccionados.push(DOM.arte.value);
    }
    else
    {
        borrarAficion(DOM.arte.value);
    }
    checkHobbies();
});

DOM.videojuegos.addEventListener("click", () =>
{
    if (DOM.videojuegos.checked)
    {
        seleccionados.push(DOM.videojuegos.value);
    }
    else
    {
        borrarAficion(DOM.videojuegos.value);
    }
    checkHobbies();
});
DOM.lectura.addEventListener("click", () =>
{
    if (DOM.lectura.checked)
    {
        seleccionados.push(DOM.lectura.value)
    }
    else
    {
        borrarAficion(DOM.lectura.value);
    }
    checkHobbies();
});

function borrarAficion(aficion)
{
    let position = seleccionados.indexOf(aficion);
    seleccionados.splice(position, 1);
}

function checkHobbies()
{
    if (seleccionados.length > 1)
    {
        DOM.afi.textContent = "Elija al menos dos aficiones";
        DOM.aficiones = seleccionados.values;
    }
    else
    {
        DOM.afi.style.visibility = "visible";
    }
}

DOM.form.addEventListener("submit", (e)=> {
    if(!DOM.username.validationMessage == ""){
        e.preventDefault();
        DOM.msgUsername.textContent="El Nombre de Usuario es obligatorio";
        DOM.mensajeError[0].textContent = DOM.username.validationMessage;
        DOM.username.style.border = "solid 2px red";
    }else{
        DOM.msgUsername.textContent="";
        DOM.mensajeError[0].textContent = "";
        DOM.username.style.border = "solid 1px";
    };

    if(!DOM.password.validationMessage == ""){
        e.preventDefault();
        DOM.msgPassword.textContent = "La Contraseña ha de ser numérica";
        DOM.mensajeError[1].textContent = DOM.password.validationMessage;
        DOM.password.style.border = "solid 2px red";
    }else{
        DOM.msgPassword.textContent = "";
        DOM.mensajeError[1].textContent = "";
        DOM.password.style.border = "solid 1px";
    };

    if(!DOM.name.validationMessage == ""){
        e.preventDefault();
        DOM.nombre.textContent = "Introduzca su nombre";
        DOM.mensajeError[2].textContent = DOM.name.validationMessage;
        DOM.name.style.border = "solid 2px red";
    }else{
        DOM.nombre.textContent = "";
        DOM.mensajeError[2].textContent = "";
        DOM.name.style.border = "solid 1px";
    };

    if(!DOM.apellidos.validationMessage == ""){
        e.preventDefault();
        DOM.msgApellidos.textContent = "Introduzca sus apellidos";
        DOM.mensajeError[3].textContent = DOM.apellidos.validationMessage;
        DOM.apellidos.style.border = "solid 2px red";
    }else{
        DOM.msgApellidos.textContent = "";
        DOM.mensajeError[3].textContent = "";
        DOM.apellidos.style.border = "solid 1px";
    };

    if(!DOM.telephone.validationMessage == ""){
        e.preventDefault();
        DOM.tel.textContent = "El Teléfono introducido es incorrecto o no válido";
        DOM.mensajeError[4].textContent = DOM.telephone.validationMessage;    
        DOM.telephone.style.border = "solid 2px red";
    }else{
        DOM.tel.textContent = "";
        DOM.mensajeError[4].textContent = "";    
        DOM.telephone.style.border = "solid 1px";
    }
    if(!DOM.postal.validationMessage == ""){
        e.preventDefault();
        DOM.CP.textContent = "El Código Postal introducido es incorrecto o no válido";
        DOM.mensajeError[5].textContent = DOM.postal.validationMessage;
        DOM.postal.style.border = "solid 2px red";
    }
    else{
        DOM.CP.textContent = "";
        DOM.mensajeError[5].textContent = "";
        DOM.postal.style.border = "solid 1px";   
    }
    if(!DOM.documentoSel.validationMessage == ""){
        e.preventDefault();
        DOM.doc.textContent = "Seleccione el tipo de documento";
        DOM.mensajeError[6].textContent = DOM.documentoSel.validationMessage;
        DOM.documentoInp.style.border = "solid 2px red";
    };
    if(!DOM.documentoInp.validationMessage == ""){
        e.preventDefault();
        DOM.doc.textContent = "El DNI o NIE es incorrecto o está vacío";
        DOM.mensajeError[6].textContent = DOM.documentoInp.validationMessage;
        DOM.documentoInp.style.border = "solid 2px red";
    };
    if(!DOM.empresa.validationMessage == "" || !DOM.particular.validationMessage == ""){
        e.preventDefault();
        DOM.cuenta.textContent = "Seleccione tu tipo de cuenta";
        DOM.mensajeError[7].textContent = DOM.empresa.validationMessage;
    };
    if(!DOM.nac.validationMessage == ""){
        e.preventDefault();
        DOM.anio.textContent = "Seleccione su año de nacimiento";
        DOM.mensajeError[8].textContent = DOM.nac.validationMessage;
        DOM.nac.style.border = "solid 2px red";
    };
    if(DOM.afi.style.visibility != "hidden"){
        e.preventDefault();
        DOM.mensajeError[9].textContent = DOM.afi.textContent;
    }
    if(!DOM.titulo.validationMessage == ""){
        e.preventDefault();
        DOM.titulo.textContent = "Introduzca el título de la publicación";
        DOM.mensajeError[10].textContent = DOM.titulo.validationMessage;
        DOM.titulo.style.border = "solid 2px red";
    };
    if(!DOM.descripcion.validationMessage == ""){
        e.preventDefault();
        DOM.desc.textContent = "Introduzca la descripción de la publicación";
        DOM.mensajeError[11].textContent = DOM.descripcion.validationMessage;
        DOM.descripcion.style.border = "solid 2px red";
    };
})