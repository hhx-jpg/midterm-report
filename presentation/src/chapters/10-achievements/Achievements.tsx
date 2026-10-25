import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./Achievements.css";

const ROWS = [
  ["VGGT_omega 冻结主干", "6 views / 50 frames", "PSNR", "24 dB"],
  ["DA3 三角面片", "1k 步 · 关 xyoffset", "PSNR", "~24"],
  ["rdel render loss", "1k 步 vs 25k 全量", "PSNR", "27.7 / 28.4"],
  ["per-patch 局部网格", "10k 优化", "Loss", "0.4301 → 0.0754"],
  ["LGTM texture 补强", "6 views", "PSNR", "18 → 20"],
];

export default function Achievements(_p: ChapterStepProps) {
  return (
    <div className="ach scene-pad">
      <SlideHeader kicker="02 · 科研成果情况" title="科研成果" index="10 / 14" />
      <div className="slide-body">
        <div className="card-grid c3">
          <div className="c-card ach-card">
            <span className="c-card-num">论文</span>
            <span className="c-card-body">
              <b>CVPRW 2026 Oral</b> —— 视错觉几何判断 VQA Agent（降级驱动提示策略）。
            </span>
          </div>
          <div className="c-card ach-card">
            <span className="c-card-num">报告</span>
            <span className="c-card-body">
              <b>Trisplatplus 技术报告</b> —— 系统总结三条主线的动机、方法与实验结论。
            </span>
          </div>
          <div className="c-card ach-card">
            <span className="c-card-num">周志</span>
            <span className="c-card-body">
              持续 <b>8 周</b> 项目周志，沉淀每周动机、方案、实验结果与待办。
            </span>
          </div>
        </div>
        <div className="ach-bottom">
          <div className="c-card ach-tbl-card">
            <h3 className="ach-tbl-title">关键指标汇总</h3>
            <table className="tbl">
              <thead>
                <tr>
                  <th>阶段</th>
                  <th>设定</th>
                  <th>指标</th>
                  <th className="num">数值</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td className="num">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figure className="fig ach-fig">
            <div className="fig-img">
              <img src="images/cvprw-accept.png" alt="CVPRW 2026 录用结果" />
            </div>
            <figcaption className="fig-cap">CVPRW 2026 录用结果</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
