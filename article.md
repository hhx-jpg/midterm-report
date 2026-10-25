# 本博贯通培养项目 · 中期汇报（内容源）

> 姓名：韩昊轩　学号：3240105184　专业：计算机科学与技术（混合 2403）
> 学院：竺可桢学院本博贯通培养项目　学期：2026—2027 学年（春、夏）
> 实验室：浙江大学计算机辅助设计与图形学国家重点实验室
> 本学期主题：3D 重建以及视觉模型空间推理研究入门

---

## 一、科研训练情况

### 1.1 基础理论学习
- 生成模型底层数学：系统推导 **Diffusion Model**（正向加噪 / 反向去噪、DDPM、score matching）与 **Flow Matching**（概率路径 / 常微分方程、最优传输视角）算法原理。
- 强化学习：系统学习 **PPO**（近端策略优化）、**GRPO**（Group Relative Policy Optimization）等算法，构建"生成理论 + 决策优化"的完整理论框架。
- 几何重建基础：3D Gaussian Splatting（3DGS）高斯溅射、三角面片 primitive 表达、深度估计等。

### 1.2 文献调研
- **3D 重建领域**：3D Gaussian Splatting、TriSplat（前馈三角面片预测）、MeshSplatting（Delaunay 三角剖分连通性）、Depth Anything 3（DA3）、LGTM（纹理映射）、NEXEL / Volsplat（逐像素高斯对齐）、Trellis、Selfi、O-Voxel、CraftsMan3D、ReconViaGen 等。
- **具身智能方向**：Agentic VLA（视觉—语言—动作）大模型、VLM 推理缺陷与认知偏差、DiT-based refinement、Test-Time Training（TTT）。

### 1.3 以负责人立项的科研项目进展

**（一）前半学期 —— 多模态大模型推理缺陷攻关（VQA Agent）**
- 主导攻关多模态大模型推理缺陷，开发针对**视错觉几何判断**的 VQA Agent。
- 通过自主设计工作流、集成外部工具调用、提出**降级驱动提示策略（Degradation-Driven Prompting）**，有效修正 VLM 的认知偏差。
- 成果被 **CVPRW 2026 录用为 Oral 论文**。

**（二）后半学期 —— TriSplat 前馈 3D 重建模型底层重构**
围绕三条主线展开：
1. **更强的主干先验**：视觉主干由 VGGT_omega 替换为 **Depth Anything 3（DA3）**，沿用同架构 DPT 预测头输出三角面片 primitive 参数，强化几何先验。
2. **显式的拓扑连通性**：通过 MeshSplatting（Delaunay 三角剖分）或 per-patch 局部网格构建，赋予面片显式连通约束，减少伪影、提升表面平滑度。
3. **逐像素对齐与纹理补强**：借鉴 LGTM，设计独立的 Texture 重映射与残差预测头，改善逐像素高斯对齐与纹理细节。

**几何连通性（Mesh）算法路线演进**：
- 全局 restricted Delaunay（rdel）→ 发现数值问题（近共面四面体外心被推至极远，产生超长 Voronoi 对偶边与大量误选面），性价比较低。
- **per-patch 局部网格构建（核心转折）**：利用 DA3 的 H×W 结构建立局部连接，对每个 2×2 像素块按深度跳变、法线夹角、平面残差、边长比例选择对角线，输出两个三角形。
- 动态局部 block 合并（8×8、4×4、矩形、2×2…1×1），过滤跨轮廓长面片；boundary edge 对匹配补洞。
- 跨视角重复点云空间 hash 融合，约束法线一致性与 edge multiplicity ≤2。
- 结合**测试时训练（TTT）**对点云位置进行精细微调。

### 1.4 实验平台与工程能力
- 环境搭建：VGGT_omega / omnidata 权重、DL3DV 480p/960p 全数据集部署到新机器。
- CUDA rasterizer 改造（面片过滤阈值 dist > -1 → -0.25，修复边缘空洞）。
- Delaunay 四面体化 GPU 化（scipy 实现替换为 gdel3d），耗时由 10.396s 降至 200ms。

---

## 二、科研成果情况

### 2.1 论文
- **CVPRW 2026 Oral 论文**：视错觉几何判断 VQA Agent（修正 VLM 认知偏差的降级驱动提示策略）。

### 2.2 技术报告
- **Trisplat++ 技术报告**：系统总结主干探索（VGGT_omega → DA3）、几何连通性（rdel → per-patch 局部网格 → 动态 block → 跨视角融合）、纹理补强（LGTM）等工作的动机、方法与实验结论。

### 2.3 项目周志
- 持续 8 周的项目周志（26-07-26 至 26-09-16），沉淀每周动机、方案、实验结果与待办。

### 2.4 关键指标汇总

| 阶段 | 设定 | 指标 | 数值 |
|---|---|---|---|
| VGGT_omega 冻结主干 | 6 views / 50 frames | PSNR | 24 dB |
| DA3 三角面片（单场景优化） | 1k 步，关 xyoffset | PSNR | ~24 |
| rdel 后 render loss 优化 | 1k 步 vs 25k 全量 | PSNR | 27.7 / 28.4 |
| per-patch 局部网格 | 10k 优化 | Loss | 0.4301 → 0.0754 |
| LGTM texture 补强 | 6 views | PSNR | 18 → 20 |

拓扑规模：per-patch 局部网格固定为 **132,605 vertices / 163,925 faces**。

---

## 三、科研交流情况

- 每周与学长进行**项目周会**，同步本周动机、方案、实验结果与待办，并留存**项目周志**。
- 周志时间线（8 周）：
  - 26-07-26  VGGT_omega 主干集成与训练策略探索
  - 26-07-31  环境迁移 + DiT-based refinement 调研
  - 26-08-14  DA3 三角面片训练探索 + rdel 接入 + Selfi 对齐调研
  - 26-08-21  原生顶点初始化 + meshsplatting 15k 优化 / 稀疏点云 refine
  - 26-08-28  scale 先验修正 + LGTM texture mapping 接入
  - 26-09-02  GPU Delaunay + per-patch 局部 mesh 首版
  - 26-09-08  perpixel 网格 debug + 近邻顶点匹配连面
  - 26-09-16  动态局部 block 合并 + 跨视角融合

---

## 四、下一步工作计划

1. **per-pixel scale 先验约束**：解决视角内过大倾斜角像素导致另一视角下产生较长变形面的问题。
2. **boundary edge 对匹配补洞**：以边对匹配替代点对连接，填补 mask / 拒绝造成的小洞。
3. **manifold 连通性优化**：限制每条边至多两个面，消除非流形边与碎片分量。
4. **TTT model refinement 接入**：以残差修正方式补强几何 / 纹理细节。
5. **泛化与效率收敛**：由 per-scene 优化向 feed-forward 方向收敛，验证多场景联合训练的稳定性。
