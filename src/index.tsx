import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './Store';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import Home from './Components/Home/Home'
import App from './Components/App/App';
import CustomersList from './Components/CustomersList/CustomersList';
import CustomersDetails from './Components/CustomersDetails/CustomersDetails';
import SuppliersList from './Components/SuppliersList/SuppliersList';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <React.StrictMode>
                <App>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/customers" element={<CustomersList/>} />
                        <Route path="/customer/:id" element={<CustomersDetails/>} />
                        <Route path="/suppliers" element={<SuppliersList/>} />
                    </Routes>
                </App>
            </React.StrictMode>
        </BrowserRouter>            
    </Provider>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
