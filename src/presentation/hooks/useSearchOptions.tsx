import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addSearchNumber, addTypeToSheach } from "../../redux/flightSlice";
import { Flight } from "../../domain/entities/flight";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../navigator/StackNavigator";
import { useAppSelector } from "../../redux/store";

interface Props {
  navigation?: NavigationProp<RootStackParams>;
}

//Hook para la busqueda de vuelos segun nombre o origen/destino

const useSearchOptions = ({ navigation }: Props) => {
  const [isSearchNumber, setIsSearchNumber] = useState<boolean>(true);
  const [numberToShearch, setNumberToShearch] = useState(null);
  const [originToShearch, setOriginToShearch] = useState(null);
  const [destinationToShearch, setDestinationToShearch] = useState(null);
  const [typeToShearch, setTypeToShearch] = useState("number");
  const [itemList, setItemList] = useState<Flight[]>([]); //el tipado es un generico
  const { flightsList } = useAppSelector((state) => state.flightData);

  const dispatch = useDispatch();
  const search = () => {
    let temporalList = [];
    //se hace diferenciacion entre busqueda por numero de vuelo o por origen/destino
    if (isSearchNumber) {
      if (numberToShearch) {
        flightsList.map((item) => {
          if (
            numberToShearch.marketingFlightCode === item.marketingFlightCode
          ) {
            temporalList.push(item);
          }
        });
        //se almacena el resultado de la busqueda en el estado
        dispatch(addSearchNumber(temporalList));
        dispatch(addTypeToSheach("number"));
        navigation.navigate("ResultNumberScreen");
        temporalList = [];
        return;
      } else {
        Alert.alert("Alert", "Please, select an flight number", [
          { text: "Aceptar" },
        ]);
      }
    } else {
      if (originToShearch && destinationToShearch) {
        flightsList.map((item) => {
          if (
            item.departureAirport === originToShearch.departureAirport &&
            item.arrivalAirport === destinationToShearch.arrivalAirport
          ) {
            temporalList.push(item);
          }
        });
        //se almacena el resultado de la busqueda en el estado
        dispatch(addSearchNumber(temporalList));
        dispatch(addTypeToSheach("originDestination"));
        navigation.navigate("ResultNumberScreen");
        temporalList = [];
      } else {
        Alert.alert("Alert", "Please select an origin and a destination", [
          { text: "Aceptar" },
        ]);
      }
    }
  };

  useEffect(() => {
    //Se define el catalogo a mostrar en los combos de busqueda de numero de vuelo, origen y destino
    let tempolarList = [];
    switch (typeToShearch) {
      case "number":
        setItemList(flightsList);
        break;
      case "origin":
        flightsList.map((item) => {
          if (tempolarList.length === 0) {
            tempolarList.push({
              departureAirport: item.departureAirport,
              estimatedDepartureTime: item.estimatedDepartureTime,
            });
          } else {
            for (let index = 0; index < tempolarList.length; index++) {
              if (
                item.departureAirport !== tempolarList[index].departureAirport
              ) {
                tempolarList.push({
                  departureAirport: item.departureAirport,
                  estimatedDepartureTime: item.estimatedDepartureTime,
                });
              }
            }
          }
        });
        setItemList(tempolarList);
        tempolarList = [];
        break;
      case "destination":
        flightsList.map((item) => {
          if (tempolarList.length === 0) {
            tempolarList.push({ arrivalAirport: item.arrivalAirport });
          } else {
            for (let index = 0; index < tempolarList.length; index++) {
              if (item.arrivalAirport !== tempolarList[index].arrivalAirport) {
                tempolarList.push({ arrivalAirport: item.arrivalAirport });
              }
            }
          }
        });
        setItemList(tempolarList);
        tempolarList = [];
        break;
      default:
        break;
    }
  }, [typeToShearch, flightsList]);

  return {
    isSearchNumber,
    setIsSearchNumber,
    numberToShearch,
    setNumberToShearch,
    originToShearch,
    setOriginToShearch,
    destinationToShearch,
    setDestinationToShearch,
    search,
    typeToShearch,
    setTypeToShearch,
    itemList,
  };
};
export default useSearchOptions;
