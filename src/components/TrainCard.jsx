import { useNavigate } from "react-router-dom";

function TrainCard({ train }) {
  const navigate = useNavigate();

  return (
    <div className="train-card">
      <h2>Потяг №{train.number}</h2>
      <p>
        {train.from} → {train.to}
      </p>
      <p>Відправлення: {train.departure}</p>
      <p>Тривалість: {train.duration}</p>

      <button onClick={() => navigate(`/booking/${train.id}`)}>
        Обрати місце
      </button>
    </div>
  );
}

export default TrainCard;