/*
  J·C·R 内容库
  新增作品：复制一个对象，改掉文字和媒体地址即可。
  type 可选：object（物件）、space（空间）、film（影像）。
  mediaType 为 video 时，media 填 .mp4 / WebM 的可公开访问链接或相对路径。
*/
export const projects = [
  {
    id: "01",
    title: "Morrow Lamp",
    category: "Lighting object",
    type: "object",
    year: "2026",
    client: "Self initiated",
    material: "Aluminium / Glass",
    mediaType: "image",
    cover: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1800&q=88",
    media: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=2200&q=92",
    alt: "Morrow Lamp 台灯",
    description: "一盏为傍晚设计的灯。旋转灯罩，让光从工作状态慢慢过渡到休息状态；轻盈的铝材结构，使它像是悬停在桌面上。"
  },
  {
    id: "02",
    title: "No. 12 Chair",
    category: "Furniture / 2025",
    type: "object",
    year: "2025",
    client: "Forma",
    material: "Ash / Linen",
    mediaType: "image",
    cover: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1800&q=88",
    media: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=2200&q=92",
    alt: "No. 12 Chair 木椅",
    description: "No. 12 从一个看似简单的坐姿问题开始。椅背被削减到恰好承托身体的位置，让木头的纹理、织物的温度和人的停留自然相遇。"
  },
  {
    id: "03",
    title: "Still / Moving",
    category: "Object film / 2026",
    type: "film",
    year: "2026",
    client: "J·C·R Editions",
    material: "Motion / Sound",
    mediaType: "video",
    cover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=88",
    media: "https://cdn.coverr.co/videos/coverr-a-woman-holding-a-smartphone-1575/1080p.mp4",
    alt: "Still Moving 产品短片",
    description: "一支关于手、材料和重复动作的短片。镜头不解释产品，而是留住它被使用时最细微的节奏。"
  },
  {
    id: "04",
    title: "Ritual Vessels",
    category: "Tableware / 2024",
    type: "object",
    year: "2024",
    client: "Between Things",
    material: "Stoneware / Glaze",
    mediaType: "image",
    cover: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1800&q=88",
    media: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=2200&q=92",
    alt: "Ritual Vessels 陶器系列",
    description: "为日常饮食设计的一组容器。每一件器物都保留了手工成型时的轻微偏差，让餐桌上的动作变得更缓慢、更被看见。"
  },
  {
    id: "05",
    title: "Soft Counter",
    category: "Retail space / 2025",
    type: "space",
    year: "2025",
    client: "Common Ground",
    material: "Steel / Fabric / Cork",
    mediaType: "image",
    cover: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88",
    media: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=92",
    alt: "Soft Counter 零售空间",
    description: "一个以触感为线索的小型零售空间。金属框架组织出清晰的秩序，软木与织物则把停留的体验留给身体。"
  },
  {
    id: "06",
    title: "Field Notes",
    category: "Portable audio / 2024",
    type: "object",
    year: "2024",
    client: "Serein Audio",
    material: "Recycled ABS / Felt",
    mediaType: "image",
    cover: "https://images.unsplash.com/photo-1518441315766-51595c5ae8e1?auto=format&fit=crop&w=1600&q=86",
    media: "https://images.unsplash.com/photo-1518441315766-51595c5ae8e1?auto=format&fit=crop&w=2200&q=92",
    alt: "Field Notes 便携音响",
    description: "一台可以带到任何地方的声音记录器。它的轮廓克制，按键与提带却为移动中的使用给出明确的触觉提示。"
  }
];
