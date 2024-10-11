function getPostKeyFromHref(href) {
    const cleanHref = href.split('?')[0].split('#')[0];
    const postKey = cleanHref.substring(cleanHref.lastIndexOf('/') + 1, cleanHref.lastIndexOf('.'));
    return postKey + '_views';
}

document.addEventListener('DOMContentLoaded', function () {
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

    destaque.addEventListener('click', function () {
        filtrarCategoria('todas');
    });

    categorias.forEach(categoria => {
        categoria.addEventListener('click', function () {
            const categoriaSelecionada = this.getAttribute('data-categoria');
            filtrarCategoria(categoriaSelecionada);
        });
    });

    updateCardViews();

    cards.forEach(card => {
        const link = card.querySelector('a');
        if (link) {
            link.addEventListener('click', function () {
                const postKey = getPostKeyFromHref(link.href);
                incrementViews(postKey);
                updateCardViews();
            });
        }
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
                let visualizacaoText = currentViews === 1 ? "Visualização" : "Visualizações";
                contagemElement.textContent = `${currentViews} ${visualizacaoText}`;
                contagemElement.style.fontSize = '1em';
                contagemElement.style.marginLeft = '5px';
            }
        }
    });
}
