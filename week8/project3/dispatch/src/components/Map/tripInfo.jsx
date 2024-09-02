import LegInfo from "./legInfo.jsx";
import "./map.css";

const TripInfo = ({tripData, t}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            {
                (tripData.legs)? 
                <> 
                {/* i18n later can't be any hardcoded text and what not. */}
                    <div className="legsHolder">
                        <div className="legDisplay" style={{ display: "flex", flexDirection: "column"}}>
                            <p> {t("TotalDistance")}: <b> {tripData.tripDistance} {t("Miles")}</b></p>
                        </div>

                        <div className="legDisplay" style={{ display: "flex", flexDirection: "column"}}>
                            <p>{t("TotalDuration")}: <b>{tripData.tripDuration} {t("Minutes")}</b></p>
                        </div>

                    </div>
                    <div className="legsHolder">
                    {/* each legInfo needs a key. */}
                        {
                            tripData.legs.map(leg => <LegInfo leg={leg} t={t}/>)
                            
                            }
                    </div>    
                </>
                    : 
                    <div> 
                        <h3> No trip data </h3>
                    </div>
            }
            {/* set inner text to duration and distance and appeneded */}
        </div>
    )
}

export default TripInfo;