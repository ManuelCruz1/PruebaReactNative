import styled from "styled-components/native";
import { COLOR_WHITE } from "../utils/colors/colors";

interface HeaderContainerProps {
  readonly Platform?: string;
}

interface TextInformationProps {
  readonly bold?: boolean;
  readonly link?: boolean;
}

interface RecipeImageBackground {
  source?: string;
}

export const RecipeImageBackground = styled.ImageBackground<RecipeImageBackground>`
  width: 100%;
  flex: 1;
`;

export const HeaderContainer = styled.View<HeaderContainerProps>`
  margin-top: ${({ Platform }) => (Platform === "android" ? "50px" : "0px")};
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 90%;
`;

export const BackIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_WHITE};
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;

export const InfoContainer = styled.View`
  align-self: flex-end;
`;

export const DateContainer = styled.View`
  flex-direction: row;
`;

export const TextInformation = styled.Text<TextInformationProps>`
  font-size: 16px;

  ${({ bold, link }) => {
    switch (true) {
      case bold:
        return `font-size: 32px; font-weight: 600; align-self: flex-end;`;
      case link:
        return `text-decoration: underline`;
    }
  }}
`;
