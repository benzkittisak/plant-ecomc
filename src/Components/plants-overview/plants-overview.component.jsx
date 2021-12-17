import React from "react";
import { useNavigate } from "react-router-dom";

import './plants-overview.style.scss';

const PlantOverview = ({plants}) => {
    const navigate = useNavigate();
    return(
        <div className="plant-overview">
          {
              plants.map(plant => 
                <div onClick={() => navigate(`${plant.routeName}`)} className="plant-container" key={plant.id} style={{backgroundImage:`url("${plant.previewImage}")`}}>
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

export default PlantOverview;