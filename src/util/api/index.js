import axios from 'axios';

const methodConfig = {
    search: 'get',
    get: 'get',
    post: 'post',
    put: 'put',
    patch: 'patch',
    delete: 'delete',
};

// response拦截器 用于截获请求返回值
axios.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    // 请求异常 外因
    return Promise.reject(error)
})

export async function reqMethods (method, url, args) {
    return axios[methodConfig[method]](url, args);
}
/**
 * 构建请求库
 * @param configs {array} 接口配置表，格式如下：
 *  [
 *    {url: <string: 用户可配置的url部分>, method: 'post/get'},
 *    <string: 用户可配置的url部分, 请求方法为post>
 *    ...
 *  ]
 *  @param urlPrefix {string} 公共url前缀,必须以 '/' 开头
 * @return {object} 接口封装对象
 */
export function buildApiTree (urlPrefix, configs) {
    let apis = {};
    for (let config of configs) {
        const url = config;
        const pathsArray = config.split('/');
        const method = pathsArray[pathsArray.length - 1];
        
        let t = apis;

        for (let i = 1; i < pathsArray.length; ++i) {
            let path = pathsArray[i];
            if (!t[path]) t[path] = {};
            t = t[path];
            if (i === pathsArray.length - 2) {
                t[pathsArray[i + 1]] = (...args) => reqMethods(method, urlPrefix + url, ...args)
            }
        }
    }
    return apis;
}

const apis = buildApiTree('/api', [
    '/music/search',
]);
export default apis;