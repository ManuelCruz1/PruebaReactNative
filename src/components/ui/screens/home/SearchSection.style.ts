import styled from "styled-components/native";
import { COLOR_BLACK } from "../../../../utils/colors/colors";

interface SearchParamsSectionProsp {
  readonly principal?: boolean;
  readonly between?: boolean;
}

interface BorderContainerProps {
  readonly number?: boolean;
  readonly departure?: boolean;
  readonly destination?: boolean;
  readonly date?: boolean;
}

interface TextSearchSectionProps {
  readonly boldGray?: boolean;
  readonly bold?: boolean;
}

export const FlightNumberSection = styled.View``;

export const SearchParamsSection = styled.View<SearchParamsSectionProsp>`
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

export const BorderContainer = styled.TouchableOpacity<BorderContainerProps>`
  border: 1px;
  border-color: ${COLOR_BLACK};
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

export const TextSearchSection = styled.Text<TextSearchSectionProps>`
  font-size: 10px;
  color: ${COLOR_BLACK};
  margin-left: 10px;

  ${({ bold, boldGray }) => {
    switch (true) {
      case bold:
        return `font-weight: 600; font-size: 16px`;
      case boldGray:
        return `color: #0000004D; font-size: 16px`;
    }
  }}
`;
