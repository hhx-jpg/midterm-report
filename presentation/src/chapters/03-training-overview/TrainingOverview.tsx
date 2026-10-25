import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./TrainingOverview.css";

export default function TrainingOverview(_p: ChapterStepProps) {
  return (
    <div className="tro scene-pad">
      <SlideHeader
        kicker="01 · 科研训练情况"
        title="科研训练 · 总览"
        subtitle="本学期以「理论深耕 + 工程落地」双轮驱动，构建从生成理论到前沿物理交互的完整认知框架。"
        index="03 / 14"
      />
      <div className="slide-body fill">
        <div className="card-grid c3">
          <div className="c-card">
            <span className="c-card-num">01</span>
            <span className="c-card-title">基础理论学习</span>
            <span className="c-card-body">
              系统推导 <b>Diffusion Model</b>、<b>Flow Matching</b> 底层数学原理，
              学习 <b>PPO</b>、<b>GRPO</b> 强化学习算法，夯实生成模型与决策优化理论基础。
            </span>
          </div>
          <div className="c-card">
            <span className="c-card-num">02</span>
            <span className="c-card-title">文献调研</span>
            <span className="c-card-body">
              高强度阅读 <b>3D 重建</b>领域与 <b>Agentic VLA</b> 具身智能大模型方向
              最新顶会论文，保持对空间智能前沿进展的敏锐洞察。
            </span>
          </div>
          <div className="c-card">
            <span className="c-card-num">03</span>
            <span className="c-card-title">项目研究实践</span>
            <span className="c-card-body">
              前半学期攻关 <b>视错觉几何判断 VQA Agent</b>，后半学期投入
              <b>Trisplatplus</b> 前馈 3D 重建模型底层重构，完成从「理解前沿」到「改造前沿」的跨越。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
