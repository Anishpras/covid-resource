import React from "react";
import DoctorCard from "../components/DoctorCard";
import Doctor from "../data/Doctor";
import '../Styles/Card.css'
const Doctors = () => {
  return (
    <div className="color-main">
    <div className="Main_card">
    {Doctor.map(({ doctor_name, speciality, number, call_time }) => {
      return (
        <DoctorCard
        name={doctor_name}
        speciality={speciality}
        number={number}
        time={call_time}
        />
        );
      })}
      </div>
    </div>
  );
};

export default Doctors;
