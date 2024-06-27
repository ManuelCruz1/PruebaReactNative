import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  FlightNumberSection,
  SearchParamsSection,
  BorderContainer,
  TextSearchSection,
} from "./SearchSection.style";
import { useState } from "react";

import ModalOptions from "./ModalOptions";
import moment from "moment";
import { Flight } from "../../../../domain/entities/flight";
interface props {
  itemList?: Flight[];
  children?: JSX.Element[];
  searchForNumber: boolean;
  setNumberToShearch: Function;
  setOriginToShearch: Function;
  originToShearch?: { departureAirport: string; estimatedDepartureTime: Date };
  setDestinationToShearch?: Function;
  destinationToShearch?: { arrivalAirport: string };
  dataInfo?: Flight;
  setTypeToShearch?: Function;
  typeToShearch?: string;
}

const SearchSection = ({
  itemList,
  children,
  searchForNumber,
  setNumberToShearch,
  setOriginToShearch,
  originToShearch,
  setDestinationToShearch,
  destinationToShearch,
  dataInfo,
  setTypeToShearch,
  typeToShearch,
}: props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalOptions
        itemList={itemList}
        visible={showModal}
        switchModal={setShowModal}
        itemsToShearch={setNumberToShearch}
        typeToShearch={typeToShearch}
        setOriginToShearch={setOriginToShearch}
        setDestinationToShearch={setDestinationToShearch}
      />
      {searchForNumber ? (
        <FlightNumberSection>
          <SearchParamsSection principal>
            <BorderContainer
              onPress={() => {
                setTypeToShearch("number");
                setTimeout(() => {
                  setShowModal(true);
                }, 100);
              }}
              number
            >
              <TextSearchSection> Flight number</TextSearchSection>
              <SearchParamsSection>
                <TextSearchSection boldGray>
                  {dataInfo ? dataInfo.marketingCarrier : "Select flight"}
                </TextSearchSection>
                <TextSearchSection bold>
                  {dataInfo ? dataInfo.marketingFlightCode : ""}
                </TextSearchSection>
              </SearchParamsSection>
            </BorderContainer>
            <BorderContainer departure>
              <TextSearchSection> Date of departure</TextSearchSection>
              <SearchParamsSection between>
                <TextSearchSection bold>
                  {dataInfo
                    ? moment(dataInfo.estimatedDepartureTime).format(
                        "dddd Do MMM"
                      )
                    : "Date of departure"}
                </TextSearchSection>
                <FontAwesome5 name="calendar-alt" size={18} color="black" />
              </SearchParamsSection>
            </BorderContainer>
          </SearchParamsSection>
          {children}
        </FlightNumberSection>
      ) : (
        <FlightNumberSection>
          <SearchParamsSection principal>
            <BorderContainer
              destination
              onPress={() => {
                setTypeToShearch("origin");
                setTimeout(() => {
                  setShowModal(true);
                }, 100);
              }}
            >
              <TextSearchSection> Origin</TextSearchSection>
              <SearchParamsSection>
                <TextSearchSection bold>
                  {originToShearch ? "Mexico City" : "Select origin"}
                </TextSearchSection>
                <TextSearchSection boldGray>
                  {originToShearch ? originToShearch.departureAirport : ""}
                </TextSearchSection>
              </SearchParamsSection>
            </BorderContainer>
            <BorderContainer
              destination
              onPress={() => {
                setTypeToShearch("destination");
                setTimeout(() => {
                  setShowModal(true);
                }, 100);
              }}
            >
              <TextSearchSection> Destination</TextSearchSection>
              <SearchParamsSection>
                <TextSearchSection bold>
                  {destinationToShearch ? "Cancún" : "Select destination"}
                </TextSearchSection>
                <TextSearchSection boldGray>
                  {destinationToShearch
                    ? destinationToShearch.arrivalAirport
                    : ""}
                </TextSearchSection>
              </SearchParamsSection>
            </BorderContainer>
          </SearchParamsSection>
          <SearchParamsSection>
            <BorderContainer date>
              <TextSearchSection> Date of departure</TextSearchSection>
              <SearchParamsSection>
                <TextSearchSection bold>
                  {originToShearch && destinationToShearch
                    ? moment(originToShearch.estimatedDepartureTime).format(
                        "dddd Do MMM"
                      )
                    : "Date of departure"}
                </TextSearchSection>
                <FontAwesome5 name="calendar-alt" size={18} color="black" />
              </SearchParamsSection>
            </BorderContainer>
          </SearchParamsSection>
          {children}
        </FlightNumberSection>
      )}
    </>
  );
};

export default SearchSection;
