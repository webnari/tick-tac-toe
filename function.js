// .table の中の要素がクリックされたらイベントが発火
document.querySelector('.table').addEventListener('click',function(e){
  // ○か×が入力されていたら、処理を行わす中断する。
  if(e.target.innerText !== '-'){return}

  // クリックした部分に.active要素を当てるために、
  // すでに.active要素の当たっている.pannelから
  // .active要素を取り除く
  const activatedPannel = document.querySelectorAll('.pannel.active')
  // エラー回避のため要素が取得できた場合のみ、実行する。
  if(activatedPannel[0]){activatedPannel[0].classList.remove("active")}

  // くりっくされたボタンをactiveにして、
  // 今のターンの印（ ○ or × )を入力する。
  e.target.classList.add("active")
  e.target.innerText = document.querySelector('.btn.active').text
})
