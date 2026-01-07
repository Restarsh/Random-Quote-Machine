// components/QuoteMachine.js
import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => {
  const tweetText = `"${selectedQuote.quote}" — ${selectedQuote.author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&hashtags=quotemachine,inspiration`;

  return (
    <Card>
      <CardContent>
        <Typography id="text" variant="h6" component="p" gutterBottom>
          "{selectedQuote.quote}" —{' '}
          <span id="author" style={{ fontWeight: 'bold' }}>
            {selectedQuote.author}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          id="new-quote"
          variant="contained"
          color="primary"
          size="small"
          onClick={assignNewQuoteIndex}
        >
          New Quote
        </Button>
        <IconButton
          id="tweet-quote"
          aria-label="Tweet this quote"
          target="_blank"
          rel="noopener noreferrer"
          href={tweetUrl}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default QuoteMachine;sasa