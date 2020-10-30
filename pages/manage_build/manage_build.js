// pages/manage_build/manage_build.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navlist: [
      { name: "A栋", value: "A", active: true },
      { name: "B栋", value: "B", active: false },
      { name: "C栋", value: "C", active: false },
      { name: "D栋", value: "D", active: false },
      { name: "E栋", value: "E", active: false },
      { name: "F栋", value: "F", active: false },
      { name: "G栋", value: "G", active: false },
      { name: "H栋", value: "H", active: false },
      { name: "I栋", value: "I", active: false },
      { name: "J栋", value: "J", active: false },
    ],
    houseType: [
      { name: "未出租", value: 0 },
      { name: "一房", value: 1 },
      { name: "两房", value: 2 },
      { name: "三房", value: 3 },
    ],
    houseInfoLists: [
      {
        id: 101, // 房号
        state: true, // 是否出租
        config: {
          // 房子配置
          roomCount: 2, // 房间数量
          bathroom: true, // 是否配有洗漱间
          hvac: false, // 是否配有空调
          bedCount: 2, // 几张床
        },
        build_id: "A", // 隶属于哪一栋
        house_type: 1, // 房子 属于 那种房型
      },
      {
        id: 102,
        state: true,
        config: {
          roomCount: 2,
          bathroom: true,
          hvac: false,
          bedCount: 2,
        },
        build_id: "A",
        house_type: 2,
      },
      {
        id: 103,
        state: true,
        config: {
          roomCount: 2,
          bathroom: true,
          hvac: false,
          bedCount: 2,
        },
        build_id: "A",
        house_type: 2,
      },
      {
        id: 104,
        state: true,
        config: {
          roomCount: 2,
          bathroom: true,
          hvac: false,
          bedCount: 2,
        },
        build_id: "A",
        house_type: 3,
      },
      {
        id: 105,
        state: true,
        config: {
          roomCount: 2,
          bathroom: true,
          hvac: false,
          bedCount: 2,
        },
        build_id: "A",
        house_type: 3,
      },
      {
        id: 106,
        state: true,
        config: {
          roomCount: 2,
          bathroom: true,
          hvac: false,
          bedCount: 2,
        },
        build_id: "A",
        house_type: 3,
      },
      {
        id: 107,
        state: true,
        config: {
          roomCount: 2,
          bathroom: true,
          hvac: false,
          bedCount: 2,
        },
        build_id: "B",
        house_type: 1,
      },
    ],
    // 管理按钮状态切换
    mangeBtn: true,
  },
  nav_select(e) {
    const { bean } = e.currentTarget.dataset;
    const index = this.data.navlist.findIndex((item) => item.active);
    const targetIndex = this.data.navlist.findIndex(
      (item) => item.value === bean
    );
    const oldData = Object.assign({}, this.data.navlist);
    oldData[index].active = false;
    oldData[targetIndex].active = true;
    this.setData({
      navlist: Object.values(oldData),
    });
  },
  type_select(e) {
    const { bean } = e.currentTarget.dataset;
    switch (bean) {
      case 0:
        console.info("未出租房间过滤");
        break;
      case 1:
        console.info("一房过滤");
        break;
      case 2:
        console.info("二房过滤");
        break;
      case 3:
        console.info("三房过滤");
        break;
    }
  },
  to_mange_btn() {
    console.info("编辑页面");
    this.setData({
      mangeBtn: !this.data.mangeBtn,
    });
  },
  addNewBuild() {
    console.info("添加新楼");
    this.setData({
      mangeBtn: !this.data.mangeBtn,
    });
  },
  addNewRoom() {
    console.info("添加新房间");
  },
  scroll() {},
  btnClickHandler({ detail }) {
    wx.navigateTo({
      url: `../manage_house/manage_house`,
      fail: function (err) {
        console.info(err);
      },
      success: (res) => {
        console.info("跳转成功");
        res.eventChannel.emit("acceptDataFromOpenerPage", {
          formData: detail,
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
