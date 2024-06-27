import Slider from "@react-native-community/slider";
import {
  FlighProgressContainer,
  TimeContainer,
  FlightInfo,
  OriginContainer,
} from "./SliderInformation.style";
import { Platform, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Flight } from "../../domain/entities/flight";
import moment from "moment";
import { COLOR_BLACK, COLOR_GRAY } from "../../utils/colors/colors";

interface Props {
  flightData?: Flight;
  timeFlightVisible?: boolean;
  onPress?: Function;
}

const SliderInformation = ({
  flightData,
  timeFlightVisible,
}: Props): JSX.Element => {
  const [departureTime, setDepartureTime] = useState<string>();
  const [arrivalTime, setArrivalTime] = useState<string>();
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const [duration, setDuration] = useState<string>();
  const [percentage, setPercentage] = useState<number>();

  useEffect(() => {
    let temporalFlightselected: Flight;
    temporalFlightselected = flightData;
    setDepartureTime(
      moment(temporalFlightselected.estimatedDepartureTime).format("h:mm")
    );
    setArrivalTime(
      moment(temporalFlightselected.estimatedArrivalTime).format("h:mm")
    );
    setOrigin(temporalFlightselected.departureAirport);
    setDestination(temporalFlightselected.arrivalAirport);
    setDuration(
      Math.floor(temporalFlightselected.totalFlightTimeInMinutes / 60) +
        "h" +
        (temporalFlightselected.totalFlightTimeInMinutes % 60) +
        "m"
    );

    /*aqui me base en casos ya que no cuento con estatus para saber
     el tiempo de vuelo para el porcentaje del slider*/

    switch (temporalFlightselected.status) {
      case "ON_TIME" || "DELAYED":
        setPercentage(0);
        break;
      case "ARRIVED":
        setPercentage(100);
        break;
      case "IN_THE_AIR":
        setPercentage(80);
        break;
      default:
        setPercentage(0);
        break;
    }
  }, []);

  return (
    <FlighProgressContainer>
      <TimeContainer>
        <FlightInfo bold>{departureTime}</FlightInfo>

        <Slider
          style={styles.sliderStyle}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={percentage}
          disabled={true}
          tapToSeek={false}
          thumbImage={require("../../assets/icons/planeHorizontal.png")}
          minimumTrackTintColor={COLOR_BLACK}
          maximumTrackTintColor={COLOR_GRAY}
        />
        <FlightInfo bold>{arrivalTime}</FlightInfo>
      </TimeContainer>
      <OriginContainer>
        <FlightInfo>{origin}</FlightInfo>
        {timeFlightVisible === false ? null : (
          <FlightInfo>{duration}</FlightInfo>
        )}
        <FlightInfo>{destination}</FlightInfo>
      </OriginContainer>
    </FlighProgressContainer>
  );
};

export default SliderInformation;

// ajustando el tamaño del icono del slider segun la plataforma
const styles = StyleSheet.create({
  sliderStyle:
    Platform.OS === "android"
      ? {
          width: "40%",
          transform: [{ scaleY: 2 }, { scaleX: 2 }],
        }
      : { width: "60%" },
});
