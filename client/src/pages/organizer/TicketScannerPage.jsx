import React from "react";
import OrganizerLayout from "../../components/organizer/OrganizerLayout";
import TicketScanner from "../../components/organizer/TicketScanner";

const TicketScannerPage = () => {
  return (
    <OrganizerLayout>
      <TicketScanner />
    </OrganizerLayout>
  );
};

export default TicketScannerPage;
