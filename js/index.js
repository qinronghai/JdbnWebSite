/* 轮播图开始 */
// 广告图
var sliderContent = document.querySelector(".carousel-inner");
console.log(sliderContent, "test");
var sliderContentLi = sliderContent.getElementsByTagName("div");
console.log(sliderContentLi, "sliderContentLi");

// 节点
var sliderNav = document.querySelector(".carousel-indicators");
var sliderNavLi = sliderNav.getElementsByTagName("li");

// 初始焦点显示
var x = 1;

console.log(sliderNav, "sliderNav");
// 焦点切换
window.onload = function () {
  for (let i = 0; i < sliderNavLi.length; i++) {
    console.log(this, "this");
    sliderNavLi[i].index = i;
    sliderNavLi[i].onmouseover = () => {
      for (let i = 0; i < sliderNavLi.length; i++) {
        sliderNavLi[i].className = "";
      }
      sliderNavLi[i].className = "active";
      for (let i = 0; i < sliderContentLi.length; i++) {
        const element = sliderContentLi[i];
        element.style.display = "none";
      }
      console.log(this, "index");
      sliderContentLi[i].style.display = "block";
      x = i;
    };
  }
  // 焦点自动切换
  window.setInterval(() => {
    change();
    console.log("object");
  }, 2000);
};

// 自动切换函数
function change() {
  if (x == sliderNavLi.length) {
    x = 0;
  }
  sliderNavLi[x].index = x;

  for (let j = 0; j < sliderNavLi.length; j++) {
    sliderNavLi[j].className = "";
  }

  sliderNavLi[x].className = "active";

  for (let i = 0; i < sliderContentLi.length; i++) {
    const element = sliderContentLi[i];
    element.style.display = "none";
  }
  sliderContentLi[sliderNavLi[x].index].style.display = "block";
  x++;
}
/* 轮播图结束 */
