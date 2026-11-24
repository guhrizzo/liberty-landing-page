import('./main.jsx').catch((error) => {
    console.error('Falha ao carregar o site.', error);
    document.getElementById('preloader-bar').remove();
    document.getElementById('preloader-message').textContent =
        'Não foi possível carregar o site. Atualize a página para tentar novamente.';
});
