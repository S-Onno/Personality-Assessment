console.log("JavaScriptファイルが正常に読み込まれました。");

const resultsData = [
    //インフラ型

    // オンプレミスタイプ
    {
        // タイプID
        id: 'infra_onpre',
        // 分類
        classtype: 'インフラ型（分析家）',
        // タイプ名
        type: 'オンプレミスタイプ',
        // 一言ワード
        word: '職人',
        // アイコン
        imagePath: 'image/オンプレミスタイプ.png',
        // 簡単な説明
        summary: '堅実で責任感が強い職人。安定と秩序を重んじる。',
        // 長所
        strengths: ['安定性と順序を重視し、手順通りの作業を完璧にこなす', '責任感が強く、一度引き受けた仕事は最後までやり抜く'],
        // 短所
        weaknesses: ['新しい変化や未知の領域への対応に時間がかかる', '柔軟性に欠け、既存のルールに固執しがち'],
        // 適した環境
        suitableEnvironment: ['明確な手順と規則があり、地道な努力が評価される環境。'],

    },

    // クラウドタイプ
    {
        id: 'infra_cld',
        classtype: 'インフラ型（分析家）',
        type: 'クラウドタイプ',
        word: 'どこでもGO',
        imagePath: 'image/クラウドタイプ.png',
        summary: '変化を好み、どこでも軽快に動けるソーシャルな調整役。',
        strengths: ['適応力と社交性が高い', '新しい技術や流行を積極的に取り入れ、チームの雰囲気を明るくする'],
        weaknesses: ['一つのことに深く集中できないことがある', '長期的な計画やコミットメントが苦手'],
        suitableEnvironment: ['スピードと変化が求められるスタートアップや新規事業。外部連携が多い部署。'],

    },

    // ハイブリッドタイプ
    {
        id: 'infra_hyd',
        classtype: 'インフラ型（分析家）',
        type: 'ハイブリッドタイプ',
        word: 'バランサー',
        imagePath: 'image/ハイブリッドタイプ.png',
        summary: '異なる要素や立場を理解し、最高のバランスを見つける調和の達人。',
        strengths: ['バランス感覚と調整能力に優れ、異なる意見をまとめられる', '幅広い知識を持ち、全体最適を考えることができる'],
        weaknesses: ['両者の板挟みになりやすく、決断を先延ばしにしがち', '自分の明確な意見を主張するのが苦手'],
        suitableEnvironment: ['多様な関係者が関わるプロジェクトマネジメント、コンサルティング、部門間調整。'],

    },


    //エンジニア型

    // フロントエンドタイプ
    {
        id: 'eng_frt',
        classtype: 'エンジニア型（探検家）',
        type: 'フロントエンドタイプ',
        word: '突撃隊長',
        imagePath: 'image/フロントエンドタイプ.png',
        summary: '成果を重視し、チームを最前線で牽引するカリスマ的指導者。',
        strengths: ['強い推進力と決断力、目標達成への強い意欲', '他者を鼓舞し、モチベーションを高めるのが得意'],
        weaknesses: ['細部の詰めや地道な作業を軽視しがち', '結果を急ぎすぎて、人の意見を遮ってしまうことがある'],
        suitableEnvironment: ['プロジェクトリーダーやマネージャー。成果が明確に求められる営業や企画部門。'],

    },

    // バックエンドタイプ
    {
        id: 'eng_bck',
        classtype: 'エンジニア型（探検家）',
        type: 'バックエンドタイプ',
        word: '縁の下の力持ち',
        imagePath: 'image/バックエンドタイプ.png',
        summary: '見えない場所で、組織の安定と機能を堅実に支える献身的な仕事人。',
        strengths: ['堅実で信頼性が高く、内部の複雑なロジック構築に強い', '自己主張が少なく、裏方として組織を支えることに喜びを感じる'],
        weaknesses: ['成果が目立ちにくく、自己評価が低くなりがち', '人前に出るのを避け、外部連携が苦手'],
        suitableEnvironment: ['データ処理・分析、品質管理、長期的な運用保守、基盤開発。'],

    },

    // フルスタックタイプ
    {
        id: 'eng_fsk',
        classtype: 'エンジニア型（探検家）',
        type: 'フルスタックタイプ',
        word: '神様',
        imagePath: 'image/フルスタックタイプ.png',
        summary: '全てを把握し、あらゆる問題に解答を示す、万能で頼れる存在。',
        strengths: ['全体像の把握と幅広い視点からの問題解決に優れる', '多岐にわたるスキルを持ち、高いマルチタスク能力を発揮する'],
        weaknesses: ['専門性が浅くなりがちで、完璧主義に陥りやすい', '過度な期待をされやすく、すべてを一人で抱え込みやすい'],
        suitableEnvironment: ['小規模チームのリーダー、緊急対応が必要な部署、技術的な要件定義、技術顧問。'],

    },


    //セキュリティ型

    // ファイアウォールタイプ
    {
        id: 'sec_fwl',
        classtype: 'セキュリティ型（番人）',
        type: 'ファイアウォールタイプ',
        word: '鉄壁ガード',
        imagePath: 'image/ファイアウォールタイプ.png',
        summary: '身内に対する強い忠誠心と、外部からの脅威に対する明確な防御線を持つ。',
        strengths: ['仲間や組織を守る意識が極めて強く、献身的', 'ポリシーや境界線の設定が明確で、ブレがない'],
        weaknesses: ['外部からの新しい意見や変化を拒絶しがち', '排他的に見られ、柔軟性に欠ける'],
        suitableEnvironment: ['チーム内の調停役、顧客サポートの最前線、伝統や秘密を重んじる組織。'],

    },

    // マルウェアタイプ
    {
        id: 'sec_mal',
        classtype: 'セキュリティ型（番人）',
        type: 'マルウェアタイプ',
        word: '策略家',
        imagePath: 'image/マルウェアタイプ.png',
        summary: '目標達成のためには手段を選ばず、巧妙に組織の隙を突く。',
        strengths: ['カリスマ性と欺く能力があり、情報の非対称性を利用するのが得意', '状況を素早く把握し、利益を得るための非凡な手段を思いつく'],
        weaknesses: ['最も大きな弱点は信頼を築けないこと', '利己的で、周囲に混乱と悪影響を与える'],
        suitableEnvironment: ['競争が激しい交渉の場、架空のシナリオ作成。'],

    },

    // ゼロトラストタイプ
    {
        id: 'sec_zrt',
        classtype: 'セキュリティ型（番人）',
        type: 'ゼロトラストタイプ',
        word: '一匹狼',
        imagePath: 'image/トラストタイプ.png',
        summary: '何者も信用せず、自立した判断で孤高の道を歩む個人主義者。',
        strengths: ['自立心と独立性が極めて高い', '他者に依存せず、自分自身の判断基準で正確に行動できる'],
        weaknesses: ['チームワークが苦手で、孤立しがち', '協調性に欠け、他者からの承認を必要としない'],
        suitableEnvironment: ['フリーランス、専門性の高い研究職、リモートでの単独作業、短期のコンサルティング。'],

    },

    // ネットワーク型

    // ルータタイプ
    {
        id: 'net_rtr',
        classtype: 'ネットワーク型（外交官）',
        type: 'ルータータイプ',
        word: '最適解メーカー',
        imagePath: 'image/ルータータイプ.png',
        summary: '複数の情報から最適な経路を見つけ、効率的かつ論理的に振り分ける冷静な判断者。',
        strengths: ['情報の適切な振り分けと最適な経路の選択に優れる', '感情に流されず、公平で論理的な判断を下せる'],
        weaknesses: ['人の感情や背景を無視しがちで、冷たい印象を与える', '判断基準が形式的になりやすい'],
        suitableEnvironment: ['プロジェクト管理、タスクの分配、意思決定支援、大規模組織の組織構造設計。'],

    },

    // 光ファイバータイプ
    {
        id: 'net_opt',
        classtype: 'ネットワーク型（外交官）',
        type: '光ファイバータイプ',
        word: 'お祭り部長',
        imagePath: 'image/光ファイバータイプ.png',
        summary: '明るく、高効率で情報を伝達し、場を盛り上げるカリスマ。',
        strengths: ['場を盛り上げるカリスマ性があり、明るくポジティブ', '情報（感情）の伝達が速く、高効率なアウトプット'],
        weaknesses: ['注目されないと力を発揮できず、ムラがある', '騒がしいと思われたり、繊細で傷つきやすい面もある'],
        suitableEnvironment: ['営業職、プレゼンテーション、イベント企画・運営、教育・トレーニング。'],

    },

    // スイッチタイプ
    {
        id: 'net_swh',
        classtype: 'ネットワーク型（外交官）',
        type: 'スイッチタイプ',
        word: '繋がり名人',
        imagePath: 'image/スイッチタイプ.png',
        summary: '誰とでもスムーズに接続し、グループ内の情報共有を円滑にするムードメーカー。',
        strengths: ['多様な人との接続・連携をスムーズに行える', '状況に応じた会話の切り替えが得意で、情報共有を促す'],
        weaknesses: ['話を深く掘り下げず、表面的な交流に留まりがち', '自分の明確な意見を持たず、周りに合わせすぎる'],
        suitableEnvironment: ['チーム内のコーディネーター、受付、部門間の橋渡し、カスタマーサポート。'],

    },
];



// JavaScriptの処理の流れ（イメージ）
function displayResult(typeId) {
    const data = resultsData.find(item => item.id === typeId); // IDに一致するデータを探す

    // データがなかった場合
    if(!data) {

        console.error(`ID:${typeId}に一致するデータが見つかりません。`);

        document.getElementById('result-type-title').textContent = "エラー：結果データの読み込みに失敗しました。";
        return;
    }
    
    // 分類データ取得
    document.getElementById('result-classtype').textContent = data.classtype;
    // タイプ名のデータ取得
    document.getElementById('result-type-title').textContent = data.type;
    // 一言ワードのデータ取得
    document.getElementById('result-word').textContent = data.word;
    // 簡単な説明のデータ取得
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
        const li = document.createElement('li'); //箇条書きにする
        li.textContent = strength;
        strengthsList.appendChild(li);
    });

    // 短所
    const weaknessesList = document.getElementById('weaknesses-list');
    weaknessesList.innerHTML = ''; //いったん中身を空にする
    data.weaknesses.forEach(weaknesses => {
        const li = document.createElement('li'); //箇条書きにする
        li.textContent = weaknesses;
        weaknessesList.appendChild(li);
    });

    // 適切な環境
    const suitableEnvironmentList = document.getElementById('environment-list');
    suitableEnvironmentList.innerHTML = ''; //いったん中身を空にする
    data.suitableEnvironment.forEach(suitableEnvironment => {
        const li = document.createElement('li'); //箇条書きにする
        li.textContent = suitableEnvironment;
        suitableEnvironmentList.appendChild(li);
    });

}

// 実際の呼び出し
displayResult('infra_onpre');
//displayResult('infra_cld');
//displayResult('infra_hyd');

//displayResult('eng_frt');
//displayResult('eng_bck');
//displayResult('eng_fsk');

//displayResult('sec_fwl');
//displayResult('sec_mal');
//displayResult('sec_zrt');

//displayResult('net_rtr');
//displayResult('net_opt');
//displayResult('net_swh');