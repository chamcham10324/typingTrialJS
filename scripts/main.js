'use strict';

{
    window.addEventListener('keydown', (e) => {
        console.log(e.key);
    })

    const subject = document.getElementById('subject');
    const form = document.forms.typing;
    const timer = document.getElementById('timer');
    const textList = [
        'Hello World',
        'Ritsumeikan Computer Club',
        'JavaScript',
        'Slack',
        'Google Drive',
        'Ritsumeikan',
        'manaba+R'
    ];

    let TIME = 20;
    let count = 0;
    let miss = 0;
    let state = true;

    // カウントダウン機能 functionの処理を1000ミリ秒ごとに繰り返す
    const countdown = setInterval(function () {
        timer.textContent = --TIME;
        if (TIME <= 0) finish();
    }, 1000);


    // フォーム処理(正解不正解の判定，点数の処理)
    form.btn.addEventListener('click', function (e) {
        if (!state) return;

        if (form.input.value === subject.textContent) {
            count++;
            document.getElementById('score').textContent = count;
            init();
        } else {
            subject.textContent = 'It\'s a mistake!';
            miss++;
            document.getElementById('miss').textContent = miss;
            setTimeout(function () { init() }, 1000)
        }
    });

    init();


    // 問題文をランダムに設定する処理
    function init() {
        const rnd = Math.floor(Math.random() * textList.length);

        
        subject.textContent = textList[rnd];
        form.input.value = '';
        form.input.focus();
    }

    // タイピング結果の表示
    function finish() {
        clearInterval(countdown);
        subject.textContent = 'SCORE : ' + count;
        // ゲームの終了処理
        state = false;
    }

}