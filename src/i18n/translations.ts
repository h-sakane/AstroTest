export const translations = {
  ja: {
    // ナビゲーション
    'nav.home': 'Home',
    'nav.strategy': '攻略情報',
    'nav.tournaments': '大会情報',
    'nav.tools': '便利ツール',
    'nav.gallery': 'ギャラリー',
    
    // トップページ
    'home.contents.title': 'サイトコンテンツ',
    'home.strategy.title': '攻略情報',
    'home.strategy.desc': '初心者から上級者まで役立つ攻略ガイド',
    'home.tournaments.title': '大会情報',
    'home.tournaments.desc': '開催予定の大会や過去の結果',
    'home.tools.title': '便利ツール',
    'home.tools.desc': 'ダメージ計算機やシミュレーター',
    'home.gallery.title': 'ギャラリー',
    'home.gallery.desc': 'ファンアート作品集',
    
    // 大会情報
    'tournaments.title': '大会情報',
    'tournaments.description': '開催予定の大会や過去の大会結果をご確認いただけます。',
    'tournaments.upcoming': '開催予定・募集中',
    'tournaments.past': '過去の大会',
    'tournaments.status.recruiting': '募集中',
    'tournaments.status.full': '満員',
    'tournaments.status.scheduled': '開催予定',
    'tournaments.status.finished': '終了',
    'tournaments.date': '開催日',
    'tournaments.participants': '参加枠',
    'tournaments.prize': '賞金',
    'tournaments.winner': '優勝',
    'tournaments.back': '大会情報一覧に戻る',
    
    // ツール
    'tools.title': '便利ツール',
    'tools.description': 'ゲームプレイをサポートする便利なツールを提供しています。',
    'tools.category': 'カテゴリー',
    'tools.category.all': 'すべて',
    'tools.category.calculator': '計算ツール',
    'tools.category.simulator': 'シミュレーター',
    'tools.category.database': 'データベース',
    'tools.category.utility': 'ユーティリティ',
    'tools.back': 'ツール一覧に戻る',
    
    // ギャラリー
    'gallery.title': 'イラストギャラリー',
    'gallery.description': 'ゲームに関連した素晴らしいイラストを作者ごとに展示しています。',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.strategy': 'Strategy',
    'nav.tournaments': 'Tournaments',
    'nav.tools': 'Tools',
    'nav.gallery': 'Gallery',
    
    // Home page
    'home.contents.title': 'Site Contents',
    'home.strategy.title': 'Strategy Guides',
    'home.strategy.desc': 'Helpful guides for all skill levels',
    'home.tournaments.title': 'Tournaments',
    'home.tournaments.desc': 'Upcoming tournaments and past results',
    'home.tools.title': 'Useful Tools',
    'home.tools.desc': 'Damage calculator and simulators',
    'home.gallery.title': 'Gallery',
    'home.gallery.desc': 'Fan art collection',
    
    // Tournaments
    'tournaments.title': 'Tournaments',
    'tournaments.description': 'Check upcoming tournaments and past results.',
    'tournaments.upcoming': 'Upcoming & Recruiting',
    'tournaments.past': 'Past Tournaments',
    'tournaments.status.recruiting': 'Recruiting',
    'tournaments.status.full': 'Full',
    'tournaments.status.scheduled': 'Scheduled',
    'tournaments.status.finished': 'Finished',
    'tournaments.date': 'Date',
    'tournaments.participants': 'Slots',
    'tournaments.prize': 'Prize',
    'tournaments.winner': 'Winner',
    'tournaments.back': 'Back to Tournament List',
    
    // Tools
    'tools.title': 'Useful Tools',
    'tools.description': 'Tools to support your gameplay.',
    'tools.category': 'Category',
    'tools.category.all': 'All',
    'tools.category.calculator': 'Calculator',
    'tools.category.simulator': 'Simulator',
    'tools.category.database': 'Database',
    'tools.category.utility': 'Utility',
    'tools.back': 'Back to Tools List',
    
    // Gallery
    'gallery.title': 'Illustration Gallery',
    'gallery.description': 'Showcasing amazing game-related illustrations by artists.',
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.ja
