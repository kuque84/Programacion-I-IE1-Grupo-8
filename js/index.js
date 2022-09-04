class Cliente {
    constructor(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit){
        this.nombre = nombre;
        this.apellido = apellido;
        this.codigopostal = codigopostal;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.dni = dni;
        this.cuit = cuit;
    }
    toString(){
        return `Apellido y Nombre: ${this.apellido}, ${this.nombre}, Domicilio: ${this.domicilio}, Código Postal: ${this.codigopostal}, Teléfono: ${this.telefono}, DNI: ${this.dni}, CUIT: ${this.cuit}`;
    }
}

class CarteraClientes {
    constructor(clientes){
        this.clientes = clientes;
    }
    agregar(clienteNuevo){
        this.clientes.push(clienteNuevo);
    }
}

let baseClientes = new CarteraClientes([]);

function ingresar (){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let domicilio = document.getElementById("domicilio").value;
    let codigopostal = Number(document.getElementById("codigopostal").value);
    let telefono = Number(document.getElementById("telefono").value);
    let dni = Number(document.getElementById("dni").value);
    let cuit = Number(document.getElementById("cuit").value);
    document.getElementById("correcto").innerText = '';

    let validar = (() =>{
        let mensaje="";
        if (nombre == "") {
            mensaje += "Ingrese un nombre" + '\n';
        }
        if (apellido == "") {
            mensaje += "Ingrese un apellido" + '\n';
        }
        if (domicilio == "") {
            mensaje += "Ingrese un domicilio" + '\n';
        }
        if (codigopostal == "") {
            mensaje += "Ingrese un código postal" + '\n';
        }
        if (telefono == "") {
            mensaje += "Ingrese un teléfono" + '\n';
        }
        if (dni == "") {
            mensaje += "Ingrese un DNI" + '\n';
        }
        if (cuit == "") {
            mensaje += "Ingrese un CUIT" + '\n';
        }
        let parrafo_errores = document.getElementById("mensaje");
        parrafo_errores.innerText = mensaje;
        return mensaje == "" ? true : false;
    })

    if (validar()) {
        let nuevo = new Cliente(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit);
        baseClientes.agregar(nuevo);
        document.getElementById("correcto").innerText = `Cliente agregado correctamente`;
        document.getElementById("formulario").reset();
    }
    document.getElementById("lista").innerText = "";
}

function listar(){
       let resultado = document.getElementById("clientes-tbody");
    if (baseClientes.clientes ==""){
        resultado.innerHTML = "No ha ingresado ningún cliente aún";
        document.getElementById("correcto").innerText = "";
    } else {
        resultado.innerHTML = "";
        baseClientes.clientes.forEach(clientes => resultado.innerHTML += `
        <tr>
            <td>${clientes.apellido}, ${clientes.nombre}</td>
            <td>${clientes.domicilio}</td>
            <td>${clientes.codigopostal}</td>
            <td>${clientes.telefono}</td>
            <td>${clientes.dni}</td>
            <td>${clientes.cuit}</td>
            <td>
                <button type="button" onclick="editar()" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminar()"><i class="bi bi-trash3-fill text-danger"></i></button>
            </td>    
        </tr>`);
        baseClientes.clientes.forEach(clientes => console.log(`${clientes.apellido}, ${clientes.nombre}, ${clientes.domicilio}, ${clientes.codigopostal}, ${clientes.telefono}, ${clientes.dni},${clientes.cuit}`));
        document.getElementById("correcto").innerText = "";
        
    }
}
function basenovacia(){
    let nombre = 'Eugenio';
    let apellido = 'Regis';
    let domicilio = 'Fatima 261';
    let codigopostal = 5189;
    let telefono = '+5493546406849';
    let dni = 30711347;
    let cuit = 23307113473;
    let nuevo = new Cliente(nombre, apellido, domicilio, codigopostal, telefono, dni, cuit);
    baseClientes.agregar(nuevo);

    let nombre1 = 'Ariel';
    let apellido1 = 'Berurena';
    let domicilio1 = 'En su casa';
    let codigopostal1 = 5000;
    let telefono1 = '+5491159264703';
    let dni1 = 11111111;
    let cuit1 = 20111111114;
    let nuevo1 = new Cliente(nombre1, apellido1, domicilio1, codigopostal1, telefono1, dni1, cuit1);
    baseClientes.agregar(nuevo1);

    let nombre2 = 'Alan';
    let apellido2 = 'Abt';
    let domicilio2 = 'En su casa';
    let codigopostal2 = 5194;
    let telefono2 = '+5493546438408';
    let dni2 = 11111112;
    let cuit2 = 20111111124;
    let nuevo2 = new Cliente(nombre2, apellido2, domicilio2, codigopostal2, telefono2, dni2, cuit2);
    baseClientes.agregar(nuevo2);
}
editar(){
    function checkDNI(dni) {
        return dni = 11111112;
    }
    const found = baseClientes.clientes.find(res => {
        return res.dni === checkDNI();
    })
    console.table(found)
}

console.log(baseClientes);