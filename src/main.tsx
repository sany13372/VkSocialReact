import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./components/Router";
import {Provider} from "react-redux";
import {store} from '@context/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </React.StrictMode>,
)
