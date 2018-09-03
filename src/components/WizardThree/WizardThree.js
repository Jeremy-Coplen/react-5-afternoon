import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from "react-redux"
import {updateProp} from "../../ducks/reducer"

class WizardThree extends Component {
    render(){
        const {updateProp} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={() => updateProp("Primary Home")}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={() => updateProp("Rental Property")}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={() => updateProp("Secondary Home")}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        propToBeUsedOn: appState.propToBeUsedOn
    }
}

const actionOutputs = {
    updateProp: updateProp
}

const connected = connect(mapStateToProps, actionOutputs)

export default connected(WizardThree); 
