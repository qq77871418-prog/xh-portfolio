# 小黄设计师个人网页 - Vercel/GitHub Pages 可直接部署版

这个文件夹已经整理为可直接部署结构：index.html 在最外层，不再嵌套二级文件夹。

## Vercel 部署方法

1. 把本文件夹中的所有文件上传到 GitHub 仓库根目录。
2. 打开 Vercel，选择 Add New → Project。
3. 导入你的 GitHub 仓库。
4. 设置：Framework Preset 选 Other；Root Directory 选 ./；Build Command、Output Directory、Install Command 都留空。
5. 点击 Deploy。

## GitHub Pages 部署方法

1. 进入 GitHub 仓库。
2. 上传本文件夹中的所有内容到仓库最外层。
3. 进入 Settings → Pages。
4. Source 选择 Deploy from a branch。
5. Branch 选择 main，Folder 选择 / root。
6. 保存后等待 1-5 分钟。

## 重要提醒

不要只上传 zip 压缩包。必须先解压，然后把 index.html、works.html、about.html、project-01.html、assets 文件夹等内容放在仓库最外层。

如果出现 404，通常是因为 index.html 不在仓库最外层，或者 GitHub Pages 没有选择 / root。
