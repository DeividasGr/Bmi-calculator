import { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const initialState = {
  weight: '',
  height: '',
  date: '',
};

function BmiForm({ change }) {
  const [personalData, setPersonalData] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (value > 999) {
      value = 999;
    }

    const date = new Date().toLocaleString().split(',')[0];

    setPersonalData({ ...personalData, [name]: value, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    change(personalData);
    setPersonalData(initialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__inputs">
        <div className="form__input-box">
          <label htmlFor="weight">Weight in kg</label>
          <input
            id="weight"
            name="weight"
            type="number"
            min="1"
            max="999"
            placeholder="50"
            value={personalData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="form__input-box">
          <label htmlFor="height">Height in cm</label>
          <input
            id="height"
            name="height"
            type="number"
            min="1"
            max="999"
            placeholder="176"
            value={personalData.height}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="calculate-btn"
        type="submit"
        disabled={personalData.weight === '' || personalData.height === ''}
        onClick={handleSubmit}
      >
        Calculate BMI
      </button>
    </form>
  );
}

BmiForm.propTypes = {
  change: PropTypes.func.isRequired,
};

export default BmiForm;
