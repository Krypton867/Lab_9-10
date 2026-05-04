function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>Потяг №{train.number}</h2>
      <p>
        {train.from} → {train.to}
      </p>
      <p>Відправлення: {train.departure}</p>
      <p>Тривалість: {train.duration}</p>
      <button>Обрати місце</button>
    </div>
  );
}

export default TrainCard;