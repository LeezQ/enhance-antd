基于 storybook 的 react 组件示例库

如何开发

```
yarn;
yarn storybook;
```

构建
```
yarn build-storybook
```

组件构建
```
yarn build-components
```

### 组件列表
- EditItem 可编辑  
- EnhanceTable 自请求表格


### 文档驱动开发
- EInput 组件
  - 一般情况下，需要用 form 来进行 errorMsg等处理，但是有些情况下是不需要 form 的，可能只是一个 Input 组件
<Input rules={[{'required': true, 'meesage': '必选'}]} />