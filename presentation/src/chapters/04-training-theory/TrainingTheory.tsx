import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./TrainingTheory.css";

export default function TrainingTheory(_p: ChapterStepProps) {
  return (
    <div className="trt scene-pad">
      <SlideHeader
        kicker="01 · 科研训练 · 基础理论"
        title="基础理论学习"
        index="04 / 14"
      />
      <div className="split">
        <div className="split-left">
          <ul className="c-list trt-list">
            <li>
              <b>Diffusion Model</b>　正向加噪 / 反向去噪、DDPM、score matching，
              系统推导底层数学原理。
            </li>
            <li>
              <b>Flow Matching</b>　概率路径 / 常微分方程、最优传输视角，
              打通生成模型的一致性理论。
            </li>
            <li>
              <b>强化学习 PPO · GRPO</b>　近端策略优化与 Group Relative Policy
              Optimization，补齐决策优化能力。
            </li>
            <li>
              <b>几何重建基础</b>　3DGS 高斯溅射、三角面片 primitive 表达、
              单目 / 多目深度估计。
            </li>
          </ul>
        </div>
        <div className="split-right">
          <figure className="fig">
            <div className="fig-img">
              <img src="images/theory-diffusion.png" alt="Diffusion / Flow Matching 公式推导笔记" />
            </div>
            <figcaption className="fig-cap">Diffusion / Flow Matching 公式推导笔记</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
