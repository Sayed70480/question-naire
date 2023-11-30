import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Question from './Question.css';
import data from './Data.jsx';

function QuestionList() {
  return (
    <Accordion alwaysOpen className="container">
      <h2 className="title">QUESTION</h2>
      {data
        ? data.map((res, ind) => (
            <Accordion.Item eventKey={(ind + 1)} className="List">
              <Accordion.Header className="question">
                {ind + 1}# : {res.question}
              </Accordion.Header>
              <Accordion.Body className='answer'>Answer : {res.answar}</Accordion.Body>
            </Accordion.Item>
          ))
        : null}
    </Accordion>
  );
}

export default QuestionList;
