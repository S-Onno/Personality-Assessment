<?php
    // データベース接続
    $host = "163.43.131.152";
    $port = "5432";
    $dbname = "survey_app"; // データベース名
    $user = "hikaru-oyama"; // データベースユーザー
    $password = "Galleria1119"; // パスワード

    $connection_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        // POSTリクエスト以外は拒否
        die("エラー：不正なアクセス方法です。");

    }

    // フォームデータの取得とDB型へのマッピング

    // 1.q1_in_school (a1)
    // 'yes' => TRUE ('t'), 'no' => FALSE ('f')
    $a1_value = $_POST['a1'] ?? null;
    $q1_in_school_db = ($a1_value === 'yes') ? 't' : 'f';

    // 2.在校生でない場合(a1='no')のみ取得する情報
    $is_in_school = ($q1_in_school_db === 't');

    if (!$is_in_school) {
        // HTMLの age value（例：'10s'）をDBのENUM（例：'10'）に変換する必要がある
        $q1_gender = $_POST['gender'] ?? null;
        $q1_occupation = $_POST['job'] ?? null;

        $age_map = [
        '9s' => '10-', 
        '10s' => '10', 
        '20s' => '20', 
        '30s' => '30', 
        '40s' => '40', 
        '50s' => '50+'
        ];

        $q1_age = $age_map[$_POST['age']] ?? null;

        if ($q1_age === 'select') {
            $q1_age = null; // "選択してください"はNULLにする
        }

    } else {
    // 在校生の場合はDBのNOT NULL制約に対応するため NULL を挿入 (DBで許可されていれば)
    // q1_gender, q1_age, q1_occupation はNULL許容なので、NULLを渡します。
    $q1_gender = null;
    $q1_age = null;
    $q1_occupation = null;
    }

    // 3. さくらインターネットの質問
        $a2_value = $_POST['a2'] ?? null;
        $q2_know_sakura_db = ($a2_value === 'yes') ? 't' : 'f';

    // 4. さくらフォローアップ（a2='yes'の場合のみ）
    if ($q2_know_sakura_db === 't') {
        $q2_1_value = $_POST['a2_1'] ?? null;
        $q2_1_used_sakura_db = ($q2_1_value === 'yes') ? 't' : 'f';
        $q2_2_sakura_feedback = $_POST['a2_2'] ?? null;
    } else {
        // 知らない場合はNULL
        $q2_1_used_sakura_db = 'f'; // FALSEで統一
        $q2_2_sakura_feedback = null;
    }


    // データベース接続とデータ挿入

    $dbconn = pg_connect($connection_string);

    if (!$dbconn) {
        // 接続失敗
        error_log("DB接続エラー: " . pg_last_error());
        die("申し訳ありません、アンケート送信中にシステムエラーが発生しました。");
    }

    // SQL INSERT文 (セキュリティのためプリペアドステートメントを使用)
    $sql = "INSERT INTO sakura_survey (
        q1_in_school, q1_gender, q1_age, q1_occupation,
        q2_know_sakura, q2_1_used_sakura, q2_2_sakura_feedback
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
    )";

    // パラメータ配列
    $params = array(
        $q1_in_school_db,
        $q1_gender,
        $q1_age,
        $q1_occupation,
        $q2_know_sakura_db,
        $q2_1_used_sakura_db,
        $q2_2_sakura_feedback
    );

    // クエリ実行
    $result = pg_query_params($dbconn, $sql, $params);

    if ($result) {
        // 成功: result.htmlにリダイレクト
        header("Location: result.html");
        exit;
    } else {
        // 失敗
        error_log("DB挿入エラー: " . pg_last_error($dbconn));
        echo "データの保存に失敗しました。管理者にご連絡ください。";
    }

    // データベース接続を閉じる
    pg_close($dbconn);
?>