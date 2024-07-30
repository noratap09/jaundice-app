import { useState } from "react";
import packageJson from '../package.json';

// import AgeCalc from "./Components/AgeCalc.js";
import NavBar from "./Components/NavBar.js";
import './App.css';
import CalculateThreshold from "./Components/Threshold.js";


function App() {
  const [activeTab, setActiveTab] = useState("treatmentThresholdCalculator");

  // Constants to calcualte neonatal age 
  // const [dob, setDob] = useState('');
  // const [sbrMeasurementDate, setSbrMeasurementDate] = useState('');
  // const [age, setAge] = useState(null);

  // Constants to calculate the SBR distance from treatment threshold
  const [ageHours, setAgeHours] = useState('');
  const [sbrMeasurement, setSBRMeasurement] = useState('');
  const [gestationAge, setGestationAge] = useState('');
  const [distance, setDistance] = useState(0);
  const [severity, setSeverity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="app-main">
        {/* {activeTab === "ageCalculator" && <AgeCalc 
        dob={dob}
        setDob={setDob}
        sbrMeasurementDate={sbrMeasurementDate}
        setSbrMeasurementDate={setSbrMeasurementDate}
        age={age}
        setAge={setAge}
        />} */}

        {activeTab === "treatmentThresholdCalculator" && <CalculateThreshold
          ageHours={ageHours}
          setAgeHours={setAgeHours}
          sbrMeasurement={sbrMeasurement}
          setSBRMeasurement={setSBRMeasurement}
          gestationAge={gestationAge}
          setGestationAge={setGestationAge}
          distance={distance}
          setDistance={setDistance}
          severity={severity}
          setSeverity={setSeverity}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />}
      </main>
      <div className="footer">
        <div className="footer-text">version {packageJson.version}</div>
      </div>
    </div>
  );
}

export default App;
