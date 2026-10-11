(() => {
    // Get the current cart
    const cart = window.FreshBasket.getCart();

    // Get the checkout message element
    const message = document.getElementById("checkoutMessage");

    // Check whether the cart is empty
    if (!cart.length) {
        message.textContent =
            "Your basket is empty. Add products before checkout.";

        message.className = "form-message error";
    }

    // Handle checkout form submission
    document.getElementById("checkoutForm")
        ?.addEventListener("submit", e => {

            // Prevent the page from refreshing
            e.preventDefault();

            // Get the latest cart data
            const current = window.FreshBasket.getCart();

            // Check whether the cart is empty
            if (!current.length) {
                message.textContent = "Your basket is empty.";
                message.className = "form-message error";
                return;
            }

            // Collect customer form data
            const f = new FormData(e.target);

            // Create the order object
            const order = {
                orderId: "FB" + Date.now().toString().slice(-8),

                name: f.get("name"),

                phone: f.get("phone"),

                address: f.get("address"),

                payment: f.get("payment"),

                items: current,

                total: current.reduce(
                    (s, i) =>
                        s +
                        i.qty *
                        (
                            window.FreshBasket.productById(i.id)?.price || 0
                        ),
                    0
                ),

                createdAt: new Date().toISOString()
            };

            // Retrieve previously saved orders
            const orders = JSON.parse(
                localStorage.getItem("fb_orders") || "[]"
            );

            // Add the new order
            orders.push(order);

            // Save orders in localStorage
            localStorage.setItem(
                "fb_orders",
                JSON.stringify(orders)
            );

            // Clear the cart from localStorage
            localStorage.removeItem("fb_cart");

            // Display the order confirmation message
            message.textContent =
                `Demo order ${order.orderId} placed successfully! ` +
                `Total: ${window.FreshBasket.money(order.total)}. ` +
                "No real payment or delivery was processed.";

            message.className = "form-message success";

            // Reset the checkout form
            e.target.reset();

            // Update the cart display
            window.FreshBasket.renderCart();

            // Display the order confirmation
            document.getElementById("checkoutItems").innerHTML = `
                <div class="success-order">
                    <h3>Thank you, ${order.name}!</h3>

                    <p>
                        Your demo order number is
                        <strong>${order.orderId}</strong>.
                    </p>
                </div>
            `;
        });
})();