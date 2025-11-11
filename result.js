console.log("JavaScriptファイルが正常に読み込まれました。");

const resultsData = [
    {
        id: 'infra_onpre',
        classtype: 'インフラ型（分析家）',
        type: 'オンプレミスタイプ',
        word: '黙々作業',
        imagePath: 'image/bunseki.png',
        summary: '堅実で責任感が強い職人。安定と秩序を重んじる。',
        strengths: ['安定性と順序を重視し、手順通りの作業を完璧にこなす', '責任感が強く、一度引き受けた仕事は最後までやり抜く'],
        weaknesses: ['新しい変化や未知の領域への対応に時間がかかる', '柔軟性に欠け、既存のルールに固執しがち'],

        suitableEnvironment: ['明確な手順と規則があり、地道な努力が評価される環境。aaaaaaaaaaa'],

    },
    
];



// JavaScriptの処理の流れ（イメージ）
function displayResult(typeId) {
    const data = resultsData.find(item => item.id === typeId); // IDに一致するデータを探す

    if(!data) {

        console.error(`ID:${typeId}に一致するデータが見つかりません。`);

        document.getElementById('result-type-title').textContent = "エラー：結果データの読み込みに失敗しました。";
        return;
    }
    
    document.getElementById('result-classtype').textContent = data.classtype;
    document.getElementById('result-type-title').textContent = data.type;
    document.getElementById('result-word').textContent = data.word;    
    document.getElementById('result-summary-text').textContent = data.summary;

    // 画像
    const imageElement = document.getElementById('result-image');
    if(imageElement && data.imagePath) {
        imageElement.src = data.imagePath;
    }


    // 長所
    const strengthsList = document.getElementById('strengths-list');
    strengthsList.innerHTML = ''; //いったん中身を空にする
    data.strengths.forEach(strength => {
        const li = document.createElement('li');
        li.textContent = strength;
        strengthsList.appendChild(li);
    });

    // 短所
    const weaknessesList = document.getElementById('weaknesses-list');
    weaknessesList.innerHTML = ''; //いったん中身を空にする
    data.weaknesses.forEach(weaknesses => {
        const li = document.createElement('li');
        li.textContent = weaknesses;
        weaknessesList.appendChild(li);
    });

    // 適切な環境
    const suitableEnvironmentList = document.getElementById('environment-list');
    suitableEnvironmentList.innerHTML = ''; //いったん中身を空にする
    data.suitableEnvironment.forEach(suitableEnvironment => {
        const li = document.createElement('li');
        li.textContent = suitableEnvironment;
        suitableEnvironmentList.appendChild(li);
    });

}

// 実際の呼び出し
displayResult('infra_onpre');