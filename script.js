const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const pagarCarritoBtn = document.getElementById('pagar-carrito');
const totalCarrito = document.getElementById('total-carrito');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalSize = document.getElementById('modal-size');
const addToCartBtn = document.getElementById('add-to-cart');

cargarEventoListeners();

function cargarEventoListeners() {
    elementos1.addEventListener('click', abrirModal);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarritoFn);
    pagarCarritoBtn.addEventListener('click', pagarCarritoFn);
    closeModal.addEventListener('click', cerrarModal);
    addToCartBtn.addEventListener('click', agregarAlCarrito);
    window.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModal();
    });
}

function abrirModal(e) {
    if (e.target.classList.contains('open-modal')) {
        const producto = e.target.closest('.product');
        const id = e.target.getAttribute('data-id');
        const titulo = producto.querySelector('h3').textContent;
        const imagen = producto.querySelector('img').src;

        modalTitle.textContent = titulo;
        modalImage.src = imagen;
        modal.dataset.id = id; // Guardamos el ID en el modal
        modal.style.display = 'block'; // Mostramos el modal
    }
}

function cerrarModal() {
    modal.style.display = 'none';
}

function agregarAlCarrito() {
    const tamaño = modalSize.value;
    const precio = modalSize.options[modalSize.selectedIndex].getAttribute('data-price');
    const infoElemento = {
        imagen: modalImage.src,
        titulo: `${modalTitle.textContent} (${tamaño})`, // Incluye el tamaño en el título
        precio: `$${precio}`,
        id: modal.dataset.id
    };
    insertarCarrito(infoElemento);
    cerrarModal();
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${elemento.imagen}" width="100"></td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
    `;
    lista.appendChild(row);
    actualizarTotal();
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.closest('tr').remove();
        actualizarTotal();
    }
}

function vaciarCarritoFn(e) {
    e.preventDefault();
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    actualizarTotal();
}

function pagarCarritoFn(e) {
    e.preventDefault();
    if (lista.children.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de pagar.');
    } else {
        let total = 0;
        const items = lista.getElementsByTagName('tr');
        for (let i = 0; i < items.length; i++) {
            const precioTexto = items[i].querySelector('td:nth-child(3)').textContent;
            const precio = parseFloat(precioTexto.replace('$', ''));
            total += precio;
        }
        window.location.href = `pago.html?total=${total}`;
        vaciarCarritoFn(e);
    }
}

function actualizarTotal() {
    let total = 0;
    const items = lista.getElementsByTagName('tr');
    for (let i = 0; i < items.length; i++) {
        const precioTexto = items[i].querySelector('td:nth-child(3)').textContent;
        const precio = parseFloat(precioTexto.replace('$', ''));
        total += precio;
    }
    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}