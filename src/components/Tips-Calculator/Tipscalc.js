import "./Tipscalc.css";
import BillContainer from "./BillContainer";
import SelectTip from "./SelectTip";
import PeopleContainer from "./PeopleContainer";
import RecapContainer from "./RecapContainer";
import { useEffect, useState } from "react";
import Backbtn from "../Backbtn/Backbtn"

function Tipscalc() {

  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [nbPeople, setNbPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    if (bill > 0 && tip > 0 && nbPeople > 0) {
      setTipAmount(parseFloat(bill * tip / 100 / nbPeople).toFixed(2));
      setTotalAmount(parseFloat((tipAmount * nbPeople + bill) / nbPeople).toFixed(2));
    }

  }, [bill, tip, nbPeople, tipAmount, totalAmount]);

  return (
    <>
    <Backbtn/>
    <body className="calc-body">
    <div>
      <main >
        <form className="calc-container">
          <div className="calc-general-input-container">
            <BillContainer setBill={setBill} />
            <SelectTip setTip={setTip} />
            <PeopleContainer nbPeople={nbPeople} setNbPeople={setNbPeople} />
          </div>
          <RecapContainer tip={tip} bill={bill} nbPeople={nbPeople} setBill={setBill} setTip={setTip} setNbPeople={setNbPeople} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} tipAmount={tipAmount} totalAmount={totalAmount} />
        </form>
      </main>
    </div>
    </body>
    </>
  );
}

export default Tipscalc;