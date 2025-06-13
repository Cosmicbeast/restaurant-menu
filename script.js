document.addEventListener('DOMContentLoaded', () => {
    const finalizeOrderLink = document.querySelector('a[href="checkout.html"]');
    if (finalizeOrderLink) {
        finalizeOrderLink.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
            let orderDetails = [];
            selectedItems.forEach(checkbox => {
                const itemName = checkbox.parentElement.textContent.trim();
                const itemPrice = checkbox.parentElement.nextElementSibling.textContent;
                
                orderDetails.push(`1 x ${itemName} - ${itemPrice}`);
            });
            let orderSummaryText;
            if (orderDetails.length > 0) {
                orderSummaryText = orderDetails.join('\n');
            } else {
                orderSummaryText = 'No items were selected.';
            }
            localStorage.setItem('orderSummary', orderSummaryText);
            window.location.href = finalizeOrderLink.href;
        });
    }
    const orderTextarea = document.getElementById('Order-Items');
    if (orderTextarea) {
        const savedOrder = localStorage.getItem('orderSummary');
        if (savedOrder) {
            orderTextarea.value = savedOrder;
            localStorage.removeItem('orderSummary');
        }
    }
});