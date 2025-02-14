function TicketQuantitySelector({ quantity, onChange }) {
  return (
    <select
      className="w-full p-2 rounded-md bg-background border border-lightergreen"
      value={quantity}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      {[...Array(10).keys()].map((num) => (
        <option key={num + 1} value={num + 1}>
          {num + 1}
        </option>
      ))}
    </select>
  );
}

export default TicketQuantitySelector;
