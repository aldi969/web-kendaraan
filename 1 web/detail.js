const urlParams = new URLSearchParams(window.location.search);
const plateNumber = urlParams.get('plate');

const carData = [
    {
        vehicle_name: "Mobil 1",
        plate_number: "B1234XYZ",
        service_date: "2023-04-06",
        service_interval: 10000,
        fuel_date: "2023-04-06",
        fuel_amount: 50,
        fuel_type: "Pertamax",
        expense_date: "2023-04-06",
        expense_type: "Servis",
        expense_amount: 500000,
        next_service: "2023-10-06",
        oil_change: "2023-07-06",
        tax_payment: "2024-04-06",
        additionalInfo: {
            fuelDate: "2023-07-15",
            interiorCondition: "Baik",
            exteriorCondition: "Baik",
            damage: "Tidak ada"
        }
    },
    {
        vehicle_name: "Mobil 2",
        plate_number: "B5678ABC",
        service_date: "2023-05-12",
        service_interval: 12000,
        fuel_date: "2023-05-12",
        fuel_amount: 40,
        fuel_type: "Pertalite",
        expense_date: "2023-05-12",
        expense_type: "Servis",
        expense_amount: 600000,
        next_service: "2023-11-12",
        oil_change: "2023-08-12",
        tax_payment: "2024-05-12",
        additionalInfo: {
            fuelDate: "2023-08-20",
            interiorCondition: "Baik",
            exteriorCondition: "Baik",
            damage: "Tidak ada"
        }
    },
    {
        vehicle_name: "Mobil 3",
        plate_number: "B8765DEF",
        service_date: "2023-06-15",
        service_interval: 9000,
        fuel_date: "2023-06-15",
        fuel_amount: 60,
        fuel_type: "Pertamax",
        expense_date: "2023-06-15",
        expense_type: "Ganti Ban",
        expense_amount: 800000,
        next_service: "2023-12-15",
        oil_change: "2023-09-15",
        tax_payment: "2024-06-15",
        additionalInfo: {
            fuelDate: "2023-09-10",
            interiorCondition: "Baik",
            exteriorCondition: "Baik",
            damage: "Tidak ada"
        }
    },
    {
        vehicle_name: "Mobil 4",
        plate_number: "B4321GHI",
        service_date: "2023-07-20",
        service_interval: 15000,
        fuel_date: "2023-07-20",
        fuel_amount: 55,
        fuel_type: "Solar",
        expense_date: "2023-07-20",
        expense_type: "Servis",
        expense_amount: 700000,
        next_service: "2024-01-20",
        oil_change: "2023-10-20",
        tax_payment: "2024-07-20",
        additionalInfo: {
            fuelDate: "2023-10-05",
            interiorCondition: "Baik",
            exteriorCondition: "Baik",
            damage: "Tidak ada"
        }
    }
];

function displayCarDetails() {
    const car = carData.find(c => c.plate_number === plateNumber);
    if (car) {
        document.getElementById('car-detail').innerHTML = `
            <h2>${car.vehicle_name}</h2>
            <p>Plat Nomor: ${car.plate_number}</p>
            <p>Tanggal Servis Terakhir: ${car.service_date}</p>
            <p>Servis Berkala: ${car.service_interval} KM</p>
            <p>Tanggal Pengisian Terakhir: ${car.fuel_date}</p>
            <p>Jumlah BBM: ${car.fuel_amount} Liter</p>
            <p>Jenis BBM: ${car.fuel_type}</p>
            <p>Tanggal Pengeluaran: ${car.expense_date}</p>
            <p>Jenis Pengeluaran: ${car.expense_type}</p>
            <p>Jumlah Pengeluaran: ${car.expense_amount}</p>
            <p>Jadwal Servis Berikutnya: ${car.next_service}</p>
            <p>Jadwal Ganti Oli: ${car.oil_change}</p>
            <p>Jadwal Pembayaran Pajak: ${car.tax_payment}</p>
            ${car.additionalInfo ? `
            <p><strong>Kapan Isi Bensin:</strong> ${car.additionalInfo.fuelDate}</p>
            <p><strong>Kondisi Interior:</strong> ${car.additionalInfo.interiorCondition}</p>
            <p><strong>Kondisi Eksterior:</strong> ${car.additionalInfo.exteriorCondition}</p>
            <p><strong>Kerusakan Mobil:</strong> ${car.additionalInfo.damage}</p>
            ` : ''}
        `;
    } else {
        alert('Data tidak ditemukan');
    }
}

document.getElementById('addInfoBtn').onclick = function() {
    document.getElementById('modal').style.display = "block";
};

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fuelDate = document.getElementById('fuelDate').value;
    const interiorCondition = document.getElementById('interiorCondition').value;
    const exteriorCondition = document.getElementById('exteriorCondition').value;
    const damage = document.getElementById('damage').value;

    const car = carData.find(c => c.plate_number === plateNumber);
    if (car) {
        car.additionalInfo = { fuelDate, interiorCondition, exteriorCondition, damage };
        document.getElementById('modal').style.display = "none";
        displayCarDetails();
    }
});

displayCarDetails(); 

function goBack() {
    window.history.back();
}
