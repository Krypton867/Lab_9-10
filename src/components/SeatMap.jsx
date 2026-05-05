function SeatMap({ seats, selectedSeats, setSelectedSeats }) {
  const toggleSeat = (seat) => {
    if (seat.status === "booked") return;

    const isSelected = selectedSeats.includes(seat.id);

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  const getClass = (seat) => {
    if (seat.status === "booked") return "booked";
    if (selectedSeats.includes(seat.id)) return "selected";
    return "free";
  };

  return (
    <div>
      <h3>Оберіть місця</h3>

      <div className="seat-grid">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${getClass(seat)}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat.number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatMap;