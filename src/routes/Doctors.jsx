import React from "react";
import DoctorCard from "../components/DoctorCard";
import Doctor from "../data/Doctor";
const Doctors = () => {
  return (
    <div>
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
  );
};

export default Doctors;
