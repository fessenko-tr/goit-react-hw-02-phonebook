import PropTypes from "prop-types";

function Contact({ id, name, number, deleteFunction }) {
  return (
    <li>
      <p>{`${name}: ${number}`}</p>
      <button
        onClick={() => {
          deleteFunction(id);
        }}
      >
        DELETE
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default Contact;
