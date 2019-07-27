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

funs = () => {
    this.setState({
        flag:true
    });
    setTimeout(() => {
        this.setState({
        flag:false
        });
    }, 2000);
}
```

## API
```
<Tips 
    showFlag = { showFlag }
    location = { location }
    distance = { distance }
    tipsMsg = { tipsMsg }
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

**times**(已废除)

消失时间 2000(默认,毫秒) [Number]  

## 更新记录  

===== 2019-07-26 ======   
1：修复提示不居中问题  
2：缩小提示框上下间距  
3：降低提示框透明度为0.5  
4：缩小提示框文字为13px  

===== 2019-07-17 ======  
1：紧急废除times配置项，时间配置留给用户自己配置  
2：新增提示框消失动画
