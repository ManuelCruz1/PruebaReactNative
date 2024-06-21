import styled from "styled-components";

export const ButtonContainer = styled.View`
  align-self: center;
  width: 65%;
  flex-direction: row;
  background-color: #ffffff;
  justify-content: space-around;
  align-items: center;
  min-height: 40px;
  border-radius: 8px;
  margin-top: -6%;
  border: 1px;
  border-color: #cccccc;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 96%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ $isDrak }) => ($isDrak ? "#000000" : "#FFFFFF")};
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${({ $isDrak }) => ($isDrak ? "#000000" : "#FFFFFF")};
`;
