import styled from "styled-components";

export const RecipeImageBackground = styled.ImageBackground`
  width: 100%;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  margin-top: ${({ $Platform }) => ($Platform === "android" ? "50px" : "0px")};
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 90%;
`;

export const BackIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
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

export const TextInformation = styled.Text`
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
