import React from "react";
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const QuoteMachine = (props) => {
  return (
    <Card>
      <CardContent>
        {props.selectedQuote
          ?
          (<Typography>
            {props.selectedQuote.quote} - {props.selectedQuote.author}
          </Typography>)
          : null
          }
      </CardContent>

      <CardActions>
        <Button size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
      </CardActions>
    </Card>
  );
};

export default QuoteMachine