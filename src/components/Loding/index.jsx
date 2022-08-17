import React from "react";
import { loding } from '../../images/index';
import { LodingContainer, LodingBar } from './style';

function Loding() {
  return <LodingContainer>
    <LodingBar src={loding} alt="IMG" />
  </LodingContainer>
}

export default Loding;