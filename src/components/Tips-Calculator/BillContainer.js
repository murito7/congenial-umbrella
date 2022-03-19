const BillContainer = ({setBill}) => {

    return (
        <div className="calc-bill-container">
            <label className="calc-label" htmlFor="bill">Bill</label>
            <input className="calc-input" type="tel" id="bill" name="bill" placeholder="0" required onChange={(e) => setBill(parseFloat(e.target.value))}/>
        </div>
    )
}

export default BillContainer;