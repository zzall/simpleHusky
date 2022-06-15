# simpleHusky


30行代码实现简易husky

## 定义githooks

在package.json文件中定义
```javascript
 "zzzgithooks":{
    "pre-commit":"npm run test3"
  }
```

## 注册githooks

```bash
npm run zzzgithooks
```

## git commit 验证


添加文件改动

```bash
git commit -m 'xxx'
```


