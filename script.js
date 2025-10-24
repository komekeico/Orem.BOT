// 機能データ
const featuresData = {
    "自販機システム": {
        icon: "🏪",
        commands: [
            { name: "/自販機作成", description: "PayPay決済と連携した自動販売機を作成します。商品の販売、在庫管理、売上管理が可能です。" },
            { name: "/商品追加", description: "自販機に販売する商品を追加します。商品名、価格、在庫数、説明文、画像を設定できます。" },
            { name: "/在庫管理", description: "商品の在庫を追加・削除します。在庫切れの商品は自動的に非表示になります。" },
            { name: "/売上確認", description: "自販機の売上履歴を確認できます。日別、月別の集計も可能です。" },
            { name: "/クーポン発行", description: "割引クーポンを発行します。使用回数や有効期限を設定できます。" }
        ]
    },
    "モデレーション": {
        icon: "🛡️",
        commands: [
            { name: "/ban", description: "ユーザーをサーバーからBANします。理由を記録し、ログチャンネルに通知します。" },
            { name: "/kick", description: "ユーザーをサーバーからキックします。再参加は可能です。" },
            { name: "/timeout", description: "ユーザーを一時的にタイムアウトします。指定時間後に自動解除されます。" },
            { name: "/warn", description: "ユーザーに警告を発行します。警告回数が一定数を超えると自動処罰されます。" },
            { name: "/ngワード設定", description: "NGワードを設定します。該当メッセージは自動削除され、ユーザーに警告が送られます。" },
            { name: "/dm削除", description: "BOTから送信されたDMを一括削除します。プライバシー保護に役立ちます。" }
        ]
    },
    "ログ機能": {
        icon: "📝",
        commands: [
            { name: "/入退室ログ設定", description: "メンバーの参加・退出を記録するチャンネルを設定します。参加日時、アカウント作成日も表示されます。" },
            { name: "/メッセージログ設定", description: "メッセージの編集・削除を記録します。編集前後の内容も保存されます。" },
            { name: "/コマンドログ設定", description: "実行されたコマンドを記録します。誰がいつどのコマンドを使ったか追跡できます。" },
            { name: "/モデレーションログ設定", description: "BAN、キック、タイムアウトなどの管理操作を記録します。" }
        ]
    },
    "パネルシステム": {
        icon: "🎛️",
        commands: [
            { name: "/認証パネル", description: "ボタンをクリックして認証するパネルを作成します。認証後に自動でロールを付与できます。" },
            { name: "/ロール選択パネル", description: "リアクションやボタンでロールを選択できるパネルを作成します。複数ロールの選択も可能です。" },
            { name: "/チケットパネル", description: "お問い合わせ用のチケットシステムを作成します。個別のプライベートチャンネルが自動生成されます。" },
            { name: "/配布パネル", description: "ファイルやテキストを配布するパネルを作成します。ボタンをクリックでDMに送信されます。" },
            { name: "/ステータスパネル", description: "BOTのステータスや統計情報を表示するパネルを作成します。自動更新されます。" },
            { name: "/Embedパネル", description: "カスタムEmbedメッセージを作成します。タイトル、説明、色、画像などを自由に設定できます。" }
        ]
    },
    "サーバー管理": {
        icon: "⚙️",
        commands: [
            { name: "/サーバーバックアップ", description: "サーバーの設定を完全バックアップします。チャンネル、ロール、権限などすべて保存されます。" },
            { name: "/サーバー複製", description: "バックアップからサーバーを復元・複製します。新しいサーバーに設定を移行できます。" },
            { name: "/チャンネルリセット", description: "チャンネルのメッセージを全削除し、新しいチャンネルとして再作成します。" },
            { name: "/自動ロール設定", description: "新規メンバーに自動でロールを付与する設定を行います。" },
            { name: "/権限確認", description: "ユーザーやロールの権限を確認します。権限の問題を診断できます。" }
        ]
    },
    "エンターテイメント": {
        icon: "🎮",
        commands: [
            { name: "/music play", description: "YouTubeやSpotifyから音楽を再生します。URLまたは曲名で検索できます。" },
            { name: "/music queue", description: "再生キューを表示します。曲の順番を確認・変更できます。" },
            { name: "/music skip", description: "現在再生中の曲をスキップします。" },
            { name: "/抽選", description: "ランダムに当選者を選びます。イベントやプレゼント企画に最適です。" },
            { name: "/スロット", description: "スロットゲームで遊べます。絵文字が揃うと当たりです。" },
            { name: "/AIチャット", description: "Manus AIと自然な会話ができます。質問や雑談に対応します。" }
        ]
    },
    "ユーティリティ": {
        icon: "🔧",
        commands: [
            { name: "/uid", description: "ユーザーIDを確認します。メンション不要で簡単に取得できます。" },
            { name: "/メッセージカウント", description: "チャンネルのメッセージ数を集計します。ユーザー別の投稿数も確認できます。" },
            { name: "/everyone通知", description: "@everyone メンションを含むメッセージを送信します。重要なお知らせに使用します。" },
            { name: "/help", description: "すべてのコマンドの一覧と説明を表示します。" }
        ]
    }
};

// DOM要素
const toggleBtn = document.getElementById('toggleCommandsBtn');
const commandsContainer = document.getElementById('commandsContainer');
const categoryTabs = document.getElementById('categoryTabs');
const categoryContent = document.getElementById('categoryContent');

let isOpen = false;
let currentCategory = Object.keys(featuresData)[0];

// カテゴリータブを生成
function createCategoryTabs() {
    categoryTabs.innerHTML = '';
    Object.keys(featuresData).forEach((category, index) => {
        const tab = document.createElement('button');
        tab.className = 'category-tab' + (index === 0 ? ' active' : '');
        tab.innerHTML = `
            <span class="tab-icon">${featuresData[category].icon}</span>
            <span>${category}</span>
        `;
        tab.addEventListener('click', () => switchCategory(category));
        categoryTabs.appendChild(tab);
    });
}

// カテゴリーコンテンツを生成
function createCategoryContent(category) {
    const data = featuresData[category];
    categoryContent.innerHTML = '';
    
    data.commands.forEach(cmd => {
        const commandCard = document.createElement('div');
        commandCard.className = 'command-card';
        commandCard.innerHTML = `
            <div class="command-name">${cmd.name}</div>
            <div class="command-description">${cmd.description}</div>
        `;
        categoryContent.appendChild(commandCard);
    });
}

// カテゴリー切り替え
function switchCategory(category) {
    currentCategory = category;
    
    // タブのアクティブ状態を更新
    const tabs = categoryTabs.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        if (tab.textContent.includes(category)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // コンテンツを更新
    createCategoryContent(category);
}

// トグルボタンのイベント
toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    
    if (isOpen) {
        commandsContainer.style.maxHeight = commandsContainer.scrollHeight + 'px';
        toggleBtn.classList.add('active');
    } else {
        commandsContainer.style.maxHeight = '0';
        toggleBtn.classList.remove('active');
    }
});

// 初期化
createCategoryTabs();
createCategoryContent(currentCategory);

