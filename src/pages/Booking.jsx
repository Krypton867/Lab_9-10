import { useParams } from "react-router-dom";
import trains from "../data/trains";

function Booking() {
  const { trainId } = useParams();

  const train = trains.find((t) => t.id === Number(trainId));

  if (!train) {
    return <h2>Потяг не знайдено</h2>;
  }

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
    </div>
  );
}

export default Booking;