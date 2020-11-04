module.exports = function (obj) {
  console.info();
  wx.request({
    url: 'http://10.1.8.196:3001/login/auth',
    data: Object.assign({}, obj.params),
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    method: 'POST',
  })
}