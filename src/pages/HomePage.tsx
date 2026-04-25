import FormSearch from "../components/FormSearch";
import MainNavigation from "../components/MainNavigation";
import WeatherCard from "../components/WeatherCard";

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <main className="container">
        <section className="weather-container">
          <FormSearch />
          <WeatherCard />
        </section>
      </main>
    </>
  );
};

export default HomePage;
