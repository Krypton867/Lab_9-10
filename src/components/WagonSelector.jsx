function WagonSelector({ wagons, selectedWagon, setSelectedWagon }) {
  return (
    <div className="wagon-selector">
      <h3>Оберіть вагон</h3>

      <div className="wagon-list">
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            onClick={() => setSelectedWagon(wagon)}
            className={selectedWagon?.id === wagon.id ? "active" : ""}
          >
            Вагон {wagon.number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WagonSelector;