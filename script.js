document.addEventListener("DOMContentLoaded", function () {
    // Set the date for New Year's Day
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();

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
        ).innerHTML = `${days} kun ${hours} soat ${minutes} daqiqa ${seconds} soniya qoldi.`;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("year").innerHTML =
                "Yangi yilingiz bilan!!!";
        }
    }, 1000);
});
