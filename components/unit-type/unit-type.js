// components/unit-type/unit-type.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataCollections: {
      type: Object,
      value: {
        buildAbout: {
          index: 0,
          count: "",
          target: "build",
          array: [
            {
              name: "1层",
              value: "1",
            },
            {
              name: "2层",
              value: "2",
            },
            {
              name: "3层",
              value: "3",
            },
            {
              name: "4层",
              value: "4",
            },
            {
              name: "5层",
              value: "5",
            },
          ],
        },
        houseAbout: {
          index: 0,
          count: "一房",
          target: "house",
          array: [
            {
              name: "户型一",
              value: "1",
            },
            {
              name: "户型二",
              value: "2",
            },
            {
              name: "户型三",
              value: "3",
            },
          ],
        },
        roomAbout: {
          index: 0,
          count: "",
          target: "room",
          array: [
            {
              name: "一房",
              value: 1,
            },
            {
              name: "两房",
              value: 2,
            },
            {
              name: "三房",
              value: 3,
            },
            {
              name: "四房",
              value: 4,
            },
            {
              name: "五房",
              value: 5,
            },
          ],
        },
        bathAbout: {
          index: 0,
          count: "无卫生间",
          target: "bath",
          array: [
            {
              name: "无卫生间",
              value: false,
            },
            {
              name: "有卫生间",
              value: true,
            },
          ],
        },
        hvacAbout: {
          index: 0,
          count: "无空调",
          target: "hvac",
          array: [
            {
              name: "无空调",
              vlaue: false,
            },
            {
              name: "有空调",
              value: true,
            },
          ],
        },
        bedAbout: {
          index: 0,
          count: "一张床",
          target: "bed",
          array: [
            {
              name: "一张床",
              value: 1,
            },
            {
              name: "两张床",
              value: 2,
            },
            {
              name: "三张床",
              value: 3,
            },
            {
              name: "四张床",
              value: 4,
            },
          ],
        },
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPickHandler({ detail }) {
      console.info(detail);
    },
    inputHandler({ detail }) {
      console.info(detail);
    }
  },
});
/*

 buildAbout: {
          index: 0,
          count: "",
          target: "build",
          array: [
            {
              name: "1层",
              value: "1",
            },
            {
              name: "2层",
              value: "2",
            },
            {
              name: "3层",
              value: "3",
            },
            {
              name: "4层",
              value: "4",
            },
            {
              name: "5层",
              value: "5",
            },
          ],
        },
        houseAbout: {
          index: 0,
          count: "一房",
          target: "house",
          array: [
            {
              name: "户型一",
              value: "1",
            },
            {
              name: "户型二",
              value: "2",
            },
            {
              name: "户型三",
              value: "3",
            },
          ],
        },
        roomAbout: {
          index: 0,
          count: "",
          target: "room",
          array: [
            {
              name: "一房",
              value: 1,
            },
            {
              name: "两房",
              value: 2,
            },
            {
              name: "三房",
              value: 3,
            },
            {
              name: "四房",
              value: 4,
            },
            {
              name: "五房",
              value: 5,
            },
          ],
        },
        bathAbout: {
          index: 0,
          count: "无卫生间",
          target: "bath",
          array: [
            {
              name: "无卫生间",
              value: false,
            },
            {
              name: "有卫生间",
              value: true,
            },
          ],
        },
        hvacAbout: {
          index: 0,
          count: "无空调",
          target: "hvac",
          array: [
            {
              name: "无空调",
              vlaue: false,
            },
            {
              name: "有空调",
              value: true,
            },
          ],
        },
        bedAbout: {
          index: 0,
          count: "一张床",
          target: "bed",
          array: [
            {
              name: "一张床",
              value: 1,
            },
            {
              name: "两张床",
              value: 2,
            },
            {
              name: "三张床",
              value: 3,
            },
            {
              name: "四张床",
              value: 4,
            },
          ],
        },


 */