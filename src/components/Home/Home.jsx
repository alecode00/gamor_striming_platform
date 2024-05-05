import { MainBoardLeft } from "./home_mainBoard_components/MainBoardLeft";
import { MainBoardCenter } from "./home_mainBoard_components/MainBoardCenter";
import { MainBoardRight } from "./home_mainBoard_components/MainBoardRight";
import { TrendingCategories } from "./home_trending_categories_components/TrendingCategories";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import './index2.css'
export const Home = () => {
  const {theme} = useContext(ThemeContext)

  const [category, setCategory] = useState("Action")
  
  const handleChangeCategory = (newCategory) =>{
    setCategory(newCategory);
  }

  return (
    <>
      <section className="mainBoard">
        <div className={theme} >

        <MainBoardLeft />
        </div>
        <MainBoardCenter />
        <MainBoardRight category={category} />
      </section>
      <section className="trendingCategories" >
        {/* Es mejorable el TrendingCategories. Dejar solo una func con un switch dentro, viendo los id de los buttons */}
        <TrendingCategories handleChangeCategory={handleChangeCategory} />
        {console.log(`La categoria seleccionada es: ${category}`)}
      </section>
    </>
  );
};
