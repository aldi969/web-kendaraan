document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toUpperCase();
    const carInfos = document.querySelectorAll('.car-info');

    carInfos.forEach(function(carInfo) {
        const plate = carInfo.getAttribute('data-plate');
        if (plate.includes(searchValue)) {
            carInfo.style.display = 'block';
        } else {
            carInfo.style.display = 'none';
        }
    });
});

document.querySelectorAll('.car-info').forEach(function(carInfo) {
    carInfo.addEventListener('click', function() {
        const plateNumber = this.getAttribute('data-plate');
        window.location.href = `detail.html?plate=${plateNumber}`;
    });
});

document.getElementById('profileLogo').addEventListener('click', function() {
    window.location.href = 'awal-server.html';
});
