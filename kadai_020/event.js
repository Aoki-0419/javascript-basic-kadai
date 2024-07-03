const btn = document.getElementById('btn');

const text = document.getElementById('text');

//イベント処理の実行
btn.addEventListener('click', () => {
  const childList = document.createElement('li');
  childList.textContent = 'ボタンをクリックしました';
  text.appendChild(childList);
});