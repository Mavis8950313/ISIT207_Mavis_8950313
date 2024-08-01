document.addEventListener('DOMContentLoaded', () => {
    const carName = localStorage.getItem('carName');
    const carRate = localStorage.getItem('carRate');

    if (!carName || !carRate) {
        alert('No car selected. Please select a car from the previous page.');
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('carInfo').textContent = `You are renting: ${carName}`;
    document.getElementById('costPerDay').value = `$${carRate} per day`;

    const paymentForm = document.getElementById('paymentForm');
    const payNowBtn = document.getElementById('payNowBtn');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const pickUpDateTime = new Date(document.getElementById('pickUpDateTime').value);
        const returnDateTime = new Date(document.getElementById('returnDateTime').value);
        const costPerDay = parseFloat(carRate);

        if (pickUpDateTime >= returnDateTime) {
            alert('Return date and time must be after pick-up date and time.');
            return;
        }

        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const days = Math.ceil((returnDateTime - pickUpDateTime) / millisecondsPerDay);
        const totalCost = (days * costPerDay).toFixed(2);

        document.getElementById('totalCost').value = `$${totalCost}`;
    });

    payNowBtn.addEventListener('click', () => {
        // Save the total cost to localStorage or pass it as query parameters
        localStorage.setItem('totalCost', document.getElementById('totalCost').value);
        window.location.href = 'payment.html'; // Final payment confirmation page
    });

});