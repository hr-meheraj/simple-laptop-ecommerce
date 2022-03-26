import React, { useState, useEffect } from 'react';
import './QNA.css';
const QNA = () => {
  // const [qna, setQna] = useState([]);
  // useEffect(() => {
  //   fetch('qna.json')
  //   .then( res => res.json())
  //   .then( data => setQna(data));
  // },[])
  // console.log(qna);
  const qna = [
    {
      question: 'How React Works?',
      answer:
        "React is a JavaScript popular library for user interface(UI) and making a website single page. React copy the real DOM in the browser to the Virtual DOM, when the user chage any state it's will not re-render the dom and through of the diff algorithm it can know what have been change and which elements change. Then the virtual DOM only re-render changed element not full dom. This way React js work.",
    },
    {
      question: 'Props Vs State?',
      answer:
        "Props mean fully properties, in vanilla javascript we create a function with parameter and using it when call the function. That's like props when can send data Parent component to Child componet. And we can set the value of props when the Child Componet use. It is dynamically chageable by us when the componet use and the final thing is that we cannot send data child to parent. The second thing state is a Object and Data. And State is the called the heart of Componet. We can manage our State data using React useState hook and the Last thing state cannot be accessed and modified outside a component ",
    },
    {
      question: 'How React useState work?',
      answer:
        'useState is a React js Building hook where we can manage our state/data by it. useState get two thing and for initialization value and setter function. First initialization value we can use to get it easily and the second think when the event or anything is occured we can set the value/ or change the value of state using secondFunction on the useState. Here we can store Object, Array, Text, Number, Boolean and others thing',
    },
  ];
  return (
    <div className="qna-container">
      <h2 className="qna-title"> Question and Answers </h2>
      {qna.map((eachQna, index) => (
        <GetQna data={eachQna} key={index} />
      ))}
    </div>
  );
};

const GetQna = ({ data }) => {
  const { question, answer } = data;
  return (
    <div>
      <h3>
        {' '}
        <strong>Question: </strong> {question}{' '}
      </h3>
      <p>
        {' '}
        <strong>Answer: </strong> {answer}{' '}
      </p>
      <br />
    </div>
  );
};

export default QNA;
