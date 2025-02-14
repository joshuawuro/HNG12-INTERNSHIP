function TicketTypeCard({ ticket, selected, onSelect }) {
  return (
    <button
      className={`py-2 pl-4 rounded-lg md:w-1/3 border text-left ${
        selected?.id === ticket.id
          ? "border-lightblue bg-cardbackground"
          : "border-lightblue border-2"
      }`}
      onClick={() => onSelect(ticket)}
    >
      <p className="text-lg mb-2 font-medium">{ticket.type}</p>
      <p className="text-xs">{ticket.access}</p>
      <p className="text-xs">{ticket.available}/52</p>
    </button>
  );
}

export default TicketTypeCard;
