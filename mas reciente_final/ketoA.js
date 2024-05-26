// keto.js

function agregarAlCarrito(boton) {
    var tarjeta = boton.parentNode;
    var nombrePlato = tarjeta.querySelector('p').textContent;
    var ingredientes = [];
    tarjeta.querySelectorAll('li').forEach(function(ingrediente) {
        var nombreIngrediente = ingrediente.textContent.split(':')[0].trim();
        var cantidadInput = ingrediente.querySelector('input[type="number"]');
        var cantidadIngrediente = cantidadInput ? cantidadInput.value : 0;
        if (nombreIngrediente && cantidadIngrediente !== undefined && cantidadIngrediente !== null) {
            ingredientes.push({ nombre: nombreIngrediente, cantidad: cantidadIngrediente });
        }
    });

    // Agregar la clase 'agregado' a la tarjeta
    tarjeta.classList.add('agregado');

    var pedidoActual = localStorage.getItem('pedido');
    var pedido = [];
    if (pedidoActual) {
        pedido = JSON.parse(pedidoActual);
    }
    pedido.push({ nombre: nombrePlato, ingredientes: ingredientes });
    var pedidoJSON = JSON.stringify(pedido);
    localStorage.setItem('pedido', pedidoJSON);
    alert('Se agregó ' + nombrePlato + ' al carrito.');
}

function eliminarDelMenu(itemId) {
    let pedido = JSON.parse(localStorage.getItem('pedido')) || [];
    pedido = pedido.filter(item => item.nombre !== itemId);
    localStorage.setItem('pedido', JSON.stringify(pedido));
    alert('Se eliminó ' + itemId + ' del carrito.');
}
