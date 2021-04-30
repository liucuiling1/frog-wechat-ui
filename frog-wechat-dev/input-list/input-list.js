const App = getApp();

Component({
  externalClasses: ['title-class', 'input-class', 'placeholder-class', 'margin-class', 'input_class'],
  options: {
    addGlobalClass: true
  },
  properties: {
    inputList: {
      type: Array
    },
    imgStatus: {
      type: Boolean
    },
    imgSrc: {
      type: String
    }
  },
  data: {},

  methods: {
    handleInputChange(event) {
      this.triggerEvent('change', this.getItem(event));
    },

    handleInputFocus(event) {
      this.triggerEvent('focus', this.getItem(event));

    },

    handleInputBlur(event) {
      this.triggerEvent('blur', this.getItem(event));

    },
    handleInputConfirm(event) {
      this.triggerEvent('confirm', this.getItem(event));

    },

    getItem(event) {
      let _info = {
        cursor: event.detail.cursor,
        keyCode: event.detail.keyCode,
        value: event.detail.value,
        index: event.currentTarget.dataset.index,
      }
      return _info
    },

    // 上传图片
    getChooseImage(e) {
      let _that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths)
          wx.uploadFile({
            url: App.globalData.serverPath + 'image/upload',
            filePath: tempFilePaths[0],
            name: 'files',
            formData: {
              'user': 'test'
            },
            success: (res) => {
              console.log('成功', res)

              if (res.statusCode == 200) {
                let _info = JSON.parse(res.data);
                let url = _info.info[0].resourceUrl;

                _that.triggerEvent('chooseImage', url);

              } else {
                wx.showToast({
                  title: '上传失败',
                  icon: 'none',
                  duration: 2000
                })
              }
            },
            fail: (res) => {
              console.log('上传失败---', res)
              wx.showToast({
                title: '上传失败',
                icon: 'none',
                duration: 2000
              })
            }
          })
        }
      })
    },

    getDel(e) {
      this.triggerEvent('del');
    }
  }
});