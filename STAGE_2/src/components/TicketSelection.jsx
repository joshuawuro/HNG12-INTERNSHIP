import { useState } from "react";
import EventDetails from "./EventDetails";
import TicketTypeCard from "./TicketTypeCard";
import ProgressBar from "./ProgressBar";
import TicketQuantitySelector from "./TicketQuantitySelector";
import StepNavigation from "./StepNavigation";

const TicketSelection = ({ onNext, onCancel }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const ticketOptions = [
    { id: 1, type: "Free", price: 0, access: "REGULAR ACCESS", available: 20 },
    { id: 2, type: "$150", price: 150, access: "VIP ACCESS", available: 20 },
    { id: 3, type: "$150", price: 150, access: "VVIP ACCESS", available: 20 },
  ];

  const handleNext = () => {
    if (!selectedTicket || quantity < 1) {
      setError("Please select a ticket type and the number of tickets.");
    } else {
      setError(""); // Clear any previous errors
      onNext(); // Proceed to the next step
    }
  };

  const handleCancel = () => {
    setSelectedTicket(null);
    setQuantity(1);
    setError("");
    onCancel();
  };

  return (
    <div className="bg-lighterblue border-1 border-blue text-white p-6 rounded-2xl max-w-[500px] mx-auto">
      <ProgressBar />

      <div className="bg-ticketsel p-3 rounded-xl">
        <EventDetails />

        <div className="mt-4 mb-2 border-t-3 border-lightergreen font-roboto">
          <h3 className="mt-4 mb-2 text-sm">Select Ticket Type:</h3>
          <div className="grid md:flex gap-2 p-2 border-2 border-bordergreen rounded-2xl">
            {ticketOptions.map((ticket) => (
              <TicketTypeCard
                key={ticket.id}
                ticket={ticket}
                selected={selectedTicket}
                onSelect={setSelectedTicket}
              />
            ))}
          </div>
        </div>

        <h3 className="text-sm mt-4 mb-2">Number of Tickets</h3>
        <TicketQuantitySelector quantity={quantity} onChange={setQuantity} />

        {/* Display error message if validation fails */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <StepNavigation onNext={handleNext} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default TicketSelection;
