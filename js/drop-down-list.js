var menu = document.getElementById("title");
var menuContent = document.getElementById("content");
var arrow = document.getElementsByTagName("i")[0];

function show() {
  // 换下箭头图标
  menuContent.style.display = "block";
  arrow.setAttribute("class", "iconfont icon-arrowdown");
  menu.classList.toggle("current");
}

function hide() {
  menuContent.style.display = "none";
  arrow.setAttribute("class", "iconfont icon-arrowup");
  menu.removeClass("current");
}
