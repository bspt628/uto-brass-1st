import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // プロジェクトルートを明示的に指定（複数lockfile警告の解消）
  outputFileTracingRoot: path.join(__dirname),

  // 静的エクスポートが必要な場合は以下を有効化
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
