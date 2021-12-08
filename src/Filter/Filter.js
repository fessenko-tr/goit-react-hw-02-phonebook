function Filter({ value, func }) {
  return (
    <label>
      Find contact by name
      <input value={value} onChange={func} />
    </label>
  );
}

export default Filter;
