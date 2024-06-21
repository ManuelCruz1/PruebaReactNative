import styled from "styled-components";

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

  ${({ flightNumber }) => {
    switch (true) {
      case flightNumber:
        return `font-size: 24px; font-weight: 600`;
    }
  }};
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

export const FlighStatus = styled.Text`
  font-size: 14px;

  ${({ flightNumber, grayText, status, bold, blurred }) => {
    switch (true) {
      case flightNumber:
        return `font-size: 24px; font-weight: 600`;
      case grayText:
        return `font-size: 24px; font-weight: 600; color: #0000004D`;
      case status:
        return `font-size: 12px; font-weight: 600; color: #ffffff; margin: 6px; text-transform: capitalize`;
      case bold:
        return `font-size: 14px; font-weight: 600`;
      case blurred:
        return `font-size: 14px; color: #00000080`;
    }
  }};
`;
