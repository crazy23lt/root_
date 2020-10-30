// pages/add_build_form1/add_build_form1.js
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
      pickerArray: [
        { name: "1层", value: 1 },
        { name: "2层", value: 2 },
        { name: "3层", value: 3 },
        { name: "4层", value: 4 },
        { name: "5层", value: 5 },
        { name: "6层", value: 6 },
        { name: "7层", value: 7 },
        { name: "8层", value: 8 },
        { name: "9层", value: 9 },
        { name: "10层", value: 10 },
        { name: "11层", value: 11 },
      ],
      index: 0,
      align: null,
    },
    input_2: {
      type: "picker",
      value: "",
      label: "每层户数",
      pickerArray: [
        { name: "1户", value: 1 },
        { name: "2户", value: 2 },
        { name: "3户", value: 3 },
        { name: "4户", value: 4 },
        { name: "5户", value: 5 },
        { name: "6户", value: 6 },
        { name: "7户", value: 7 },
      ],
      index: 0,
      align: null,
    },
    formData: {
      build_name: null,
      floor_count: null,
      house_count: null,
    },
  },
  input_0_change({ detail }) {
    const ret = Object.assign({}, this.data.formData);
    ret.build_name = detail;
    this.setData({
      formData: ret,
    });
  },
  input_1_change({ detail }) {
    const ret = Object.assign({}, this.data.formData);
    ret.floor_count = detail;
    this.setData({
      formData: ret,
    });
  },
  input_2_change({ detail }) {
    const ret = Object.assign({}, this.data.formData);
    ret.house_count = detail;
    this.setData({
      formData: ret,
    });
  },
  btnClickHandler() {
    const build_name = this.data.formData.build_name;
    const floor_count = this.data.formData.floor_count;
    const house_count = this.data.formData.house_count;
    if (
      build_name === "" ||
      build_name === null ||
      floor_count === null ||
      house_count === null
    ) {
      wx.showToast({
        title: "请保证信息完整",
        icon: "none", //如果要纯文本，不要icon，将值设为'none'
        duration: 2000,
      });
    } else {
      wx.navigateTo({
        url: `../add_build_form2/add_build_form2`,
        fail: function (err) {
          console.info(err);
        },
        success: (res) => {
          console.info("跳转成功");
          res.eventChannel.emit("acceptDataFromOpenerPage", {
            formData: this.data.formData,
          });
        },
      });
    }
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
