import TrainCard from "./TrainCard";

function TrainList() {
  const trains = [
    {
      id: 1,
      number: "091К",
      from: "Львів",
      to: "Київ",
      departure: "10.05.2026 22:15",
      duration: "7 год 45 хв",
    },
    {
      id: 2,
      number: "715Л",
      from: "Київ",
      to: "Львів",
      departure: "11.05.2026 06:30",
      duration: "5 год 20 хв",
    },
    {
      id: 3,
      number: "043Д",
      from: "Львів",
      to: "Одеса",
      departure: "12.05.2026 21:00",
      duration: "10 год 15 хв",
    },
  ];

  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;