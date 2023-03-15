/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { dataDeport, listCategory } from "../data";

export const ContextDB = createContext();

const ProviderDB = (props) => {
  const [deport, setDeport] = useState([]);
  const [state, setstate] = useState([]);

  const [category, setcategory] = useState([]);

  const filterSportByCategory = async (data) => {
    try {
      console.log(data);

      if (data === "all") {
        setDeport(dataDeport);
        return;
      }

      const dataFilter = await state.filter((x) =>
        x.categoria.toLowerCase().includes(data.toLowerCase())
      );

      setDeport(dataFilter);
    } catch (error) {
      console.log(error);
    }
  };

  const newCardSport = (data) => {
    setDeport([data, ...deport]);
    setstate([data, ...state]);
  };

  console.log(state);

  useEffect(() => {
    setDeport(dataDeport);
    setstate(dataDeport);
  }, [dataDeport]);

  useEffect(() => {
    setcategory(listCategory);
  }, [listCategory]);

  return (
    <ContextDB.Provider
      value={{ deport, category, filterSportByCategory, newCardSport }}
    >
      {props.children}
    </ContextDB.Provider>
  );
};

export default ProviderDB;
