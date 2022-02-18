'use strict';
{
    const header = document.querySelector('header');
    const btn = document.querySelector('.hamburger');
    const mask = document.querySelector('.mask');
    const main = document.querySelector('main');
    
// 画面ﾛｰﾄﾞ時、ふわっと出てくる
    window.addEventListener('load', ()=> {
        header.classList.add('fadeIn');
    });
// ﾊﾝﾊﾞｰｶﾞｰﾒﾆｭｰｸﾘｯｸ時、ﾏｽｸをかける
    btn.addEventListener('click', ()=> {
        header.classList.add('roling');
    });
// ﾏｽｸｸﾘｯｸ時、ﾏｽｸを取る
    mask.addEventListener('click', ()=> {
       header.classList.remove('roling'); 
    })

}
