import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPlantSection } from "../../redux/plants/plants.selector";
import { useNavigate } from "react-router-dom";

import './plants-overview.style.scss';

const PlantOverview = ({sections}) => {
    const navigate = useNavigate();
    return(
        <div className="plant-overview">
          {
              sections.map(plant => 
                <div onClick={() => navigate(`${plant.linkUrl}`)} className="plant-container" key={plant.id} style={{backgroundImage:`url("${plant.previewImage}")`}}>
                    <div className="plant-content">
                        <div className="plant-title">
                            {plant.title}
                        </div>
                    </div>
                </div>
                )
          }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections:selectPlantSection
})

export default connect(mapStateToProps)(PlantOverview);