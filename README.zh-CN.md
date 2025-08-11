## 使用

<details>
<summary>推荐环境</summary>

<br>

- 新版 `Visual Studio Code` 或者 AI IDE `Cursor` 与 `Trae`
- 安装 `.vscode/extensions.json` 文件中推荐的插件
- `node` 20.19+ 或 22.12+
- `npm run` 10+

</details>

<details>
<summary>本地开发</summary>

<br>

```bash

# 安装依赖
npm i

# 启动服务
npm run dev
```

</details>

<details>
<summary>打包构建</summary>

<br>

```bash
# 打包构建预发布环境
npm run build:staging

# 打包构建生产环境
npm run build
```

</details>

<details>
<summary>本地预览</summary>

<br>

```bash
# 先执行打包构建命令生成 dist 目录后再执行以下预览命令
npm run preview
```

</details>

<details>
<summary>代码检查</summary>

<br>

```bash
# 代码校验与格式化
npm run lint

# 单元测试
npm run test
```

</details>

## 特性

**结构精简**：没有复杂的封装，没有复杂的类型体操，刚好够用

**详细的注释**：各个配置项都写有尽可能详细的注释

**最新的依赖**：及时更新所有三方依赖至最新版

**有一点规范**：代码风格统一、命名风格统一、注释风格统一

## 技术栈

**Vue3**：采用 Vue3 + script setup 最新的 Vue3 组合式 API

**Element Plus**：Element UI 的 Vue3 版本

**Pinia**：传说中的 Vuex5

**Vite**：真的很快

**Vue Router**：路由路由

**TypeScript**：JavaScript 语言的超集

**npm run**：更快速的，节省磁盘空间的包管理工具

**Scss**：和 Element Plus 保持一致

**CSS 变量**：主要控制项目的布局和颜色

**ESLint**：代码校验与格式化

**Axios**：发送网络请求（已封装好）

**UnoCSS**：具有高性能且极具灵活性的即时原子化 CSS 引擎
