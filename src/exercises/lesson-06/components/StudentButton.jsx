function StudentButton({ filterType, setFilter }) {
  let capitalizeFilterString =
    filterType.charAt(0).toUpperCase() + filterType.slice(1);
  return (
    <button onClick={() => setFilter(filterType)}>
      {capitalizeFilterString}
    </button>
  );
}

export default StudentButton;
