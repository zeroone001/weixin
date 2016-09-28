
var helloData = {
    name: "this is wechat",
    length: 1,
    items:['dasdas','哈哈哈']
}
var app = getApp();
Page({
  data:helloData,
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(app.globalData);
  },
  changeName:function(){
    this.setData({
        name:'框架～～',
        length: 3
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})