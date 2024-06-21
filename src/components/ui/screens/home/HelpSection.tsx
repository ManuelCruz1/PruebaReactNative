import { TextLink, HelpsectionText } from "./HelpSection.style";

interface Props {
  onPress?: Function;
  searchForNumber?: boolean;
}

const HelpSection = ({ searchForNumber, onPress }: Props) => {
  const linkText = () => (
    <TextLink onPress={onPress}>
      {searchForNumber ? "destination" : "flight number"}
    </TextLink>
  );

  return (
    <HelpsectionText>
      {`Can’t find your flight number? \n Try searching by `}
      {linkText()}
    </HelpsectionText>
  );
};

export default HelpSection;
