import React from "react";
import Button from "./button";

const QuoteMachine = (props) => {
  return (
    <>
      {props.selectedQuote
        ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}`
        : ""}
      <Button
        buttonDisplayName="Next Quote"
        clickHandler={props.assignNewQuoteIndex}
      />
    </>
  );
};

export default QuoteMachine