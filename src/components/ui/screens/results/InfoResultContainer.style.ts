import styled from "styled-components/native";
import { COLOR_BLACK } from "../../../../utils/colors/colors";

interface DestinationTitleProps {
  readonly textBlack?: boolean;
}

export const InfoResultContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DestinationTitle = styled.Text<DestinationTitleProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ textBlack }) => (textBlack ? COLOR_BLACK : "#00000080")};
`;
