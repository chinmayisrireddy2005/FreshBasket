// Handle contact form submission
document.getElementById("contactForm")?.addEventListener("submit", e => {
    // Prevent the page from refreshing
    e.preventDefault();

    // Get form data
    const f = new FormData(e.target);

    // Retrieve previously saved messages
    const messages = JSON.parse(
        localStorage.getItem("fb_messages") || "[]"
    );

    // Save the new message
    messages.push({
        name: f.get("name"),
        email: f.get("email"),
        topic: f.get("topic"),
        message: f.get("message"),
        date: new Date().toISOString()
    });

    // Store messages in localStorage
    localStorage.setItem(
        "fb_messages",
        JSON.stringify(messages)
    );

    // Display the success message
    const el = document.getElementById("contactMessage");

    el.textContent =
        "Thank you! Your message has been saved in this demo.";

    el.className = "form-message success";

    // Reset the contact form
    e.target.reset();
});