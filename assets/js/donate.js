document.addEventListener("DOMContentLoaded", function () {
    const donateForm = document.getElementById("donateForm");

    donateForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent actual form submission

        const donorName = document.getElementById("donorName").value;
        const amount = document.getElementById("amount").value;
        const referralCode = new URLSearchParams(window.location.search).get("ref") || "N/A";

        if (!donorName || !amount) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate sending donation data to a server (Replace with actual API call)
        console.log("Donation submitted:", { donorName, amount, referralCode });

        alert(`Thank you, ${donorName}, for your generous donation of ${amount}!`);

        // Reset form fields
        donateForm.reset();
    });
});
