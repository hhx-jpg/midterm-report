import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./LiteratureEmbodied.css";

const PAPERS = [
  { name: "Harness VLA", note: "记忆引导 Agent，驾驭冻结 VLA 实现可靠操作原语", img: "images/lit-harness-vla.png" },
  { name: "CaP-X", note: "Code-as-Policy 框架，评测与提升机器人操作编码智能体", img: "images/lit-capx.png" },
  { name: "VoxPoser", note: "LLM + 3D 价值图，零样本机器人操作", img: "images/lit-voxposer.png" },
];

export default function LiteratureEmbodied(_p: ChapterStepProps) {
  return (
    <div className="lem scene-pad">
      <SlideHeader
        kicker="01 · 科研训练 · 文献调研"
        title="文献调研 · 具身智能方向"
        subtitle="Agentic VLA 具身智能大模型方向"
        index="06 / 14"
      />
      <div className="slide-body fill">
        <div className="lit-grid g3">
          {PAPERS.map((p) => (
            <figure className="lit-card" key={p.name}>
              <div className="lit-img">
                <img src={p.img} alt={p.name} />
              </div>
              <figcaption className="lit-cap">
                <span className="lit-name">{p.name}</span>
                <span className="lit-note">{p.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
