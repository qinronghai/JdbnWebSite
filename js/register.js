// 注册验证
// 获取用户账号
var registerAccount = document.getElementById("register-account");
var registerPassword = document.getElementById("register-password");
var reCheckPassword = document.getElementById("re-check-password");

var regAccountMsg = document.getElementById("reg-account-msg");
var regPasswordMsg = document.getElementById("reg-password-msg");
var regRePasswordMsg = document.getElementById("reg-re-password-msg");

// 添加焦点失去执行的事件
registerAccount.addEventListener("blur", function () {
  let that = this;
  checkAccount(regAccountMsg, that);
});
registerPassword.addEventListener("blur", function () {
  let that = this;
  checkAccount(regPasswordMsg, that);
});
reCheckPassword.addEventListener("blur", reCheck);

// 添加提交点击事件
var submit_reg = document.getElementById("submit-reg");
submit_reg.addEventListener("click", submitReg);

// flag:注册和登录条件满足判断
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

// 账号验证
var ac = "";
function checkAccount(msg, that) {
  var name = that.value;
  ac = that.value;
  var re = /^[a-zA-z]\w{4,15}$/;
  if (name.length >= 4 && name.length <= 15) {
    if (re.test(name)) {
      console.log("账号验证正确");
      msg.innerHTML = "";
      msg.style.display = "none";
      flag1 = 1;
    } else {
      msg.innerHTML = "账号只能为字母,数字和下划线";
      msg.style.display = "block";
      msg.style.color = "red";
    }
  } else if (name.length == 0) {
    msg.innerHTML = "账号不能为空";
    msg.style.display = "block";
    msg.style.color = "red";
  } else {
    msg.innerHTML = "长度>=4且<=15个字符";
    msg.style.display = "block";
    msg.style.color = "red";
  }
}

// 密码验证
var pd = "";
function checkPassword(msg, that) {
  pd = that.value;
  var password = that.value.replace("/(^s*)|(s*$)/g", "");
  if (password.length < 8) {
    if (password.length == 0) {
      msg.innerHTML = "密码不能为空";
      msg.style.display = "block";
      msg.style.color = "red";
    } else {
      msg.innerHTML = "密码长度要大于等于8";
      msg.style.display = "block";
      msg.style.color = "red";
    }
  } else {
    msg.innerHTML = "";
    msg.style.display = "none";
    flag2 = 1;
  }
}

// 两次密码验证
function reCheck() {
  if (pd == this.value && pd != "") {
    regRePasswordMsg.innerHTML = "正确";
    regRePasswordMsg.style.display = "block";
    regRePasswordMsg.style.color = "green";
    flag3 = 1;
  } else if (pd == "") {
    regRePasswordMsg.innerHTML = "密码为空";
    regRePasswordMsg.style.display = "block";
    regRePasswordMsg.style.color = "red";
  } else {
    regRePasswordMsg.innerHTML = "两次密码不一样";
    regRePasswordMsg.style.display = "block";
    regRePasswordMsg.style.color = "red";
  }
}

// 提交注册
function submitReg() {
  if (flag1 && flag2 && flag3) {
    alert("注册成功");
  } else {
    alert("注册信息填写不完整");
  }
}

/* 登录验证 */

// 获取登录input对象
var loginAccount = document.getElementById("login-account");
var loginPassword = document.getElementById("login-password");

var logAccountMsg = document.getElementById("log-account-msg");
var logPasswordMsg = document.getElementById("log-password-msg");

loginAccount.addEventListener("blur", function () {
  let that = this;
  checkAccount(logAccountMsg, that);
});
loginPassword.addEventListener("blur", function () {
  let that = this;
  checkPassword(logPasswordMsg, that);
});

// 登录按钮点击提交事件
var submit_log = document.getElementById("submit-log");
submit_log.addEventListener("click", submitLog);

function submitLog() {
  if (flag1 && flag2) {
    alert("登录成功");
  } else {
    alert("登录失败");
  }
}
