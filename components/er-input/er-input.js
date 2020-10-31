// components/er-input/er-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  options: {
    multipleSlots: true, // 允许传参
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    watchBlur({ detail }) {
      this.triggerEvent("onInputRet", detail);
    },
  },
});
