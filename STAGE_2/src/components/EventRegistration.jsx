import { useState } from "react";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails"; // Assuming this component exists

const EventRegistration = () => {
  const [showAttendeeDetails, setShowAttendeeDetails] = useState(false);

  const handleNext = () => {
    setShowAttendeeDetails(true);
  };

  const handleCancel = () => {
    setShowAttendeeDetails(false);
  };

  return (
    <div>
      {!showAttendeeDetails && (
        <TicketSelection onNext={handleNext} onCancel={handleCancel} />
      )}
      {showAttendeeDetails && <AttendeeDetails />}
    </div>
  );
};

export default EventRegistration;
