// import Home from "../Pages/Home/Home";

import AgriProduction from "../Pages/CorpProduction/AgriProduction";

// import Overview from "../Pages/Overview/Overview";

// import Weather from "../Pages/Weather/Weather";

const Contents = () => {
  return (
    <main className="mx-5 md:px-5 md:ml-70 pt-23 mb-15 rounded">
      {/* The padding-left on md+ screens matches sidebar width */}
      {/* <Home /> */}
      {/* <Weather /> */}
      {/* <Overview /> */}
      <AgriProduction />
    </main>
  );
};

export default Contents;
