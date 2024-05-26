function enviarPedido() {
    var platosSeleccionados = document.querySelectorAll('.agregado'); // Filtrar solo las tarjetas con la clase 'agregado'
    var pedido = [];
    platosSeleccionados.forEach(function(plato) {
        var nombrePlato = plato.querySelector('p').textContent;
        var ingredientes = [];
        plato.querySelectorAll('li').forEach(function(ingrediente) {
            var nombreIngrediente = ingrediente.textContent.split(':')[0].trim();
            var cantidadInput = ingrediente.querySelector('input[type="number"]');
            var cantidadIngrediente = cantidadInput ? cantidadInput.value : 0;
            if (nombreIngrediente && cantidadIngrediente !== undefined && cantidadIngrediente !== null) {
                ingredientes.push({ nombre: nombreIngrediente, cantidad: cantidadIngrediente });
            }
        });
        pedido.push({ nombre: nombrePlato, ingredientes: ingredientes });
    });
    var pedidoJSON = JSON.stringify(pedido);
    localStorage.setItem('pedido', pedidoJSON);
    window.location.href = 'carrito.html';
}
