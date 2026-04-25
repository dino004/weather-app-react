import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Details pages</h1>
      <Button onClick={() => navigate("/")}>go to main page</Button>
    </>
  );
};

export default DetailsPage;
