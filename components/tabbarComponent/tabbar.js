// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "/pages/rental/index/index",
            "iconPath": "./icon/icon_rental_nor@2x.png",
            "selectedIconPath": "./icon/icon_rental_sel@2x.png",
            "text": "收租",
          },
          {
            "pagePath": "pages/newBuild/class_1/index",
            "iconPath": "./icon/icon_house_nor@2x.png",
            "selectedIconPath": "./icon/icon_house_sel@2x.png",
            "text": "管理房子",
          },
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
