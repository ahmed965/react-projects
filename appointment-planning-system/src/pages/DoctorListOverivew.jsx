import { DoctorList } from "../components/DoctorList";
import { TimeSlots } from "../components/TimeSlots";
import { useState } from "react";

export function DoctorListOverview() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <div>
      <DoctorList onSelectDoctor={setSelectedDoctor} />
      {selectedDoctor && <TimeSlots key={selectedDoctor.id} doctorId={selectedDoctor.id} />}
    </div>
  );
}
