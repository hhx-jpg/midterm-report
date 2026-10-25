import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./Exchange.css";

const WEEKS = [
  ["07-26", "主干集成"],
  ["07-31", "环境迁移 · DiT 调研"],
  ["08-14", "DA3 训练 · rdel"],
  ["08-21", "顶点初始化优化"],
  ["08-28", "scale 先验 · LGTM"],
  ["09-02", "GPU Delaunay · per-patch"],
  ["09-08", "网格 debug"],
  ["09-16", "block 合并 · 融合"],
];

export default function Exchange(_p: ChapterStepProps) {
  return (
    <div className="exc scene-pad">
      <SlideHeader kicker="03 · 科研交流情况" title="科研交流" index="11 / 14" />
      <div className="slide-body">
        <div className="c-card exc-desc">
          <span className="c-card-body">
            每周与学长开展<b>项目周会</b>，同步本周动机、方案、实验结果与待办，
            并留存<b>项目周志</b>，形成「周会驱动 · 周志沉淀」的持续迭代科研闭环。
          </span>
        </div>
        <div className="timeline">
          {WEEKS.map(([d, s]) => (
            <div className="tl-item" key={d}>
              <span className="tl-date">{d}</span>
              <span className="tl-desc">{s}</span>
            </div>
          ))}
        </div>
        <figure className="fig exc-fig">
          <div className="fig-img">
            <img src="images/weekly-log.png" alt="项目周志截图" />
          </div>
          <figcaption className="fig-cap">项目周志截图</figcaption>
        </figure>
      </div>
    </div>
  );
}
