import React from "react";
import Button from "./button";
import { Typography } from "@mui/material";

const QuoteMachine = (props) => {
  return (
    <>
      {props.selectedQuote
        ?
        (<Typography>
          {props.selectedQuote.quote} - {props.selectedQuote.author}
        </Typography>)
        : null
        }
      <Button
        buttonDisplayName="Next Quote"
        clickHandler={props.assignNewQuoteIndex}
      />
    </>
  );
};

export default QuoteMachine