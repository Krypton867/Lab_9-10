const STORAGE_KEY = "train-bookings";

export function getBookings() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveBooking(newBooking) {
  const bookings = getBookings();
  bookings.push(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function getBookedSeats(trainId, wagonId) {
  const bookings = getBookings();

  return bookings
    .filter(
      (booking) =>
        booking.trainId === trainId &&
        booking.wagonId === wagonId
    )
    .flatMap((booking) => booking.seats);
}