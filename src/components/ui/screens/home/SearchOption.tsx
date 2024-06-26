import { ButtonContainer, Button, ButtonText } from "./SearchOption.style";

interface Props {
  isSearchNumber?: boolean;
  onPress?: Function;
}

const SearchOption = ({ isSearchNumber, onPress }: Props) => {
  return (
    <ButtonContainer>
      <Button
        isDrak={!isSearchNumber}
        onPress={onPress}
        disabled={isSearchNumber}
      >
        <ButtonText isDrak={isSearchNumber}>Flight Number</ButtonText>
      </Button>
      <Button
        isDrak={isSearchNumber}
        onPress={onPress}
        disabled={!isSearchNumber}
      >
        <ButtonText isDrak={!isSearchNumber}>Destination</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default SearchOption;
