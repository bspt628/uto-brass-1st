# モダンなLP・Webサイトのアニメーション技法ガイド

受賞サイトの分析に基づく、2024-2025年のトレンドと再現方法

---

## 目次

1. [受賞サイト・参考リソース](#受賞サイト参考リソース)
2. [主要アニメーション技法](#主要アニメーション技法)
3. [ツール・ライブラリ](#ツールライブラリ)
4. [再現方法・コード例](#再現方法コード例)
5. [ベストプラクティス](#ベストプラクティス)

---

## 受賞サイト・参考リソース

### Webデザインアワードサイト

| アワード | URL | 特徴 |
|---------|-----|------|
| Awwwards | https://www.awwwards.com/ | 世界最高峰のWebデザイン賞 |
| CSS Design Awards | https://www.cssdesignawards.com/ | UI/UX重視の審査 |
| FWA (Favourite Website Awards) | https://thefwa.com/ | 革新的なデジタル体験 |

### 2024年 CSS Design Awards 受賞サイト（トップスコア）

| サイト名 | 制作 | スコア | 特徴 |
|---------|------|--------|------|
| Buttermax | Buttermax | 9.06 | 流体アニメーション |
| Active Theory V6 | Active Theory | 9.03 | クリエイティブコーディング |
| Cartier Watches and Wonders 2024 | Immersive Garden | 9.01 | 3D製品ビジュアライゼーション |
| Contra Project Cost Calculator | Unseen Studio | 9.00 | インタラクティブUI |
| ATMOS Lamp by AYOCIN | Obys | 8.95 | 優れたUX設計 |

### 2024年 Awwwards 受賞サイト

- **Site of the Year Users' Choice**: Don't Board Me - 繊細なマイクロアニメーションと効果的なトランジション
- **Developer Site of the Year**: Igloo Inc - ゲームライクな3D体験、革新的なクリエイティブコーディング

### カテゴリ別ギャラリー

- [Awwwards Animation Collection](https://www.awwwards.com/websites/animation/)
- [Awwwards GSAP Sites](https://www.awwwards.com/websites/gsap/)
- [Awwwards Three.js Sites](https://www.awwwards.com/websites/three-js/)
- [Awwwards Lottie Sites](https://www.awwwards.com/websites/lottie/)
- [Made With GSAP](https://madewithgsap.com/)

---

## 主要アニメーション技法

### 1. スクロールベースアニメーション

スクロール位置に連動してアニメーションを制御する技法。

#### 種類
- **Scroll Progress Timeline**: スクロール位置全体に連動
- **View Progress Timeline**: 要素がビューポートに入った位置に連動
- **Parallax Effect**: 異なる速度で要素を動かし、奥行き感を演出
- **Pinning**: 特定の位置で要素を固定し、スクロールで変化させる

#### 使用例
- セクション間のスムーズなトランジション
- 製品ストーリーテリング
- データビジュアライゼーションの段階的な表示

### 2. マイクロインタラクション

ユーザーアクションに対する小さな反応アニメーション（200-500ms）。

#### 種類
- **ホバーエフェクト**: ボタン、リンク、カードの反応
- **フィードバックアニメーション**: クリック、成功、エラー状態
- **ローディング状態**: スケルトンローダー、シマーエフェクト
- **フォームバリデーション**: リアルタイム入力フィードバック

#### 2025年トレンド
- カーソル追従アニメーション（モーフィング、拡大）
- 触覚的なボタン反応
- メニューアイコンのモーフィング（ハンバーガー→×）

### 3. ページトランジション

ページ間・状態間の滑らかな遷移。

#### View Transitions API（2025年標準化）
- Chrome, Edge, Safari, Firefoxで対応（85%以上のブラウザ）
- CSSとJavaScriptで実装可能
- SPAとMPAの両方に対応

#### 種類
- **Fade**: フェードイン/アウト
- **Slide**: 水平/垂直スライド
- **Scale**: 拡大/縮小
- **Morphing**: 要素間の変形

### 4. テキストアニメーション（キネティックタイポグラフィ）

#### 種類
- **Text Reveal**: 文字が順次表示される
- **Split Text**: 文字単位でのアニメーション
- **Kinetic Typography**: 動的なテキスト表現
- **Variable Font Animation**: フォントウェイト・幅の滑らかな変化

#### 技法
- マスク/クリッピングパスによる段階的な表示
- 物理ベースのバウンス、オーバーシュート
- スクロール連動のフェードイン、スライドアップ

### 5. 3D・WebGL

#### 使用例
- 製品コンフィギュレーター
- バーチャルショールーム
- インタラクティブなデータビジュアライゼーション
- ポートフォリオサイト

#### 技術
- Three.js: 3Dシーンの構築
- WebGL: ハードウェアアクセラレーションによるレンダリング
- カスタムGLSLシェーダー
- ポストプロセッシングエフェクト

---

## ツール・ライブラリ

### JavaScript アニメーションライブラリ

| ライブラリ | 用途 | 特徴 |
|-----------|------|------|
| **GSAP** | 汎用 | 業界標準、高性能、豊富なプラグイン |
| **Framer Motion** | React | 宣言的API、ジェスチャー対応 |
| **Motion (旧Framer Motion)** | React/JS/Vue | 330+のサンプル、シンプルなAPI |
| **Anime.js** | 汎用 | 軽量、シンプル |
| **Lottie** | After Effects連携 | JSON形式、軽量ベクターアニメーション |

### GSAP プラグイン

| プラグイン | 機能 |
|-----------|------|
| **ScrollTrigger** | スクロール連動アニメーション |
| **ScrollSmoother** | 滑らかなスクロール体験 |
| **SplitText** | テキスト分割アニメーション |
| **MorphSVG** | SVG形状のモーフィング |
| **Draggable** | ドラッグ操作 |

### 3D ライブラリ

| ライブラリ | 用途 |
|-----------|------|
| **Three.js** | WebGL 3Dシーン構築 |
| **React Three Fiber** | React向けThree.js |
| **Spline** | ノーコード3Dデザイン |

### CSS ネイティブ機能（2025年）

- **CSS Scroll-driven Animations**: scroll-timeline, view-timeline
- **View Transitions API**: ページ遷移アニメーション
- **@property**: カスタムプロパティのアニメーション

---

## 再現方法・コード例

### 1. GSAP ScrollTrigger - 基本的なスクロールアニメーション

```html
<!-- 必要なスクリプト -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```

```javascript
// 要素が画面に入ったらフェードイン
gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-in-element", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".fade-in-element",
    start: "top 80%",    // 要素の上端がビューポートの80%位置に来たら開始
    end: "top 20%",      // 要素の上端がビューポートの20%位置で終了
    toggleActions: "play none none reverse"
  }
});
```

### 2. パララックスエフェクト

```javascript
// scrubでスクロール位置に連動
gsap.to(".parallax-bg", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1  // 滑らかな追従（1秒の遅延）
  }
});
```

### 3. ピンニング（セクション固定）

```javascript
// セクションを固定してコンテンツをアニメーション
gsap.to(".horizontal-content", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    start: "top top",
    end: "+=300%",  // スクロール距離の300%で完了
    pin: true,      // セクションを固定
    scrub: 1
  }
});
```

### 4. テキストリビール（SplitText）

```javascript
// GSAPプレミアムプラグイン使用
gsap.registerPlugin(SplitText);

const splitText = new SplitText(".hero-text", { type: "chars,words" });

gsap.from(splitText.chars, {
  opacity: 0,
  y: 50,
  rotateX: -90,
  stagger: 0.02,  // 文字ごとに0.02秒ずらす
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".hero-text",
    start: "top 80%"
  }
});
```

### 5. CSS Scroll-driven Animation（ネイティブ）

```css
/* スクロール進行に連動するプログレスバー */
@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}

.progress-bar {
  animation: progress linear;
  animation-timeline: scroll();  /* スクロールに連動 */
}

/* 要素がビューに入った時のアニメーション */
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-element {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

### 6. View Transitions API（ページ遷移）

```javascript
// SPAでのページ遷移
async function navigateTo(url) {
  if (!document.startViewTransition) {
    // フォールバック
    window.location.href = url;
    return;
  }

  document.startViewTransition(async () => {
    const response = await fetch(url);
    const html = await response.text();
    document.body.innerHTML = html;
  });
}
```

```css
/* トランジションのカスタマイズ */
::view-transition-old(root) {
  animation: fade-out 0.3s ease-out;
}

::view-transition-new(root) {
  animation: fade-in 0.3s ease-in;
}

/* 特定要素のモーフィング */
.hero-image {
  view-transition-name: hero;
}
```

### 7. Framer Motion（React）

```jsx
import { motion } from "framer-motion";

// フェードインアニメーション
function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ホバーエフェクト
function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}
```

### 8. Three.js 基本セットアップ

```javascript
import * as THREE from 'three';

// シーン、カメラ、レンダラーの初期化
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// 3Dオブジェクトの追加
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// ライティング
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

// アニメーションループ
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```

### 9. Lottie アニメーションの埋め込み

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>

<div id="lottie-container"></div>

<script>
const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json'  // After EffectsからBodymovinで書き出したJSON
});

// スクロールに連動させる場合
window.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const frame = Math.floor(scrollPercent * animation.totalFrames);
  animation.goToAndStop(frame, true);
});
</script>
```

### 10. マイクロインタラクション（CSS）

```css
/* 触覚的なボタンエフェクト */
.button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.button:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* カーソル追従エフェクト（JS連携） */
.cursor-follower {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0,0,0,0.1);
  pointer-events: none;
  transition: transform 0.15s ease-out;
  transform: translate(-50%, -50%);
}

.cursor-follower.hover {
  transform: translate(-50%, -50%) scale(2);
  background: rgba(0,0,0,0.05);
}
```

---

## ベストプラクティス

### パフォーマンス

1. **GPU アクセラレーション**: `transform`と`opacity`を優先使用
2. **will-change**: 重いアニメーションには事前に指定
3. **スロットリング**: スクロールイベントは`requestAnimationFrame`で最適化
4. **遅延読み込み**: ビューポート外のアニメーションは遅延初期化
5. **scrub値**: `scrub: true`より`scrub: 0.5`以上で滑らかに

### アクセシビリティ

1. **`prefers-reduced-motion`対応**: 動作軽減設定を尊重

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

2. **フォーカス可視性**: アニメーションがフォーカス表示を妨げない
3. **コンテンツ優先**: アニメーション無しでも情報が伝わる設計

### UX 原則

1. **目的を持つ**: 装飾ではなく、ナビゲーション支援やフィードバックとして使用
2. **適切な長さ**: マイクロインタラクションは200-500ms
3. **一貫性**: サイト全体で統一されたイージングとスタイル
4. **控えめに**: 過剰なアニメーションは認知負荷を増やす
5. **モバイル対応**: `ScrollTrigger.matchMedia()`でデバイス別に調整

### イージング関数

| 用途 | イージング | GSAP | CSS |
|------|-----------|------|-----|
| 自然な動き | ease-out | `power2.out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| 注目を引く | bounce | `bounce.out` | - |
| 弾性 | spring | `elastic.out(1, 0.3)` | - |
| スクロール連動 | linear | `none` | `linear` |

---

## 学習リソース

### 公式ドキュメント

- [GSAP Documentation](https://gsap.com/docs/)
- [GSAP ScrollTrigger](https://gsap.com/scroll/)
- [Motion (Framer Motion)](https://motion.dev/)
- [Three.js Documentation](https://threejs.org/docs/)
- [MDN View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [MDN CSS Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)

### チュートリアル・サンプル

- [Codrops](https://tympanus.net/codrops/) - 先進的なWebアニメーションチュートリアル
- [FreeFrontend](https://freefrontend.com/) - コード例集
- [Made With GSAP](https://madewithgsap.com/) - GSAPショーケース
- [Three.js Examples](https://threejs.org/examples/) - 公式サンプル
- [scroll-driven-animations.style](https://scroll-driven-animations.style/) - CSS スクロールアニメーションデモ

### コース・動画

- [Three.js Journey](https://threejs-journey.com/) - Bruno Simon
- [GSAP + ScrollTrigger Tutorial](https://www.youtube.com/results?search_query=gsap+scrolltrigger+tutorial)

---

## 参考リンク

本ドキュメントは以下のリソースを参考に作成されました：

- [Awwwards](https://www.awwwards.com/)
- [CSS Design Awards](https://www.cssdesignawards.com/)
- [CSS Design Awards 2024 Winners](https://www.cssdesignawards.com/blog/2024-website-of-the-year-winners/414/)
- [GSAP Scroll](https://gsap.com/scroll/)
- [Motion.dev Examples](https://motion.dev/examples)
- [Chrome Developers - View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions)
- [Smashing Magazine - CSS Scroll-driven Animations](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/)
