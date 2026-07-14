function SnackList() {
  let snackListArray = [
    {
      name: 'Cheez-It',
      rank: 5,
    },
    {
      name: 'Goldfish',
      rank: 4,
    },
    {
      name: "Pirate's Booty",
      rank: 3,
    },
    {
      name: 'Fruit Snacks',
      rank: 2,
    },
    {
      name: 'Sweet Chili Doritos',
      rank: 1,
    },
  ];

  let sortedByRankSnackListArray = snackListArray.toSorted(
    (a, b) => a.rank - b.rank
  );

  return (
    <ol>
      {sortedByRankSnackListArray.map((snack) => (
        <li key={snack.rank}>
          <p>{snack.name}</p>
        </li>
      ))}
    </ol>
  );
}

export default SnackList;
