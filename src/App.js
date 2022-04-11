import React, {Component} from 'react'

import {GeneralList} from './GeneralList';
import {SortedList} from './SortedList';
import {ProModeContext} from './ProModeContext';

import {ProModeToggle} from './ProModeToggle';


export default class App extends Component{

  constructor(props){



    super(props);
    this.state = {

        names: ['Zoe', 'Rachel', 'Raquel', 'Alice', 'Desmond', 'Maya', 'Michael'],
        //proMode: false

        proContextData: {
          proMode: false,
          toggleProMode: this.toggleProMode
      }
    }


  }

  
  
  
  
  toggleProMode = () => {


    this.setState(state => state.proContextData.proMode = !state.proContextData.proMode);
  }


  

  render(){

    return(


      <div className="container-fluid">

          <div className="text-center">
            <ProModeContext.Provider value={this.state.proContextData}>
               <ProModeToggle />
             </ProModeContext.Provider>
          </div>
          

          <div className="row"> 

              <div className="col-6">


                <GeneralList list={this.state.names}/>
              </div>


              <div className="col-6">


                <ProModeContext.Provider value={this.state.proContextData}>

                   <SortedList list={this.state.names} />
                </ProModeContext.Provider>
              </div>

              {this.state.proContextData.proMode.toString()}

          </div>



      </div>
    )
  }
}