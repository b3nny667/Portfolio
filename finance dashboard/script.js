// Sample transaction data
const sampleTransactions = [
    { id: 1, description: "Salary", amount: 3000, category: "income", date: "2023-06-01" },
    { id: 2, description: "Freelance Work", amount: 200, category: "income", date: "2023-06-05" },
    { id: 3, description: "Rent", amount: 1000, category: "housing", date: "2023-06-01" },
    { id: 4, description: "Groceries", amount: 150.25, category: "food", date: "2023-06-02" },
    { id: 5, description: "Dinner Out", amount: 45.50, category: "food", date: "2023-06-03" },
    { id: 6, description: "Movie Tickets", amount: 25, category: "entertainment", date: "2023-06-04" },
    { id: 7, description: "Gas", amount: 38.50, category: "transport", date: "2023-06-05" },
    { id: 8, description: "Phone Bill", amount: 60, category: "other", date: "2023-06-05" },
    { id: 9, description: "Gym Membership", amount: 30, category: "other", date: "2023-06-05" },
    { id: 10, description: "Coffee", amount: 12, category: "food", date: "2023-06-06" }
];

// DOM Elements
const transactionList = document.getElementById('transaction-list');
const transactionForm = document.getElementById('transaction-form');
const themeToggle = document.getElementById('theme-toggle');
const balanceElement = document.getElementById('balance');
const incomeElement = document.getElementById('income');
const expensesElement = document.getElementById('expenses');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTransactions();
    updateSummary();
    initChart();
    setupThemeToggle();
});

// Render transactions
function renderTransactions() {
    transactionList.innerHTML = '';
    
    sampleTransactions.forEach(transaction => {
        const transactionElement = document.createElement('div');
        transactionElement.className = 'transaction';
        
        const isIncome = transaction.category === 'income';
        const amountClass = isIncome ? 'positive' : 'negative';
        const amountPrefix = isIncome ? '+' : '-';
        
        transactionElement.innerHTML = `
            <div>
                <strong>${transaction.description}</strong>
                <br>
                <small>${new Date(transaction.date).toLocaleDateString()}</small>
            </div>
            <div>
                <span class="amount ${amountClass}">${amountPrefix}$${Math.abs(transaction.amount).toFixed(2)}</span>
                <span class="category">${transaction.category}</span>
            </div>
        `;
        
        transactionList.appendChild(transactionElement);
    });
}

// Update summary cards
function updateSummary() {
    const income = sampleTransactions
        .filter(t => t.category === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const expenses = sampleTransactions
        .filter(t => t.category !== 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const balance = income - expenses;
    
    balanceElement.textContent = `$${balance.toFixed(2)}`;
    incomeElement.textContent = `$${income.toFixed(2)}`;
    expensesElement.textContent = `$${expenses.toFixed(2)}`;
}

// Initialize chart
function initChart() {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    
    // Group expenses by category
    const categories = {};
    sampleTransactions
        .filter(t => t.category !== 'income')
        .forEach(t => {
            categories[t.category] = (categories[t.category] || 0) + t.amount;
        });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories),
                backgroundColor: [
                    '#00b894',
                    '#0984e3',
                    '#6c5ce7',
                    '#fdcb6e',
                    '#e17055'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-color')
                    }
                }
            }
        }
    });
}

// Theme toggle
function setupThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        themeToggle.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
    
    // Set initial icon
    themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// Form submission (would be connected to real functionality)
transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('In a real app, this would add a new transaction!');
    transactionForm.reset();
});
