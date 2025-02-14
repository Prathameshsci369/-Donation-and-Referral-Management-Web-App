document.addEventListener("DOMContentLoaded", function () {
    // Simulated user data
    const userName = "John Doe";  // Replace with actual logged-in user data
    const referralCode = "ABC123";  // Replace with actual referral code
    const donationLink = `https://yourdonationplatform.com/donate?ref=${referralCode}`;

    document.getElementById("userName").textContent = userName;
    document.getElementById("refCode").textContent = referralCode;

    // Copy donation link to clipboard
    document.getElementById("copyLink").addEventListener("click", function () {
        navigator.clipboard.writeText(donationLink).then(() => {
            alert("Donation link copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });

    // Share donation link via WhatsApp
    document.getElementById("shareWhatsApp").addEventListener("click", function () {
        const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link: ${donationLink}`;
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    });

    // Simulated goal achievement amount (Replace with API call)
    const goalAchieved = "$500";  // Example amount
    document.getElementById("goalAchieved").textContent = goalAchieved;
});
