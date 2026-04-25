import Button from "./Button";

const FormSearch = () => {
  return (
    <form className="weather-form">
      <label className="weather-form__label">
        Write city name:
        <input type="text" required />
      </label>
      <Button className="button-submit" type="submit">
        Search
      </Button>
    </form>
  );
};

export default FormSearch;
