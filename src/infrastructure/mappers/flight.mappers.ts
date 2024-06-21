import { FlightStatusCollection } from "../interfaces/flightOriginDestino.interfaces";

export class FlighMapper {
  static flightResponseToEntity(data: FlightStatusCollection) {
    return {
      status: data.status,
      boardingTerminal: data.boardingTerminal,
      marketingCarrier: data.segment.marketingCarrier,
      departureAirport: data.segment.departureAirport,
      arrivalAirport: data.segment.arrivalAirport,
      marketingFlightCode: data.segment.marketingFlightCode,
      estimatedDepartureTime: data.estimatedDepartureTime,
      estimatedArrivalTime: data.estimatedArrivalTime,
      totalFlightTimeInMinutes: data.totalFlightTimeInMinutes,
      boardingGate: data.boardingGate,
      boardingTime: data.boardingTime,
      arrivalTerminal: data.arrivalTerminal,
      isFavorite: false,
    };
  }
}
