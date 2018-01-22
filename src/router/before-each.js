export const valid = (to, from, next) => {
  // console.log(to, from)
  let isLogin = sessionStorage.getItem('token')
  if (!isLogin) {
    if (to.path !== '/login') {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next({
        path: '/'
      });
    }
    next();
  }
}
