import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from "react-redux"
import {updateRealEstateAgent} from "../../ducks/reducer"

class WizardFive extends Component {

    render(){
        const {updateRealEstateAgent} = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={(e) => updateRealEstateAgent("Yes")}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={(e) => updateRealEstateAgent("No")}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        realEstateAgent: appState.realEstateAgent
    }
}

const actionOoutputs = {
    updateRealEstateAgent: updateRealEstateAgent
}

const connected = connect(mapStateToProps, actionOoutputs)

export default connected(WizardFive);