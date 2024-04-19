import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/store'; // Asegúrate de que estos son los nombres correctos
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'; // Asegúrate de tener esta importación si usas PersistGate

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
