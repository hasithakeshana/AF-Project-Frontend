import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
   
    <div>
    


    <p>5 star </p>   <Progress multi>
     <Progress bar animated color="warning"  value="50" max={100}>5</Progress>
      
    </Progress>
    <br></br>

    <Progress multi>
      <Progress bar animated color="danger" value={19} max={55}>5</Progress>
      
    </Progress>
    <br></br>
    <Progress multi>
    <Progress bar animated color="info" value="20" max={100}>10</Progress>
      
    </Progress>
    <br></br>
    <Progress multi>
    <Progress bar animated color="success" value="50" max={100}>10</Progress>
      
    </Progress>
    <br></br>
    <Progress multi>
       <Progress bar animated  value="5" max={55}>5</Progress>
      
    </Progress>
  </div>
    
  );
};

export default Example;