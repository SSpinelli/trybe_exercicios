import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testes da pagina principal', () => {
  it('Verifica se existe um input de email renderizado em tela', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
  
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  it('Verifica se existe dois botões renderizado em tela', () => {
    render(<App />);
    const btn = screen.getAllByRole('button');
  
    expect(btn).toHaveLength(2);
  });
  it('Verifica se existe um botão de enviar renderizado em tela', () => {
    render(<App />);
    const sendBtn = screen.getByTestId('id-send');
  
    expect(sendBtn).toBeInTheDocument();
    expect(sendBtn).toHaveProperty('type', 'button');
    expect(sendBtn).toHaveValue('Enviar');
  });
  it('Verifica se o botão e o campo email estão funcionando', () => {
    render(<App />);
    const emailUser = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email')
  
    userEvent.type(inputEmail, emailUser);
    userEvent.click(btnSend);
  
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${emailUser}`);
  })
})

