import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./Overview.css";

const ITEMS = [
  { n: "01", t: "科研训练情况", d: "基础理论学习、文献调研，以及以负责人立项的科研项目研究进展。" },
  { n: "02", t: "科研成果情况", d: "学术论文、技术报告与项目周志等阶段性产出。" },
  { n: "03", t: "科研交流情况", d: "每周项目周会与项目周志留存，及 CVPR 2026 现场汇报。" },
  { n: "04", t: "下一步工作计划", d: "refinement 接入、动态 pruning 删点与 agentic 具身仿真数据管线。" },
];

export default function Overview(_p: ChapterStepProps) {
  return (
    <div className="ovw scene-pad">
      <SlideHeader kicker="汇报内容" title="汇报提纲" index="02 / 14" />
      <div className="slide-body fill">
        <div className="card-grid c2 ovw-grid">
          {ITEMS.map((it) => (
            <div className="c-card ovw-card" key={it.n}>
              <span className="c-card-num">{it.n}</span>
              <span className="c-card-title">{it.t}</span>
              <span className="c-card-body">{it.d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
