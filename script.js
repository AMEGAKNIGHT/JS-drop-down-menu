document.getElementById('nav').onmouseover = function(event) { 
    var target = event.target; // отлежвает нахождение мыши внутри блока навигации
    if (target.className == 'menu-item') { //если название класса при наведения menu-item 
        var s = target.getElementsByClassName('submenu'); //тогда будем получать данные по названию класса submenu
        closeMenu();
        s[0].style.display='block'; //индетификатор класса s[0]
    }
} 

document.onmouseover=function (event) {//функция отслеживания мыши, если элеиенты не являются menu-item или submenu тогда он закрывает окна
    var target = event.target; 
    console.log(event.target);
    if (target.className!='menu-item' && target.className!='submenu') {
        closeMenu();
    }
 }

function closeMenu() { //закрытие меню
    var menu = document.getElementById('nav');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i <subm.length; i++) {
        subm[i].style.display="none";
    }
}