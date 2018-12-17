Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: []
  },

  getData: function() {
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://api.test.com/v1/goods',
      data: {
        'access-token': '123',
        'page':2
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success(res) {
        console.log(res);
        that.setData({
          datas: res.data.items
        })
      }
    })
  },

  createData: function () {
    wx.request({
      url: 'http://api.test.com/v1/goods?access-token=123',
      data: {
        'name': '鼠标',
        'price': 109.55,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})