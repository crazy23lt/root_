// pages/add_build_form1/add_build_form1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 楼层数量数据
    buildIndex: 0,
    buildLayer: "",
    buildTarget: "BL",
    buildArray: [
      {
        name: "1层",
        value: "1",
      },
      {
        name: "2层",
        value: "2",
      },
      {
        name: "3层",
        value: "3",
      },
      {
        name: "4层",
        value: "4",
      },
      {
        name: "5层",
        value: "5",
      },
    ],
    // 每层户数
    houseIndex: 0,
    houseCount: "",
    houseTarget: "HC",
    houseArray: [
      {
        name: "一户",
        value: "1",
      },
      {
        name: "两户",
        value: "2",
      },
      {
        name: "三户",
        value: "3",
      },
      {
        name: "四户",
        value: "4",
      },
      {
        name: "五户",
        value: "5",
      },
    ],
    formData: {
      buildName: "",
      LayerCount: 0,
      houseCount: 0,
    },
  },
  btnClickHandler() {
    // 存入数据之前需要做数据校验  : 待完善
    wx.navigateTo({
      url: `../class_3/index`,
      fail: function (err) {
        console.info(err);
      },
      success: (res) => {
        console.info("跳转成功");
        res.eventChannel.emit("acceptDataFromOpenerPage", this.data.formData);
      },
    });
  },
  inputHandler({ detail }) {
    const { value } = detail;
    this.setData({
      formData: Object.assign(this.data.formData, { buildName: value }),
    });
  },
  onPickHandler({ detail }) {
    const { name, value } = detail.selectVal;
    const { type } = detail;
    switch (type) {
      case "BL":
        this.setData({
          buildLayer: name,
          formData: Object.assign(this.data.formData, { LayerCount: value }),
        });

        break;
      case "HC":
        this.setData({
          houseCount: name,
          formData: Object.assign(this.data.formData, { houseCount: value }),
        });
        break;
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
