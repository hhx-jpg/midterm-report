import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./ProgressVqa.css";

export default function ProgressVqa(_p: ChapterStepProps) {
  return (
    <div className="pvq scene-pad">
      <SlideHeader
        kicker="01 · 科研训练 · 项目进展"
        title="项目进展 ① —— 视错觉几何判断 VQA Agent"
        subtitle="前半学期 · 多模态大模型推理缺陷攻关"
        index="07 / 14"
      />
      <div className="split pvq-split">
        <div className="split-left">
          <div className="c-card">
            <span className="c-card-num">问题</span>
            <span className="c-card-body">
              多模态大模型（VLM）在<b>视错觉几何判断</b>等复杂视觉认知任务上
              存在推理缺陷与认知偏差。
            </span>
          </div>
          <div className="c-card">
            <span className="c-card-num">方法</span>
            <span className="c-card-body">
              自主设计 Agent 工作流、集成<b>外部工具调用</b>，提出
              <b>降级驱动提示策略</b>（Degradation-Driven Prompting），修正 VLM 认知偏差。
            </span>
          </div>
          <div className="c-card pvq-result">
            <span className="c-card-num">成果</span>
            <span className="c-card-body">
              有效提升模型在复杂视觉认知任务上的准确率，成果被
              <b> CVPRW 2026 录用为 Oral 论文</b>。
            </span>
            <span className="pvq-badge">CVPRW 2026 · Oral</span>
          </div>
        </div>
        <div className="split-right">
          <figure className="fig">
            <div className="fig-img">
              <img src="images/vqa-agent.png" alt="视错觉几何判断 VQA Agent 示例" />
            </div>
            <figcaption className="fig-cap">视错觉几何判断 VQA Agent 示例</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
