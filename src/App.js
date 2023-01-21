import {useEffect,useState } from 'react';
import QRCode from 'react-qr-code';


const App = ({text}) => {
  const[src, setSrc] = useState('');

  useEffect(() => {
    
    
  }, [text])


  return (<div style={{ background: 'white', padding: '16px' }}>
    <QRCode value = 'test'/>
    hello
  </div>
  )
};

export default App;