// components/er-tabber/er-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#000000",
    selectedColor: "#07C160",
    list: [{
        pagePath: "../../pages/rental/index/index",
        iconPath: "../../image/icon_rental_nor@2x.png",
        selectedIconPath: "../../image/icon_rental_sel@2x.png",
        text: "收租",
      },
      {
        pagePath: "../../pages/add_build/add_build",
        iconPath: "../../image/icon_house_nor@2x.png",
        selectedIconPath: "../../image/icon_house_sel@2x.png",
        text: "管理房子",
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({
        url
      });
      this.setData({
        selected: data.index,
      });
    },
  },
});