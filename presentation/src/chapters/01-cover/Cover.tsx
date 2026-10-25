import type { ChapterStepProps } from "../../registry/types";
import "./Cover.css";

export default function Cover(_p: ChapterStepProps) {
  return (
    <div className="cov scene-pad">
      <div className="cov-inner">
        <div className="cov-kicker">竺可桢学院 · 本博贯通培养项目 · 中期汇报</div>
        <h1 className="cov-title">
          本博贯通培养项目
          <br />
          <span className="cov-title-em">中期汇报</span>
        </h1>
        <div className="cov-topic">3D 重建与视觉模型空间推理研究入门</div>
        <div className="cov-rule" />
        <div className="cov-info">
          <span className="cov-info-item">汇报人 · 韩昊轩</span>
          <span className="cov-sep" />
          <span className="cov-info-item">学号 · 3240105184</span>
          <span className="cov-sep" />
          <span className="cov-info-item">计算机科学与技术（混合 2403）</span>
        </div>
        <div className="cov-lab">浙江大学计算机辅助设计与图形学国家重点实验室</div>
        <div className="cov-foot">2026 — 2027 学年 · 春、夏学期</div>
      </div>
    </div>
  );
}
