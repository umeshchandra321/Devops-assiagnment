'use client';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
  it('renders heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to the DevOps Assignment')).toBeInTheDocument();
  });
});

