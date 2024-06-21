import styled from "styled-components";

export const ContainerTitle = styled.View`
  min-height: 15%;
  background-color: #f7f7f7;
  border-bottom-color: #cccccc;
  border-bottom-width: 1px;
`;

export const Text = styled.Text`
  font-family: "Garnett";
  text-align: center;

  ${({ title, subTitle }) => {
    switch (true) {
      case title:
        return `font-size: 26px`;
      case subTitle:
        return `font-size: 22px`;
    }
  }}
`;
