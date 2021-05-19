import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMortyContainer from './RickAndMortyContainer';

describe('tests for rick n morty api', () => {
  it('returns characters to the screen on load', () => {
    render(<RickAndMortyContainer />);
    screen.getByText('Loading...');
  });
});
