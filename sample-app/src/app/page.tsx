export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TechCorp</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">会社概要</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">サービス</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">お問い合わせ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* メインビジュアル */}
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              イノベーションで未来を創造
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              TechCorpは最新のテクノロジーを活用し、お客様のビジネスを次のレベルへと導きます。
              私たちの専門知識と経験で、あなたの成功をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                お問い合わせ
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                サービス詳細
              </button>
            </div>
          </div>
        </section>

        {/* 会社概要セクション */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">会社概要</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                私たちは2020年に設立されたテクノロジー企業です。
                お客様のニーズに応える革新的なソリューションを提供しています。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">イノベーション</h4>
                <p className="text-gray-600">最新技術を活用した革新的なソリューション</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">パートナーシップ</h4>
                <p className="text-gray-600">お客様との長期的なパートナーシップ</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">品質</h4>
                <p className="text-gray-600">最高品質のサービスとサポート</p>
              </div>
            </div>
          </div>
        </section>

        {/* サービスセクション */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">サービス</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                お客様のビジネスニーズに応じた包括的なテクノロジーソリューションを提供します。
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Web開発</h4>
                <p className="text-gray-600 mb-4">
                  モダンなWebアプリケーションの開発から保守まで、一貫したサービスを提供します。
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• React/Next.js開発</li>
                  <li>• レスポンシブデザイン</li>
                  <li>• SEO最適化</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">クラウドソリューション</h4>
                <p className="text-gray-600 mb-4">
                  スケーラブルで安全なクラウドインフラの構築と運用をサポートします。
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• AWS/Azure/GCP</li>
                  <li>• マイクロサービス設計</li>
                  <li>• 監視・運用</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">コンサルティング</h4>
                <p className="text-gray-600 mb-4">
                  デジタル変革を支援する戦略的なコンサルティングサービスを提供します。
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 技術戦略立案</li>
                  <li>• システム設計</li>
                  <li>• チーム構築支援</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">お問い合わせ</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              プロジェクトのご相談やご質問がございましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                メールでお問い合わせ
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                電話でお問い合わせ
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">TechCorp</h4>
              <p className="text-gray-400">
                イノベーションで未来を創造するテクノロジー企業
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">サービス</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web開発</a></li>
                <li><a href="#" className="hover:text-white transition-colors">クラウドソリューション</a></li>
                <li><a href="#" className="hover:text-white transition-colors">コンサルティング</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@techcorp.com</li>
                <li>Tel: 03-1234-5678</li>
                <li>東京都渋谷区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechCorp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
