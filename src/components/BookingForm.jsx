import { useState } from "react";

function BookingForm({ selectedSeats }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введіть ім’я";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введіть номер телефону";
    } else if (!/^\+?[0-9]{10,13}$/.test(formData.phone)) {
      newErrors.phone = "Некоректний номер телефону";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введіть email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некоректний email";
    }

    if (selectedSeats.length === 0) {
      newErrors.seats = "Оберіть хоча б одне місце";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Бронювання успішне!");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Дані пасажира</h3>

      <input
        type="text"
        name="name"
        placeholder="Ім’я"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="text"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      {errors.seats && <p className="error">{errors.seats}</p>}

      <button type="submit">Забронювати</button>
    </form>
  );
}

export default BookingForm;