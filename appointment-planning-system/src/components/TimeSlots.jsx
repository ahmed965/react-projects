import { useEffect, useState } from "react";

export function TimeSlots({ doctorId }) {
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getTimeSlots = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const data = await fetch(`${baseUrl}/timeslots/available?doctor_id=${doctorId}`);
        const result = await data.json();
        setTimeSlots(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getTimeSlots();
  }, [doctorId]);
  if (loading) return <p>loading time slots ..</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {timeSlots.length > 0 ? (
        timeSlots.map((timeslot) => {
          return (
            <div className="col-md-4" key={timeslot.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <p className="card-text">Start time:{timeslot.start_time} </p>
                  <p className="card-text">End time:{timeslot.end_time} </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No available slots for this doctor.</p>
      )}
    </div>
  );
}
