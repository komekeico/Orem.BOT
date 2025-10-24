// BOT機能データ
const botFeatures = {
    categories: [
        {
            id: "vending",
            name: "🏪 自販機システム",
            icon: "🏪",
            features: [
                {
                    name: "Vending DB",
                    description: "データベース式のマルチユーザー自販機システム。複数のユーザーが独自の自販機を作成・管理できます。"
                },
                {
                    name: "Setting DB",
                    description: "自販機の詳細設定を管理。商品の追加・削除、価格設定、在庫管理などが可能です。"
                },
                {
                    name: "Distribution Panel",
                    description: "購入された商品を自動配布するパネルシステム。購入者に即座にアイテムを届けます。"
                },
                {
                    name: "Purchaser Role Settings",
                    description: "購入者に自動でロールを付与する設定機能。VIP会員などの管理に便利です。"
                },
                {
                    name: "Notification Settings",
                    description: "購入通知の設定。販売者と購入者の両方に通知を送信できます。"
                }
            ]
        },
        {
            id: "payment",
            name: "💳 決済システム",
            icon: "💳",
            features: [
                {
                    name: "PayPay DB",
                    description: "PayPayアカウント情報をデータベースで管理。安全に決済情報を保存します。"
                },
                {
                    name: "PayPay Auto Receive",
                    description: "PayPay支払いを自動検知して受け取り処理を実行。手動操作不要です。"
                },
                {
                    name: "PayPay Detector New",
                    description: "最新のPayPay検知システム。リアルタイムで支払いを監視します。"
                },
                {
                    name: "PayPay Auto Settings DB",
                    description: "PayPay自動受け取りの詳細設定を管理します。"
                }
            ]
        },
        {
            id: "coupon",
            name: "🎫 クーポンシステム",
            icon: "🎫",
            features: [
                {
                    name: "Coupon System",
                    description: "クーポンの作成・管理システム。割引コードや特典コードを発行できます。"
                },
                {
                    name: "Coupon Purchase",
                    description: "クーポンを使った購入処理を独立して管理。スムーズな決済体験を提供します。"
                }
            ]
        },
        {
            id: "moderation",
            name: "🛡️ モデレーション",
            icon: "🛡️",
            features: [
                {
                    name: "Moderation Commands",
                    description: "キック、バン、ミュートなどの基本的なモデレーションコマンド群。"
                },
                {
                    name: "Global Ban Command",
                    description: "複数サーバー間でユーザーをグローバルBANできる強力な機能。"
                },
                {
                    name: "Blacklist Server",
                    description: "特定のサーバーをブラックリストに登録して管理します。"
                },
                {
                    name: "NG Word Panel",
                    description: "NGワードを設定して自動的にメッセージを削除・警告します。"
                },
                {
                    name: "Auto Role",
                    description: "サーバー参加時に自動でロールを付与します。"
                },
                {
                    name: "Bulk Role Assignment",
                    description: "複数のユーザーに一括でロールを付与できる便利機能。"
                },
                {
                    name: "Role Management DB",
                    description: "ロール管理をデータベースで一元管理します。"
                },
                {
                    name: "Role Panel",
                    description: "リアクションでロールを取得できるパネルを作成します。"
                }
            ]
        },
        {
            id: "logging",
            name: "📝 ログ機能",
            icon: "📝",
            features: [
                {
                    name: "Member Log",
                    description: "メンバーの参加・退出を記録します。"
                },
                {
                    name: "Message Log",
                    description: "メッセージの編集・削除を記録して監視します。"
                },
                {
                    name: "Command Log",
                    description: "実行されたコマンドをすべて記録します。"
                },
                {
                    name: "Dummy Log",
                    description: "ダミーログを生成してテストに使用できます。"
                },
                {
                    name: "Level5 Log Settings",
                    description: "Level5システムのログ設定を管理します。"
                }
            ]
        },
        {
            id: "panel",
            name: "🎛️ パネルシステム",
            icon: "🎛️",
            features: [
                {
                    name: "Embed Panel",
                    description: "美しいEmbedメッセージパネルを簡単に作成できます。"
                },
                {
                    name: "Auth Panel 2",
                    description: "認証パネルシステム。サーバーへのアクセスを制御します。"
                },
                {
                    name: "Status Panel",
                    description: "BOTのステータスをリアルタイムで表示するパネル。"
                },
                {
                    name: "Achievement Panel",
                    description: "実績システムのパネル。ユーザーの達成度を表示します。"
                },
                {
                    name: "Proxy Achievement Panel",
                    description: "プロキシ経由で実績パネルを管理します。"
                },
                {
                    name: "Achievement Settings",
                    description: "実績システムの詳細設定を管理します。"
                }
            ]
        },
        {
            id: "utility",
            name: "🔧 ユーティリティ",
            icon: "🔧",
            features: [
                {
                    name: "Ticket",
                    description: "サポートチケットシステム。ユーザーからの問い合わせを管理します。"
                },
                {
                    name: "Inquiry System",
                    description: "お問い合わせフォームを作成して管理します。"
                },
                {
                    name: "Backup System",
                    description: "サーバー設定を自動バックアップして復元できます。"
                },
                {
                    name: "Server Copy",
                    description: "サーバーの構造を丸ごとコピーできます。"
                },
                {
                    name: "Channel Reset",
                    description: "チャンネルを瞬時にリセットして新しい状態にします。"
                },
                {
                    name: "Category Duplicate",
                    description: "カテゴリーを複製して効率的にサーバーを構築します。"
                },
                {
                    name: "DM Delete",
                    description: "DMを自動削除する機能。プライバシー保護に役立ちます。"
                },
                {
                    name: "Custom Message",
                    description: "カスタムメッセージを設定して自動送信します。"
                },
                {
                    name: "Auto Reply",
                    description: "特定のキーワードに自動返信します。"
                },
                {
                    name: "UID Command",
                    description: "ユーザーIDを簡単に取得できるコマンド。"
                },
                {
                    name: "Help Command",
                    description: "BOTのヘルプを表示するカスタマイズ可能なコマンド。"
                }
            ]
        },
        {
            id: "entertainment",
            name: "🎮 エンターテイメント",
            icon: "🎮",
            features: [
                {
                    name: "Music Player",
                    description: "YouTube & Spotify対応の高機能音楽プレイヤー。高音質で音楽を再生します。"
                },
                {
                    name: "Lottery System",
                    description: "抽選システム。イベントやプレゼント企画に最適です。"
                },
                {
                    name: "Slot Command",
                    description: "スロットゲームで遊べるコマンド。"
                },
                {
                    name: "Message Count",
                    description: "メッセージ数をカウントしてランキング化します。"
                },
                {
                    name: "Manus Chat",
                    description: "Manus AIとチャットできる機能。質問に答えてくれます。"
                }
            ]
        },
        {
            id: "server",
            name: "🌐 サーバー管理",
            icon: "🌐",
            features: [
                {
                    name: "Server List",
                    description: "BOTが参加しているサーバー一覧を表示します。"
                },
                {
                    name: "Server Leave",
                    description: "指定したサーバーからBOTを退出させます。"
                },
                {
                    name: "Guild Join Notification",
                    description: "BOTが新しいサーバーに参加した時に通知します。"
                },
                {
                    name: "System Management",
                    description: "BOTシステム全体を管理する高度な機能。"
                },
                {
                    name: "Allowed Users",
                    description: "特定のユーザーのみにコマンド使用を許可します。"
                }
            ]
        },
        {
            id: "special",
            name: "⭐ 特殊機能",
            icon: "⭐",
            features: [
                {
                    name: "Everyone Mention",
                    description: "@everyoneメンションを安全に管理します。"
                },
                {
                    name: "Mention Command",
                    description: "カスタムメンションコマンドを作成します。"
                },
                {
                    name: "Level5 System",
                    description: "Level5メールアドレス変更システム。"
                }
            ]
        }
    ]
};

// DOM要素
const toggleBtn = document.getElementById('toggleCommandsBtn');
const commandsContainer = document.getElementById('commandsContainer');
const categoryTabs = document.getElementById('categoryTabs');
const categoryContent = document.getElementById('categoryContent');

// コマンド一覧の表示/非表示
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    commandsContainer.classList.toggle('active');
});

// カテゴリータブを生成
function renderCategoryTabs() {
    botFeatures.categories.forEach((category, index) => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = category.name;
        tab.dataset.categoryId = category.id;
        
        tab.addEventListener('click', () => {
            // すべてのタブから active クラスを削除
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            // クリックされたタブに active クラスを追加
            tab.classList.add('active');
            // カテゴリーコンテンツを表示
            renderCategoryContent(category.id);
        });
        
        categoryTabs.appendChild(tab);
    });
}

// カテゴリーコンテンツを生成
function renderCategoryContent(categoryId) {
    const category = botFeatures.categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    categoryContent.innerHTML = '';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'category-content active';
    
    const featuresGrid = document.createElement('div');
    featuresGrid.className = 'features-grid';
    
    category.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        
        featureItem.innerHTML = `
            <h4>${feature.name}</h4>
            <p>${feature.description}</p>
        `;
        
        featuresGrid.appendChild(featureItem);
    });
    
    contentDiv.appendChild(featuresGrid);
    categoryContent.appendChild(contentDiv);
}

// 初期化
renderCategoryTabs();
renderCategoryContent('vending');

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

