# 微软电脑管家文档库参与者指南概述

感谢您对微软电脑管家文档库的贡献！我们使用 [GitHub](https://github.com/LiCaoZ/MSPCManagerDocs) 来管理贡献和强化社区作用，若您在阅读中遇到了问题，不妨 [提个 Issue](https://github.com/LiCaoZ/MSPCManagerDocs/issues) 或者直接开一个 Pull Request 解决它。

## 对文档进行快速编辑

快速编辑可简化报告并修复文档中的小错误和遗漏的过程。尽管我们做出了各种各样的努力，我们发布的文档中仍可能出现小的语法错误和拼写错误。你可以通过创建 Issue 来报告错误，但更加快捷和简单的做法是通过创建 PR 来解决问题（如果创建拉取请求的选项可用）。

1. 一些文档页面允许直接在浏览器中编辑内容。如果是这样，便会看到如下所示的“编辑此页”按钮。选择“编辑此页”（或等效的本地化名称）按钮将转到 GitHub 上的源文件。
![编辑此页示例图片](/img/edit-this-page.png)

2. 选择铅笔图标编辑文章。如果铅笔图标呈灰色，则你需要登录到 GitHub 帐户，或者创建一个新帐户。
![铅笔图标示例图片](/img/edit-icon.png)

3. 在 Web 编辑器中编辑文件。选择“Preview”选项卡来检查更改的格式。

4. 完成编辑后，滚动到页面底部。在“Propose changes”区域，输入更改的标题和（可选）描述。标题将是提交消息的第一行。选择“Propose changes”以提交更改：
![Propose changes 示例图片](/img/commit-changes.png)

5. 提出并提交更改后，需要让存储库的所有者将更改“拉取”到其存储库。这是使用称为“拉取请求”(PR) 的操作完成的。选择“建议更改”后，会显示如下所示的新页面：
![创建拉取请求示例图片](/img/create-pull-request.png)

:::caution

请注意在此处检查您的更改，比如是否更改到了您目的之外的字符串（单词或文件名）。这在很多时候是由于您开启了翻译工具造成的。请关闭您的浏览器翻译工具，然后重新提交。

:::

选择“Create pull request”。接下来，为 PR 输入标题和描述，然后选择“Create pull request”。如果不熟悉 GitHub，请参阅 [拉取请求介绍](https://docs.github.com/articles/using-pull-requests) 了解详细信息。

6. 就这么简单！当 PR 提交后，内容团队成员会进行评审与合并。你可能会收到要求进行更改的反馈。

GitHub 编辑界面会根据你在存储库上的权限做出响应。前面的图片适用于那些对目标存储库没有写入权限的参与者。GitHub 会在你的帐户中自动创建目标存储库的一个复刻(fork)。新创建的复刻(fork) 名称默认采用 `GitHubUsername/RepositoryName` 的形式。如果你有目标存储库（例如复刻(fork)）的写入权限，GitHub 将在目标存储库中创建一个新分支(branch)。分支(branch)名称默认采用 `patch-n` 形式，使用的是修补程序分支的数字标识符。

我们使用 PR 进行所有更改，即使对于具有写入访问权限的参与者也是如此。大多数存储库都会为默认分支提供保护，使更新必须作为 PR 提交。

浏览器内编辑体验最适合进行细微或不频繁的更改。

## 创建新的文档

若您需要创建新的文档，请遵循以下几点：

### 文件名与存放位置

#### 文档

与我们的现存文档一样，您的文件名应当能够以英语句子的形式描述此文档说明的问题，所有字母小写，单词之间以 `-` 号连接。

对于简体中文文档，请存放在 `/docs` 目录下的对应位置；对于其他多语言文档，请遵循 [Docusaurus](https://docusaurus.io) 的 [翻译文件位置](https://docusaurus.io/docs/i18n/introduction#translation-files-location)。

#### 静态资源

请遵循 `a-b-c.d` 的格式为静态资源命名，最好可以在文件名介绍它是什么——比如这篇指南中的图片链接。

:::note 请注意
我们需要关注残障人士对静态资源的可读性。例如，我们可以给图片添加 alt 属性（通过填写完整的图片引用标签）来使残障人士对图片可访问。
:::

若您的文档引用了图片等附属资源，请将其放置在 `/static` 目录下，它将在打包时被放置在根目录。关于静态资源的更多信息，请参阅 [静态资源](https://docusaurus.io/zh-CN/docs/static-assets)。

### 风格指南

请参阅 [风格指南](https://learn.microsoft.com/zh-cn/contribute/style-quick-start)。

:::note 使用「您」而非「你」

在正式的段落中，我们建议您更多地使用「您」；在轻松的段落（比如调侃）可以极少地使用「你」。

:::

同时，我们建议您在本地运行 `npm start` 以检查 Docusaurus 是否能够正常运行。

------

感谢您的贡献！若有其余未尽事宜，您可提交 [Issue](https://github.com/LiCaoZ/MSPCMgrDocs/issues) 来向社区询问。
