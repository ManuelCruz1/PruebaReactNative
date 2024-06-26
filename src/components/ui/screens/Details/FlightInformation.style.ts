import styled from "styled-components/native";
import { COLOR_WHITE } from "../../../../utils/colors/colors";

interface textProps {
  readonly flightNumber?: boolean;
  readonly grayText?: boolean;
  readonly status?: boolean;
  readonly bold?: boolean;
  readonly blurred?: boolean;
}

export const FlightContainer = styled.View`
  justify-content: space-between;
  align-self: center;
  width: 90%;
  margin-top: 15px;
  align-items: flex-start;
`;

export const DetailsTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
`;

export const FlightDetailsContainer = styled.View`
  width: 100%;
`;

export const ContainerInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 13px;
`;

export const ContainerSimpleRow = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

export const InformationCard = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  width: 100%;
  margin-top: 13px;
`;

export const ContainerSimpleColum = styled.View`
  margin: 4px;
`;

export const FlighStatus = styled.Text<textProps>`
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
