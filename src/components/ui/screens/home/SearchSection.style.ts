import styled from "styled-components";

export const FlightNumberSection = styled.View``;

export const SearchParamsSection = styled.View`
  flex-direction: row;
  margin-top: 15px;

  ${({ principal, between }) => {
    switch (true) {
      case principal:
        return `margin-top: 5px;
          margin-top: 50px;
          justify-content: space-around;
          `;
      case between:
        return `justify-content: space-between; margin-right: 10px`;
    }
  }}
`;

export const BorderContainer = styled.TouchableOpacity`
  border: 1px;
  border-color: #000000;
  border-radius: 8px;
  min-height: 50px;
  justify-content: center;

  ${({ number, departure, destination, date }) => {
    switch (true) {
      case number:
        return `width: 25%`;
      case departure:
        return `width: 55%`;
      case destination:
        return `width: 40%`;
      case date:
        return `width: 90%;
         margin-left: 5%;`;
    }
  }}
`;

export const TextSearchSection = styled.Text`
  font-size: 10px;
  color: #000000;
  margin-left: 10px;

  ${({ defaultStyle, bold, boldGray, number }) => {
    switch (true) {
      case defaultStyle:
        return `width: 30%`;
      case bold:
        return `font-weight: 600; font-size: 16px`;
      case boldGray:
        return `color: #0000004D; font-size: 16px`;
    }
  }}
`;
