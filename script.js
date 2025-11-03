// وقتی صفحه لود شد، یه پیام خوش‌آمدگویی توی کنسول نمایش بده
console.log("به FSOHUB خوش آمدید!");

// افکت ساده برای تغییر رنگ لینک‌ها هنگام کلیک
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    link.style.color = "#00ff99";
  });
});
