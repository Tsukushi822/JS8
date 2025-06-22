// let lists = document.getElementsByClassName("pull-down-list")
// console.log(lists)

// getElementByIdを通してHTMLのlistsを呼び出すようにイベント発火
// const pullDownButton = document.getElementById("lists")
// console.log(pullDownButton)

// ウインドウが立ち上がった時に({const~("lists")})の内容を実行
// window.addEventListener('load' , function (){
//     const pullDownButton = document.getElementById("lists")
// })
// console.log(pullDownButton)

// プルダウンのボタンにマウスカーソルが乗った時にイベント発火
window.addEventListener('load' , function (){
    const pullDownButton = document.getElementById("pull-down-button");
    const pullDownMenu = document.getElementById("pull-down");
    const currentList = document.getElementById("current-list");
    const listItems = document.querySelectorAll('.pull-down-list');


 pullDownButton.addEventListener('mouseover' , function (){
    pullDownMenu.classList.remove('hidden');
    console.log("乗る");
 });

//  マウスが外れた時
pullDownButton.addEventListener('mouseleave' , function(){
    pullDownMenu.classList.add('hidden');
    console.log("外れる");
});

//  プルダウンをクリックしたとき
pullDownButton.addEventListener('click' , function(){
    pullDownMenu.classList.add('hidden');
    console.log("クリック");
});
});