// Carrinho de Compras Simples
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.price').textContent;
        
        alert(`Adicionado ao carrinho:\n${productName}\n${productPrice}`);
    });
});

// Menu Mobile (Opcional)
const menuToggle = document.createElement('div');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
menuToggle.classList.add('menu-toggle');
document.querySelector('.header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});