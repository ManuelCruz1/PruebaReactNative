import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SliderInformation from "../../components/base/SliderInformation";
import InfoResultContainer from "../../components/ui/screens/results/InfoResultContainer";
import CardInformation from "../../components/ui/screens/results/CardInformation";
import Container from "../../components/ui/screens/results/Container";
import { useDispatch } from "react-redux";
import { addFlightSelected, addSearchNumber } from "../../redux/flightSlice";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../navigator/StackNavigator";
import { useAppSelector } from "../../redux/store";

interface Props {
  navigation?: NavigationProp<RootStackParams>;
}

const ResultNumberScreen = ({ navigation }: Props) => {
  const { searchNumberList, typeToSheach } = useAppSelector(
    (state) => state.flightData
  );

  const dispatch = useDispatch();

  const changeFavoriteList = (favorite, modifiBool) => {
    let temporalElement = favorite;
    let temporalArray = [];
    let temporalArrayFavorite = [];
    let temporalArrayNoFavorite = [];

    temporalElement = { ...temporalElement, isFavorite: modifiBool };
    if (modifiBool) {
      searchNumberList.map((item, i) => {
        if (i === 0) {
          temporalArray.push(temporalElement);
        }
        if (item !== favorite) {
          temporalArray.push(item);
        } else {
        }
      });
    } else {
      searchNumberList.map((item) => {
        if (item === favorite) {
          temporalArrayNoFavorite.push(temporalElement);
        } else {
          temporalArrayFavorite.push(item);
        }
      });
      temporalArray = temporalArrayFavorite.concat(temporalArrayNoFavorite);
    }
    dispatch(addSearchNumber(temporalArray));
  };

  return (
    <MainLayout
      navigation={navigation}
      activeBackIcon={true}
      headerInfo
      typeToSheach={typeToSheach}
    >
      <Container>
        <InfoResultContainer searchNumberList={searchNumberList} />
        {searchNumberList.map((item, i): JSX.Element => {
          return (
            <CardInformation
              key={i}
              navigation={navigation}
              flightData={item}
              changeFavoriteList={changeFavoriteList}
            >
              <SliderInformation
                timeFlightVisible={true}
                flightData={item}
                onPress={() => {
                  dispatch(addFlightSelected(item));
                }}
              />
            </CardInformation>
          );
        })}
      </Container>
    </MainLayout>
  );
};

export default ResultNumberScreen;
