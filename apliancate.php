<?php
    // データベース接続
    $host = "163.43.131.152";
    $port = "5432";
    $dbname = "survey_app"; // データベース名
    $user = "hikaru-oyama"; // データベースユーザー
    $password = "Galleria1119"; // パスワード

    $connection_string = "host=$host port=$port dbname=$dbname user=$user password=$password";

    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        die("エラー: 不正なアクセス方法です。");
    }


    // フォームデータの取得とDB型 (BOOLEANは 't'/'f') へのマッピング

    // 汎用的な 'yes'/'no' から PostgreSQL BOOLEAN ('t'/'f') への変換関数
    function to_pg_boolean($value) {
        if (isset($value) && $value === 'yes') {
            return 't';
        }
        return 'f';
    }

    // 質問1: q1_design_easy (a1)
    $q1_design_easy_db = to_pg_boolean($_POST['a1'] ?? null);

    // 質問2: q2_result_match (a2)
    $q2_result_match_db = to_pg_boolean($_POST['a2'] ?? null);

    // 質問3: q3_result_helpful (a3)
    $q3_result_helpful_db = to_pg_boolean($_POST['a3'] ?? null);

    // 質問4: q4_recommend (a4)
    $q4_recommend_db = to_pg_boolean($_POST['a4'] ?? null);

    // 質問5: q5_improvement (message)
    $q5_improvement = $_POST['message'] ?? null;
    // 空白の場合はNULLとして扱う
    if (empty(trim($q5_improvement))) {
        $q5_improvement = null;
    }


    // データベース接続とデータ挿入
    $dbconn = pg_connect($connection_string);

    if (!$dbconn) {
        error_log("DB接続エラー: " . pg_last_error());
        die("申し訳ありません、アンケート送信中にシステムエラーが発生しました。");
    }

    // SQL INSERT文 (セキュリティのためプリペアドステートメントを使用)
    $sql = "INSERT INTO optional_survey (
        q1_design_easy, q2_result_match, q3_result_helpful, q4_recommend, q5_improvement
    ) VALUES (
        $1, $2, $3, $4, $5
    )";

    // パラメータ配列
    $params = array(
        $q1_design_easy_db,
        $q2_result_match_db,
        $q3_result_helpful_db,
        $q4_recommend_db,
        $q5_improvement
    );

    // クエリ実行
    $result = pg_query_params($dbconn, $sql, $params);

    if ($result) {
        // 成功: thanks.htmlにリダイレクト (HTMLの a href の遷移先に合わせました)
        header("Location: thanks.html");
        exit;
    } else {
        // 失敗
        error_log("DB挿入エラー: " . pg_last_error($dbconn));
        echo "データの保存に失敗しました。管理者にご連絡ください。";
    }

    // データベース接続を閉じる
    pg_close($dbconn);
?>