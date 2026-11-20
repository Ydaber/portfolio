# J·C·R 产品作品集

这是一个无需构建工具的静态作品集。视觉结构为全屏纵向项目浏览：每个产品占据一个完整画面，页面右侧保留项目索引；点击项目可查看图片或播放产品影片。部署时把整个文件夹上传到任意静态网站托管服务（例如 Netlify、Vercel 或 GitHub Pages）。

## 添加作品

打开 `content.js`，复制一个 `{ ... }` 项目对象并修改内容：

- `id`：两位项目编号
- `title`、`category`、`year`、`client`、`material`、`description`：展示文案
- `type`：`object`（物件）、`space`（空间）或 `film`（影像），用于整理你的内容类型
- `cover`：项目卡片封面图地址；推荐在本地放到 `assets/images/` 后使用 `./assets/images/your-image.jpg`
- `mediaType`：图片填 `image`，视频填 `video`
- `media`：详情页的大图或视频地址。视频建议使用压缩后的 MP4（H.264），并放到 `assets/videos/`，例如 `./assets/videos/your-film.mp4`
- `alt`：图片的无障碍替代文字

示例：

```js
{
  id: "07",
  title: "产品名称",
  category: "Furniture / 2027",
  type: "object",
  year: "2027",
  client: "客户名称",
  material: "Wood / Steel",
  mediaType: "image",
  cover: "./assets/images/product-cover.jpg",
  media: "./assets/images/product-detail.jpg",
  alt: "产品名称产品图",
  description: "在这里写项目的短介绍。"
}
```

## 需要替换的基础信息

- `index.html` 中的 `studio@jcr.design`：改为你的工作室邮箱
- `index.html` 中的 `Shanghai`：如有需要改成你的所在地
- `content.js` 中的 6 个示例项目：发布前替换为自己的项目

目前的示例图片来自 Unsplash，示例视频来自 Coverr，仅用于搭建时展示。正式发布时请替换为你拥有使用权的媒体文件。
