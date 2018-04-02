'use strict'

import App from './app'

import React from 'react';

import { render} from 'react-dom';

import { AppContainer } from 'react-hot-loader';

const renderApp = (NextApp)=>{
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]'));
}

renderApp(App);

if (module.hot) {
    module.hot.accept('./app', ()=> {
        //quando algo for atualizado, irá chamar esta função
        //Quando importar do CommonJS para o ECMA Script 6
        //Utilizar o .default
        const NextApp = require('./app').default;
        renderApp(NextApp);
    });
}