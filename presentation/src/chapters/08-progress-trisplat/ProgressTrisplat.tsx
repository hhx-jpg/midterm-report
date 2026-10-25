import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./ProgressTrisplat.css";

export default function ProgressTrisplat(_p: ChapterStepProps) {
  return (
    <div className="pts scene-pad">
      <SlideHeader
        kicker="01 · 科研训练 · 项目进展"
        title="项目进展 ② —— Trisplatplus 前馈 3D 重建模型重构"
        subtitle="后半学期 · 围绕三条主线展开底层重构"
        index="08 / 14"
      />
      <div className="slide-body">
        <div className="card-grid c3">
          <div className="c-card">
            <span className="c-card-num">主线一</span>
            <span className="c-card-title">主干先验</span>
            <span className="c-card-body">
              视觉主干由 <b>VGGT_omega</b> 替换为 <b>Depth Anything 3</b>（DA3），
              沿用 DPT 预测头输出三角面片 primitive 参数，强化几何先验。
            </span>
            <div className="pts-metric">
              <span className="pts-metric-num">24 dB</span>
              <span className="pts-metric-label">冻结主干 · PSNR</span>
            </div>
          </div>
          <div className="c-card">
            <span className="c-card-num">主线二</span>
            <span className="c-card-title">拓扑连通性</span>
            <span className="c-card-body">
              通过 <b>MeshSplatting</b>（Delaunay 三角剖分）与 <b>per-patch 局部网格</b>
              构建，赋予面片显式连通约束，减少伪影、提升表面平滑度。
            </span>
            <div className="pts-metric">
              <span className="pts-metric-num">0.4301 → 0.0754</span>
              <span className="pts-metric-label">per-patch · Loss</span>
            </div>
          </div>
          <div className="c-card">
            <span className="c-card-num">主线三</span>
            <span className="c-card-title">对齐与纹理补强</span>
            <span className="c-card-body">
              借鉴 <b>LGTM</b> 设计独立 Texture 重映射与残差预测头，
              改善逐像素高斯对齐与纹理细节。
            </span>
            <div className="pts-metric">
              <span className="pts-metric-num">18 → 20</span>
              <span className="pts-metric-label">6 views · PSNR</span>
            </div>
          </div>
        </div>
        <div className="pts-figs">
          <figure className="fig">
            <div className="fig-img">
              <img src="images/trisplat-render.jpg" alt="Trisplatplus 渲染效果" />
            </div>
            <figcaption className="fig-cap">Trisplatplus 渲染效果</figcaption>
          </figure>
          <figure className="fig">
            <div className="fig-img">
              <img src="images/render-compare-1.png" alt="渲染对比 ①" />
            </div>
            <figcaption className="fig-cap">渲染对比 ①</figcaption>
          </figure>
          <figure className="fig">
            <div className="fig-img">
              <img src="images/render-compare-2.png" alt="渲染对比 ②" />
            </div>
            <figcaption className="fig-cap">渲染对比 ②</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
