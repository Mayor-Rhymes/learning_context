import React, {Component} from 'react';
import {GeneralList} from './GeneralList';
import {ActionButton} from './ActionButton';
export class SortedList extends Component{
    
    constructor(props){


        super(props);
        this.state = {


            sorted: false
        };
    }
    

    toggleSort = () => {


        this.setState({sorted: !this.state.sorted})
    }


    getList = () => {

       return this.state.sorted ? [...this.props.list].sort() : this.props.list;
        
    }
    render(){


        return(

           <div>

             <GeneralList list={this.getList()}/>

             <ActionButton theme='secondary' text='sort' callback={this.toggleSort}/>


           </div>

            
        )
    }


      
}