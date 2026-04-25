import { useNavigate } from "react-router-dom";
import FormSearch from "../components/FormSearch";
import WeatherCard from "../components/WeatherCard";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="weather-container container">
      <h1>Main</h1>
      <button onClick={() => navigate("/details")}>details</button>
      <FormSearch />
      <WeatherCard />
    </section>
  );
};

export default HomePage;
