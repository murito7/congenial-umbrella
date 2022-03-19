const RecapContainer = ({ tip, bill, nbPeople, setBill, setTip, setNbPeople, setTipAmount, setTotalAmount, tipAmount, totalAmount }) => {

    const handleReset = () => {
        setBill(0);
        setTip(0);
        setNbPeople(0);
        setTipAmount(0);
        setTotalAmount(0);
    };

    return (
        <div className="calc-recap-container">

            <div className="calc-recap-top">
                <div className="calc-tip-container">
                    <h2 className="calc-h2">Tip Amount</h2>
                    <p className="calc-p">/ person</p>
                </div>
                <div className="calc-tip-amount">
                    {tipAmount > 0 ? <p className="calc-p">${tipAmount}</p> : <p className="calc-p">$0.00</p>}
                </div>
            </div>

            <div className="calc-recap-bottom">
                <div className="calc-total-container">
                    <h2 className="calc-h2">Total</h2>
                    <p className="calc-p">/ person</p>
                </div>
                <div className="calc-total-amount">
                    {totalAmount > 0 ? <p className="calc-p">${totalAmount}</p> : <p className="calc-p">$0.00</p>}
                </div>
            </div>

            {tipAmount > 0 && totalAmount > 0 && bill != null && tip != null && nbPeople != null ? (
                // Si champ input non vide
                <div className="calc-btn-reset-form">
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
                // sinon, si champ input vide
            ) : (
                <div className="calc-btn-reset-form empty">
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
                )
            }
        </div>
    )
}

export default RecapContainer;