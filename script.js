function getPostKeyFromHref(href) {
    const cleanHref = href.split('?')[0].split('#')[0];
    const postKey = cleanHref.substring(cleanHref.lastIndexOf('/') + 1, cleanHref.lastIndexOf('.'));
    return postKey + '_views';
}

document.addEventListener('DOMContentLoaded', function() {
    const categorias = document.querySelectorAll('.categoria');
    const destaque = document.querySelector('.destaque');
    const cards = document.querySelectorAll('.card');

    function filtrarCategoria(categoriaSelecionada) {
        cards.forEach(card => {
            if (categoriaSelecionada === 'todas') {
                card.style.display = 'block'; 
            } else if (card.classList.contains(categoriaSelecionada)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }

    destaque.addEventListener('click', function() {
        filtrarCategoria('todas');
    });

    categorias.forEach(categoria => {
        categoria.addEventListener('click', function() {
            const categoriaSelecionada = this.getAttribute('data-categoria');
            filtrarCategoria(categoriaSelecionada);
        });
    });
});


function getViews(postKey) {
    return parseInt(localStorage.getItem(postKey)) || 0;
}

function incrementViews(postKey) {
   
    let currentViews = getViews(postKey);
    currentViews += 1;
    localStorage.setItem(postKey, currentViews);
}

function updateCardViews() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const link = card.querySelector('a'); 
        if (link) {
            const postKey = getPostKeyFromHref(link.href);
            const currentViews = getViews(postKey); 
            const contagemElement = card.querySelector('.contagem'); 

            if (contagemElement) {
               
                contagemElement.textContent = `${currentViews} visualizações`; 
;

                contagemElement.style.fontSize = '0.8em';
                contagemElement.style.marginLeft = '5px';

                link.addEventListener('click', function (event) {
                    
                    incrementViews(postKey);

                    window.location.href = link.href;
                });
            }
        }
    });
}

window.onload = function () {
    updateCardViews();
}