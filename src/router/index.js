import main from '@cpts/main.js';
import app from '@cpts/App/index.js';
export default [{
    path: '/',
    component: main,
    exact: true
}, {
    path: '/app',
    component: app,
}];