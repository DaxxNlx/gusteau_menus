document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    
    // Obtener los valores del formulario
    var diet = document.getElementById("diet").value;
    var personas = document.getElementById("personas").value;

    // Definir las páginas de destino para cada opción del menú desplegable
    var pages = {
        "1": "beforeketo.html",
        "2": "beforepaleo.html",
        "3": "beforemediterranea.html",
        "4": "beforevegetariana.html",
        "5": "beforevegana.html"
    };

    // Verificar si se seleccionó una opción válida y redireccionar a la página correspondiente
    if (diet in pages) {
        var nextPage = pages[diet] + "?personas=" + encodeURIComponent(personas);
        window.location.href = nextPage;
    } else {
        alert("Seleccione una opción válida del tipo de dieta.");
    }
});