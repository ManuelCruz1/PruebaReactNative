import styled from "styled-components";
import { COLOR_BLACK } from "../../../../utils/colors/colors";

export const InfoResultContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DestinationTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $textBlack }) => ($textBlack ? COLOR_BLACK : "#00000080")};
`;
