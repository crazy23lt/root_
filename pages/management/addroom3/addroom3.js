// pages/management/addroom3/addroom3.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      room_count: 2,
    },
    array: ["美国", "中国", "巴西", "日本"],
    index: 0,
  },
  formSubmit() {
    console.info("submit");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenerPage", ({ formData }) => {
      this.setData({
        formData: Object.assign(this.data.formData, formData),
      });
      console.info(this.data.formData);
    });
  },

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
