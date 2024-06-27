import { Modal, ScrollView } from "react-native";
import { Flight } from "../../../../domain/entities/flight";
import {
  ModalOrientation,
  ModalContainer,
  OptionText,
  ContainerItem,
} from "./ModapOptions.style";
import PrimaryButton from "../../../base/PrimaryButton";

interface Props {
  itemList?: Flight[];
  visible?: boolean;
  switchModal?: Function;
  itemsToShearch?: Function;
  typeToShearch?: string;
  setOriginToShearch?: Function;
  setDestinationToShearch?: Function;
}

const ModalOptions = ({
  itemList,
  visible = false,
  switchModal,
  itemsToShearch,
  typeToShearch,
  setOriginToShearch,
  setDestinationToShearch,
}: Props): JSX.Element => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <ModalOrientation>
        <ModalContainer>
          <OptionText>Select flight {typeToShearch}</OptionText>
          <ScrollView showsVerticalScrollIndicator={false}>
            {typeToShearch === "number"
              ? itemList.map((item) => {
                  return (
                    <ContainerItem
                      key={item.boardingTime}
                      onPress={() => {
                        itemsToShearch(item);
                        switchModal(false);
                      }}
                    >
                      <OptionText>{item.marketingCarrier}</OptionText>
                      <OptionText>{item.marketingFlightCode}</OptionText>
                    </ContainerItem>
                  );
                })
              : null}
            {typeToShearch === "origin"
              ? itemList.map((item, i) => {
                  return (
                    <ContainerItem
                      key={i}
                      onPress={() => {
                        setOriginToShearch(item);
                        switchModal(false);
                      }}
                    >
                      <OptionText>{item.departureAirport}</OptionText>
                    </ContainerItem>
                  );
                })
              : null}
            {typeToShearch === "destination"
              ? itemList.map((item, i) => {
                  return (
                    <ContainerItem
                      key={i}
                      onPress={() => {
                        setDestinationToShearch(item);
                        switchModal(false);
                      }}
                    >
                      <OptionText>{item.arrivalAirport}</OptionText>
                    </ContainerItem>
                  );
                })
              : null}
            <PrimaryButton
              text={"Cancel"}
              onPress={() => {
                switchModal(false);
              }}
            />
          </ScrollView>
        </ModalContainer>
      </ModalOrientation>
    </Modal>
  );
};

export default ModalOptions;
