// pages/house_type/house_type.js
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
    // 房子户型数据
    houseIndex: 0,
    houseType: "",
    houseTarget: "HT",
    houseArray: [
      {
        name: "户型一",
        value: "1",
      },
      {
        name: "户型二",
        value: "2",
      },
      {
        name: "户型三",
        value: "3",
      },
    ],
    // 房子房间数据
    roomIndex: 0,
    roomVal: "一房",
    roomTarget: "RV",
    roomCount: [
      {
        name: "一房",
        value: 1,
      },
      {
        name: "两房",
        value: 2,
      },
      {
        name: "三房",
        value: 3,
      },
      {
        name: "四房",
        value: 4,
      },
      {
        name: "五房",
        value: 5,
      },
    ],
    // 卫生间数据
    bathIndex: 0,
    bathVal: "无卫生间",
    bathTarget: "BV",
    bathRoom: [
      {
        name: "无卫生间",
        value: false,
      },
      {
        name: "有卫生间",
        value: true,
      },
    ],
    // 空调数据
    hvacIndex: 0,
    hvacVal: "无空调",
    hvacTarget: "HV",
    hvac: [
      {
        name: "无空调",
        vlaue: false,
      },
      {
        name: "有空调",
        value: true,
      },
    ],
    // 床位数据
    bedIndex: 0,
    bedVal: "一张床",
    bedTarget: "BDV",
    bedCount: [
      {
        name: "一张床",
        value: 1,
      },
      {
        name: "两张床",
        value: 2,
      },
      {
        name: "三张床",
        value: 3,
      },
      {
        name: "四张床",
        value: 4,
      },
    ],
  },
  onPickHandler({ detail }) {
    const { name, value } = detail.selectVal;
    const { type } = detail;
    switch (type) {
      case "BL":
        this.setData({
          buildLayer: name,
        });
        break;
      case "HT":
        this.setData({
          houseType: name,
        });
        break;
      case "RV":
        this.setData({
          roomVal: name,
        });
        break;
      case "BV":
        this.setData({
          bathVal: name,
        });
        break;
      case "HV":
        this.setData({
          hvacVal: name,
        });
        break;
      case "BDV":
        this.setData({
          bedVal: name,
        });
        break;
    }
    console.info(value);
  },
  btnClickHandler() {
    console.info(arguments);
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
