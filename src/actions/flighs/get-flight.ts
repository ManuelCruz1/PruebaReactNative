import { Flight } from "../../domain/entities/flight";
import { FlightStatusCollection } from "../../infrastructure/interfaces/flightOriginDestino.interfaces";
import { FlighMapper } from "../../infrastructure/mappers/flight.mappers";
import { flightStatusCollection } from "../../utils/OrigenDestinoResponse.json";

//aqui se utilizaria un async pero como las peticiones son simuladas no se utiliza
export const getFlights = (): Flight[] => {
  try {
    const flightCollection: FlightStatusCollection[] = flightStatusCollection;
    const flightsList = flightCollection.map((item) =>
      FlighMapper.flightResponseToEntity(item)
    );
    return flightsList;
  } catch (error) {
    console.log(error);
  }
};
