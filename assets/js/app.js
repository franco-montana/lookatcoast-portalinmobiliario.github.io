function crearGaleria(imagenes, contenedorId) {
    let currentIndex = 0;
    const contenedor = document.getElementById(contenedorId);
    const img = contenedor.querySelector('img');
    
    img.src = imagenes[0];
    let touchStartX = 0;
    let touchEndX = 0;

    // Hover control
    let hoverTimer;
    contenedor.addEventListener('mouseenter', () => {
        hoverTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % imagenes.length;
            img.src = imagenes[currentIndex];
        }, 1500);
    });

    contenedor.addEventListener('mouseleave', () => {
        clearInterval(hoverTimer);
        currentIndex = 0;
        img.src = imagenes[0];
    });

    // Touch controls
    contenedor.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    contenedor.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe right
                currentIndex = currentIndex === 0 ? imagenes.length - 1 : currentIndex - 1;
            } else {
                // Swipe left
                currentIndex = (currentIndex + 1) % imagenes.length;
            }
            img.src = imagenes[currentIndex];
        }
    }
}function renderPropiedades(propiedades, contenedorId) {
        const contenedor = document.getElementById(contenedorId);
        contenedor.innerHTML = '';
        
        propiedades.forEach((propiedad, index) => {
            const estadoFumar = propiedad.smoke ? 
                '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : 
                '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
            
            const estadoMascotas = propiedad.pets ? 
                '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : 
                '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
            
            const divId = `propiedad-${contenedorId}-${index}`;
            const tarjetaPropiedad = `
                <div class="col-md-4 mb-4">
                    <div class="card" id="${divId}">
                        <div class="card-img-container">
                            <img src="${propiedad.imagenes[0]}" class="card-img-top" alt="${propiedad.nombre}"/>
                            <div class="gallery-controls">
                                <span class="gallery-counter">1/${propiedad.imagenes.length}</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${propiedad.nombre}</h5>
                            <p class="card-text">${propiedad.descripcion}</p>
                            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                            ${estadoFumar}
                            ${estadoMascotas}
                        </div>
                    </div>
                </div>
            `;
            
            contenedor.innerHTML += tarjetaPropiedad;

            setTimeout(() => {
                crearGaleria(propiedad.imagenes, divId);
            }, 0);
        });
    }

    
// aqui se inserta la función que permite renderizar 3 propiedades en el index
function renderPropiedadesIndex() {
    const propiedadesVentaLimitadas = propiedades_venta.slice(0,3);
    const propiedadesAlquilerLimitadas = propiedades_alquiler.slice(0,3);
    
    renderPropiedades(propiedadesVentaLimitadas, 'venta-grid');
    renderPropiedades(propiedadesAlquilerLimitadas, 'alquiler-grid');
}

// aqui se inserta la función que permite renderizar todas las propiedades en paginas previamente especificadas 

function renderPropiedadesPagina(tipo) {
    const propiedades = tipo === 'venta' ? propiedades_venta : propiedades_alquiler;
    renderPropiedades(propiedades, 'propiedades-grid');
}

// Evento para llamar la inicialización según la pag.
document.addEventListener('DOMContentLoaded', () => {
    const pagina = document.body.id;

    switch (pagina) {
        case 'index':
            renderPropiedadesIndex();
            break;
        case 'venta':
            renderPropiedadesPagina('venta');
            break;        
            
        case 'alquiler':
            renderPropiedadesPagina('alquiler');
            break;
}
});
function crearGaleria(imagenes, contenedorId) {
    let currentIndex = 0;
    const contenedor = document.getElementById(contenedorId);
    const img = contenedor.querySelector('img');
    
    img.src = imagenes[0];
    let touchStartX = 0;
    let touchEndX = 0;

    // Hover control
    let hoverTimer;
    contenedor.addEventListener('mouseenter', () => {
        hoverTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % imagenes.length;
            img.src = imagenes[currentIndex];
        }, 1500);
    });

    contenedor.addEventListener('mouseleave', () => {
        clearInterval(hoverTimer);
        currentIndex = 0;
        img.src = imagenes[0];
    });

    // Touch controls
    contenedor.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    contenedor.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                


                currentIndex = currentIndex === 0 ? imagenes.length - 1 : currentIndex - 1;
            } else {
               


                currentIndex = (currentIndex + 1) % imagenes.length;
            }
            img.src = imagenes[currentIndex];
        }
    }
}
