let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-a');
    navbar.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const location = document.getElementById('location').value;
        const pickUpDate = document.getElementById('pickUpDate').value;
        const returnDate = document.getElementById('returnDate').value;

        if (!location || !pickUpDate || !returnDate) {
            alert('Please fill in all fields.');
            return;
        }

        const bookingDetails = {
            location: location,
            pickUpDate: pickUpDate,
            returnDate: returnDate
        };

        alert(`Please proceed to Payment page!\nLocation: ${bookingDetails.location}\nPick-Up Date: ${bookingDetails.pickUpDate}\nReturn Date: ${bookingDetails.returnDate}`);
        
    
    });
});