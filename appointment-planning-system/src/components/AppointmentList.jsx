import { useState, useEffect } from "react";

export function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${baseUrl}/appointments`);
        const result = await response.json();
        setAppointments(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAppointments();
  }, []);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {appointments.map((appointment) => {
        return (
          <div className="col-md-4" key={appointment.id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <p className="card-text">Patient Name:{appointment.patient_name} </p>
                <p className="card-text">Patient Email:{appointment.patient_email} </p>
                <p className="card-text">Date:{appointment.date_time} </p>
                <p className="card-text">Status:{appointment.status} </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
