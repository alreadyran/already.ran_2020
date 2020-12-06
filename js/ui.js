const menuBtn = document.querySelector('.nav_icon');
const menu = document.querySelector('.gnb');
const bod = document.querySelector('.nav_wrap');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');

  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
// fadein fadeout
// function fadeIn(target) {
//     var level = 0;
//     var inTimer = null;
//     inTimer = setInterval( function() {
//         level = fadeInAction(targer, leverl, inTimer);
//     }, 50);
// }
// function fadeInAction(target, level, inTimer) {
//     level = level 0.1;
//     changeOpacity(target, level);
//     if(level>1) clearInterval(inTimer);
//     return level;
// }
// function fadeOut(target) {
//     var level = 1;
//     var outTimer = null;
//     outTimer = setInterval( function() {
//         level = fadeOutAction(target, level, outTimer);
//     }, 50)
// }
// function fadeOutAction(target, level, outTimer) {
//     level = level - 0.1;
//     changeOpacity(target, level);
//     if(level<0) {
//         clearInterval(outTimer);
//     }
//     return level;
// }
// function changeOpacity(target, level) {
//     var obj = target;
//     obj.style.opacity = level;
//     obj.style.MozOpacity = level;
//     obj.style.KhtmlOpacity = level;
//     obj.style.MsFilter = "'progrid: DXImageTransform.Microsoft.Alpha(Opacity=" + (lever * 100) + ")'";
//     obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
// }
// var targetElement = document.getElementsByClassName('.gnb')[0];
// fadeIn(targetElement);

// var targetElement = document.getElementsByClassName('.gnb')[0];
// fadeOut(targetElement);
