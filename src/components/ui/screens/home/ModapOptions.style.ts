import styled from "styled-components";
import { COLOR_GRAY, COLOR_WHITE } from "../../../../utils/colors/colors";

export const ModalOrientation = styled.View`
  justify-content: flex-end;
  flex: 1;
`;

export const ModalContainer = styled.View`
  background-color: ${COLOR_WHITE};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  height: 50%;
  border-color: ${COLOR_GRAY};
  border: 1px;
  align-items: center;
`;

export const OptionText = styled.Text`
  align-self: center;
  font-size: 14px;
  font-weight: 600;
  padding: 12px;
  color: #00000080;
`;

export const ContainerItem = styled.TouchableOpacity`
  margin-top: 14px;
  background-color: ${COLOR_GRAY};
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  border-radius: 6px;
  width: 100%;
`;
