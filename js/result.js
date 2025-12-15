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
        type: 'オンプレミス<br>タイプ',
        // 一言ワード
        word: '堅実な職人肌',
        // アイコン
        imagePath: 'image/オンプレミスタイプ.png',
        // 簡単な説明
        summary: 'ルールと安定が大好きで、決めたことは絶対に守る。急な変更は大の苦手で、自分のやり方でじっくり最高品質を目指す。',
        // 長所
        strengths: ['安定性と順序を重視し、手順通りの作業を完璧にこなす。', '責任感が強く、一度引き受けた仕事は最後までやり抜く。'],
        // 短所
        weaknesses: ['新しい変化や未知の領域への対応に時間がかかる。', '柔軟性に欠け、既存のルールに固執しがち。'],
        // 相性
        matchType: ['ファイアウォールタイプ (セキュリティ)','安心と安全が倍増する鉄壁のタッグ','どちらもリスクを徹底的に嫌うので、お互いの慎重さを尊敬し合い、安心して自分の仕事に集中できます。'],
        // 説明文
        gaiyou: ['オンプレミス'],
    },

    // クラウドタイプ
    {
        id: 'infra_cld',
        classtype: 'インフラ型（分析家）',
        type: 'クラウドタイプ',
        word: 'フットワークが<br>軽い自由な人',
        imagePath: 'image/クラウドタイプ.png',
        summary: '新しい場所や環境への適応が驚くほど速い。変化を楽しみ、人当たりも良いので、どこに行ってもすぐに馴染める。',
        strengths: ['適応力と社交性が高い', '新しい技術や流行を積極的に取り入れ、チームの雰囲気を明るくする'],
        weaknesses: ['一つのことに深く集中できないことがある', '長期的な計画やコミットメントが苦手'],
        matchType: ['光ファイバータイプ (ネットワーク)','楽しさと行動力が暴走するコンビ','新しい場所や流行を追いかけるのが好き同士。光ファイバーの勢いに乗り、クラウドはどんどん世界を広げていけます。'],
        gaiyou: ['クラウド'],
    },

    // ハイブリッドタイプ
    {
        id: 'infra_hyd',
        classtype: 'インフラ型（分析家）',
        type: 'ハイブリッド<br>タイプ',
        word: 'バランス感覚に優れた<br>調整役',
        imagePath: 'image/ハイブリッドタイプ.png',
        summary: '異なる意見や対立する人たちの間に入り、全員が納得する「ちょうどいい落としどころ」を見つけるのが得意な、縁の下の力持ち。',
        strengths: ['バランス感覚と調整能力に優れ、異なる意見をまとめられる', '幅広い知識を持ち、全体最適を考えることができる'],
        weaknesses: ['両者の板挟みになりやすく、決断を先延ばしにしがち', '自分の明確な意見を主張するのが苦手'],
        matchType: ['スイッチタイプ (ネットワーク)','ギスギスしない理想のチームメーカー','ハイブリッドが「バランス」を作り、スイッチが「みんなを繋ぐ」。人間関係のストレスがほぼゼロになる最高の組み合わせです。'],
        gaiyou: ['ハイブリッド'],
    },


    //エンジニア型

    // フロントエンドタイプ
    {
        id: 'eng_frt',
        classtype: 'エンジニア型（探検家）',
        type: 'フロントエンド<br>タイプ',
        word: '結果にこだわる<br>リーダータイプ',
        imagePath: 'image/フロントエンドタイプ.png',
        summary: '目に見える成果や達成を最優先。チームを引っ張るのが得意で、少し強引でも目標に向かって突き進む。',
        strengths: '細部の詰めや地道な作業をこだわる。',
        weaknesses: ['細部の詰めや地道な作業を軽視しがち', '結果を急ぎすぎて、人の意見を遮ってしまうことがある'],
        matchType: ['ルータータイプ (ネットワーク)','目標達成への最速チートコード','リーダーが「目標」を宣言すれば、ルーターが感情抜きの最短ルートを瞬時に計算。無駄なくゴールに一直線です。'],
        gaiyou: ['フロントエンド'],
    },

    // バックエンドタイプ
    {
        id: 'eng_bck',
        classtype: 'エンジニア型（探検家）',
        type: 'バックエンド<br>タイプ',
        word: '陰で支える献身的な人',
        imagePath: 'image/バックエンドタイプ.png',
        summary: '表舞台は苦手だが、裏方の作業を丁寧かつ完璧にこなす。組織の安定のために、人知れず黙々と頑張る努力家。',
        strengths: ['堅実で信頼性が高く、内部の複雑なロジック構築に強い', '自己主張が少なく、裏方として組織を支えることに喜びを感じる'],
        weaknesses: ['成果が目立ちにくく、自己評価が低くなりがち', '人前に出るのを避け、外部連携が苦手'],
        matchType: ['ファイアウォールタイプ (セキュリティ)','組織の土台を静かに守る盟友','どちらも「目立つことより安定」を重視。互いの地味な努力を心から理解し合い、揺るぎない安心感を生み出します。'],
        gaiyou: ['バックエンド'],
    },

    // フルスタックタイプ
    {
        id: 'eng_fsk',
        classtype: 'エンジニア型（探検家）',
        type: 'フルスタック<br>タイプ',
        word: '何でも知っている<br>頼れる人',
        imagePath: 'image/フルスタックタイプ.png',
        summary: '知識欲が旺盛で、幅広く深く物事を理解している。どんな問題でも「とりあえずこの人に聞けば解決する」と思わせる万能さがある。',
        strengths: ['全体像の把握と幅広い視点からの問題解決に優れる', '多岐にわたるスキルを持ち、高いマルチタスク能力を発揮する'],
        weaknesses: ['専門性が浅くなりがちで、完璧主義に陥りやすい', '過度な期待をされやすく、すべてを一人で抱え込みやすい'],
        matchType: ['ハイブリッドタイプ (インフラ)','知識と配慮を兼ね備えたパーフェクト回答','フルスタックの「全知全能」に、ハイブリッドの「周りの気持ちを汲む力」が加わり、誰もが納得する完璧な解決策を生み出します。'],
        gaiyou: ['フルスタック'],
    },


    //セキュリティ型

    // ファイアウォールタイプ
    {
        id: 'sec_fwl',
        classtype: 'セキュリティ型（番人）',
        type: 'ファイアウォール<br>タイプ',
        word: '仲間思いの守護者',
        imagePath: 'image/ファイアウォールタイプ.png',
        summary: '身内や仲間に対する忠誠心が非常に強い。外部からの危険に対しては絶対に譲らず、明確な防御線を引く、頼れる番人。',
        strengths: ['仲間や組織を守る意識が極めて強く、献身的', 'ポリシーや境界線の設定が明確で、ブレがない'],
        weaknesses: ['外部からの新しい意見や変化を拒絶しがち', '排他的に見られ、柔軟性に欠ける'],
        matchType: ['チーム内の調停役、顧客サポートの最前線、伝統や秘密を重んじる組織。'],
        gaiyou: ['ファイアウォール'],
    },

    // マルウェアタイプ
    {
        id: 'sec_mal',
        classtype: 'セキュリティ型（番人）',
        type: 'マルウェアタイプ',
        word: '目標達成のために動く策略家',
        imagePath: 'image/マルウェアタイプ.png',
        summary: '結果を出すためなら、既存のルールや常識に縛られない。組織の穴や隙を見つけるのが得意で、そこを巧妙に突いていく。',
        strengths: ['隠れた情報や知識を武器に、交渉や意思決定を有利に進めることに長けている。', '隠れた情報や知識を武器に、交渉や意思決定を有利に進めることに長けている。'],
        weaknesses: ['最も大きな弱点は信頼を築けないこと', '利己的で、周囲に混乱と悪影響を与える'],
        matchType: ['フロントエンドタイプ (エンジニア)','手段を選ばず結果を出す最強タッグ','策略家が「勝てる戦略（裏技含む）」を見つけ、リーダーが「それを実行する圧倒的な力」で実現します。'],
        gaiyou: ['マルウェア'],
    },

    // ゼロトラストタイプ
    {
        id: 'sec_zrt',
        classtype: 'セキュリティ型（番人）',
        type: 'ゼロトラスト<br>タイプ',
        word: '人を信用しない一匹狼',
        imagePath: 'image/トラストタイプ.png',
        summary: '集団の雰囲気や感情に流されず、常に客観的で論理的に判断する。誰も信じないからこそ、孤独でも確かな道を歩める個人主義者。',
        strengths: ['自立心と独立性が極めて高い', '他者に依存せず、自分自身の判断基準で正確に行動できる'],
        weaknesses: ['チームワークが苦手で、孤立しがち', '協調性に欠け、他者からの承認を必要としない'],
        matchType: ['ルータータイプ (ネットワーク)','人間的なミスゼロの合理性','ゼロトラストの「客観的な評価」とルーターの「論理的な判断」が合体し、感情を完全に排除した最善手を選び続けます。'],
        gaiyou: ['ゼロトラスト'],
    },

    // ネットワーク型

    // ルータタイプ
    {
        id: 'net_rtr',
        classtype: 'ネットワーク型（外交官）',
        type: 'ルータータイプ',
        word: '冷静な合理的判断者',
        imagePath: 'image/ルータータイプ.png',
        summary: '感情論を嫌い、複数の情報から「一番効率が良く、正しい方法」を瞬時に選び出せる。無駄を徹底的に省きたい論理派。',
        strengths: ['情報の適切な振り分けと最適な経路の選択に優れる', '感情に流されず、公平で論理的な判断を下せる'],
        weaknesses: ['人の感情や背景を無視しがちで、冷たい印象を与える', '判断基準が形式的になりやすい'],
        matchType: ['ゼロトラストタイプ (セキュリティ)','無駄という概念が消滅する','ルーターの「最短経路」に、ゼロトラストの「疑いの目」が加わることで、非効率なプロセスは一切許されません。'],
        gaiyou: ['ルーター'],
    },

    // 光ファイバータイプ
    {
        id: 'net_opt',
        classtype: 'ネットワーク型（外交官）',
        type: '光ファイバー<br>タイプ',
        word: '場のムードメーカー',
        imagePath: 'image/光ファイバータイプ.png',
        summary: 'とにかく明るく、その情熱で周囲のテンションを上げるのが得意。情報を素早く共有し、皆を巻き込んでお祭り騒ぎにするカリスマ。',
        strengths: ['情報の伝達が速く、高効率なアウトプット'],
        weaknesses:  ['繊細で傷つきやすい面もある'],
        matchType: ['クラウドタイプ (インフラ)','新しいトレンドの拡散エンジン','どちらも「楽しさ」と「活動」が好き。光ファイバーの明るい勢いで、クラウドが持ち込む新しいアイデアや情報を瞬時に広めます。'],
        gaiyou: ['光ファイバー'],
    },

    // スイッチタイプ
    {
        id: 'net_swh',
        classtype: 'ネットワーク型（外交官）',
        type: 'スイッチタイプ',
        word: '協調性の名人',
        imagePath: 'image/スイッチタイプ.png',
        summary: '誰とでもスムーズに繋がり、グループ内の情報共有を円滑にするサポート役。みんなが気持ちよく仕事できるように気を配る優しいムードメーカー。',
        strengths: ['多様な人との接続・連携をスムーズに行える', '状況に応じた会話の切り替えが得意で、情報共有を促す'],
        weaknesses: ['話を深く掘り下げず、表面的な交流に留まりがち', '自分の明確な意見を持たず、周りに合わせすぎる'],
        matchType: ['ハイブリッドタイプ (インフラ)','常に平和で円満な環境が完成','違いを埋めたいハイブリッドと、みんなを繋ぎたいスイッチは、お互いの得意技を活かし合って、いつも快適な人間関係を作り出します。'],
        gaiyou: ['スイッチ'],
    },
];

const termsExplanation = {
    // インフラ型
    'オンプレミスタイプ': 'サーバーやシステムを、自分で管理する「自分の家（社内）」に置くことです。自由に設定できますが、管理は大変です。'
    + '<br>'
    + '<strong><br>例えば：自分の学校の図書館</strong>'
    + '<br>本（データ）や棚（サーバー）はすべて学校が買って持っています。管理や新しい本を入れるかどうかは、学校の先生（自社のIT担当者）がすべて決めます。自由ですが、初期費用は高いです。',

    'クラウドタイプ': 'インターネットを通じて、大きな会社（プロ）からサーバーなどの「部屋」を借りて使うことです。管理が楽で、性能をすぐに変えられます。'
    + '<br>'
    + '<strong><br>例えば：インターネットにある大きな公共図書館</strong>'
    + '<br>本棚（サーバー）は図書館の運営会社（Google, Amazonなど）が用意していて、私たちはインターネット経由で借ります。いつでもすぐに新しい本が借りられ（リソースの増減）、建物のメンテナンスは会社がやってくれます。',

    'ハイブリッドタイプ': '自分の家（オンプレミス）と、借りた部屋（クラウド）を両方使って、いいとこ取りをすることです。'
    + '<br>'
    + '<strong><br>例えば：学校の図書館と公共図書館を両方使う</strong>'
    + '<br>生徒の個人情報など、とても大事な本は学校の図書館（オンプレミス）に厳重に保管し、普通の調べ物やみんなで共有する本はインターネットの図書館（クラウド）を使う、というように、いいところを組み合わせて使う方法です。',
    
    // エンジニア型
    'フロントエンドタイプ': 'ユーザーが直接触る、Webサイトの「見た目」や「操作ボタン」を作る仕事です。'
    + '<br>'
    + '<strong><br>例えば：ゲーム画面やキャラクターの見た目を作る人</strong>'
    + '<br>ボタンを押したときに「ピカッ」と光ったり、キャラクターを可愛く見せたり、プレイヤーが直接触れる部分を担当します。',

    'バックエンドタイプ': 'ユーザーには見えない、サーバーの裏側で「データの処理」や「複雑な計算」をする仕事です。'
    + '<br>'
    + '<strong><br>例えば：ゲームのルールやデータ管理をする人</strong>'
    + '<br>プレイヤーが倒した敵の数（データ）を数えたり、友達との対戦ルールを決めたり、裏側で全ての計算を担当します。',

    'フルスタックタイプ': '見た目（フロントエンド）も裏側（バックエンド）も、どちらもできる万能な人のことです。'
    + '<br>'
    + '<strong><br>例えば：ゲーム作り全体をこなすスーパーヒーロー</strong>'
    + '<br>キャラクターのデザイン（フロントエンド）もできて、複雑なゲームのルール設定（バックエンド）もできる、何でも屋さんのことです。',
    
    // セキュリティ型
    'ファイアウォールタイプ': 'ネットワークの入り口で、悪い通信をブロックする「門番」の役割をするセキュリティシステムです。'
    + '<br>'
    + '<strong><br>例えば：会社の警備員</strong>'
    + '<br>会社（ネットワーク）の出入り口に立ち、怪しい人（不正な通信）をチェックし、許可された人だけを通す門番の役割をします。',

    'マルウェアタイプ': 'コンピューターに害を与える「悪意のあるプログラム」の総称です（ウイルスなど）。'
    + '<br>'
    + '<strong><br>例えば：コンピューターの病気</strong>'
    + '<br>パソコンやスマホに入り込み、勝手にデータを盗んだり、動かなくしたりする、悪者プログラムの総称です。',

    'ゼロトラストタイプ': '「誰も信用しない」ことを前提に、すべてのアクセスを厳しくチェックする最新のセキュリティの考え方です。'
    + '<br>'
    + '<strong><br>例えば：「友達でも信じない」ルール</strong>'
    + '<br>たとえ知っている友達（社内のパソコン）であっても、「本当に君なの？」と毎回IDとパスワードを厳しくチェックする、超厳しいセキュリティの考え方です。',
    
    // ネットワーク型
    'ルータータイプ': '異なるネットワーク同士をつなぎ、データが目的地に行く「最適なルート」を瞬時に選ぶ機器です。'
    + '<br>'
    + '<strong><br>例えば：郵便局の仕分けロボット</strong>'
    + '<br>あなたのパソコンから出たデータ（手紙）が、インターネット上のどこ（友達の家）に行くべきか判断し、一番早い道を選んで送り出します。',

    '光ファイバータイプ': 'データを「光」の信号で送る、とても速い通信ケーブルです。'
    + '<br>'
    + '<strong><br>例えば：光で速い高速道路</strong>'
    + '<br>電気ではなく「光」の信号でデータを運ぶ、非常に速くて混雑しにくい通信用の道路です。',

    'スイッチタイプ': '同じネットワーク内で、複数の機器（パソコンなど）の間でデータを正確に送る「交通整理係」の機器です。'
    + '<br>'
    + '<strong><br>例えば：駅のプラットフォーム案内係</strong>'
    + '<br>一つの駅（同じネットワーク内）の中で、どの列車（データ）がどの線路（パソコン）に行くべきか、間違えずに正確に案内する係です。',
};



// JavaScriptの処理の流れ（イメージ）
function displayResult(typeId) {
    const data = resultsData.find(item => item.id === typeId); // IDに一致するデータを探す

    // データがなかった場合
    if(!data) {

        console.error(`ID:${typeId}に一致するデータが見つかりません。`);

        document.getElementById('result-type-title').textContent = "エラー：結果データの読み込みに失敗しました。";
        return;
    }

    const rawType = data.type.replace(/<br>/g, '').trim();
    
    // 分類データ取得
    document.getElementById('result-classtype').innerHTML = data.classtype;
    // タイプ名のデータ取得
    document.getElementById('result-type-title').innerHTML = data.type;
    // 一言ワードのデータ取得
    document.getElementById('result-word').innerHTML = data.word;
    // 簡単な説明のデータ取得
    document.getElementById('result-summary-text').innerHTML = data.summary;
    


    const explanationTitleElement = document.querySelector('.gaiyou-card .trait-title');
    
    if (explanationTitleElement) {
        // H3タグの内容を「[タイプ名]の意味」に書き換える
        // ここでは、改行タグ(<br>)を含んだタイプ名を使って、そのまま「の意味」を追加します。
        explanationTitleElement.innerHTML = data.type + 'の意味';
    }
    

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

    // 相性
    const matchTypeList = document.getElementById('environment-list');
    matchTypeList.innerHTML = ''; //いったん中身を空にする
    data.matchType.forEach(matchType => {
        const li = document.createElement('li'); //箇条書きにする
        li.textContent = matchType;
        matchTypeList.appendChild(li);
    });

    // 説明文
    const gaiyouList = document.getElementById('gaiyou-list');
    if (data.gaiyou && gaiyouList) {
        gaiyouList.innerHTML = ''; //いったん中身を空にする
        data.gaiyou.forEach(gaiyou => {
            const li = document.createElement('li'); //箇条書きにする
            li.textContent = gaiyou;
            gaiyouList.appendChild(li);
        });
    }

    const explanationElement = document.getElementById('term-explanation-text');

    if (explanationElement) {
        // termsExplanationからキー(rawType)を使って説明文を取得
        const explanation = termsExplanation[rawType]; 
        
        if (explanation) {
            // innerHTMLを使って改行タグ(<br>)を有効にする
            explanationElement.innerHTML = explanation; 
        } else {
            explanationElement.textContent = "この用語の説明データは見つかりませんでした。";
        }
    }


    // ... [matchType] の挿入ロジックの後に追加 ...
}




window.addEventListener('DOMContentLoaded', () => {
    
    // 1. URLSearchParamsを使って、URLのクエリパラメータから 'id' の値を取得する
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id'); // 例: 'infra_onpre' または 'eng_frt' が入る
    
    let typeIdToDisplay = idFromUrl; // 優先順位1: URLからのID
    
    // 2. URLにIDがない場合（診断完了時など）にのみ、sessionStorageを確認する
    if (!typeIdToDisplay) {
        typeIdToDisplay = sessionStorage.getItem('resultTypeId'); // 優先順位2: session StorageからのID
    }
    
    // 3. どちらにもIDがない場合
    if (!typeIdToDisplay) {
    console.error('表示するタイプIDが見つかりません。');
    // フォールバック：エラーメッセージを表示するか、デフォルトを表示
    document.getElementById('result-type-title').textContent = "エラー：表示するデータがありません。";
    // displayResult('infra_onpre'); // デフォルト表示が必要ならコメントアウトを解除
    return;
    }

    // 4. 取得したIDで結果を表示する
    displayResult(typeIdToDisplay);
});