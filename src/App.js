import React,{useState} from 'react';
import './style.css';
import Container from './components/Container/Container'
import Nav from './components/Nav/Nav'
import QNA from './components/QNA/QNA'
export default function App() {
  const [cartConditon, setCartCondition] = useState(null)
  const showCardFunc = (value) => {
    setCartCondition(value);
  }
  return (
    <>
     <Nav showCardFunc={showCardFunc}/> 
     <Container cartConditon={cartConditon}/> 
     <QNA/>
    </>
  );
}

