import { useNavigate } from "react-router-dom";
import Button from "./Button";

const MainNavigation = () => {
      const navigate = useNavigate();

    return (
        <nav className="main-nav">
          <Button onClick={() => navigate("/")}>main</Button>
          <Button onClick={() => navigate("/details")}>details</Button>
        </nav>
    )
}

export default MainNavigation