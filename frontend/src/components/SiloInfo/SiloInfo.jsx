import PropTypes from "prop-types";
import "./style.scss";

export default function SiloInfo({ capacity, maxCapacity }) {
  const remaining = parseInt(maxCapacity - capacity, 10);
  return (
    <section className="siloInfo">
      <button type="button" className="storageRemain">
        {remaining} free slots
      </button>
      <button type="button" className="storageFull">
        {capacity} full slots
      </button>
    </section>
  );
}

SiloInfo.propTypes = {
  capacity: PropTypes.number.isRequired,
  maxCapacity: PropTypes.number.isRequired,
};
