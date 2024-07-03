import './NavBar.css';

function NavBar( {activeTab, setActiveTab} ) {
    const handleTabClick = (tab) => { 
        setActiveTab(tab)
    }

    return (
        <div className='nav'>
            <div className="nav-logo">NH-Tool</div>
            <ul className="nav-menu">
                {/* <li>About</li> */}
                {/* <li className={activeTab === "ageCalculator" ? "active" : ""} onClick={() => handleTabClick("ageCalculator")}>Neonatal Age</li> */}
                <li className={activeTab === "treatmentThresholdCalculator" ? "active" : ""} onClick={() => handleTabClick("treatmentThresholdCalculator")}>Treatment Threshold</li>
            </ul>
        </div>
    )
}

export default NavBar; 