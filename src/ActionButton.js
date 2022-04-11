import React, {Component} from 'react';
//Context Consumer
import {ProModeContext} from './ProModeContext';

export class ActionButton extends Component{


    render(){
        
        return(
          
            <ProModeContext.Consumer>
            {  contextData => {

            return (<button className={this.getClasses(contextData.proMode)} onClick={this.props.callback}
            
            disabled={!contextData.proMode}>

                {this.props.text}
                {contextData.proMode.toString()}
            </button>)
            
            }
           }

            </ProModeContext.Consumer>
        )
    }




    getClasses(proMode) {
            let col = proMode ? this.props.theme : "danger";
            return `btn btn-${col} m-2`;
        }
    
}