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
            });
        }
    });
});

function getViews(postKey) {
    const viewsData = JSON.parse(localStorage.getItem('viewsData')) || {};
    return viewsData[postKey] || 0;
}

function incrementViews(postKey) {
    const viewsData = JSON.parse(localStorage.getItem('viewsData')) || {};
    viewsData[postKey] = (viewsData[postKey] || 0) + 1;
    localStorage.setItem('viewsData', JSON.stringify(viewsData));
}

function updateCardViews() {
    const cards = document.querySelectorAll('.card');
    const viewsData = JSON.parse(localStorage.getItem('viewsData')) || {};

    cards.forEach(card => {
        const link = card.querySelector('a');
        if (link) {
            const postKey = getPostKeyFromHref(link.href);
            const currentViews = viewsData[postKey] || 0;
            const contagemElement = card.querySelector('.contagem');

            if (contagemElement) {
                let visualizacaoText = currentViews === 1 ? "Visualização" : "Visualizações";
                contagemElement.textContent = `${currentViews} ${visualizacaoText}`;
            }
        }
    });
}
