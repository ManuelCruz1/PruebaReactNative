import styled from "styled-components";
import { COLOR_BLACK, COLOR_WHITE } from "../../utils/colors/colors";
export const Button = styled.TouchableOpacity`
  min-width: 90%;
  min-height: 50px;
  margin-top: 15px;
  background-color: ${COLOR_BLACK};
  align-self: center;
  justify-content: center;
  border-radius: 8px;
`;

export const PrimaryButtonText = styled.Text`
  font-size: 16px;
  color: ${COLOR_WHITE};
  text-align: center;
`;
