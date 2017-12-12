import React from 'react';
import ReactDOM from 'react-dom';
import '@assets/styles/index.css';
import routeConfig from '@src/router/index.js';
// import Main from '@cpts/main.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
ReactDOM.render(<Router><div>
    {
        routeConfig.map((route, i) => (
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
        ))
    }
</div></Router>, document.getElementById('root'));
registerServiceWorker();
