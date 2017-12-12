import Music from '@cpts/App/Music/index.js';
import Link from '@cpts/App/Link/index.js';

export default [{
    path: '/app/music',
    component: Music,
    exact: true
}, {
    path: '/app/link',
    component: Link,
    exact: true
}];