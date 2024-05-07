import { MainBoardLeft } from "./home_mainBoard_components/MainBoardLeft";
import { MainBoardCenter } from "./home_mainBoard_components/MainBoardCenter";
import { MainBoardRight } from "./home_mainBoard_components/MainBoardRight";
import { TrendingCategories } from "./home_trending_categories_components/TrendingCategories";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import "./home.css";

let mainBoardCenterTheme = "mainBoardCenterDark";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [category, setCategory] = useState("Action");

  const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const imageUrlSelect = () =>{
    if (theme == 'light') {
      mainBoardCenterTheme = "mainBoardCenterDark"
    }else{
      mainBoardCenterTheme = "mainBoardCenterLight"
    }
  }
  useEffect(() => {
    imageUrlSelect()
  
   
  }, [theme])
  


  return (
    <>
        <div className={theme}>
      <section className="mainBoard1">
          <section className="mainBoardLeft">
            <MainBoardLeft />
          </section>
          <section className={mainBoardCenterTheme}>
            <MainBoardCenter />
          </section>
          <section className="mainBoardRight">
            <MainBoardRight category={category} />
          </section>
      </section>
        </div>
      <section className="trendingCategories">
        {/* Es mejorable el TrendingCategories. Dejar solo una func con un switch dentro, viendo los id de los buttons */}
        <TrendingCategories handleChangeCategory={handleChangeCategory} />
        {console.log(`La categoria seleccionada es: ${category}`)}
      </section>
    </>
  );
};
