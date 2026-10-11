(() => {
    // Format prices in Indian Rupees
    const money = n => "₹" + Number(n).toLocaleString("en-IN");

    // Get cart data from localStorage
    const getCart = () => {
        try {
            return JSON.parse(localStorage.getItem("fb_cart") || "[]");
        } catch {
            return [];
        }
    };

    // Save cart data and update the cart display
    const saveCart = cart => {
        localStorage.setItem("fb_cart", JSON.stringify(cart));
        renderCart();
    };

    // Display temporary notification messages
    const toast = msg => {
        const el = document.getElementById("toast");

        if (!el) return;

        el.textContent = msg;
        el.classList.add("show");

        clearTimeout(window.fbToastTimer);

        window.fbToastTimer = setTimeout(
            () => el.classList.remove("show"),
            2400
        );
    };

    // Find a product using its ID
    const productById = id =>
        PRODUCTS.find(p => p.id === Number(id));

    // Create a product card
    function card(p) {
        const sale = p.offer
            ? `<span class="product-badge">
                   ${Math.round(
                       ((p.oldPrice - p.price) / p.oldPrice) * 100
                   )}% OFF
               </span>`
            : "";

        return `
            <article class="product-card">

                <div class="product-image-wrap">
                    ${sale}

                    <img
                        class="product-image"
                        src="${p.image}"
                        alt="${p.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='${
                            p.category === "Dairy"
                                ? "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=650&q=80"
                                : p.category === "Fruits"
                                ? "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=650&q=80"
                                : p.category === "Leafy Vegetables"
                                ? "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=650&q=80"
                                : "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=650&q=80"
                        }'"
                    >
                </div>

                <div class="product-info">

                    <span class="product-category">
                        ${p.category}
                    </span>

                    <h3>${p.name}</h3>

                    <div class="product-unit">
                        ${p.unit}
                    </div>

                    <div class="product-buy">

                        <div class="price">
                            ${money(p.price)}

                            ${
                                p.offer
                                    ? `<span class="old-price">
                                           ${money(p.oldPrice)}
                                       </span>`
                                    : ""
                            }
                        </div>

                        <button
                            class="add-button"
                            data-add="${p.id}"
                        >
                            + Add
                        </button>

                    </div>

                </div>

            </article>
        `;
    }

    // Display products inside a specified HTML element
    function renderProducts(target, products) {
        const el = document.getElementById(target);

        if (el) {
            el.innerHTML =
                products.map(card).join("") ||
                '<p class="muted">No products found. Try another search.</p>';
        }
    }

    // Update the cart, subtotal, item count, and checkout summary
    function renderCart() {
        const cart = getCart();

        const count = cart.reduce(
            (s, i) => s + i.qty,
            0
        );

        const subtotal = cart.reduce(
            (s, i) =>
                s + i.qty * (productById(i.id)?.price || 0),
            0
        );

        // Update cart count in the header
        document.querySelectorAll("#cartCount").forEach(e => {
            e.textContent = count;
        });

        // Update cart drawer count
        const dc = document.getElementById("drawerCount");

        if (dc) {
            dc.textContent = `(${count})`;
        }

        // Update cart subtotal
        const sub = document.getElementById("cartSubtotal");

        if (sub) {
            sub.textContent = money(subtotal);
        }

        // Display cart items
        const items = document.getElementById("cartItems");
        const empty = document.getElementById("cartEmpty");

        if (items) {
            items.innerHTML = cart.map(i => {
                const p = productById(i.id);

                if (!p) return "";

                return `
                    <div class="cart-item">

                        <img
                            src="${p.image}"
                            alt="${p.name}"
                            onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=70'"
                        >

                        <div>
                            <h4>${p.name}</h4>

                            <div class="unit">
                                ${money(p.price)} · ${p.unit}
                            </div>

                            <div class="qty-controls">

                                <button
                                    data-qty="${p.id}"
                                    data-change="-1"
                                    aria-label="Decrease quantity"
                                >
                                    −
                                </button>

                                <span>${i.qty}</span>

                                <button
                                    data-qty="${p.id}"
                                    data-change="1"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>

                            </div>
                        </div>

                        <div>
                            <div class="line-price">
                                ${money(p.price * i.qty)}
                            </div>

                            <button
                                class="remove-item"
                                data-remove="${p.id}"
                                aria-label="Remove ${p.name}"
                            >
                                Remove
                            </button>
                        </div>

                    </div>
                `;
            }).join("");
        }

        // Show or hide the empty cart message
        if (empty) {
            empty.style.display = cart.length ? "none" : "flex";
        }

        if (items) {
            items.style.display = cart.length ? "block" : "none";
        }

        // Enable or disable checkout
        const checkout = document.getElementById("checkoutBtn");

        if (checkout) {
            checkout.disabled = !cart.length;
        }

        // Display checkout order summary
        const ci = document.getElementById("checkoutItems");

        if (ci) {
            ci.innerHTML = cart.map(i => {
                const p = productById(i.id);

                return p
                    ? `
                        <div class="summary-item">

                            <img
                                src="${p.image}"
                                alt="${p.name}"
                            >

                            <div>
                                <strong>${p.name}</strong>

                                <small>
                                    Qty ${i.qty} · ${money(p.price)} each
                                </small>
                            </div>

                            <b>${money(p.price * i.qty)}</b>

                        </div>
                    `
                    : "";
            }).join("");
        }

        // Update checkout subtotal
        const cs = document.getElementById("checkoutSubtotal");

        if (cs) {
            cs.textContent = money(subtotal);
        }
    }

    // Add a product to the cart
    function add(id) {
        const cart = getCart();

        const found = cart.find(
            i => i.id === Number(id)
        );

        if (found) {
            found.qty++;
        } else {
            cart.push({
                id: Number(id),
                qty: 1
            });
        }

        saveCart(cart);

        const p = productById(id);

        toast(`${p?.name || "Product"} added to your basket`);
    }

    // Handle add, quantity, and remove button clicks
    function cartAction(e) {
        // Add product
        const addBtn = e.target.closest("[data-add]");

        if (addBtn) {
            add(addBtn.dataset.add);
            return;
        }

        // Change product quantity
        const qty = e.target.closest("[data-qty]");

        if (qty) {
            const id = Number(qty.dataset.qty);
            const change = Number(qty.dataset.change);

            const cart = getCart();

            const item = cart.find(i => i.id === id);

            if (item) {
                item.qty += change;

                saveCart(
                    cart.filter(i => i.qty > 0)
                );
            }

            return;
        }

        // Remove product from cart
        const remove = e.target.closest("[data-remove]");

        if (remove) {
            saveCart(
                getCart().filter(
                    i => i.id !== Number(remove.dataset.remove)
                )
            );

            toast("Product removed from your basket");
        }
    }

    // Open the cart drawer
    function openCart() {
        document.getElementById("cartDrawer")?.classList.add("open");

        document.getElementById("cartOverlay")?.classList.add("open");

        document.body.style.overflow = "hidden";
    }

    // Close the cart drawer
    function closeCart() {
        document.getElementById("cartDrawer")?.classList.remove("open");

        document.getElementById("cartOverlay")?.classList.remove("open");

        document.body.style.overflow = "";
    }

    // Handle cart-related button clicks
    document.addEventListener("click", cartAction);

    // Cart open and close events
    document.getElementById("openCart")
        ?.addEventListener("click", openCart);

    document.getElementById("closeCart")
        ?.addEventListener("click", closeCart);

    document.getElementById("cartOverlay")
        ?.addEventListener("click", closeCart);

    // Navigate to checkout
    document.getElementById("checkoutBtn")
        ?.addEventListener("click", () => {
            if (!getCart().length) {
                toast("Your basket is empty");
                return;
            }

            location.href = "checkout.html";
        });

    // Toggle the mobile navigation menu
    document.getElementById("menuToggle")
        ?.addEventListener("click", () => {
            document.getElementById("mainNav")
                ?.classList.toggle("open");
        });

    // Update the copyright year
    document.querySelectorAll(".year").forEach(e => {
        e.textContent = new Date().getFullYear();
    });

    // Render products on the home page
    const home = document.getElementById("homeProducts");

    if (home) {
        renderProducts(
            "homeProducts",
            PRODUCTS.filter(p =>
                [1, 2, 9, 10, 17, 23, 25, 3].includes(p.id)
            )
        );
    }

    // Shop page: category filters and product search
    const shop = document.getElementById("shopProducts");

    if (shop) {
        let filter = "All";
        let query = "";

        const update = () => {
            renderProducts(
                "shopProducts",
                PRODUCTS.filter(p =>
                    (filter === "All" || p.category === filter) &&
                    (`${p.name} ${p.category}`)
                        .toLowerCase()
                        .includes(query.toLowerCase())
                )
            );
        };

        // Category filter buttons
        document.getElementById("categoryFilters")
            ?.addEventListener("click", e => {
                const b = e.target.closest("[data-filter]");

                if (!b) return;

                filter = b.dataset.filter;

                document.querySelectorAll(".filter-tab").forEach(t => {
                    t.classList.toggle("active", t === b);
                });

                update();
            });

        // Product search input
        document.getElementById("productSearch")
            ?.addEventListener("input", e => {
                query = e.target.value;
                update();
            });

        update();
    }

    // Render discounted products on the offers page
    const offers = document.getElementById("offerProducts");

    if (offers) {
        renderProducts(
            "offerProducts",
            PRODUCTS.filter(p => p.offer)
        );
    }

    // Initialize the cart when the page loads
    renderCart();

    // Expose shared functions for other JavaScript files
    window.FreshBasket = {
        getCart,
        saveCart,
        productById,
        money,
        toast,
        renderCart
    };
})();