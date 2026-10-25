import "./SlideHeader.css";

interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
  index?: string;
}

/**
 * 每页统一页眉：分区标签 + 标题 + 副标题 + 强调规则线。
 * 用于保持整份汇报的视觉一致性（正式汇报场景，一致性优先于章节自由发挥）。
 */
export function SlideHeader({ kicker, title, subtitle, index }: Props) {
  return (
    <header className="sh-header">
      <div className="sh-top">
        <span className="sh-kicker">
          <span className="dot-accent" />
          {kicker}
        </span>
        {index && <span className="sh-index">{index}</span>}
      </div>
      <h1 className="sh-title">{title}</h1>
      {subtitle && <p className="sh-subtitle">{subtitle}</p>}
      <div className="sh-rule">
        <span className="sh-rule-bar" />
      </div>
    </header>
  );
}
