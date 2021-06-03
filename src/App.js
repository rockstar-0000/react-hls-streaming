import './App.css';
import React, { useEffect }  from 'react';
import {Button} from '@material-ui/core'; //importing material ui component
import {TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ReactHlsPlayer from 'react-hls-player';

function App() {
  const playerRef = React.useRef();
  const [userText, setUserText] = React.useState("");
  const [url, setUrl] = React.useState("");

  const changeText = (event) =>{
    console.log("input: ", event.target.value);
    setUserText(event.target.value);
  }
  const clickSend = () => {
    console.log("send ", userText);
    setUrl(userText);
    playerRef.current.play();
  }
  return (
    <div className="App">
    <br/>
      <Button color="primary" variant="contained" onClick={clickSend}> Show streaming </Button> 
      <br/><br/>
      <TextField id="nameInput" label="Streaming URL:" variant="outlined" type="input" autoComplete="off"  onChange={changeText} defaultValue=""  value={userText} style={{width: '50%'}} />
      <br/><br/>
      <ReactHlsPlayer
        playerRef={playerRef}
        src={url}
        autoPlay={true}
        controls={true}
        width="70%"
        height="auto"
      />
      <br/><br/>
      <AccountCircle/>
    </div>
  );
}

export default App;