import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);
  const handleCurrencyChange = (event) => {
    setNewCurrency(event.target.value);
  };

  return (
    <div
      className="input-group mb-3"
      style={{
        backgroundColor: "#94E59B",
        padding: "1rem",
        borderRadius: "5px",
        marginTop: "15px",
      }}
    >
      <select
        className="custom-select"
        id="inputGroupSelect01"
        onChange={handleCurrencyChange}
      >
        <option defaultValue>{newCurrency}</option>
        <option value="Dollar" name="dollar">
          {" "}
          ＄Dollar
        </option>
        <option value="Pound" name="pound">
          £ Pound
        </option>
        <option value="euro" name="euro">
          € Euro
        </option>
        <option value="Rupee" name="rupee">
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Currency;
