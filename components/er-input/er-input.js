// components/er-input/er-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: [],
    },
    params: {
      type: Number,
    },
  },
  options: {
    multipleSlots: true, // 允许传参
  },
  /**
   * 组件的初始数据
   */
  data: {
    val: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange({ detail }) {
      this.setData({
        val: this.properties.data[detail.value - 0].name,
      });
    },
  },
  attached: function () {
    console.info(this.data);
    console.info(this.properties);
    this.setData({
      val: this.properties.data[this.properties.params].name,
    });
  },
});
