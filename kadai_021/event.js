const addBtn = document.getElementById('btn');

const parentElement = document.getElementById('text');

//イベント処理の実行
addBtn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});