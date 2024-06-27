import styled from "styled-components/native";

interface TextLinkProps {
  onPress?: Function;
}

export const HelpsectionText = styled.Text`
  font-size: 12px;
  text-align: center;
  align-self: center;
  width: 60%;
  margin-top: 20px;
`;

export const TextLink = styled.Text<TextLinkProps>`
  text-decoration: underline;
`;
