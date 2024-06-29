import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [message, setMessage] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 19°C in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
