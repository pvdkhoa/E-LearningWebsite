var thoiGianBanDau = 60;
var time = thoiGianBanDau * 60; //số giây
var itemCountDown = document.querySelector('.countdown-item');
console.log(itemCountDown);
setInterval(function(){
 
    let giay = time % 60; //360s % 60 -> 50 -> 
    let phut = Math.floor(time/60);
    itemCountDown.innerHTML = `${phut}:${giay} `;
    time--;
},1000);