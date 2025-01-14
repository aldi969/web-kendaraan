document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        vehicle_name: document.getElementById('vehicle-name').value,
        plate_number: document.getElementById('plate-number').value,
        service_date: document.getElementById('service-date').value,
        service_interval: document.getElementById('service-interval').value,
        fuel_date: document.getElementById('fuel-date').value,
        fuel_amount: document.getElementById('fuel-amount').value,
        fuel_type: document.getElementById('fuel-type').value,
        expense_date: document.getElementById('expense-date').value,
        expense_type: document.getElementById('expense-type').value,
        expense_amount: document.getElementById('expense-amount').value,
        next_service: document.getElementById('next-service').value,
        oil_change: document.getElementById('oil-change').value,
        tax_payment: document.getElementById('tax-payment').value,
    };

    fetch('https://your-server-endpoint/api/saveCarData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data berhasil disimpan di server');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menyimpan data');
    });
});
