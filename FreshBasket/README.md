# FreshBasket — Minimal Grocery Storefront

A responsive, static grocery e-commerce prototype with:
- Home page
- Account creation and login pages
- Product catalogue with 30 products across fruits, vegetables, leafy vegetables and dairy
- Offers page with a countdown timer that resets at local midnight
- Search and category filters
- Working cart drawer, quantity controls, remove item and subtotal
- Demo checkout and order history saved locally
- Contact form that saves demo messages locally
- Responsive desktop and mobile navigation

## Run the website
1. Extract `FreshBasket.zip`.
2. Open the `FreshBasket` folder.
3. Double-click `index.html`, or use VS Code Live Server for the best experience.

No npm installation or API key is required. Product photos load from Unsplash and therefore require an internet connection. A fallback photo is used if a product image fails.

## Important prototype notes
- This is a front-end demo. Accounts, cart, messages and demo orders are saved in browser `localStorage`.
- Passwords are stored locally in plain text. Do not use real or reused passwords. This is not suitable for production.
- Checkout is simulated. No real payment, delivery booking, email, or backend order processing occurs.
- Product prices and discounts are illustrative and should be verified before using this as a real store.
- To make this production-ready, add a secure backend, password hashing, database, server-side validation, payment gateway, and real fulfilment integration.

## Latest requested updates
- Added a bright green, three-column footer inspired by the supplied reference image: brand/social links, locations, quick links, and centered copyright line.
- Added a clear Create account action on the home page.
- Product catalogue uses separate entries and distinct photo URLs wherever practical. Photos are served remotely and require internet access.


## Product image correction
Product image URLs have been reassigned by product ID to reduce incorrect category/product matches seen in screenshots. Images are external Unsplash URLs, so availability and exact photo matching can still vary. For a fully reliable offline store, replace them with verified local image files in the `images/` directory.


## Product image consistency fix
All 30 products now use local, product-labelled SVG thumbnails. Each image shows the same product name as its product card, so unrelated external photos cannot appear by mistake. These thumbnails work offline. You can replace individual SVGs with verified photographs later while keeping the same filenames.
