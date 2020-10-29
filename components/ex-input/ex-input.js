// components/ex-input/ex-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Object,
      value: {
        type: "input",
        value: "测试字体",
        label: "label",
        pickerArray: [11, 22, 33, 44, 55, 66],
        index: 0,
        align: "center",
      },
    },
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
      let newVla = this.properties.options.pickerArray[detail.value];
      let ret = Object.assign({}, this.properties.options);
      ret.value = newVla;
      this.setData({
        options: ret,
      });
      this.triggerEvent("inputChange", newVla);
    },
    inputBlur({ detail }) {
      this.triggerEvent("inputChange", detail.value);
    },
  },
});
