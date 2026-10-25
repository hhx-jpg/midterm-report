import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./ProgressMesh.css";

const STEPS = [
  { t: "全局 rdel", n: "受限 Delaunay，发现近共面外心数值问题" },
  { t: "per-patch 局部网格", n: "2×2 像素块连面，核心转折" },
  { t: "动态 block 合并", n: "8×8 … 1×1 过滤跨轮廓长面片" },
  { t: "跨视角融合", n: "空间 hash + 法线 / edge 约束" },
  { t: "TTT 精调", n: "测试时训练微调点云位置" },
];

export default function ProgressMesh(_p: ChapterStepProps) {
  return (
    <div className="pms scene-pad">
      <SlideHeader
        kicker="01 · 科研训练 · 项目进展"
        title="项目进展 ③ —— 三角面片 Mesh 生成算法"
        subtitle="基于逐像素局部连接、深度与原生尺度作阈值动态修剪，并结合测试时训练（TTT）精细微调"
        index="09 / 14"
      />
      <div className="slide-body">
        <div className="flow">
          {STEPS.map((s, i) => (
            <div className="flow-step" key={s.t}>
              <span className="f-step-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="f-step-title">{s.t}</span>
              <span className="f-step-note">{s.n}</span>
            </div>
          ))}
        </div>
        <div className="metric-row">
          <div className="metric">
            <span className="metric-num">0.4301 <em>→ 0.0754</em></span>
            <span className="metric-label">per-patch 局部网格 · Loss（10k 优化）</span>
          </div>
          <div className="metric">
            <span className="metric-num">132,605 <em>/ 163,925</em></span>
            <span className="metric-label">vertices / faces（拓扑规模）</span>
          </div>
          <div className="metric">
            <span className="metric-num">10.4s <em>→ 200ms</em></span>
            <span className="metric-label">Delaunay 四面体化 · GPU 化加速</span>
          </div>
        </div>
        <div className="card-grid c2 pms-imgs">
          <figure className="fig">
            <div className="fig-img">
              <img src="images/mesh-connect.png" alt="网格连通性对比" />
            </div>
            <figcaption className="fig-cap">网格连通性对比</figcaption>
          </figure>
          <figure className="fig">
            <div className="fig-img">
              <img src="images/loss-curve.png" alt="损失曲线" />
            </div>
            <figcaption className="fig-cap">损失曲线</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
