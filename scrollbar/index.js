// function ScrollBar(opt){
//   var me = this;
//   me.$wrap = document.getElementById(opt.wrap);
//   me.$boxMidle = document.getElementById(opt.boxMidle);
//   me.$content = document.getElementById(opt.content);
//   me.$bar = document.getElementById(opt.bar);
//   me.init();
//   me.$boxMidle.onscroll = function(e){
//     //console.log("offsetHeight"+this.offsetHeight); //content + padding + border
//     //console.log("clientHeight"+this.clientHeight); // content + padding
//     //console.log("scrollHeight"+this.scrollHeight); //内容的高度 + padding
//     console.log(this.scrollTop);
//     me.scrollToY(this.scrollTop * me.rate)
//   }
// }
// ScrollBar.prototype.init = function(){
//   this.$content.style.width = this.$wrap.clientWidth + "px"; //内容的宽度
//   this.rate = this.$boxMidle.clientHeight/this.$boxMidle.scrollHeight; //滚动条高度的比例,也是滚动条top位置的比例
//    this.barHeight = this.rate * this.$boxMidle.clientHeight; //滚动条的 bar 的高度
//   if(this.rate < 1){
//     //需要出现滚动条,并计算滚动条的高度
//     this.$bar.style.height = this.barHeight + "px";
//   }else{
//     //不需要出现滚动条
//     this.$bar.style.display = "none";
//   }
// }
// ScrollBar.prototype.scrollToY = function(y){
//   if(this.rate < 1){
//     this.$bar.style.top = y + 'px';
//   }
// }
  
// var obj = new ScrollBar({"wrap":"wrap","boxMidle":"boxMidle","content":"content","bar":"bar"});


var $wrap = document.getElementById("wrap");
var $boxMidle = document.getElementById("boxMidle");
var $content = document.getElementById("content");
var $bar = document.getElementById("bar");
$content.style.width = $wrap.clientWidth + "px"; //内容的宽度
var rate = $boxMidle.clientHeight/ $boxMidle.scrollHeight; //滚动条高度的比例,也是滚动条top位置的比例
 var barHeight = rate * $boxMidle.clientHeight; //滚动条的 bar 的高度
if(rate < 1){
  //需要出现滚动条,并计算滚动条的高度
  $bar.style.height = barHeight + "px";
  $bar.style.display = "block";
}else{
  //不需要出现滚动条
  $bar.style.display = "none";
}
$boxMidle.onscroll = function(e){
  console.log("rate"+rate); //height + padding + border
  console.log("barHeight"+barHeight);
  console.log("offsetHeight"+this.offsetHeight); //height + padding + border
  console.log("clientHeight"+this.clientHeight); // height + padding
  console.log("scrollHeight"+this.scrollHeight); //内容的高度(所有子元素高度和) + padding
  console.log(this.scrollTop);
  $bar.style.top = this.scrollTop*rate + "px";
}