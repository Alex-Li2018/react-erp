/**
 * index.js 文件就是整个项目的store文件
 */
import { createStore } from 'redux' // 引入 createStore方法
import reducer from './reducer' // 引入reducer

const Store = createStore(
  reducer,
  // 使浏览器中redux-devtool插件生效
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
) 

// 创建数据存储仓库
export default Store; 