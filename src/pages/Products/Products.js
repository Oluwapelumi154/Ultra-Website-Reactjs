import React from 'react';
import { InfoSection } from '../../components';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data';
const Product = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Product;
