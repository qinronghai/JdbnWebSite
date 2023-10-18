let flag = 1;
document.querySelector(".top-tips-span").addEventListener("click", function () {
  if (flag) {
    document.querySelector(".content").classList.add("add-class-content");
    document.querySelector(".login-img").classList.add("add-class-login-img");
    document.querySelector(".register-img").classList.add("add-class-register-img");
    document.querySelector(".login-img").classList.remove("add-class-login-img-show");
    document.querySelector(".login-wrapper").style.height = "80vh";
    document.querySelector(".content").style.height = "85vh";
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".register-form").style.display = "block";
    document.querySelector(".top-tips-span").innerHTML = "登录";
    document.querySelector(".h1-text").innerHTML = "注册";
    flag = 0;
  } else {
    document.querySelector(".content").classList.remove("add-class-content");
    document.querySelector(".login-img").classList.remove("add-class-login-img");
    document.querySelector(".login-img").classList.add("add-class-login-img-show");
    document.querySelector(".register-img").classList.remove("add-class-register-img");
    document.querySelector(".login-wrapper").style.height = "70vh";
    document.querySelector(".content").style.height = "85vh";
    document.querySelector(".login-form").style.display = "block";
    document.querySelector(".register-form").style.display = "none";
    document.querySelector(".top-tips-span").innerHTML = "注册";
    document.querySelector(".h1-text").innerHTML = "登录";
    flag = 1;
  }
});
