import styled from "styled-components";

export const CardContainer = styled.View`
  min-height: 100px;
  border-radius: 12px;
  border-top-left-radius: 12px;
  justify-content: space-between;
  border: 2px;
  border-color: #000000;
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

export const FlightStatus = styled.View`
  background-color: #000000;
  width: 25%;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 12px;

  ${({ $statusColor }) => {
    switch ($statusColor) {
      case "ARRIVED":
        return `background-color: #000000;`;
      case "ON_TIME":
        return `background-color: #2E9509;`;
      case "DELAYED":
        return `background-color: #FECB2F;`;
      case "IN_THE_AIR":
        return `background-color: #1872B3;`;
    }
  }};
`;

export const Status = styled.Text`
  font-size: 11px;
  margin: 4px;
  color: #ffffff;
  text-align: center;
  text-transform: capitalize;
`;

export const BoderDivisor = styled.View`
  border: 0.23px;
  border-color: "#cccccc";
`;

export const FooderCard = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const FooderCardText = styled.Text`
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
