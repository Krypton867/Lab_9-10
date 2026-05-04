import TrainCard from "./TrainCard";
import trains from "../data/trains";

function TrainList() {
  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;