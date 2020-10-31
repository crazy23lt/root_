// components/es-picker/es-picker.js
Component({
  /**
   * 组件的属性列表
   * dataArray 数据结构类型
   *  [{name:"展示的内容",value:"返回的内容"}]
   * index 展示数据索引
   *  dataArray 选中的数值
   *
   */

  properties: {
    dataArray: {
      type: Array,
      value: [],
    },
    index: {
      type: Number,
      value: 0,
    },
    type: {
      type: String,
      value: null,
    },
  },
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
    bindPickerChange({ detail }) {
      const selectVal = this.properties.dataArray[detail.value - 0];
      this.triggerEvent("emitSelectRet", {
        selectVal,
        type: this.properties.type,
      });
    },
  },
});
