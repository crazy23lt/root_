// pages/login2/login2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    input_0: {
      type: "input",
      value: "",
      label: "楼名",
      pickerArray: null,
      index: 0,
      align: null,
    },
    input_1: {
      type: "picker",
      value: "",
      label: "层数",
      pickerArray: [2, 3, 4, 5, 6, 7],
      index: 0,
      align: null,
    },
    input_2: {
      type: "picker",
      value: "",
      label: "每层户数",
      pickerArray: [2, 3, 4, 5, 6, 7],
      index: 0,
      align: null,
    },
    forData: {
      build_name: "",
      floor_count: "",
      house_count: "",
    },
    // btn options
    btnOptions: {
      square: false,
      gray: true,// gray green
    }
  },
  input_0_change({ detail }) {
    this.setData({
      forData: Object.assign({}, this.data.forData, { build_name: detail }),
    });
  },
  input_1_change({ detail }) {
    this.setData({
      forData: Object.assign({}, this.data.forData, { floor_count: detail }),
    });
  },
  input_2_change({ detail }) {
    this.setData({
      forData: Object.assign({}, this.data.forData, { house_count: detail }),
    });
  },
  btnClickHandler() {
    console.info('submit');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "登陆小微租房",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
});
