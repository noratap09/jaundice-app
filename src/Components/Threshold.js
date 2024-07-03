import './Threshold.css';
import LineChart from './graph.js'; // Import the LineChart component
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function CalculateThreshold( {ageHours, setAgeHours, sbrMeasurement, setSBRMeasurement, gestationAge, 
    setGestationAge, distance, setDistance, severity, setSeverity, submitted, setSubmitted}) {  
    const ThresholdDifference = (e) => {
        e.preventDefault();
        const parsedSbrMeasurement = parseFloat(sbrMeasurement); 
        let PT_threshold;
        let ET_threshold;
        let S_threshold;
        
        if (gestationAge === '28') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*1.94444) + 40;
            S_threshold = (ageHours*2.63889) + 40; 
            ET_threshold = (ageHours*2.77778) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 180;
            S_threshold = 230;
            ET_threshold = 280;
          }
        } else if (gestationAge === '29') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.08333) + 40;
            S_threshold = (ageHours*2.77778) + 40; 
            ET_threshold = (ageHours*2.91667) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 190;
            S_threshold = 240;
            ET_threshold = 290;
          }
        } else if (gestationAge === '30') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.22222) + 40;
            S_threshold = (ageHours*2.91667) + 40;
            ET_threshold = (ageHours*3.05556) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 200;
            S_threshold = 250;
            ET_threshold = 300;
          }
        } else if (gestationAge === '31') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.36111) + 40;
            S_threshold = (ageHours*3.05556) + 40;
            ET_threshold = (ageHours*3.19444) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 210;
            S_threshold = 260;
            ET_threshold = 310;
          }
        } else if (gestationAge === '32') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.50000) + 40;
            S_threshold = (ageHours*3.19444) + 40; 
            ET_threshold = (ageHours*3.33333) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 220;
            S_threshold = 270; 
            ET_threshold = 320;
          }
        } else if (gestationAge === '33') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.63889) + 40;
            S_threshold = (ageHours*3.33333) + 40; 
            ET_threshold = (ageHours*3.47222) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 230;
            S_threshold = 280; 
            ET_threshold = 330;
          }
        } else if (gestationAge === '34') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.77778) + 40;
            S_threshold = (ageHours*3.47222) + 40; 
            ET_threshold = (ageHours*3.61111) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 240;
            S_threshold = 290; 
            ET_threshold = 340;
          }
        } else if (gestationAge === '35') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*2.91667) + 40;
            S_threshold = (ageHours*3.61111) + 40; 
            ET_threshold = (ageHours*3.75000) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 250;
            S_threshold = 300; 
            ET_threshold = 350;
          }
        } else if (gestationAge === '36') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*3.05556) + 40;
            S_threshold = (ageHours*3.75000) + 40; 
            ET_threshold = (ageHours*3.88889) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 260;
            S_threshold = 310; 
            ET_threshold = 360;
          }
        } else if (gestationAge === '37') {
          if (ageHours <= 72) {
            PT_threshold = (ageHours*3.19444) + 40;
            S_threshold = (ageHours*3.88889) + 40; 
            ET_threshold = (ageHours*4.02778) + 80;
          } else if (ageHours > 72) { 
            PT_threshold = 270;
            S_threshold = 320; 
            ET_threshold = 370;
          }
        } else if (gestationAge >= '38') {
            if (ageHours >= 0 || ageHours <= 24) { 
              PT_threshold = (ageHours*4.16667) + 100 
            } else if (ageHours >= 24 || ageHours <= 96) {
              PT_threshold = (ageHours*2.08333) + 200
            } else if (ageHours > 96) { 
              PT_threshold = 350 
            } 
            
            if (ageHours >= 0 || ageHours <= 48) {
              S_threshold = (ageHours*6.25) + 100
            } else if (ageHours > 48) {
              S_threshold = 400
            }
    
            if (ageHours >= 0 || ageHours <= 42) {
              ET_threshold = (ageHours*8.33333) + 100 
            } else if (ageHours > 42) {
              ET_threshold = 450
            }
        }
    
        if (parsedSbrMeasurement < PT_threshold && parsedSbrMeasurement < ET_threshold) {
          setSeverity("Normal");
        } else if (parsedSbrMeasurement >= PT_threshold && parsedSbrMeasurement < ET_threshold) {
          setSeverity("PT");
        } else if (parsedSbrMeasurement >= ET_threshold) {
          setSeverity("ET");
        }
    
        if (PT_threshold !== undefined && ET_threshold !== undefined) {
          let calculatedDistance; 
          if (parsedSbrMeasurement < PT_threshold) {
            calculatedDistance = PT_threshold - parsedSbrMeasurement;
          } else if (parsedSbrMeasurement >= PT_threshold && parsedSbrMeasurement < ET_threshold) { 
            calculatedDistance = PT_threshold - parsedSbrMeasurement;
          } else { 
            calculatedDistance = ET_threshold - parsedSbrMeasurement
          }
          calculatedDistance = calculatedDistance / 10
          setDistance(calculatedDistance);
          setSubmitted(true);
        }
    };

    // Generate options for gestation age dropdown
    const gestationAgeOptions = [];
    for (let i = 28; i <= 37; i++) {
        gestationAgeOptions.push(
        <option key={i} value={i}>
        {i} weeks
        </option>);
    }
    gestationAgeOptions.push(<option key="38" value="38">38+ weeks</option>);

    return (
        <>
        <div className="treatment-threshold-container">
            <h1>Treatment Threshold</h1>
            <form className="styled-form" onSubmit={ThresholdDifference}>
                <div className="form-group">
                    <label htmlFor="ageHours">Neonatal Age (Hours): </label>
                    <input
                    type="text"
                    id="ageHours"
                    onChange={(e) => setAgeHours(e.target.value)}
                    required 
                    />
                </div>
                
                <div className="styled-form"> 
                  {/* <DateTimePicker label="Basic date time picker" /> */}
                  {/* <DemoItem label="Responsive variant"> */}
                    {/* <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} /> */}
                  {/* </DemoItem> */}
                </div>

                <div className="form-group">
                    <label htmlFor="SbrMeasurement">SBR Measurement: </label>
                    <input
                    type="text"
                    id="sbrMeasurement"
                    value={sbrMeasurement}
                    onChange={(e) => setSBRMeasurement(e.target.value)}
                    required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gestationAge">Gestation Age: </label>
                    <select
                    id="gestationAge"
                    value={gestationAge}
                    onChange={(e) => setGestationAge(e.target.value)}
                    required>

                    <option value="">Select gestation age</option>
                    {gestationAgeOptions}
                    </select>
                </div>

                {/* <div className="form-group">
                  <label htmlFor="G6PD">G6PD: </label>
                </div> */}

                <button type="submit">Calculate Distance</button>
            </form>
        </div>
        

        <div className="distance-result">
            {submitted && distance !== null ? (
              <>
                {distance > 0 ? (
                  <div className="result">Distance: {Math.round(Math.abs(distance))} below the threshold line</div>
                ) : distance < 0 ? (
                  <div className="result">Distance: {Math.round(Math.abs(distance))} above the threshold line</div>
                ) : (
                  <div className="result">Distance: On the threshold line</div>
                )}
                <div className="graph">
                  <LineChart 
                    ageHours={ageHours}
                    sbrMeasurement={sbrMeasurement}
                    gestationAge={gestationAge}
                  />
                </div>
              </>
            ) : null}
        </div>
    </>
    )
} 

export default CalculateThreshold;