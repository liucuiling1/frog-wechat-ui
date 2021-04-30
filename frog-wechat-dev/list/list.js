// components/frog-ui/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['list_class', 'list_text', 'list_value', 'list_icon', 'list_rightIcon'],
  options: {
    addGlobalClass: true
  },
  properties: {
    list: {
      type: Array
    },
    type: {
      type: String,
      value: 'text'
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
    getUrl(e) {
      let url = e.currentTarget.dataset.url;
      wx.navigateTo({
        url: url
      });

      this.triggerEvent('url', e);
    },
  }
})