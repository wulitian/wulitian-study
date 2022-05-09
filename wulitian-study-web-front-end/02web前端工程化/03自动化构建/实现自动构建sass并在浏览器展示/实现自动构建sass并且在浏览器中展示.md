# 实现自动构建sass并且在浏览器中展示

1. 将sass编译命令配置在package

```
"build": "sass scss/main.scss css/style.css --watch"
```

2. 使用browser-sync启动一个服务并且监听文件夹files

```
"serve": "browser-sync . --files \"css/*.css\""
```

2. 监听文件会导致服务命令无法启动需要借助npm-run-all一起执行两个命令

```
"start": "run-p build serve"
```

