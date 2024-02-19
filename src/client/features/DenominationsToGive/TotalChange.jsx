import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../DenominationsReceived/Denomination.scss";
import "./TotalChange.scss";
import Totalbar from "../TotalsBar/TotalsBar";
import DenominationCard from "./DenominationCard";

// shows user all change due
const TotalChange = () => {
  // gets calculatedChange object from state
  const { calculatedChange, changeToGive } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <body>
      <div className="changeHeader">
        <h1>Total Change</h1>
        <p>Check the customer's change with the bills and coins below</p>
      </div>
      <br />
      <div className="totalbar">
        <Totalbar />
      </div>
      <h3>Total Change Due: ${changeToGive.toFixed(2)}</h3>
      <section>
        {/* renders each key and corresponding value */}
        {Object.keys(calculatedChange).map((denomination) => {
          const value = calculatedChange[denomination];
          return <DenominationCard denomination={denomination} value={value} />;
        })}
      </section>
      <footer>
        <button onClick={() => navigate("/change")}>Back</button>
        <button onClick={() => navigate("/completed")}>Next</button>
      </footer>
    </body>
  );
};

export default TotalChange;