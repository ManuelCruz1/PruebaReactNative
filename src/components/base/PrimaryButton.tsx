import React from "react";
import { Button, PrimaryButtonText } from "./PrimaryButton.style";

interface Props {
  text?: string;
  disabled?: boolean;
  onPress?: () => void;
}
const PrimaryButton = ({
  text,
  disabled = false,
  onPress,
}: Props): JSX.Element => {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <PrimaryButtonText>{text}</PrimaryButtonText>
    </Button>
  );
};
export default PrimaryButton;
