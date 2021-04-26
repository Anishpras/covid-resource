import React from "react";
import MedicineCard from "../components/MedicineCard";

const Medicines = () => {
  const medicines = [
    { name: "Remdesivir", link: "/remdesivir" },
    { name: "Tocilizumab", link: "/tocilizumab" },
    { name: "Fabiflue", link: "/fablifue" },
  ];

  return (
    <div className="medicines">
      {medicines.map((medicine) => {
        return <MedicineCard name={medicine.name} link={medicine.link} />;
      })}
    </div>
  );
};

export default Medicines;
