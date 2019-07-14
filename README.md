# react-simple-tips
Create a simple react prompt component.

## Usage
1:安装
```
npm install react-simple-tips --save
or
yarn add react-simple-tips
```
2:引入
```
import { Tips } from 'react-simple-tips'
```
3:使用
```
<Tips />
```

## API
```
<Tips 
    showFlag = { showFlag }
    location = { location }
    distance = { distance }
    tipsMsg = { tipsMsg }
    times = { times }
/>
```
**showFlag**

是否显示 true/false(默认) [Boolean]

**location**

提示框位置 top/center/bottom(默认) [String]

**distance**

提示显示位置，只有 location 为 top/bottom(默认50px) 生效 [String]

**tipsMsg**

提示内容 提示(默认) [String]

**times**

消失时间 2000(默认,毫秒) [Number]
