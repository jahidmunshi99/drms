import { Route, Routes } from "react-router";
import ErrorPage from "../Pages/404/ErrorPage";
import AgriDamage from "../Pages/AgriDamage/AgriDamage";
import AgriFieldDemos from "../Pages/AgriFieldDemos/AgriFieldDemos";
import InsentiveAndRehabilitation from "../Pages/AgriInsentiveAndRehab/InsentiveAndRehabilitation";
import AgriMeshinaries from "../Pages/AgriMeshinaries/AgriMeshinaries";
import AgriProjects from "../Pages/AgriProjects/AgriProjects";
import AgroProduction from "../Pages/AgroProduction/AgroProduction";
import FarmersGroup from "../Pages/FarmersGroup/FarmersGroup";
import FertilizerAndPesticide from "../Pages/FertilizerAndPesticide/FertilizerAndPesticide";
import Home from "../Pages/Home/Home";
import Overview from "../Pages/Overview/Overview";
import Stuffs from "../Pages/Stuffs/Stuffs";
import Trainings from "../Pages/Trainings/Trainings";
import Weather from "../Pages/Weather/Weather";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/production" element={<AgroProduction />} />
      <Route path="/mashinaries" element={<AgriMeshinaries />} />
      <Route path="/agridemo" element={<AgriFieldDemos />} />
      <Route
        path="/intensive&rehabitation"
        element={<InsentiveAndRehabilitation />}
      />
      <Route path="/projects" element={<AgriProjects />} />
      <Route
        path="/fertilizer&pestiside"
        element={<FertilizerAndPesticide />}
      />
      <Route path="/officestuffs" element={<Stuffs />} />
      <Route path="/farmersgroup" element={<FarmersGroup />} />
      <Route path="/training" element={<Trainings />} />
      <Route path="/damage" element={<AgriDamage />} />
      <Route path="/report" element={<Overview />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoute;
