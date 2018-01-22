import Axios from 'axios'

export default {
  install(Vue,options) 
  {
    Vue.prototype.myAxios = Axios.create({ // 配置Axios
      // baseURL: 'http://127.0.0.1:8080',
      baseURL: ' https://www.easy-mock.com/mock/5a61d05dac1aba25f887eb1b/api',
      timeout: 1000,
      // headers: {"X-XSRF-TOKEN":'11111'},
      withCredentials: true // 跨域cookie
    }),
    Vue.prototype.setSession = function (key, value) { // 保存数据到sessionStorage
      sessionStorage.setItem(key, value);
    },
    Vue.prototype.getSession = function (key) { // 从sessionStorage获取数据
      return sessionStorage.getItem(key);
    },
    Vue.prototype.removeSession = function (key) { // 从sessionStorage删除保存的数据
      sessionStorage.removeItem(key);
    },
    Vue.prototype.clearSession = function () { // 从sessionStorage删除所有保存的数据
      sessionStorage.clear();
    },
    Vue.prototype.debounce = function(fn, wait) { // 节流函数
      let timerId
      return function(...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
          fn(...args)
        }, wait);
      }
    }
  }
}