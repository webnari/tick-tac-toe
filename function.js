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

// 一旦、縦と横に三つ並んだ場合を判定
function judge(){
  // 最終的な結果を格納する変数
  // null ・・・継続
  // ○    ・・・○の勝ち
  // ×    ・・・×の勝ち
  judge_reuslt = null

  // 横に3つ並んだ時の結果を判定
  // sizeが3より大きい場合も想定して、最大値にsizeを使用。
 for( var x = 1; x <= size; x++ ){
   texts = []
   for( var y = 1; y <= size ; y++){
     texts = appendTexts(texts, x, y)
     if(!texts[0]){break}
   }
   judge_reuslt = isFinalized(texts)
   if (judge_reuslt){ return judge_reuslt}
 }

 // 縦に3つ並んだ時の結果を判定
 // sizeが3より大きい場合も想定して、最大値にsizeを使用。
 for( var y = 1; y <= size; y++ ){
   texts = []
   for( var x = 1; x <= size ; x++){
     texts = appendTexts(texts, x, y)
     if(!texts[0]){break}
   }
   judge_reuslt = isFinalized(texts)
   if (judge_reuslt){ return judge_reuslt}
 }
  return judge_reuslt
}

// 勝敗が決まったかどうかを判定する関数
//  listが3つとも同じ記号 ex. 三つとも○かつ
//  その記号が'-'でない場合
function isFinalized(list){
  let result = Array.from(new Set(list))
  if (texts.length === size && result.length === 1 ){
    if(result[0] === '-'){ return null }
    judge_reuslt = result[0]
    return judge_reuslt
  }
  return null
}

// それぞれのセルを取得して与えられた配列に詰める関数
// 取得した値が'-'だったら空を返却
function appendTexts(a, x, y){
  text = document.querySelector(`#pannel-${x}-${y}`).innerText
  if( text === '-' ){ return []}
  a.push(text)
  return a
}
