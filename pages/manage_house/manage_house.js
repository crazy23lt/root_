// pages/manage_house/manage_house.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: null,
    room_id: null,
    bathRoom_id: null,
    hvac_id: null,
    bed_id: null,
    roomCount: [
      {
        name: "1房",
        value: 1,
        id: 1,
      },
      {
        name: "2房",
        value: 2,
        id: 2,
      },
      {
        name: "3房",
        value: 3,
        id: 3,
      },
      {
        name: "4房",
        value: 4,
        id: 4,
      },
      {
        name: "5房",
        value: 5,
        id: 5,
      },
    ],
    bathRoom: [
      {
        name: "无卫生间",
        value: false,
        id: 0,
      },
      {
        name: "有卫生间",
        value: true,
        id: 1,
      },
    ],
    hvac: [
      {
        name: "无空调",
        vlaue: false,
        id: 0,
      },
      {
        name: "有空调",
        value: true,
        id: 1,
      },
    ],
    bedCount: [
      {
        name: "一张床",
        value: 1,
        id: 0,
      },
      {
        name: "两张床",
        value: 2,
        id: 1,
      },
      {
        name: "三张床",
        value: 3,
        id: 2,
      },
      {
        name: "四张床",
        value: 4,
        id: 3,
      },
    ],
    btnDel: { square: true, gray: true },
  },
  bindPickerChangeRoom({ detail }) {
    let newVal = this.data.roomCount[detail.value - 0].value;
    const newFormData = Object.assign({}, this.data.formData);
    newFormData.config.roomCount = newVal;
    this.setData({
      room_id: detail.value - 0,
      formData: newFormData,
    });
  },
  bindPickerChangeBathRoom({ detail }) {
    console.info();
    let newVal = this.data.bathRoom[detail.value - 0].value;
    const newFormData = Object.assign({}, this.data.formData);
    newFormData.config.bathroom = newVal;
    this.setData({
      bathRoom_id: detail.value - 0,
      formData: newFormData,
    });
  },
  bindPickerChangeHvac({ detail }) {
    let newVal = this.data.hvac[detail.value - 0].value;
    const newFormData = Object.assign({}, this.data.formData);
    newFormData.config.hvac = newVal;
    this.setData({
      hvac_id: detail.value - 0,
      formData: newFormData,
    });
  },
  bindPickerChangeBed({ detail }) {
    let newVal = this.data.bedCount[detail.value - 0].value;
    const newFormData = Object.assign({}, this.data.formData);
    newFormData.config.bedCount = newVal;
    this.setData({
      bed_id: detail.value - 0,
      formData: newFormData,
    });
  },
  /**
   * 生命周期函数--监听 页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenerPage", ({ formData }) => {
      this.setData({
        formData: formData,
        room_id: formData.config.roomCount - 1,
        bathRoom_id: formData.config.bathroom ? 1 : 0,
        hvac_id: formData.config.hvac ? 1 : 0,
        bed_id: formData.config.bedCount - 1,
      });
    });
  },

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
