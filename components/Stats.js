export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add something to your list!</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You've got everything! You're ready to go! ✈️`
          : `      💼 You have ${numItems} ${
              numItems === 1 ? "item" : "items"
            } on your packing list. You have already packed ${numPackedItems}
      ${numPackedItems === 1 ? "item" : "items"} (${percentage}%).`}
      </em>
      <div className="copyright">
        <p>
          Design &copy; Jonas Schmedtmann. Implementation by Niamh Doyle as part
          of course "The Ultimate React Course 2023".
        </p>
      </div>
    </footer>
  );
}
