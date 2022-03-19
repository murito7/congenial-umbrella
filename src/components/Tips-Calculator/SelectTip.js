const SelectTip = ({setTip}) => {

    const handleCustomInput = () => {
        document.getElementById("calc-custom").style.display = "initial";
        document.getElementById("calc-custom").focus();
        document.getElementById("label-custom").style.display = "none";
    }

    return (
        <div className="calc-select-tip-container">
            <label className="calc-label">Select Tip %</label>
            <div className="calc-tip-input">
                <div>
                    <input className="calc-input" type="radio" id="calc-five" name="tip-percentage" value="5" required onClick={(e) => setTip(parseInt(e.target.value))}/>
                    <label className="calc-label" htmlFor="calc-five">5%</label>
                </div>
                <div>
                    <input className="calc-input" type="radio" id="calc-ten" name="tip-percentage" value="10" onClick={(e) => setTip(parseInt(e.target.value))}/>
                    <label className="calc-label"  htmlFor="calc-ten">10%</label>
                </div>
                <div>
                    <input className="calc-input" type="radio" id="calc-fifteen" name="tip-percentage" value="15" onClick={(e) => setTip(parseInt(e.target.value))}/>
                    <label className="calc-label"  htmlFor="calc-fifteen">15%</label>
                </div>
                <div>
                    <input className="calc-input" type="radio" id="calc-twenty-five" name="tip-percentage" value="25" onClick={(e) => setTip(parseInt(e.target.value))}/>
                    <label className="calc-label"  htmlFor="calc-twenty-five">25%</label>
                </div>
                <div>
                    <input className="calc-input" type="radio" id="calc-fifty" name="tip-percentage" value="50" onClick={(e) => setTip(parseInt(e.target.value))}/>
                    <label className="calc-label"  htmlFor="calc-fifty">50%</label>
                </div>
                <div>
                    <input className="calc-input" type="tel" id="calc-custom" name="tip-percentage" onChange={(e) => setTip(parseFloat(e.target.value))} onClick={handleCustomInput}/>
                    <label className="calc-label"  htmlFor="calc-custom" id="label-custom">Custom</label>
                </div>
            </div>
        </div>
    )
}

export default SelectTip;