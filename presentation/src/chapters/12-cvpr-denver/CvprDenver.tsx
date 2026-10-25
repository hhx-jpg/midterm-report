import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./CvprDenver.css";

const INFO = [
  ["时间", "2026 年 6 月底"],
  ["地点", "CVPR 2026 · 美国丹佛（Denver）"],
  ["形式", "Oral 现场汇报 + 海报展示"],
  ["内容", "VQA 项目（视错觉几何判断 Agent）"],
  ["方式", "委托组内学长代为现场完成"],
];

export default function CvprDenver(_p: ChapterStepProps) {
  return (
    <div className="cvd scene-pad">
      <SlideHeader
        kicker="03 · 科研交流情况 · 学术会议"
        title="CVPR 2026 现场汇报"
        subtitle="美国丹佛（Denver）· VQA 项目 Oral 汇报与海报展示"
        index="12 / 14"
      />
      <div className="split cvd-split">
        <div className="split-left">
          <div className="cvd-list">
            {INFO.map(([k, v]) => (
              <div className="cvd-row" key={k}>
                <span className="cvd-key">{k}</span>
                <span className="cvd-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="split-right">
          <figure className="fig">
            <div className="fig-img">
              <img src="images/cvpr-poster.png" alt="CVPR 2026 海报" />
            </div>
            <figcaption className="fig-cap">CVPR 2026 海报</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
