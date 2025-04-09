import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../images/images.css";
import Totalbar from "../../layout/Totals_Navbar";
import DenominationCard from "./DenominationCard";

const TotalChange = () => {
  const calculatedChange = useSelector((state) => state.cart.calculatedChange);
  const navigate = useNavigate();

  return (
    <div>
      <div className="totalbar">
        <Totalbar />
      </div>

      <button onClick={() => navigate("/completed")}>Next</button>
    </div>
  );
};

export default TotalChange;