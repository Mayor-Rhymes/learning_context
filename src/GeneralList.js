import React, {Component} from 'react';

export class GeneralList extends Component{


    render(){


        return(



            <div className="bg-primary text-white p-3 m-3">


                {this.props.list.map((name, index) => 
                       
                    
                    <p key={name}>{index + 1} : {name}</p>
                )}

                
            </div>
        )
    }
}