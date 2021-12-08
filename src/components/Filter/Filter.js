import PropTypes from "prop-types";

function Filter({ value, updateFilterFunc }) {
  return (
    <label>
      Find contact by name
      <input value={value} onChange={updateFilterFunc} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  updateFilterFunc: PropTypes.func.isRequired,
};

export default Filter;
