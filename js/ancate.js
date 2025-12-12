// さくらアンケート

function collectSakuraData() {
    // Q1: 在校生か？
    const inSchoolYes = document.getElementById('a1_yes').checked;
    const inSchoolNo = document.getElementById('a1_no').checked;
    const q1_in_school = inSchoolYes ? true : (inSchoolNo ? false : null);

    // Q2: さくらインターネットを知っているか？
    const q2_know_yes = document.getElementById('a2_yes').checked;
    const q2_know_no = document.getElementById('a2_no').checked;
    const q2_know_sakura = q2_know_yes ? true : (q2_know_no ? false : null);
    
    // Q2-1: 利用したことがあるか？ (Q2がYesの場合のみ)
    let q2_1_used_sakura = null;
    if (q2_know_sakura === true) {
        q2_1_used_sakura = document.querySelector('input[name="a2_1"]:checked')?.value === 'yes' ? true : false;
    }

    // 在校生ではない場合のみ取得するデータ
    let q1_gender = null;
    let q1_age = null;
    let q1_occupation = null;
    
    if (q1_in_school === false) {
        // age_group ENUM ('10-', '10', '20', '30', '40', '50+') に対応させる
        const ageMap = {
            '9s': '10-', '10s': '10', '20s': '20', '30s': '30', 
            '40s': '40', '50s': '50+'
        };
        
        q1_gender = document.querySelector('input[name="gender"]:checked')?.value;
        q1_age = ageMap[document.querySelector('select[name="age"]').value] || null;
        q1_occupation = document.querySelector('input[name="job"]').value;
    }

    // 収集したデータをDBの列名に合わせて整形
    return {
        q1_in_school: q1_in_school,
        q1_gender: q1_gender,
        q1_age: q1_age,
        q1_occupation: q1_occupation,
        q2_know_sakura: q2_know_sakura,
        q2_1_used_sakura: q2_1_used_sakura,
        q2_2_sakura_feedback: document.querySelector('textarea[name="a2_2"]').value,
    };
}


document.getElementById('submit_sakura').addEventListener('click', async () => {
    const data = collectSakuraData();
    
    // 必須項目（Q1, Q2）のチェック（簡易版）
    if (data.q1_in_school === null || data.q2_know_sakura === null) {
        alert('Q1とQ2は必須です。');
        return;
    }

    // 診断結果データもここで生成が必要ですが、今回はアンケートのみ送信
    // 診断結果データは、別途 answers オブジェクトから取得するものと仮定します
    
    const payload = {
        sakuraData: data,
        // diagnosticData: { ... }, // 診断結果データも同時に送る場合はここに追加
    };

    try {
        const response = await fetch('/api/submit_sakura_survey', { // ★ 新設するAPI
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error('サーバーエラー: ' + response.status);
        }

        const result = await response.json();
        console.log('データ登録成功:', result.userId);

        // 登録成功後、次の診断ページへ遷移（例：診断Q1へ）
        window.location.href = 'diagnosis_page_q1.html'; 

    } catch (error) {
        console.error('送信エラー:', error);
        alert('アンケートデータの送信に失敗しました。');
    }
});

const pool = new Pool({
    // ... 接続情報 ...
});

// ★ アンケートデータ登録APIエンドポイント
app.post('/api/submit_sakura_survey', async (req, res) => {
    const { sakuraData } = req.body;
    const client = await pool.connect();

    try {
        const query = `
            INSERT INTO sakura_survey (
                q1_in_school, q1_gender, q1_age, q1_occupation, 
                q2_know_sakura, q2_1_used_sakura, q2_2_sakura_feedback
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING user_id;
        `;

        const values = [
            sakuraData.q1_in_school,
            sakuraData.q1_gender,
            sakuraData.q1_age,
            sakuraData.q1_occupation,
            sakuraData.q2_know_sakura,
            sakuraData.q2_1_used_sakura,
            sakuraData.q2_2_sakura_feedback
        ];

        // SQL実行
        const dbRes = await client.query(query, values);
        const userId = dbRes.rows[0].user_id;
        
        // 成功レスポンスを返す
        res.status(200).json({ 
            message: '基本アンケート登録完了', 
            userId: userId // 後の処理（診断結果登録など）のためにIDを返却
        });

    } catch (error) {
        console.error('DB登録エラー:', error);
        // DBエラーの詳細をクライアントに返さないよう注意
        res.status(500).json({ error: 'データの保存中にエラーが発生しました。' });
        
    } finally {
        client.release(); // クライアントを解放
    }
});