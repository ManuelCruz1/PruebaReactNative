import styled from "styled-components/native";
import { COLOR_WHITE } from "../../../../utils/colors/colors";

export const ColumContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column-reverse;
`;

export const DetailsContainer = styled.View`
  background-color: ${COLOR_WHITE};
  height: 70%;
  width: 100%;
  align-content: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Scroll = styled.ScrollView``;
