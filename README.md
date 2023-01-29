# template-project

This template should help get you started developing with Vue 3 in Vite.

# 开始

- git add submodule https://github.com/JhonChan1996/common-monorepo
- npm install | yarn | pnpm install

## 全局依赖

```
npm install commitizen -g
```

## 添加子模块

```
git submodule add <url> <repo_name>
```

## 首次拉取子模块

```
git submodule update --init --recursive
```

## 更新子模块

```
更新项目内子模块到最新版本
git submodule update --remote
更新子模块为远程项目的最新版本
git submodule update --remote
更新某一个子模块为远程项目的最新版本
git submodule update --remote apps/monorepo-apps-demo1
```

## 删除子模块

> rm -rf 子模块目录

```
git rm --cached modulePath
rm -rf modulePath
```

> 删除 .gitmodules 文件中相关子模块的信息

```
[submodule "moduleName"]
        path = moduleName
        url = https://github.com/xxx/moduleName.git
```

> 删除 .git/config 中相关子模块信息

```
[submodule "moduleName"]
        url = https://github.com/xxx/moduleName.git
        active = true
```

> 删除 .git 文件夹中的相关子模块文件

```
rm -rf .git/modules/moduleName
```

## 下载子模块依赖

- 进入子模块根目录
- pnpm i
