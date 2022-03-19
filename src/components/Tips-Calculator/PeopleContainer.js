const PeopleContainer = ({ nbPeople, setNbPeople }) => {

    return (
        <div className="calc-people-container">
            {nbPeople > 0 || nbPeople === null ? (
                <div>
                    <label className="calc-label" htmlFor="people">Number of People</label>
                    <input className="calc-input" type="tel" id="people" name="people" placeholder="0" required onChange={(e) => setNbPeople(parseFloat(e.target.value))} />
                </div>
            ) : (
                <div>
                <div className="calc-nb-people-error">
                    <label htmlFor="people">Number of People</label>
                    <p className="calc-input-error">Can't be a zero</p>
                </div>
                    <input className="calc-error calc-input" type="tel" id="people" name="people" placeholder="0" required onChange={(e) => setNbPeople(parseFloat(e.target.value))} />
                </div>
            )}
        </div>
    )
}

export default PeopleContainer;