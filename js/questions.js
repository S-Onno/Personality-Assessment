// 質問への回答を管理するオブジェクト
      const answers = {};
      const totalQuestions = document.querySelectorAll('.card').length;
      const types = ['inf', 'enj', 'sec', 'net'];

      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const name = btn.getAttribute('name');

          document.querySelectorAll(`.option-btn[name="${name}"]`)
            .forEach(b => b.classList.remove('selected'));

          btn.classList.add('selected');
          answers[name] = JSON.parse(btn.dataset.value);
          updateProgress();
          updateClearButtons();
          updateQuestionCount();
        });
      });

      document.querySelectorAll('.clear-selection').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const card = btn.closest('.card');
          if (!card) return;
          const q = card.dataset.question;
          document.querySelectorAll(`.option-btn[name="${q}"]`).forEach(b => b.classList.remove('selected'));
          if (answers.hasOwnProperty(q)) delete answers[q];
          updateProgress();
          updateClearButtons();
          updateQuestionCount();
          btn.classList.remove('visible');
        });
      });

      function updateClearButtons() {
        document.querySelectorAll('.card').forEach(card => {
          const q = card.dataset.question;
          const hasSelected = !!document.querySelector(`.option-btn[name="${q}"].selected`);
          const btn = card.querySelector('.clear-selection');
          if (!btn) return;
          if (hasSelected) btn.classList.add('visible'); else btn.classList.remove('visible');
        });
      }

      updateClearButtons();

      function updateProgress() {
        const answered = Object.keys(answers).length;
        const rate = (answered / totalQuestions) * 100;
        document.getElementById('progress-bar').style.width = rate + '%';
      }

      function calculateResult() {
        const score = {
          inf: 0,
          enj: 0,
          sec: 0,
          net: 0,
          inf_sub: 0,
          enj_sub: 0,
          sec_sub: 0,
          net_sub: 0,
        };

        Object.values(answers).forEach(({ type, sub }) => {
          if (!types.includes(type)) return;
          score[type] += 1;
          score[`${type}_sub`] += Number(sub);
        });

        const mainType = types.reduce((a, b) => (score[a] > score[b] ? a : b));
        const mainTotal = score[mainType];
        const avg = mainTotal > 0 ? score[`${mainType}_sub`] / mainTotal : 0;

        let subResult = 0;
        if (avg >= 2.15) subResult = 2;
        else if (avg >= 1.81) subResult = 1;
        }

      function resolveSubtypeEnglish(type, subResult) {
        const labels = {
          inf: ['Cloud', 'On-Premises', 'Hybrid'],
          enj: ['Frontend', 'Backend', 'Full-Stack'],
          sec: ['Firewall', 'Malware Response', 'Zero Trust'],
          net: ['Router', 'Fiber', 'Switch'],
        };
        const fallbacks = labels[type] || [];
        return fallbacks[subResult] || '';
      }

      function resolveTypeId(mainType, subResult) {
        // subResult は 0,1,2 を想定
        if (mainType === 'inf') {
          // 0: Cloud, 1: On-Premises, 2: Hybrid
          if (subResult === 0) return 'infra_cld';
          if (subResult === 1) return 'infra_onpre';
          if (subResult === 2) return 'infra_hyd';
        }
        if (mainType === 'enj') {
          // 0: Frontend, 1: Backend, 2: Full-Stack
          if (subResult === 0) return 'eng_frt';
          if (subResult === 1) return 'eng_bck';
          if (subResult === 2) return 'eng_fsk';
        }
        if (mainType === 'sec') {
          // 0: Firewall, 1: Malware Response, 2: Zero Trust
          if (subResult === 0) return 'sec_fwl';
          if (subResult === 1) return 'sec_mal';
          if (subResult === 2) return 'sec_zrt';
        }
        if (mainType === 'net') {
          // 0: Router, 1: Fiber, 2: Switch
          if (subResult === 0) return 'net_rtr';
          if (subResult === 1) return 'net_opt';
          if (subResult === 2) return 'net_swh';
        }
        return null;
      }



      function resolveTypeEnglish(type) {
        const typeLabels = {
          inf: 'Infrastructure',
          enj: 'Engineer',
          sec: 'Security',
          net: 'Network',
        };
        return typeLabels[type] || type;
      }

      function postResult(payload) {
        return fetch('/result', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      document.getElementById('submitBtn').addEventListener('click', () => {
      if (Object.keys(answers).length !== totalQuestions) {
      alert('未回答の質問があります。すべて回答してください。');
      return;
      }

      const { mainType, subResult, avg, score } = calculateResult();
      const typeId = resolveTypeId(mainType, subResult);
      
      if (!typeId) {
      alert('結果の判定に失敗しました。もう一度お試しください。');
      return;
      }

      // 診断結果IDを保存 (result.htmlで必要)
      sessionStorage.setItem('resultTypeId', typeId);

      // サーバー通信 (postResult) のブロックを全て削除 
              // postResult(payload).then(...).catch(...) の部分は削除します。
              
      // ancate.html へ遷移
      window.location.href = 'sakuraancate.html';
      });

// 質問に回答するたびにこの関数を呼び出す
// totalQuestions を使用します。

function updateQuestionCount() {
    // 回答済み質問数を answers オブジェクトのキーの数から取得する
    const answeredQuestions = Object.keys(answers).length; 
    
    const remainingQuestions = totalQuestions - answeredQuestions;
    
    const countElement = document.getElementById('question-count');
    if (countElement) {
        countElement.textContent = `残り ${remainingQuestions} 問　`;
    }
}

// ページロード時に実行し、初期値を表示する
updateQuestionCount();