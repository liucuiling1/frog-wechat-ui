// components/frog-ui/empty/empty.js
Component({
  externalClasses: ['empty_class'],
  options: {
    addGlobalClass: true
  },
  properties: {
    text: {
      type: String
    },
    text1: {
      type: String
    },
    buttonText: {
      type: String
    },
    icon: {
      type: String
    }

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
    onClick() {
      this.triggerEvent('btn');
    }

  }
})