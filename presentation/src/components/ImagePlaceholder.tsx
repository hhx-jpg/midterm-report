import "./ImagePlaceholder.css";

interface Props {
  caption: string;
  hint?: string;
  ratio?: string;
  className?: string;
}

/**
 * 图片占位块 —— 用户后续自行替换为真实截图。
 * 虚线边框 + 图例 + 提示，明确告诉用户此处该放什么图。
 */
export function ImagePlaceholder({ caption, hint, ratio = "4/3", className }: Props) {
  return (
    <figure className={`ph ${className ?? ""}`} style={{ aspectRatio: ratio }}>
      <div className="ph-inner">
        <svg className="ph-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="10" r="1.6" fill="currentColor" />
          <path d="M4 16l5-4 4 3 3-2 4 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <figcaption className="ph-caption">{caption}</figcaption>
        {hint && <span className="ph-hint">{hint}</span>}
      </div>
    </figure>
  );
}
