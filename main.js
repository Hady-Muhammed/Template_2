let tabs = document.querySelectorAll(".portfolio ul li");
let tabsArray = Array.from(tabs);
let all = document.getElementById("all");
let app = document.getElementById("app");
let photography = document.getElementById("photography");
let web = document.getElementById("web");
let printt = document.getElementById("print");
let photogrid = document.getElementById("photogrid");
let searchBtn = document.getElementById("search");
let scrollBtn = document.getElementById("btn");

app.addEventListener("click", () => {
  photogrid.innerHTML = `
    <img src="images/img2.jpg" alt="x">
    <img src="images/img3.jpg" alt="x">
    <img src="images/img4.jpg" alt="x">
    <img src="images/img5.jpg" alt="x">
    <img src="images/img6.jpg" alt="x">
    <img src="images/img7.jpg" alt="x">
    <img src="images/img8.jpg" alt="x">
    `;
});
web.addEventListener("click", () => {
  photogrid.innerHTML = `
    <img src="images/img3.jpg" alt="x">
    <img src="images/img4.jpg" alt="x">
    <img src="images/img5.jpg" alt="x">
    <img src="images/img6.jpg" alt="x">
    <img src="images/img7.jpg" alt="x">
    <img src="images/img8.jpg" alt="x">
    `;
});
printt.addEventListener("click", () => {
  photogrid.innerHTML = `
    <img src="images/img1.jpg" alt="x">
    <img src="images/img2.jpg" alt="x">
    <img src="images/img3.jpg" alt="x">
    <img src="images/img4.jpg" alt="x">
    <img src="images/img5.jpg" alt="x">
    <img src="images/img8.jpg" alt="x">
    `;
});
photography.addEventListener("click", () => {
  photogrid.innerHTML = `
    <img src="images/img1.jpg" alt="x">
    <img src="images/img2.jpg" alt="x">
    <img src="images/img3.jpg" alt="x">
    <img src="images/img5.jpg" alt="x">
    <img src="images/img6.jpg" alt="x">
    <img src="images/img7.jpg" alt="x">
    `;
});
all.addEventListener("click", () => {
  photogrid.innerHTML = `
    <img src="images/img1.jpg" alt="x">
    <img src="images/img2.jpg" alt="x">
    <img src="images/img3.jpg" alt="x">
    <img src="images/img4.jpg" alt="x">
    <img src="images/img5.jpg" alt="x">
    <img src="images/img6.jpg" alt="x">
    <img src="images/img7.jpg" alt="x">
    <img src="images/img8.jpg" alt="x">
    `;
});

tabsArray.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

searchBtn.addEventListener("click", () => {
  if (
    document.querySelector("input[type='search']").style.display ==
    "inline-block"
  ) {
    document.querySelector("input[type='search']").style.display = "none";
  } else {
    document.querySelector("input[type='search']").style.display =
      "inline-block";
  }
  document.querySelector("input[type='search']").focus();
});

document.addEventListener("click", (e) => {

  if (
    e.target == searchBtn ||
    e.target == document.querySelector("input[type='search']")
  )
    return;
  document.querySelector("input[type='search']").style.display = "none";
});

scrollBtn.addEventListener("click", () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = function () {
    if(scrollY >= 700) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'all';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.pointerEvents = 'none';
    }
}