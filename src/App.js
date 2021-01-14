import Infobox from './infobox';
import LineGraph from './linegraph';
import { TextField } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">

        <div className="app__header">
            <Infobox title="Good Results" cases="140000" total="2400000" />
            <Infobox title="Bad Results" cases="37000" total="2400000"/>
            <Infobox title="Total Forcast" cases="140000" total="2400000"/>
        </div>
        <div className="app__center">
          <LineGraph />  
        </div>
        
        
        <div className="app__bottom">
        <TextField id="outlined-basic" label="Client Name" variant="outlined" />
        <TextField id="outlined-basic" label="Possible Good Result" variant="outlined" />
        <TextField id="outlined-basic" label="Possible Bad Result" variant="outlined" />
        </div>
    </div>
  );
}

export default App;
