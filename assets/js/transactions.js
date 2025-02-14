document.addEventListener("DOMContentLoaded", function () {
    const transactionsTable = document.getElementById("transactionsTable");

    // Simulated transaction data (Replace with actual API call)
    const transactions = [
        { name: "Alice", amount: "$50", date: "2024-02-14" },
        { name: "Bob", amount: "$100", date: "2024-02-13" },
        { name: "Charlie", amount: "$25", date: "2024-02-12" }
    ];

    transactions.forEach(txn => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${txn.name}</td><td>${txn.amount}</td><td>${txn.date}</td>`;
        transactionsTable.appendChild(row);
    });
});
