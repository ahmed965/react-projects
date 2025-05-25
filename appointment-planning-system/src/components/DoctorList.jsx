import { useEffect, useState } from "react";

export function DoctorList({ onSelectDoctor }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getDoctors = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${baseUrl}/doctors`);
        const result = await response.json();
        setDoctors(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getDoctors();
  }, []);
  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h2 className="mb-4">Doctors:</h2>
      <div className="row">
        {doctors.map((doctor) => {
          return (
            <div className="col-md-4" key={doctor.id} onClick={() => onSelectDoctor(doctor)}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">
                    <strong>Specialisation:</strong> {doctor.specialization.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
