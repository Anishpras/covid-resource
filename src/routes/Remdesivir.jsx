import React from 'react'
import DataCard from '../components/DataCard';
import RemdesivirData from '../data/Remdesivir';

const Remdesivir = () => {
    return (
        <div className="remdesivir">
        {RemdesivirData.map((medicine) => {
          return (
            <DataCard
              city={medicine.city}
              distributor={medicine.distibutor_name}
              number={medicine.helpline}
              address={medicine.address}
              status={medicine.status}
            />
          );
        })}
      </div>
    )
}

export default Remdesivir;
