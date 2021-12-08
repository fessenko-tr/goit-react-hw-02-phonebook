function ContactList({ list, btnDelete }) {
  const contacts = list.map(({ id, name, number }) => (
    <li key={id}>
      <p>{`${name}: ${number}`}</p>
      <button
        onClick={() => {
          btnDelete(id);
        }}
      >
        DELETE
      </button>
    </li>
  ));

  return <ul>{contacts}</ul>;
}

export default ContactList;
