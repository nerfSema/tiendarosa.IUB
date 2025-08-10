let carrito = [];

function agregarAlCarrito(nombre, precio, selectorCantidad) {
  const cantidad = parseInt(document.querySelector(selectorCantidad).value);

  if (cantidad <= 0 || isNaN(cantidad)) {
    alert("¡No puedes agregar 0 productos!");
    return;
  }

  carrito.push({ nombre: nombre, cantidad: cantidad, precio: precio });

  alert(`Agregaste ${cantidad} ${nombre}(s) al carrito.`);

  mostrarCarrito();
}

function mostrarCarrito() {
  const contenedor = document.querySelector(".carrito");
  let total = 0;
  let contenido = "<h2>Carrito de compras</h2>";

  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    contenido += `<p>- ${item.nombre} x${item.cantidad}: $${subtotal}</p>`;
    total += subtotal;
  });

  contenido += `<p><strong>Total: $<span id="total">${total}</span></strong></p>`;
  contenido += `<button onclick="finalizarCompra()">Finalizar compra</button>`;

  contenedor.innerHTML = contenido;
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de finalizar.");
    return;
  }

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  alert("¡Gracias por tu compra! Total: $" + total);

  carrito = [];
  mostrarCarrito();
}
