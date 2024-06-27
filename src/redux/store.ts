import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    flightData: flightReducer,
  },
});

//creando useAppDispatch y useAppSelector para ayudar a asignar tipado para el estado

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
