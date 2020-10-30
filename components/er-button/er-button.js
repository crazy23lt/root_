// components/er-button/er-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Object,
      value: null,
    },
  },
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    sumbit() {
      this.triggerEvent("btnClick", this.properties.options);
    },
  },
});
