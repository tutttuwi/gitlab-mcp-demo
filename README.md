# gitlab-mcp-demo

## セットアップ手順

### 1) GitLab をローカルで起動

Docker と Docker Compose を用意。

docker-compose.yml を任意の作業ディレクトリに作成：

```yaml
services:
  gitlab:
    image: gitlab/gitlab-ce:latest
    container_name: gitlab
    hostname: gitlab.local
    ports:
      - "8929:8929"   # HTTP (非標準ポートで衝突回避)
      - "443:443"
      - "2424:22"     # SSH
    volumes:
      - ./config:/etc/gitlab
      - ./logs:/var/log/gitlab
      - ./data:/var/opt/gitlab
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://gitlab.local:8929'
        gitlab_rails['gitlab_shell_ssh_port'] = 2424
```

GitLab は external_url に localhost は使わないのが推奨。上のように gitlab.local を使うのが安全です。 
[GitLab ドキュメント](https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url)

ホストの /etc/hosts に追加（管理者権限）：

```
127.0.0.1 gitlab.local
```

起動：

```bash
docker compose up -d
```

初期 root パスワード確認：

```bash
docker exec -it gitlab bash -lc "cat /etc/gitlab/initial_root_password"
```

表示されたパスワードで http://gitlab.local:8929 にログインし、任意の新パスワードに変更。 
[GitLab ドキュメント](https://docs.gitlab.com/ee/security/reset_user_password.html)

### 2) リポジトリ（プロジェクト）を作る

画面右上「New project」→「Create blank project」でも OK。

あるいは push して作成も可能（下記は例）：

```bash
mkdir demo && cd demo
git init -b main
echo "# demo" > README.md
git add . && git commit -m "init"

# HTTP で push（ユーザー: 自分の GitLab ユーザー、パスワード: 後述の PAT）
git remote add origin http://gitlab.local:8929/<YOUR_NAMESPACE>/demo.git
git push -u origin main
```

「push で作る」手順の公式ガイドはこちら。 
[GitLab ドキュメント](https://docs.gitlab.com/ee/gitlab-basics/create-project.html#push-to-create-a-new-project)

SSH を使う場合は `ssh://git@gitlab.local:2424/<NS>/<PROJ>.git`。まず GitLab に公開鍵を登録しておきます。

### 3) PAT（Personal Access Token）を発行

GitLab 右上アイコン → User Settings → Access Tokens から発行。
スコープは用途に合わせて api, read_repository, write_repository を付与（API での作成・更新に便利）。

### 4) GitLab MCP サーバー（コミュニティ版）を起動

最もメンテされている NPM 実装の一つ [@zereight/mcp-gitlab](https://www.npmjs.com/package/@zereight/mcp-gitlab) を使う例です（stdio で動かせるので Cursor と相性◎）。

Cursor の設定 → Features → Model Context Protocol → Add new…

- 種別：Stdio
- Command: npx
- Args: -y, @zereight/mcp-gitlab
- Env:
  - GITLAB_PERSONAL_ACCESS_TOKEN：上で作成した PAT
  - GITLAB_API_URL：http://gitlab.local:8929/api/v4
  - （任意）GITLAB_PROJECT_ID や GITLAB_ALLOWED_PROJECT_IDS で対象制限

設定サンプル（Cursor の MCP 追加ダイアログに対応）や利用可能ツール一覧はパッケージ Readme が詳しいです。
[npm](https://www.npmjs.com/package/@zereight/mcp-gitlab)

Cursor 側の MCP 追加方法の公式ドキュメントはこちら。
[Cursor](https://docs.cursor.com/context/mcp)

- 以下の設定を追加

```json
{
  "mcpServers": {
    "gitlab": {
      "command": "npx",
      "args": ["-y", "@zereight/mcp-gitlab"],
      "env": {
        "GITLAB_PERSONAL_ACCESS_TOKEN": "<PERSONAL_ACCESS_TOKEN>",
        "GITLAB_API_URL": "http://gitlab.local:8929/api/v4"
      }
    }
  }
}

```

### 5) Cursor 上で操作してみる

MCP サーバーを追加すると、**「Tools」**に GitLab 系ツールが並びます。たとえば：

- create_repository：新規プロジェクト作成
- create_or_update_file / push_files：ファイル作成・更新・コミット
- create_issue / create_merge_request：課題・MR の作成

（どのツールがあるかは導入した MCP の Readme を確認） 
[npm](https://www.npmjs.com/package/@zereight/mcp-gitlab)

例：

「<YOUR_NAMESPACE>/demo の README.md に"セットアップ手順"を追記してコミットメッセージは docs: add setup にして」

## デモ

- Gtialbで作成したサンプルリポジトリをクローン

- リクエスト

```txt
feature/sample-appを作成して、そのブランチで次の機能の開発をしてください。
sample-appフォルダを作成して、
その配下に、Nextjsをセットアップし、おしゃれな会社HPページを作成してください。
作成が完了したらmainブランチに対してmcpサーバーを利用してMRリクエストを発行してください。
```

- MRを確認

- MRをレビュー

```txt
MergeRequest #1をレビューし、
指摘事項や改善点を教えて下さい。
```

- 指摘事項・改善点を確認する
