// pages/add_build_form2/add_build_form2.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: null,
    room_count: {
      type: "picker",
      value: "1房",
      label: false,
      pickerArray: [
        { name: "1房", value: 1 },
        { name: "2房", value: 2 },
        { name: "3房", value: 3 },
        { name: "4房", value: 4 },
      ],
      index: 0,
      align: "center",
    },
    washroom: {
      type: "picker",
      value: "有卫生间",
      label: false,
      pickerArray: [
        { name: "有卫生间", value: true },
        { name: "无卫生间", value: false },
      ],
      index: 1,
      align: "center",
    },
    airconditioning: {
      type: "picker",
      value: "有空调",
      label: false,
      pickerArray: [
        { name: "有空调", value: true },
        { name: "无空调", value: false },
      ],
      index: 2,
      align: "center",
    },
    bedCount: {
      type: "picker",
      value: "1张床",
      label: false,
      pickerArray: [
        { name: "1张床", value: 1 },
        { name: "2张床", value: 2 },
        { name: "3张床", value: 3 },
        { name: "4张床", value: 4 },
      ],
      index: 3,
      align: "center",
    },
    homeType1: {
      room_count: 1,
      washroom: true,
      airconditioning: true,
      bedCount: 1,
    },
    homeType2: {
      room_count: 1,
      washroom: true,
      airconditioning: true,
      bedCount: 1,
    },
    homeType3: {
      room_count: 1,
      washroom: true,
      airconditioning: true,
      bedCount: 1,
    },
    // 动态渲染 组件
    count: ['户型1', "户型2", "户型3"]
  },
  homeType1({ detail }) {
    const { name, value, index } = detail;
    switch (index) {
      case 0:
        this.setData({
          ["homeType1.room_count"]: { name, value },
        });
        break;
      case 1:
        this.setData({
          ["homeType1.washroom"]: { name, value },
        });
        break;
      case 2:
        this.setData({
          ["homeType1.airconditioning"]: { name, value },
        });
        break;
      case 3:
        this.setData({
          ["homeType1.bedCount"]: { name, value },
        });
        break;
    }
  },
  homeType2({ detail }) {
    const { name, value, index } = detail;
    switch (index) {
      case 0:
        this.setData({
          ["homeType2.room_count"]: { name, value },
        });
        break;
      case 1:
        this.setData({
          ["homeType2.washroom"]: { name, value },
        });
        break;
      case 2:
        this.setData({
          ["homeType2.airconditioning"]: { name, value },
        });
        break;
      case 3:
        this.setData({
          ["homeType2.bedCount"]: { name, value },
        });
        break;
    }
  },
  homeType3({ detail }) {
    const { name, value, index } = detail;
    switch (index) {
      case 0:
        this.setData({
          ["homeType3.room_count"]: { name, value },
        });
        break;
      case 1:
        this.setData({
          ["homeType3.washroom"]: { name, value },
        });
        break;
      case 2:
        this.setData({
          ["homeType3.airconditioning"]: { name, value },
        });
        break;
      case 3:
        this.setData({
          ["homeType3.bedCount"]: { name, value },
        });
        break;
    }
  },
  btnClickHandler() {
    console.info("submit");
  },
  // 添加新户型
  newhouseTypeHandler() {
    let len = this.data.count.length;
    let cloneArr = this.data.count.slice(0)
    cloneArr.push(`户型${len + 1}`);
    this.setData({
      count: cloneArr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenerPage", ({ formData }) => {
      this.setData({
        formData: Object.assign({}, this.data.formData, formData),
      });
      console.info(this.data.formData);
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
