// スクロールしたときにふわっと表示させる
ScrollReveal().reveal('.scrollreveal',{
    duration: 800,
    viewFactor: 0.2,
});

// スムーススクロールの実装
$('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });