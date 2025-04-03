const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
<<<<<<< HEAD
const customSection = document.getElementById('custom-pizza-section');
=======
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const pagarCarritoBtn = document.getElementById('pagar-carrito');
const totalCarrito = document.getElementById('total-carrito');
const modal = document.getElementById('modal');
<<<<<<< HEAD
const customModal = document.getElementById('custom-modal');
const ofertaModal = document.getElementById('oferta-modal');
const closeModal = document.querySelector('.close-modal');
const closeCustomModal = document.querySelector('.close-custom-modal');
const closeOfertaModal = document.querySelector('.close-oferta-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalSize = document.getElementById('modal-size');
const customSize = document.getElementById('custom-size');
const addToCartBtn = document.getElementById('add-to-cart');
const addCustomToCartBtn = document.getElementById('add-custom-to-cart');
const customTotal = document.getElementById('custom-total');
const ofertaTitle = document.getElementById('oferta-title');
const ingredients = document.querySelectorAll('#ingredients input[type="checkbox"]');
=======
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalSize = document.getElementById('modal-size');
const addToCartBtn = document.getElementById('add-to-cart');
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538

cargarEventoListeners();

function cargarEventoListeners() {
    elementos1.addEventListener('click', abrirModal);
<<<<<<< HEAD
    customSection.addEventListener('click', abrirCustomModal);
    document.addEventListener('click', abrirOfertaModal);
=======
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarritoFn);
    pagarCarritoBtn.addEventListener('click', pagarCarritoFn);
    closeModal.addEventListener('click', cerrarModal);
<<<<<<< HEAD
    closeCustomModal.addEventListener('click', cerrarCustomModal);
    closeOfertaModal.addEventListener('click', cerrarOfertaModal);
    addToCartBtn.addEventListener('click', agregarAlCarrito);
    addCustomToCartBtn.addEventListener('click', agregarCustomAlCarrito);
    ofertaModal.addEventListener('click', agregarOfertaAlCarrito);
    window.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModal();
        if (e.target === customModal) cerrarCustomModal();
        if (e.target === ofertaModal) cerrarOfertaModal();
    });
    customSize.addEventListener('change', actualizarCustomTotal);
    ingredients.forEach(ing => ing.addEventListener('change', actualizarCustomTotal));
=======
    addToCartBtn.addEventListener('click', agregarAlCarrito);
    window.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModal();
    });
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
}

function abrirModal(e) {
    if (e.target.classList.contains('open-modal')) {
        const producto = e.target.closest('.product');
        const id = e.target.getAttribute('data-id');
        const titulo = producto.querySelector('h3').textContent;
        const imagen = producto.querySelector('img').src;

        modalTitle.textContent = titulo;
        modalImage.src = imagen;
<<<<<<< HEAD
        modal.dataset.id = id;
        modal.style.display = 'block';
    }
}

function abrirCustomModal(e) {
    if (e.target.classList.contains('open-custom-modal')) {
        customModal.style.display = 'block';
        actualizarCustomTotal();
    }
}

function abrirOfertaModal(e) {
    if (e.target.classList.contains('open-oferta-modal')) {
        const ofertaId = e.target.getAttribute('data-oferta');
        ofertaTitle.textContent = e.target.parentElement.querySelector('h3').textContent;

        // Ocultar todos los productos y mostrar solo los de la oferta seleccionada
        document.querySelectorAll('.oferta-product').forEach(product => {
            product.style.display = 'none';
        });
        document.querySelectorAll(`.oferta-product[data-oferta="${ofertaId}"]`).forEach(product => {
            product.style.display = 'block';
        });

        ofertaModal.style.display = 'block';
=======
        modal.dataset.id = id; // Guardamos el ID en el modal
        modal.style.display = 'block'; // Mostramos el modal
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
    }
}

function cerrarModal() {
    modal.style.display = 'none';
}

<<<<<<< HEAD
function cerrarCustomModal() {
    customModal.style.display = 'none';
}

function cerrarOfertaModal() {
    ofertaModal.style.display = 'none';
}

=======
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
function agregarAlCarrito() {
    const tamaño = modalSize.value;
    const precio = modalSize.options[modalSize.selectedIndex].getAttribute('data-price');
    const infoElemento = {
        imagen: modalImage.src,
<<<<<<< HEAD
        titulo: `${modalTitle.textContent} (${tamaño})`,
=======
        titulo: `${modalTitle.textContent} (${tamaño})`, // Incluye el tamaño en el título
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
        precio: `$${precio}`,
        id: modal.dataset.id
    };
    insertarCarrito(infoElemento);
    cerrarModal();
}

<<<<<<< HEAD
function agregarCustomAlCarrito() {
    const tamaño = customSize.value;
    const precioBase = parseFloat(customSize.options[customSize.selectedIndex].getAttribute('data-price'));
    let ingredientesSeleccionados = [];
    let precioIngredientes = 0;

    ingredients.forEach(ing => {
        if (ing.checked) {
            ingredientesSeleccionados.push(ing.value);
            precioIngredientes += parseFloat(ing.getAttribute('data-price'));
        }
    });

    const total = precioBase + precioIngredientes;
    const infoElemento = {
        imagen: customModal.querySelector('img').src,
        titulo: `Pizza personalizada (${tamaño})${ingredientesSeleccionados.length > 0 ? ' con ' + ingredientesSeleccionados.join(', ') : ''}`,
        precio: `$${total}`,
        id: 'custom-' + Date.now()
    };
    insertarCarrito(infoElemento);
    cerrarCustomModal();
    customSize.selectedIndex = 0;
    ingredients.forEach(ing => ing.checked = false);
    actualizarCustomTotal();
}

function agregarOfertaAlCarrito(e) {
    if (e.target.classList.contains('add-oferta-btn')) {
        const productDiv = e.target.closest('.oferta-product');
        const infoElemento = {
            imagen: productDiv.querySelector('img').src,
            titulo: productDiv.querySelector('h4').textContent,
            precio: productDiv.querySelector('p').textContent,
            id: e.target.getAttribute('data-id')
        };
        insertarCarrito(infoElemento);
        cerrarOfertaModal();
    }
}

=======
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
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
<<<<<<< HEAD
}

function actualizarCustomTotal() {
    const precioBase = parseFloat(customSize.options[customSize.selectedIndex].getAttribute('data-price'));
    let precioIngredientes = 0;
    ingredients.forEach(ing => {
        if (ing.checked) {
            precioIngredientes += parseFloat(ing.getAttribute('data-price'));
        }
    });
    const total = precioBase + precioIngredientes;
    customTotal.textContent = `$${total}`;
=======
>>>>>>> e27b883cf76436c80cbd8125be662e8d653d2538
}