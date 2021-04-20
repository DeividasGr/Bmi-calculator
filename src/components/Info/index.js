import PropTypes from 'prop-types';
import './index.css';

function Info({ id, height, weight, date, bmi, deleteCard }) {
  const handleDelete = () => {
    deleteCard(id);
  };
  return (
    <div className="card">
      <p className="card-title">BMI: {bmi}</p>
      <div className="card-data">
        <p>Weight: {weight} kg</p>
        <p>Height: {height} cm</p>
        <p>Date: {date}</p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  id: PropTypes.string,
  deleteCard: PropTypes.func,
};

export default Info;
