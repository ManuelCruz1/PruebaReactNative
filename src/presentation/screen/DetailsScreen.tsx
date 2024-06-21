import React from "react";
import styled from "styled-components";
import SliderInformation from "../../components/base/SliderInformation";
import { useSelector } from "react-redux";
import ContainerDetails from "../../components/ui/screens/Details/ContainerDetails";
import HeaderCard from "../../components/ui/screens/Details/HeaderCard";
import FlightInformation from "../../components/ui/screens/Details/FlightInformation";

const DetailsScreen = ({ navigation }) => {
  const { flightSelected } = useSelector((state) => state.flightData);

  return (
    <ContainerDetails navigation={navigation}>
      <HeaderCard flightSelected={flightSelected} />
      <SliderInformation timeFlightVisible={false} />
      <BoderDivisor $secondary />
      <FlightInformation flightSelected={flightSelected} />
    </ContainerDetails>
  );
};

export default DetailsScreen;

const BoderDivisor = styled.View`
  border: 0.5px;
  border-color: "#cccccc";
  margin-top: 15px;
  align-self: center;
  width: ${({ $secondary }) => ($secondary ? "90%" : "100%")};
`;