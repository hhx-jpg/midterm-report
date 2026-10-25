import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./NextSteps.css";

const STEPS = [
  { tag: "3D 重构", t: "refinement 接入", d: "以残差修正方式（TTT / DiT-based）补强几何与纹理细节。" },
  { tag: "3D 重构", t: "动态 pruning 删点", d: "动态剪枝冗余 / 退化点，提升面片质量与重建效率。" },
  { tag: "具身方向", t: "agentic 造具身仿真数据管线", d: "设计智能体驱动的具身仿真数据生成管线，支撑 VLA 训练。" },
];

export default function NextSteps(_p: ChapterStepProps) {
  return (
    <div className="nxt scene-pad">
      <SlideHeader kicker="04 · 下一步工作计划" title="下一步工作计划" index="13 / 14" />
      <div className="slide-body fill">
        <div className="nxt-list">
          {STEPS.map((s, i) => (
            <div className="nxt-item" key={s.t}>
              <span className="nxt-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="nxt-tag">{s.tag}</span>
              <div className="nxt-text">
                <span className="nxt-title">{s.t}</span>
                <span className="nxt-desc">{s.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
