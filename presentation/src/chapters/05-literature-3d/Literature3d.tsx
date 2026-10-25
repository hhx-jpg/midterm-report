import type { ChapterStepProps } from "../../registry/types";
import { SlideHeader } from "../../components/SlideHeader";
import "./Literature3d.css";

const PAPERS = [
  { name: "Depth Anything 3", note: "深度估计基础模型，用作 Trisplatplus 视觉主干", img: "images/lit-da3.png" },
  { name: "MeshSplatting", note: "Delaunay 三角剖分，构建高斯网格连通性", img: "images/lit-meshsplatting.png" },
  { name: "LGTM", note: "纹理映射网络，不增高斯数补强纹理细节", img: "images/lit-lgtm.png" },
  { name: "Selfi", note: "多视角 pose / 特征对齐训练方法", img: "images/lit-selfi.png" },
];

export default function Literature3d(_p: ChapterStepProps) {
  return (
    <div className="l3d scene-pad">
      <SlideHeader
        kicker="01 · 科研训练 · 文献调研"
        title="文献调研 · 3D 重建领域"
        subtitle="围绕稀疏视图重建主线，重点研读三角面片预测、网格连通性、纹理补强与多视角对齐"
        index="05 / 14"
      />
      <div className="slide-body fill">
        <div className="lit-grid g2">
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
