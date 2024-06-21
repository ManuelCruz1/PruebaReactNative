import styled from "styled-components";

export const FlighProgressContainer = styled.View`
  width: 90%;
  align-self: center;
  justify-content: space-between;
`;

export const TimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OriginContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlightInfo = styled.Text`
  font-size: 14px;

  ${({ bold }) => {
    switch (true) {
      case bold:
        return `font-size: 22px;
        font-weight: 600`;
    }
  }}
`;
