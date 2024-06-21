import React from "react";
import { Button, PrimaryButtonText } from "./PrimaryButton.style";

interface Props {
  text?: any;
  disabled?: boolean;
  onPress?: any;
}

const PrimaryButton = ({ text, disabled = false, onPress }: Props) => {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <PrimaryButtonText>{text}</PrimaryButtonText>
    </Button>
  );
};
export default PrimaryButton;
