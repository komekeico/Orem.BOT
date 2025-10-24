// 詳細な機能データ
const featuresData = {
    "自販機システム": {
        icon: "🏪",
        description: "PayPay決済と連携した完全自動販売システム。商品管理から売上分析まで、すべてをBOTで完結できます。",
        commands: [
            { name: "/自販機作成", description: "新しい自販機パネルを作成します。PayPay決済と連携し、自動で商品を販売できます。複数の自販機を作成可能です。" },
            { name: "/自販機登録", description: "作成した自販機をサーバーに登録します。登録後、メンバーが商品を購入できるようになります。" },
            { name: "/商品追加", description: "自販機に販売する商品を追加します。商品名、価格、在庫数、説明文、画像URLを設定できます。" },
            { name: "/商品編集", description: "既存の商品情報を編集します。価格変更や説明文の修正が可能です。" },
            { name: "/商品削除", description: "自販機から商品を削除します。削除後は購入できなくなります。" },
            { name: "/在庫追加", description: "商品の在庫を追加します。在庫切れの商品に在庫を補充できます。" },
            { name: "/在庫削除", description: "商品の在庫を削除します。在庫が0になると自動的に非表示になります。" },
            { name: "/売上確認", description: "自販機の売上履歴を確認できます。日別、月別の集計データも表示されます。" },
            { name: "/クーポン発行", description: "割引クーポンを発行します。使用回数制限や有効期限を設定できます。" },
            { name: "/クーポン削除", description: "発行したクーポンを削除します。未使用のクーポンも無効化されます。" }
        ]
    },
    "モデレーション": {
        icon: "🛡️",
        description: "サーバーの秩序を守るための強力なモデレーション機能。自動化と手動操作を組み合わせて、安全なコミュニティを維持できます。",
        commands: [
            { name: "/ban", description: "ユーザーをサーバーからBANします。理由を記録し、ログチャンネルに通知されます。過去のメッセージも削除できます。" },
            { name: "/unban", description: "BANされたユーザーの制裁を解除します。ユーザーIDを指定して解除できます。" },
            { name: "/kick", description: "ユーザーをサーバーからキックします。再参加は可能です。軽度の違反に対して使用します。" },
            { name: "/timeout", description: "ユーザーを一時的にタイムアウトします。指定時間後に自動解除されます。最大28日間設定可能です。" },
            { name: "/untimeout", description: "タイムアウトを手動で解除します。即座にメンバーの発言が可能になります。" },
            { name: "/warn", description: "ユーザーに警告を発行します。警告回数が一定数を超えると自動処罰されます。" },
            { name: "/warnings", description: "ユーザーの警告履歴を確認します。警告理由と日時が表示されます。" },
            { name: "/clearwarnings", description: "ユーザーの警告をクリアします。警告回数がリセットされます。" },
            { name: "/ngワード追加", description: "NGワードを追加します。該当メッセージは自動削除され、ユーザーに警告が送られます。" },
            { name: "/ngワード削除", description: "登録されているNGワードを削除します。" },
            { name: "/ngワード一覧", description: "現在設定されているNGワードの一覧を表示します。" },
            { name: "/dm削除", description: "BOTから送信されたDMを一括削除します。プライバシー保護に役立ちます。" },
            { name: "/メッセージ削除", description: "チャンネルのメッセージを一括削除します。最大100件まで削除可能です。" }
        ]
    },
    "ログ機能": {
        icon: "📝",
        description: "サーバーで起こるすべての出来事を記録。メンバーの行動履歴やメッセージの変更を追跡できます。",
        commands: [
            { name: "/入退室ログ設定", description: "メンバーの参加・退出を記録するチャンネルを設定します。参加日時、アカウント作成日、招待者も表示されます。" },
            { name: "/メッセージログ設定", description: "メッセージの編集・削除を記録します。編集前後の内容、削除されたメッセージの内容も保存されます。" },
            { name: "/メッセージ編集ログ", description: "メッセージ編集専用のログチャンネルを設定します。編集履歴を詳細に追跡できます。" },
            { name: "/メッセージ削除ログ", description: "メッセージ削除専用のログチャンネルを設定します。誰が何を削除したか記録されます。" },
            { name: "/コマンドログ設定", description: "実行されたコマンドを記録します。誰がいつどのコマンドを使ったか追跡できます。" },
            { name: "/モデレーションログ設定", description: "BAN、キック、タイムアウトなどの管理操作を記録します。モデレーターの行動を監視できます。" },
            { name: "/ロール変更ログ", description: "メンバーのロール変更を記録します。誰がロールを付与・削除したか追跡できます。" },
            { name: "/チャンネル変更ログ", description: "チャンネルの作成・削除・編集を記録します。サーバー構造の変更履歴を確認できます。" },
            { name: "/ログ無効化", description: "特定のログ機能を無効化します。不要なログを停止できます。" }
        ]
    },
    "パネルシステム": {
        icon: "🎛️",
        description: "インタラクティブなパネルでサーバー運営を効率化。ボタンやリアクションで様々な機能を提供できます。",
        commands: [
            { name: "/認証パネル", description: "ボタンをクリックして認証するパネルを作成します。認証後に自動でロールを付与できます。BOT再起動後も動作します。" },
            { name: "/認証パネル2", description: "カスタマイズ可能な認証パネルを作成します。複数の認証ステップを設定できます。" },
            { name: "/ロール選択パネル", description: "リアクションやボタンでロールを選択できるパネルを作成します。複数ロールの選択も可能です。" },
            { name: "/チケットパネル", description: "お問い合わせ用のチケットシステムを作成します。個別のプライベートチャンネルが自動生成されます。" },
            { name: "/配布パネル", description: "ファイルやテキストを配布するパネルを作成します。ボタンをクリックでDMに送信されます。" },
            { name: "/ステータスパネル", description: "BOTのステータスや統計情報を表示するパネルを作成します。リアルタイムで自動更新されます。" },
            { name: "/Embedパネル", description: "カスタムEmbedメッセージを作成します。タイトル、説明、色、画像、フィールドなどを自由に設定できます。" },
            { name: "/実績パネル", description: "メンバーの実績を表示するパネルを作成します。レベルシステムと連携できます。" },
            { name: "/パネル削除", description: "作成したパネルを削除します。パネルのメッセージIDを指定して削除できます。" }
        ]
    },
    "サーバー管理": {
        icon: "⚙️",
        description: "サーバーの設定を簡単に管理。バックアップから権限管理まで、管理者の作業を大幅に効率化します。",
        commands: [
            { name: "/サーバーバックアップ", description: "サーバーの設定を完全バックアップします。チャンネル、ロール、権限、カテゴリなどすべて保存されます。" },
            { name: "/サーバー複製", description: "バックアップからサーバーを復元・複製します。新しいサーバーに設定を移行できます。" },
            { name: "/バックアップ一覧", description: "保存されているバックアップの一覧を表示します。作成日時とサーバー名が確認できます。" },
            { name: "/バックアップ削除", description: "不要なバックアップを削除します。ストレージ容量を節約できます。" },
            { name: "/チャンネルリセット", description: "チャンネルのメッセージを全削除し、新しいチャンネルとして再作成します。権限設定は維持されます。" },
            { name: "/自動ロール設定", description: "新規メンバーに自動でロールを付与する設定を行います。複数のロールを設定可能です。" },
            { name: "/自動ロール解除", description: "自動ロール付与を無効化します。設定されているロールがクリアされます。" },
            { name: "/権限確認", description: "ユーザーやロールの権限を確認します。権限の問題を診断できます。" },
            { name: "/ロール一括付与", description: "複数のメンバーに一括でロールを付与します。条件を指定して付与できます。" },
            { name: "/ロール一括削除", description: "複数のメンバーから一括でロールを削除します。" },
            { name: "/everyone通知", description: "@everyone メンションを含むメッセージを送信します。重要なお知らせに使用します。" }
        ]
    },
    "エンターテイメント": {
        icon: "🎮",
        description: "サーバーを盛り上げる楽しい機能。音楽再生からゲームまで、メンバーとの交流を深められます。",
        commands: [
            { name: "/music play", description: "YouTubeやSpotifyから音楽を再生します。URLまたは曲名で検索できます。高音質で再生されます。" },
            { name: "/music pause", description: "現在再生中の曲を一時停止します。再度実行で再開できます。" },
            { name: "/music resume", description: "一時停止中の曲を再開します。" },
            { name: "/music skip", description: "現在再生中の曲をスキップします。次の曲が自動的に再生されます。" },
            { name: "/music stop", description: "音楽再生を停止し、キューをクリアします。BOTがボイスチャンネルから退出します。" },
            { name: "/music queue", description: "再生キューを表示します。曲の順番を確認・変更できます。" },
            { name: "/music volume", description: "音量を調整します。0〜100の範囲で設定できます。" },
            { name: "/music nowplaying", description: "現在再生中の曲の情報を表示します。再生時間や残り時間も確認できます。" },
            { name: "/music shuffle", description: "キュー内の曲をシャッフルします。ランダムな順番で再生されます。" },
            { name: "/music loop", description: "現在の曲またはキュー全体をループ再生します。" },
            { name: "/抽選", description: "ランダムに当選者を選びます。イベントやプレゼント企画に最適です。人数を指定できます。" },
            { name: "/スロット", description: "スロットゲームで遊べます。絵文字が揃うと当たりです。ポイントシステムと連携できます。" },
            { name: "/サイコロ", description: "サイコロを振ります。1〜6の数字がランダムに出ます。" },
            { name: "/おみくじ", description: "今日の運勢を占います。大吉から大凶まで様々な結果が出ます。" },
            { name: "/AIチャット", description: "Manus AIと自然な会話ができます。質問や雑談に対応します。" }
        ]
    },
    "ユーティリティ": {
        icon: "🔧",
        description: "便利な補助機能。日常的なサーバー運営をサポートする実用的なコマンド集です。",
        commands: [
            { name: "/uid", description: "ユーザーIDを確認します。メンション不要で簡単に取得できます。自分や他のユーザーのIDを表示できます。" },
            { name: "/serverinfo", description: "サーバーの詳細情報を表示します。メンバー数、チャンネル数、作成日などが確認できます。" },
            { name: "/userinfo", description: "ユーザーの詳細情報を表示します。アカウント作成日、サーバー参加日、ロールなどが確認できます。" },
            { name: "/avatar", description: "ユーザーのアバター画像を表示します。高解像度でダウンロードできます。" },
            { name: "/メッセージカウント", description: "チャンネルのメッセージ数を集計します。ユーザー別の投稿数も確認できます。" },
            { name: "/ping", description: "BOTの応答速度を確認します。レイテンシとAPI遅延が表示されます。" },
            { name: "/招待リンク", description: "BOTの招待リンクを生成します。他のサーバーにBOTを追加できます。" },
            { name: "/サポートサーバー", description: "BOTのサポートサーバーへの招待リンクを表示します。" },
            { name: "/help", description: "すべてのコマンドの一覧と説明を表示します。カテゴリー別に整理されています。" }
        ]
    }
};

// DOM要素
const toggleBtn = document.getElementById('toggleCommandsBtn');
const commandsContainer = document.getElementById('commandsContainer');
const categoryTabs = document.getElementById('categoryTabs');
const categoryContent = document.getElementById('categoryContent');

let isOpen = false;
let currentCategory = null;

// カテゴリータブを生成
function createCategoryTabs() {
    categoryTabs.innerHTML = '';
    Object.keys(featuresData).forEach((category) => {
        const data = featuresData[category];
        const tab = document.createElement('button');
        tab.className = 'category-tab';
        tab.innerHTML = `
            <span class="tab-icon">${data.icon}</span>
            <span>${category}</span>
        `;
        tab.addEventListener('click', () => toggleCategory(category));
        categoryTabs.appendChild(tab);
    });
}

// カテゴリーコンテンツを生成
function createCategoryContent(category) {
    const data = featuresData[category];
    categoryContent.innerHTML = '';
    
    // カテゴリー説明
    const descSection = document.createElement('div');
    descSection.className = 'category-description';
    descSection.innerHTML = `
        <div class="category-desc-icon">${data.icon}</div>
        <h3 class="category-desc-title">${category}</h3>
        <p class="category-desc-text">${data.description}</p>
    `;
    categoryContent.appendChild(descSection);
    
    // コマンドカード
    const commandsGrid = document.createElement('div');
    commandsGrid.className = 'commands-grid';
    
    data.commands.forEach(cmd => {
        const commandCard = document.createElement('div');
        commandCard.className = 'command-card';
        commandCard.innerHTML = `
            <div class="command-name">${cmd.name}</div>
            <div class="command-description">${cmd.description}</div>
        `;
        commandsGrid.appendChild(commandCard);
    });
    
    categoryContent.appendChild(commandsGrid);
}

// カテゴリー切り替え
function toggleCategory(category) {
    const tabs = categoryTabs.querySelectorAll('.category-tab');
    const clickedTab = Array.from(tabs).find(tab => tab.textContent.includes(category));
    
    // 同じカテゴリーをクリックした場合は閉じる
    if (currentCategory === category) {
        currentCategory = null;
        categoryContent.style.maxHeight = '0';
        categoryContent.style.opacity = '0';
        clickedTab.classList.remove('active');
    } else {
        // 別のカテゴリーを開く
        currentCategory = category;
        
        // すべてのタブの active を削除
        tabs.forEach(tab => tab.classList.remove('active'));
        clickedTab.classList.add('active');
        
        // コンテンツを生成
        createCategoryContent(category);
        
        // アニメーション
        setTimeout(() => {
            categoryContent.style.maxHeight = categoryContent.scrollHeight + 'px';
            categoryContent.style.opacity = '1';
        }, 10);
    }
}

// トグルボタンのイベント
toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    
    if (isOpen) {
        commandsContainer.style.maxHeight = '10000px';
        toggleBtn.classList.add('active');
    } else {
        commandsContainer.style.maxHeight = '0';
        toggleBtn.classList.remove('active');
        currentCategory = null;
        categoryContent.style.maxHeight = '0';
        categoryContent.style.opacity = '0';
        
        // すべてのタブの active を削除
        const tabs = categoryTabs.querySelectorAll('.category-tab');
        tabs.forEach(tab => tab.classList.remove('active'));
    }
});

// 初期化
createCategoryTabs();

