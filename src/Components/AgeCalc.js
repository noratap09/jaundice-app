import './AgeCalc.css';

function AgeCalc( {dob, setDob, sbrMeasurementDate, setSbrMeasurementDate, age, setAge}) {  
    const handleCalculateAge = (e) => {
        e.preventDefault();
        const birthDate = new Date(dob);
        const sbrDate = new Date(sbrMeasurementDate);
        let age = sbrDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = sbrDate.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && sbrDate.getDate() < birthDate.getDate())) {
          age--;
        }
        setAge(age);
    };
    
    return ( 
        <>
        <div className="age-calculator-container">
            <h1>Age Calculator</h1>
            <form onSubmit={handleCalculateAge}>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required />
                <label htmlFor="sbrMeasurementDate">SBR Measurement Date:</label>
                <input
                    type="date"
                    id="sbrMeasurementDate"
                    value={sbrMeasurementDate}
                    onChange={(e) => setSbrMeasurementDate(e.target.value)}
                    required />
                <button type="submit">Calculate Age</button>
            </form>
        </div>
        
        <div className="age-result-container">
                {age !== null &&
                    <div className="result">Age: {age} years</div>}
        </div>
        </>
    )
} 

export default AgeCalc;