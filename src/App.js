// App.js
import React, { useEffect, useState } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import QuoteMachine from './components/QuoteMachine';

const StyledContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
});

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
        );
        if (!response.ok) throw new Error('Failed to fetch quotes');
        const data = await response.json();
        setQuotes(data);
        setSelectedQuoteIndex(random(0, data.length - 1));
      } catch (error) {
        console.error('Error loading quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  const getSelectedQuote = () => {
    if (!quotes.length || selectedQuoteIndex === null) return undefined;
    return quotes[selectedQuoteIndex];
  };

  const assignNewQuoteIndex = () => {
    if (quotes.length === 0) return;
    setSelectedQuoteIndex(random(0, quotes.length - 1));
  };

  const selectedQuote = getSelectedQuote();

  return (
    <StyledContainer id="quote-box">
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            {selectedQuote ? (
              <QuoteMachine
                selectedQuote={selectedQuote}
                assignNewQuoteIndex={assignNewQuoteIndex}
              />
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
}

export default App;