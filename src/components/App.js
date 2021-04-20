import { useState, useEffect } from 'react';
import BmiForm from './BmiForm';
import Bar from './Bar';
import Info from './Info';
import { getData, storeData } from '../helpers/localStorage';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData('data', state);
    const date = state.map((obj) => obj.date);
    const bmi = state.map((obj) => obj.bmi);
    const newData = { date, bmi };
    setData(newData);
  }, [state]);

  const handleChange = (value) => {
    const heightInMeters = value.height / 100;
    value.bmi = (value.weight / (heightInMeters * heightInMeters)).toFixed(2);
    value.id = uuidv4();
    let newValue = [...state, value];
    const valueArrayLength = newValue.length;
    if (valueArrayLength > 7) newValue = newValue.slice(1, valueArrayLength);
    setState(newValue);
  };

  const handleDelete = (id) => {
    storeData('lastState', state);
    let newState = state.filter((i) => {
      return i.id !== id;
    });
    setState(newState);
  };

  const handleUndo = () => {
    setState(getData('lastState'));
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">BMI tracker</h1>
      </div>
      <div>
        <BmiForm change={handleChange} />
        <Bar date={data.date} bmi={data.bmi} />
        <div className="data-container">
          <h3 className="data-title">7 Day Data</h3>
          <div className="card-container">
            {state.length > 0 ? (
              <>
                {state.map((info) => (
                  <Info
                    key={info.id}
                    id={info.id}
                    weight={info.weight}
                    height={info.height}
                    date={info.date}
                    bmi={info.bmi}
                    deleteCard={handleDelete}
                  />
                ))}
              </>
            ) : (
              <p>No log found</p>
            )}
          </div>
        </div>
        {getData('lastState') !== null ? (
          <div className="center">
            <button className="calculate-btn" onClick={handleUndo}>
              Undo
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
