import React from "react";
import styled from "styled-components/native";
import SliderInformation from "../../components/base/SliderInformation";
import ContainerDetails from "../../components/ui/screens/Details/ContainerDetails";
import HeaderCard from "../../components/ui/screens/Details/HeaderCard";
import FlightInformation from "../../components/ui/screens/Details/FlightInformation";
import { COLOR_GRAY } from "../../utils/colors/colors";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../navigator/StackNavigator";
import { useAppSelector } from "../../redux/store";

interface Props {
  navigation?: NavigationProp<RootStackParams>;
}

const DetailsScreen = ({ navigation }: Props) => {
  const { flightSelected } = useAppSelector((state) => state.flightData);

  return (
    <ContainerDetails navigation={navigation}>
      <HeaderCard flightSelected={flightSelected} />
      <SliderInformation
        timeFlightVisible={false}
        flightData={flightSelected}
      />
      <BoderDivisor />
      <FlightInformation flightSelected={flightSelected} />
    </ContainerDetails>
  );
};

export default DetailsScreen;

const BoderDivisor = styled.View`
  border: 0.5px;
  border-color: ${COLOR_GRAY};
  margin-top: 15px;
  align-self: center;
  width: 90%;
`;
