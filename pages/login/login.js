// pages/login/login.js
const req1 = function (obj) {
  wx.request({
    url: "http://10.1.8.196:3001/login/auth",
    method: "POST",
    data: obj.data,
    success: function ({
      data
    }) {
      console.log(data);
    },
  });
}
const req = require('../../utils/request');
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  userinfo() {
    wx.getUserInfo({
      success: function (res) {
        let {
          userInfo
        } = res;
        wx.login({
          success(res) {
            req({
              params: {
                wxinfo: userInfo,
                code: res.code,
              }
            });
            // wx.request({
            //   url: "http://10.1.8.196:3001/login/auth",
            //   method: "POST",
            //   data: {
            //     code: res.code,
            //     wxinfo: userInfo,
            //   },
            //   success: function ({
            //     data
            //   }) {
            //     console.log(data);
            //   },
            // });
          },
          fail(err) {
            console.info(err);
            console.info("登陆失败");
          },
        });
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});