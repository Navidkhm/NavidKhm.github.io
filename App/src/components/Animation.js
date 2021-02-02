// You can live edit this code below the import statements
import React from 'react';
import Fade from 'react-reveal/Fade';
import Info from './Info';
import CustomizedTables from './Table';

class FadeExample extends React.Component {

  constructor(){
    super()
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll=()=>{
    console.log('navidddd')
  }

  render() {

    return (
      <div>
        <Fade bottom>
            <div className='Table'>
                    <CustomizedTables/>
                    
            </div>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
