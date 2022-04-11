import React, {useContext} from 'react';
import {ProModeContext} from './ProModeContext';

 
export function ProModeToggle(){


        const conter = useContext(ProModeContext);


        return  (
              <div>
               <input type="checkbox" value={conter.proMode} onChange={conter.toggleProMode}/> 
               <label>{conter.proMode.toString()}</label>
              </div>
              
            )
        
}
