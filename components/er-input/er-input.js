// components/er-input/er-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    align: {
      type: String,
      value: "center"
    },
    itype: {
      type: String,
      value: "text" // 正常文本 :: $ 金钱单位
    }
  },
  options: {
    multipleSlots: true, // 允许传参
  },
  /**
   * 组件的初始数据
   */
  data: {
    value: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    watchBlur({ detail }) {
      this.triggerEvent("onInputRet", detail);
    },
    watchInput({ detail }) {
      console.info(detail)
      if (this.properties.format === "$") {
      } else {

      }

    }
  },
});
