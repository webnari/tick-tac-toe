const size = document.querySelectorAll('.table .row').length


// .table の中の要素がクリックされたらイベントが発火
document.querySelector('.table').addEventListener('click',function(e){
  if(document.querySelector('#finished').value === 'true'){return}
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

  // 順番を交代する。
  toggleTurn()

  // すでに勝敗が決まっているかチェック
  result = judge()
  if (result){
    document.querySelector('#message').innerText = `${result} win !!!!!!!!`
    document.querySelector('#message').classList.remove('hidden')
    document.querySelector('#finished').value = 'true'
  }
})

// ○と×の切り替えメソッド
function toggleTurn(){
   // すでに.activeがあてられている.btnを取得
   const acitvated = document.querySelector('.btn.active')

   // 一度両方のボタンをactiveにする
   document.querySelectorAll('.btn').forEach(function( btn ) {
     btn.classList.add("active")
   })

   // 最初の段階でactivateされていたものから
   // .activeを取り除く
   acitvated.classList.remove("active")
}

// 一旦はランダムに答えを返す。
function judge(){
  const result = ['○','×', null]
  const r = Math.floor(Math.random() * 3)
  return result[r]
}
