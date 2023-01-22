import {useEffect,useState } from 'react';
import QRCode from 'react-qr-code';
import './style.css'

const App = ({text}) => {
  const[src, setSrc] = useState('');

  useEffect(() => {
    
    
  }, [text])


  return (<div style={{background: 'grey', padding: '300px', width:'75%', height: '75%'}}>
    <h1 className="title">SwiftServe QRCode</h1>
    <QRCode value = 'test'/>
    Scan the QRCode to access to the Bill
  </div>
  )
};

export default App;