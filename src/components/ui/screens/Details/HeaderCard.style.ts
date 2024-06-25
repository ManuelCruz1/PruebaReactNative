import styled from "styled-components";
import {
  ARRIVED_COLOR,
  ON_TIME_COLOR,
  DELAYED_COLOR,
  IN_THE_AIR_COLOR,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_GRAY,
} from "../../../../utils/colors/colors";

export const DefaultContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
  margin-top: 15px;
  align-items: flex-start;
  ${({ numberContainer }) => {
    switch (true) {
      case numberContainer:
        return ` margin-top: 0px; align-self:flex-start`;
    }
  }}
`;

export const ContainerNumber = styled.View`
  width: 35%;
  align-items: flex-start;
`;

export const StatusContainer = styled.View`
  background-color: ${COLOR_BLACK};
  border-radius: 8px;
  min-width: 15%;
  align-items: center;
  align-self: center;

  ${({ $statusColor }) => {
    switch ($statusColor) {
      case "ARRIVED":
        return `background-color: ${ARRIVED_COLOR};`;
      case "ON_TIME":
        return `background-color: ${ON_TIME_COLOR};`;
      case "DELAYED":
        return `background-color: ${DELAYED_COLOR};`;
      case "IN_THE_AIR":
        return `background-color: ${IN_THE_AIR_COLOR};`;
    }
  }};
`;

export const FlighStatus = styled.Text`
  font-size: 14px;

  ${({ flightNumber, grayText, status, bold, blurred }) => {
    switch (true) {
      case flightNumber:
        return `font-size: 24px; font-weight: 600`;
      case grayText:
        return `font-size: 24px; font-weight: 600; color: #0000004D`;
      case status:
        return `font-size: 12px; font-weight: 600; color: ${COLOR_WHITE}; margin: 6px; text-transform: capitalize`;
      case bold:
        return `font-size: 14px; font-weight: 600`;
      case blurred:
        return `font-size: 14px; color: #00000080`;
    }
  }};
`;

export const BoderDivisor = styled.View`
  border: 0.5px;
  border-color: ${COLOR_GRAY};
  margin-top: 15px;
  align-self: center;
  width: ${({ $secondary }) => ($secondary ? "90%" : "100%")};
`;
