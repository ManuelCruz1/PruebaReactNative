import styled from "styled-components/native";
import {
  ARRIVED_COLOR,
  ON_TIME_COLOR,
  DELAYED_COLOR,
  IN_THE_AIR_COLOR,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_GRAY,
} from "../../../../utils/colors/colors";

interface DefaultContainerProps {
  readonly numberContainer?: boolean;
}

interface TextProps {
  readonly grayText?: boolean;
  readonly flightNumber?: boolean;
  readonly status?: boolean;
}

interface StatusContainerProps {
  readonly statusColor?: string;
}

export const DefaultContainer = styled.View<DefaultContainerProps>`
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

export const StatusContainer = styled.View<StatusContainerProps>`
  background-color: ${COLOR_BLACK};
  border-radius: 8px;
  min-width: 15%;
  align-items: center;
  align-self: center;

  ${({ statusColor }) => {
    switch (statusColor) {
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

export const FlighStatus = styled.Text<TextProps>`
  font-size: 14px;

  ${({ flightNumber, grayText, status }) => {
    switch (true) {
      case flightNumber:
        return `font-size: 24px; font-weight: 600`;
      case grayText:
        return `font-size: 24px; font-weight: 600; color: #0000004D`;
      case status:
        return `font-size: 12px; font-weight: 600; color: ${COLOR_WHITE}; margin: 6px; text-transform: capitalize`;
    }
  }};
`;

export const BoderDivisor = styled.View`
  border: 0.5px;
  border-color: ${COLOR_GRAY};
  margin-top: 15px;
  align-self: center;
  width: "100%";
`;
