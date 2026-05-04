import { useState } from "react";
import TrainCard from "./TrainCard";
import trains from "../data/trains";

function TrainList() {
  const [search, setSearch] = useState("");

  const filteredTrains = trains.filter((train) => {
    const query = search.toLowerCase();

    return (
      train.number.toLowerCase().includes(query) ||
      train.from.toLowerCase().includes(query) ||
      train.to.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      {/* Пошук */}
      <input
        type="text"
        placeholder="Пошук за номером або містом..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Список */}
      <div className="train-list">
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <p>Рейсів не знайдено</p>
        )}
      </div>
    </div>
  );
}

export default TrainList;