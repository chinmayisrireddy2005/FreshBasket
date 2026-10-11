(() => {
    // Read registered users from localStorage
    const readUsers = () => {
        try {
            return JSON.parse(
                localStorage.getItem("fb_users") || "[]"
            );
        } catch {
            return [];
        }
    };

    // Display success or error messages
    const msg = (id, text, type) => {
        const e = document.getElementById(id);

        if (e) {
            e.textContent = text;
            e.className = "form-message " + type;
        }
    };

    // Handle account registration
    document.getElementById("registerForm")
        ?.addEventListener("submit", e => {

            // Prevent the page from refreshing
            e.preventDefault();

            // Get registration form data
            const f = new FormData(e.target);

            const name = String(f.get("name")).trim();

            const email = String(f.get("email"))
                .trim()
                .toLowerCase();

            const password = String(f.get("password"));

            const confirm = String(f.get("confirmPassword"));

            // Check whether passwords match
            if (password !== confirm) {
                msg(
                    "registerMessage",
                    "Passwords do not match.",
                    "error"
                );

                return;
            }

            // Check whether the email is already registered
            const users = readUsers();

            if (users.some(u => u.email === email)) {
                msg(
                    "registerMessage",
                    "An account with this email already exists. Please log in.",
                    "error"
                );

                return;
            }

            // Save the new user
            users.push({
                name,
                email,
                password
            });

            localStorage.setItem(
                "fb_users",
                JSON.stringify(users)
            );

            // Set the current logged-in user
            localStorage.setItem(
                "fb_current_user",
                JSON.stringify({
                    name,
                    email
                })
            );

            // Display registration success message
            msg(
                "registerMessage",
                "Account created successfully! Taking you to the home page…",
                "success"
            );

            // Reset the registration form
            e.target.reset();

            // Redirect to the home page
            setTimeout(() => {
                location.href = "index.html";
            }, 1000);
        });

    // Handle user login
    document.getElementById("loginForm")
        ?.addEventListener("submit", e => {

            // Prevent the page from refreshing
            e.preventDefault();

            // Get login form data
            const f = new FormData(e.target);

            const email = String(f.get("email"))
                .trim()
                .toLowerCase();

            const password = String(f.get("password"));

            // Find a matching registered user
            const user = readUsers().find(
                u => u.email === email && u.password === password
            );

            // Display an error if the credentials are incorrect
            if (!user) {
                msg(
                    "loginMessage",
                    "Email or password is incorrect. Check your details or create an account.",
                    "error"
                );

                return;
            }

            // Save the current logged-in user
            localStorage.setItem(
                "fb_current_user",
                JSON.stringify({
                    name: user.name,
                    email: user.email
                })
            );

            // Display login success message
            msg(
                "loginMessage",
                `Welcome back, ${user.name}! Redirecting…`,
                "success"
            );

            // Redirect to the home page
            setTimeout(() => {
                location.href = "index.html";
            }, 900);
        });
})();