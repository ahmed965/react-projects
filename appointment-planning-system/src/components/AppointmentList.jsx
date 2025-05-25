import { useState, useEffect } from "react";

export function AppointmentList() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const getAppointments = async () => {
      try {
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
  }, [appointments]);

  const cancelAppointment = async (id) => {
    try {
      setLoadingCancel(true);
      const response = await fetch(`${baseUrl}/appointments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const updatedAppointment = await response.json();
        setAppointments((prev) => prev.map((appointment) => (appointment.id === id ? updatedAppointment : appointment)));
        setLoadingCancel(false);
      } else {
        setError("Failed to cancel appointment");
      }
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="row">
      {loadingCancel && <p>Loading cancel appointment...</p>}
      {appointments.map((appointment) => {
        return (
          <div className="col-md-4" key={appointment.id}>
            <div className="card mb-4 shadow-sm  h-100">
              <div className="card-body">
                <p className="card-text">Patient Name: {appointment.patient_name} </p>
                <p className="card-text">Patient Email: {appointment.patient_email} </p>
                <p className="card-text">Date: {appointment.date_time} </p>
                <p className="card-text">
                  Status: <span className={appointment.status === "canceled" ? "text-danger" : "text-success"}>{appointment.status}</span>
                </p>
                {appointment.status !== "canceled" && (
                  <button className="btn btn-danger" onClick={() => cancelAppointment(appointment.id)}>
                    Cancel Appointment
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
