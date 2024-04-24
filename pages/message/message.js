// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{},
    dataModelList:[
      {id:1, name:"门店装修改造", subscribe:0, img:'https://pic.imgdb.cn/item/6628b78d0ea9cb1403d0bb13.png'},
      {id:2, name:"卫浴改造", subscribe:0, img:'https://pic.imgdb.cn/item/6628b78d0ea9cb1403d0bb13.png'},
      {id:3, name:"厨房改造", subscribe:0, img:'https://pic.imgdb.cn/item/6628b78d0ea9cb1403d0bb13.png'},
      {id:4, name:"旧房装修", subscribe:0, img:'https://pic.imgdb.cn/item/6628b78d0ea9cb1403d0bb13.png'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
  },

  getList(){
    wx.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      success(e){
        console.log(e)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})