function openLocationModal() {
    document.getElementById('locationModal').classList.add('active');
}

function closeLocationModal() {
    document.getElementById('locationModal').classList.remove('active');
}

function closeOnOverlay(event) {
    if (event.target.id === 'locationModal') {
        closeLocationModal();
    }
}
