import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Renderización de la aplicación', () => {
  test('La aplicación se renderiza correctamente', () => {
    const { getByText } = render(<App />); // Renderiza el componente principal de tu aplicación
    const welcomeText = getByText('Bienvenido'); // Verifica si se muestra el texto de bienvenida
    expect(welcomeText).toBeInTheDocument(); // Asegúrate de que el texto esté presente en la pantalla
  });
});
