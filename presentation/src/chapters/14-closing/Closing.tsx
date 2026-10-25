import type { ChapterStepProps } from "../../registry/types";
import "./Closing.css";

export default function Closing(_p: ChapterStepProps) {
  return (
    <div className="cls scene-pad">
      <div className="cls-inner">
        <h1 className="cls-title">谢谢</h1>
        <div className="cls-sub">恳请各位老师批评指正</div>
        <div className="cls-rule" />
        <div className="cls-foot">韩昊轩 · 本博贯通培养项目中期汇报</div>
      </div>
    </div>
  );
}
