import React from 'react';
import FirstSection from './FirstSection/FirstSection';
import LastSection from './LastSection/LastSection';
import PointCard from './PointCard/PointCard';
import PointRules from './PointRules/PointRules';


const PointReward = () => {
    return (
        <>
           <FirstSection></FirstSection> 
           <PointCard></PointCard>
           <PointRules></PointRules>
           <LastSection></LastSection>
        </>
    );
};

export default PointReward;