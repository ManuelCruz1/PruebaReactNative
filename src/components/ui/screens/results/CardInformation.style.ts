import styled from "styled-components/native";
import {
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_WHITE,
  DELAYED_COLOR,
  IN_THE_AIR_COLOR,
  ON_TIME_COLOR,
} from "../../../../utils/colors/colors";

interface FlightStatusProps {
  readonly statusColor?: string;
}

interface FooderCardText {
  readonly numberFlight?: boolean;
  readonly link?: boolean;
}

export const CardContainer = styled.View`
  min-height: 100px;
  border-radius: 12px;
  border-top-left-radius: 12px;
  justify-content: space-between;
  border: 2px;
  border-color: ${COLOR_BLACK};
  margin-top: 20px;
`;

export const TopContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 26px;
`;

export const Switch = styled.Switch`
  height: 20px;
  transform: scale(0.8);
`;

export const SwitchContainer = styled.View``;

export const FlightStatus = styled.View<FlightStatusProps>`
  background-color: ${COLOR_BLACK};
  width: 25%;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 12px;

  ${({ statusColor }) => {
    switch (statusColor) {
      case "ARRIVED":
        return `background-color: ${COLOR_BLACK};`;
      case "ON_TIME":
        return `background-color: ${ON_TIME_COLOR};`;
      case "DELAYED":
        return `background-color: ${DELAYED_COLOR};`;
      case "IN_THE_AIR":
        return `background-color: ${IN_THE_AIR_COLOR};`;
    }
  }};
`;

export const Status = styled.Text`
  font-size: 11px;
  margin: 4px;
  color: ${COLOR_WHITE};
  text-align: center;
  text-transform: capitalize;
`;

export const BoderDivisor = styled.View`
  border: 0.23px;
  border-color: ${COLOR_GRAY};
`;

export const FooderCard = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const FooderCardText = styled.Text<FooderCardText>`
  font-size: 12px;

  ${({ numberFlight, link }) => {
    switch (true) {
      case numberFlight:
        return `font-weight: 600`;
      case link:
        return `text-decoration: underline`;
    }
  }}
`;

export const DetailsContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
`;
