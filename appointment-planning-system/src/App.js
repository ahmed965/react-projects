import "bootstrap/dist/css/bootstrap.min.css";

import { DoctorList } from "./components/DoctorList";
import { useState } from "react";
import { TimeSlots } from "./components/TimeSlots";
function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <div>
      <DoctorList onSelectDoctor={setSelectedDoctor} />
      {selectedDoctor && <TimeSlots key={selectedDoctor.id} doctorId={selectedDoctor.id} />}
    </div>
  );
}

export default App;
