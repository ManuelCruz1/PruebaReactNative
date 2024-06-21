import styled from "styled-components";

export const InfoResultContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DestinationTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $textBlack }) => ($textBlack ? "#000000" : "#00000080")};
`;
