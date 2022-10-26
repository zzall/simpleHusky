# simpleHusky

30 行代码实现简易 husky

## 定义 githooks

在 package.json 文件中定义

```javascript
 "zzzgithooks":{
    "pre-commit":"npm run test3"
  }
```

## 注册 githooks

```bash
npm run zzzgithooks
```

## git commit 验证

添加文件改动

```bash
git commit -m 'xxx'
```

## 更完整功能在`./example2`中

跟上面的实现相比有以下不同

- 新增了 cli 命令
- 采用了 shell 脚本而不是 node 脚本
