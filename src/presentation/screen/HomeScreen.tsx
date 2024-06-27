import React from "react";
import PrimaryButton from "../../components/base/PrimaryButton";
import SearchSection from "../../components/ui/screens/home/SearchSection";
import SearchOption from "../../components/ui/screens/home/SearchOption";
import HeaderHome from "../../components/ui/screens/home/HeaderHome";
import HelpSection from "../../components/ui/screens/home/HelpSection";
import MainLayout from "../../layouts/MainLayout";
import useGetData from "../hooks/useGetData";
import useSearchOptions from "../hooks/useSearchOptions";
import Loader from "../../components/ui/screens/home/Loader";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParams } from "../navigator/StackNavigator";

interface Props {
  navigation?: NavigationProp<RootStackParams>;
}

const HomeScreen = ({ navigation }: Props) => {
  //simulando la peticion para la data
  const { isLoading } = useGetData();
  const {
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
  } = useSearchOptions({ navigation });

  return (
    <MainLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HeaderHome />
          <SearchOption
            isSearchNumber={isSearchNumber}
            onPress={() => setIsSearchNumber(!isSearchNumber)}
          />
          <SearchSection
            itemList={itemList}
            searchForNumber={isSearchNumber}
            setNumberToShearch={setNumberToShearch}
            setOriginToShearch={setOriginToShearch}
            setDestinationToShearch={setDestinationToShearch}
            dataInfo={numberToShearch}
            setTypeToShearch={setTypeToShearch}
            typeToShearch={typeToShearch}
            originToShearch={originToShearch}
            destinationToShearch={destinationToShearch}
          >
            <PrimaryButton
              text="Search Flight"
              onPress={() => {
                search();
              }}
            />
            <HelpSection
              searchForNumber={isSearchNumber}
              onPress={() => setIsSearchNumber(!isSearchNumber)}
            />
          </SearchSection>
        </>
      )}
    </MainLayout>
  );
};
export default HomeScreen;
