import React from 'react';

export function ProFeature(FeatureComponent){
    

   return function(props){

      if(props.pro){

          return <FeatureComponent list={props.list}/>
      }

      else{

        return <h1 className="bg-warning text-white text-center">This is a pro feature</h1>
      }
   }
   
    

}