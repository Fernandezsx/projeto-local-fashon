document.addEventListener('DOMContentLoaded', function() {
    // Controles de Quantidade
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const isMinus = this.classList.contains('minus');
            const quantityElement = isMinus ? this.nextElementSibling : this.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            
            if (isMinus && quantity > 1) {
                quantityElement.textContent = quantity - 1;
            } else if (!isMinus) {
                quantityElement.textContent = quantity + 1;
            }
            
            updateTotals();
        });
    });

    // Remover Itens
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Remover este item do carrinho?')) {
                this.closest('.cart-item').remove();
                updateTotals();
            }
        });
    });

    // Atualizar Totais
    function updateTotals() {
        let subtotal = 0;
        
        document.querySelectorAll('.cart-item').forEach(item => {
            const priceText = item.querySelector('.item-price').textContent;
            const price = parseFloat(priceText.replace('R$ ', '').replace('.', '').replace(',', '.'));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            subtotal += price * quantity;
        });
        
        const formattedSubtotal = subtotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        document.querySelector('.subtotal').textContent = formattedSubtotal;
        document.querySelector('.total-price').textContent = formattedSubtotal;
    }

    // Inicializa totais
    updateTotals();
});