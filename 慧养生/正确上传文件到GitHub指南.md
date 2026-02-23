# 正确上传文件到GitHub指南

## 问题分析

你只上传了 `index.html` 文件到GitHub，导致界面显示不正确。这是因为网页需要加载 `script.js` 和 `styles.css` 文件才能正常显示和工作。

## 解决方案

### 方案一：使用 Git 命令行工具（推荐）

1. **打开命令行工具**（如 Git Bash、PowerShell 或 Terminal）
2. **导航到项目目录**：
   ```bash
   cd c:\Users\mac\Desktop\慧养生
   ```
3. **初始化 Git 仓库**（如果还没有初始化）：
   ```bash
   git init
   ```
4. **添加所有文件到暂存区**：
   ```bash
   git add .
   ```
5. **提交更改**：
   ```bash
   git commit -m "Add all necessary files"
   ```
6. **推送到 GitHub**（将 `username` 替换为你的 GitHub 用户名，`repository-name` 替换为你创建的仓库名称）：
   ```bash
   git push -u origin master
   ```

### 方案二：通过 GitHub 网页界面上传

1. **登录 GitHub** 并进入你的仓库
2. **点击 "Add file"** 按钮，选择 "Upload files"
3. **拖拽所有文件**（包括 `index.html`、`script.js` 和 `styles.css`）到上传区域
4. **添加提交信息**（例如："Add all necessary files"）
5. **点击 "Commit changes"** 按钮

## 验证步骤

上传完成后，按照以下步骤验证：

1. **等待几分钟**，让 GitHub Pages 更新
2. **访问你的网站 URL**（例如：`https://username.github.io/repository-name/`）
3. **检查界面**是否正常显示
4. **测试功能**是否正常工作，包括：
   - 症状咨询功能
   - 养生知识科普的展开/折叠功能
   - 推荐食材显示功能

## 常见问题排查

1. **文件路径问题**：确保所有文件都在仓库的根目录下，而不是在子文件夹中
2. **文件名称问题**：确保文件名称与 HTML 中引用的名称一致（区分大小写）
3. **GitHub Pages 配置**：确保你已经在仓库设置中启用了 GitHub Pages，并选择了正确的分支（通常是 master 或 main）

如果问题仍然存在，请检查浏览器控制台是否有错误信息，这可以帮助你确定具体的问题所在。