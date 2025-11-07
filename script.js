// DATOS ADMINISTRADOR
let adminUser = "admin";
let adminPass = "1234";

// LISTA DE PRODUCTOS (50)
let productos = [
{nombre:"Blusa Elegante", precio:450, img:"Imagenes/producto1.png"},
{nombre:"Vestido Casual", precio:850, img:"imagenes/producto2.jpg"},
{nombre:"Zapatos Tacón", precio:1200, img:"imagenes/producto3.jpg"},
{nombre:"Cartera Fashion", precio:950, img:"imagenes/producto4.jpg"},
{nombre:"Aretes Dorados", precio:150, img:"imagenes/producto5.jpg"},
{nombre:"Collar de Lujo", precio:380, img:"imagenes/producto6.jpg"},
{nombre:"Pijama Suave", precio:550, img:"imagenes/producto7.jpg"},
{nombre:"Reloj Femenino", precio:1750, img:"imagenes/producto8.jpg"},
{nombre:"Sandalias Verano", precio:600, img:"imagenes/producto9.jpg"},
{nombre:"Bolso de Mano", precio:1100, img:"imagenes/producto10.jpg"},
{nombre:"Jeans a la Moda", precio:900, img:"imagenes/producto11.jpg"},
{nombre:"Crop Top Moderno", precio:350, img:"imagenes/producto12.jpg"},
{nombre:"Blazer Mujer", precio:1450, img:"imagenes/producto13.jpg"},
{nombre:"Perfume Floral", precio:2400, img:"imagenes/producto14.jpg"},
{nombre:"Lentes de Sol", precio:650, img:"imagenes/producto15.jpg"},
{nombre:"Pashmina Ligera", precio:200, img:"imagenes/producto16.jpg"},
{nombre:"Pulsera Elegante", precio:300, img:"imagenes/producto17.jpg"},
{nombre:"Gorra Femenina", precio:250, img:"imagenes/producto18.jpg"},
{nombre:"Zapatillas Blancas", precio:1150, img:"imagenes/producto19.jpg"},
{nombre:"Faldita Casual", precio:450, img:"imagenes/producto20.jpg"},
{nombre:"Short Verano", precio:400, img:"imagenes/producto21.jpg"},
{nombre:"Blusa Manga Larga", precio:650, img:"imagenes/producto22.jpg"},
{nombre:"Chaqueta Jean", precio:1300, img:"imagenes/producto23.jpg"},
{nombre:"Pantuflas Suaves", precio:280, img:"imagenes/producto24.jpg"},
{nombre:"Botas Mujer", precio:1750, img:"imagenes/producto25.jpg"},
{nombre:"Maquillaje Básico", precio:650, img:"imagenes/producto26.jpg"},
{nombre:"Plancha Cabello", precio:1950, img:"imagenes/producto27.jpg"},
{nombre:"Secador Profesional", precio:2300, img:"imagenes/producto28.jpg"},
{nombre:"Mascarilla Facial", precio:120, img:"imagenes/producto29.jpg"},
{nombre:"Set Anillos", precio:180, img:"imagenes/producto30.jpg"},
{nombre:"Blusa Encaje", precio:720, img:"imagenes/producto31.jpg"},
{nombre:"Falda Elegante", precio:890, img:"imagenes/producto32.jpg"},
{nombre:"Bolso Grande", precio:1350, img:"imagenes/producto33.jpg"},
{nombre:"Panty Pack 3", precio:300, img:"imagenes/producto34.jpg"},
{nombre:"Brasier Push Up", precio:450, img:"imagenes/producto35.jpg"},
{nombre:"Sudadera Femenina", precio:850, img:"imagenes/producto36.jpg"},
{nombre:"Pantalón Deportivo", precio:550, img:"imagenes/producto37.jpg"},
{nombre:"Tennis Rosados", precio:1300, img:"imagenes/producto38.jpg"},
{nombre:"Cinturón Dorado", precio:200, img:"imagenes/producto39.jpg"},
{nombre:"Blusa Seda", precio:980, img:"imagenes/producto40.jpg"},
{nombre:"Traje Baño 2 Piezas", precio:650, img:"imagenes/producto41.jpg"},
{nombre:"Kimono Playa", precio:780, img:"imagenes/producto42.jpg"},
{nombre:"Sérum Facial", precio:400, img:"imagenes/producto43.jpg"},
{nombre:"Crema Corporal", precio:300, img:"imagenes/producto44.jpg"},
{nombre:"Sombrero Femenino", precio:350, img:"imagenes/producto45.jpg"},
{nombre:"Zapatos Plataforma", precio:1400, img:"imagenes/producto46.jpg"},
{nombre:"Polo Mujer", precio:500, img:"imagenes/producto47.jpg"},
{nombre:"Jumpsuit Moderno", precio:1350, img:"imagenes/producto48.jpg"},
{nombre:"Cardigan Mujer", precio:930, img:"imagenes/producto49.jpg"},
{nombre:"Set Collar + Aretes", precio:650, img:"imagenes/producto50.jpg"}
];

let carrito = [];

function mostrarSeccion(id){
    document.querySelectorAll(".seccion").forEach(s=>s.classList.add("oculto"));
    document.getElementById(id).classList.remove("oculto");
}

function cargarProductos(){
    let html="";
    productos.forEach((p,i)=>{
        html += `<div class="producto">
            <img src="${p.img}">
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <button onclick="agregarCarrito(${i})">Agregar</button>
        </div>`;
    });
    document.getElementById("lista-productos").innerHTML=html;
}
cargarProductos();

function agregarCarrito(i){
    carrito.push(productos[i]);
    mostrarCarrito();
}

function mostrarCarrito(){
    let html="";
    let total=0;
    carrito.forEach(p=>{
        total+=p.precio;
        html += `<p>${p.nombre} - $${p.precio}</p>`;
    });
    document.getElementById("carrito-items").innerHTML=html;
    document.getElementById("total").innerText="Total: $" + total;
}

function login(){
    if(user.value===adminUser && pass.value===adminPass){
        mostrarSeccion("admin");
        cargarAdmin();
    } else {
        document.getElementById("login-msg").innerText = "Datos incorrectos";
    }
}


function cargarAdmin(){
    let html="";
    productos.forEach((p,i)=>{
        html+= `<div class="item-admin">
            <img src="${p.img}">
            <h4>${p.nombre}</h4>
            <button onclick="eliminar(${i})">Eliminar</button>
        </div>`;
    });
    document.getElementById("lista-admin").innerHTML=html;
}

function mostrarFormularioAgregar(){ mostrarSeccion("form-agregar"); }
function agregarProducto(){
    productos.push({
        nombre:nombreNuevo.value,
        precio:Number(precioNuevo.value),
        img:imgNuevo.value
    });
    nombreNuevo.value=""; precioNuevo.value=""; imgNuevo.value="";
    cargarProductos(); cargarAdmin();
    mostrarSeccion("admin");
}
function eliminar(i){
    productos.splice(i,1);
    cargarProductos(); cargarAdmin();
}

function cambiarDatos(){
    adminUser = nuevoUser.value;
    adminPass = nuevoPass.value;
    alert("Datos actualizados");
}

function enviarWhatsApp() {
    if (!carrito || carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    // Cambia este número a tu WhatsApp
    let numero = "8493892714";

    let mensaje = "Hola, quiero comprar:\n\n";

    carrito.forEach(producto => {
        mensaje += `• ${producto.nombre} - RD$${producto.precio}\n`;
    });

    let total = carrito.reduce((acc, p) => acc + p.precio, 0);
    mensaje += `\nTotal a pagar: RD$${total}`;

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}
