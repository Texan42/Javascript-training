import "./map.css";

const LegInfo = ({leg, t}) => {
    //
    return(
        <div className="legDisplay">
            {t("LegTime")}: <b>{leg.travelTime}</b>
            <br/>
            {t("LegDistance")}: <b>{leg.travelDistance}</b>
            <br/>
        </div>
    )
}

export default LegInfo;