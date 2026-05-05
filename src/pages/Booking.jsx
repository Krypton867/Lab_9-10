import { useState } from "react";
import { useParams } from "react-router-dom";
import trains from "../data/trains";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { getBookedSeats } from "../services/BookingService";

function Booking() {
  const { trainId } = useParams();

  const train = trains.find((t) => t.id === Number(trainId));

  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!train) return <h2>Потяг не знайдено</h2>;

  const mergedSeats = selectedWagon
    ? selectedWagon.seats.map((seat) => ({
        ...seat,
        status: getBookedSeats(train.id, selectedWagon.id).includes(seat.id)
          ? "booked"
          : seat.status,
      }))
    : [];

  return (
    <div className="container">
      <h1>Бронювання квитків</h1>

      <div className="train-card">
        <h2>Потяг №{train.number}</h2>
        <p>
          {train.from} → {train.to}
        </p>
        <p>Відправлення: {train.departure}</p>
        <p>Тривалість: {train.duration}</p>
      </div>

      <WagonSelector
        wagons={train.wagons}
        selectedWagon={selectedWagon}
        setSelectedWagon={setSelectedWagon}
      />

      {selectedWagon && (
        <>
          <SeatMap
            seats={mergedSeats}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />

          <BookingForm
            train={train}
            selectedWagon={selectedWagon}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
        </>
      )}
    </div>
  );
}

export default Booking;