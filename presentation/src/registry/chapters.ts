import type { ChapterDef } from "./types";

import Cover from "../chapters/01-cover/Cover";
import { narrations as coverNarrations } from "../chapters/01-cover/narrations";
import Overview from "../chapters/02-overview/Overview";
import { narrations as overviewNarrations } from "../chapters/02-overview/narrations";
import TrainingOverview from "../chapters/03-training-overview/TrainingOverview";
import { narrations as trainingOverviewNarrations } from "../chapters/03-training-overview/narrations";
import TrainingTheory from "../chapters/04-training-theory/TrainingTheory";
import { narrations as trainingTheoryNarrations } from "../chapters/04-training-theory/narrations";
import Literature3d from "../chapters/05-literature-3d/Literature3d";
import { narrations as literature3dNarrations } from "../chapters/05-literature-3d/narrations";
import LiteratureEmbodied from "../chapters/06-literature-embodied/LiteratureEmbodied";
import { narrations as literatureEmbodiedNarrations } from "../chapters/06-literature-embodied/narrations";
import ProgressVqa from "../chapters/07-progress-vqa/ProgressVqa";
import { narrations as progressVqaNarrations } from "../chapters/07-progress-vqa/narrations";
import ProgressTrisplat from "../chapters/08-progress-trisplat/ProgressTrisplat";
import { narrations as progressTrisplatNarrations } from "../chapters/08-progress-trisplat/narrations";
import ProgressMesh from "../chapters/09-progress-mesh/ProgressMesh";
import { narrations as progressMeshNarrations } from "../chapters/09-progress-mesh/narrations";
import Achievements from "../chapters/10-achievements/Achievements";
import { narrations as achievementsNarrations } from "../chapters/10-achievements/narrations";
import Exchange from "../chapters/11-exchange/Exchange";
import { narrations as exchangeNarrations } from "../chapters/11-exchange/narrations";
import CvprDenver from "../chapters/12-cvpr-denver/CvprDenver";
import { narrations as cvprDenverNarrations } from "../chapters/12-cvpr-denver/narrations";
import NextSteps from "../chapters/13-next-steps/NextSteps";
import { narrations as nextStepsNarrations } from "../chapters/13-next-steps/narrations";
import Closing from "../chapters/14-closing/Closing";
import { narrations as closingNarrations } from "../chapters/14-closing/narrations";

/**
 * 顺序 = 播放顺序。每个章节的 narrations 数组长度即该章 step 数。
 * 视觉样式完全来自 warm-keynote 主题，章节代码不硬编码配色 / 字体。
 */
export const CHAPTERS: ChapterDef[] = [
  { id: "cover", title: "封面", narrations: coverNarrations, Component: Cover },
  { id: "overview", title: "汇报提纲", narrations: overviewNarrations, Component: Overview },
  { id: "training-overview", title: "科研训练 · 总览", narrations: trainingOverviewNarrations, Component: TrainingOverview },
  { id: "training-theory", title: "基础理论学习", narrations: trainingTheoryNarrations, Component: TrainingTheory },
  { id: "literature-3d", title: "文献调研 · 3D 重建", narrations: literature3dNarrations, Component: Literature3d },
  { id: "literature-embodied", title: "文献调研 · 具身智能", narrations: literatureEmbodiedNarrations, Component: LiteratureEmbodied },
  { id: "progress-vqa", title: "项目进展 ① VQA Agent", narrations: progressVqaNarrations, Component: ProgressVqa },
  { id: "progress-trisplat", title: "项目进展 ② Trisplatplus 重构", narrations: progressTrisplatNarrations, Component: ProgressTrisplat },
  { id: "progress-mesh", title: "项目进展 ③ Mesh 算法", narrations: progressMeshNarrations, Component: ProgressMesh },
  { id: "achievements", title: "科研成果", narrations: achievementsNarrations, Component: Achievements },
  { id: "exchange", title: "科研交流", narrations: exchangeNarrations, Component: Exchange },
  { id: "cvpr-denver", title: "CVPR 2026 现场汇报", narrations: cvprDenverNarrations, Component: CvprDenver },
  { id: "next-steps", title: "下一步工作计划", narrations: nextStepsNarrations, Component: NextSteps },
  { id: "closing", title: "结束", narrations: closingNarrations, Component: Closing },
];
