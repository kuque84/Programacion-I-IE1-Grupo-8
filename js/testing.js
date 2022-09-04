
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

 let nombre0 = 'Eugenio';
 let apellido0 = 'Regis';
 let domicilio0 = 'Fatima 261';
 let codigopostal0 = 5189;
 let telefono0 = '+5493546406849';
 let dni0 = 30711347;
 let cuit0 = 23307113473;
 let nuevo0 = new Cliente(nombre0, apellido0, domicilio0, codigopostal0, telefono0, dni0, cuit0);
 baseClientes.agregar(nuevo0);

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

 console.table(baseClientes);
 console.table(baseClientes.clientes);
 
 function checkDNI(dni) {
    return dni = 11111112;
  }

 const found = baseClientes.clientes.find(res => {
    return res.dni === checkDNI();
 })

 console.table(found)