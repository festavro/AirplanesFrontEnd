const proxy = [
    {
      context: '/api',
      target: 'http://localhost:44390',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;