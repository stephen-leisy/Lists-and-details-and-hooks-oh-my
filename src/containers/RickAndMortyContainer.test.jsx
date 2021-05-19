import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMortyContainer from './RickAndMortyContainer';
import mockData from '../../fixtures/test.json';
import { MemoryRouter } from 'react-router';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

describe('tests for rick n morty api', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('returns characters to the screen on load', async () => {
    render(
      <MemoryRouter>
        <RickAndMortyContainer />
      </MemoryRouter>
    );
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });

  // return waitFor(() => {
  //   screen.getByText(mockData);
  // });
});
