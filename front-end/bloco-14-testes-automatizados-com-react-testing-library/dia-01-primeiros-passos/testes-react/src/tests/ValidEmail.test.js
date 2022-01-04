import React from "react";
import { render, screen } from '@testing-library/react'
import ValidEmail from "../components/ValidEmail";

test('Testando um componente, caso o email seja válido', () => {
  const emailUser = 'email@email.com';
  render(<ValidEmail email={ emailUser } />);

  const isValid = screen.getByText('Email Válido');

  expect(isValid).toBeInTheDocument();
});
test('Testando um componente, caso o email seja inválido', () => {
  const emailUser = 'emailerrado';
  render(<ValidEmail email={ emailUser } />);

  const isValid = screen.getByText('Email Inválido');

  expect(isValid).toBeInTheDocument();
})