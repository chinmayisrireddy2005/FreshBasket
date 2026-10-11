// A daily countdown that resets at local midnight.
// No external timer service is needed.

(function () {

    // Update the countdown timer
    function update() {

        // Get the current time and today's midnight deadline
        const now = new Date();
        const end = new Date(now);

        end.setHours(24, 0, 0, 0);

        // Calculate the remaining time in seconds
        let seconds = Math.max(
            0,
            Math.floor((end - now) / 1000)
        );

        // Calculate hours
        const h = String(
            Math.floor(seconds / 3600)
        ).padStart(2, "0");

        seconds %= 3600;

        // Calculate minutes
        const m = String(
            Math.floor(seconds / 60)
        ).padStart(2, "0");

        // Calculate seconds
        const s = String(
            seconds % 60
        ).padStart(2, "0");

        // Get the HTML elements for the countdown
        const H = document.getElementById("hours");
        const M = document.getElementById("minutes");
        const S = document.getElementById("seconds");

        // Display the countdown values
        if (H) H.textContent = h;
        if (M) M.textContent = m;
        if (S) S.textContent = s;
    }

    // Run the countdown immediately
    update();

    // Update the countdown every second
    setInterval(update, 1000);

})();