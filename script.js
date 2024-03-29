document.addEventListener("DOMContentLoaded", function () {
    // Set the date
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = newYearDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById(
            "countdown"
        ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left.`;

        // If the countdown is over, display this message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("year").innerHTML = "Happy New Year!!!";
        }
    }, 1000);
});
