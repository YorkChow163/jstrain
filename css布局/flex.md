# 概述
 * 有容器和项目构成
 
# 容器的属性
  * flex-direction
  
  ```text
    项目沿着主轴方向的排列方式
    
    flex-direction: row | row-reverse | column | column-reverse;
  ```
  * flex-wrap
  
  ```text
    默认情况下，项目都是沿着一条主轴先排列，该属性规定了排列不下如何换行
    
    flex-wrap: nowrap | wrap | wrap-reverse;
```
  * flex-flow
  ```text
    cd
```
  * justify-content
  
  ```text
   定义了项目沿主轴的对齐方式
   
   ustify-content: flex-start | flex-end | center | space-between | space-around;
```
  * align-items
  
  ```text
   定了项目在交叉轴上的对齐方式
   
   align-items: flex-start | flex-end | center | baseline | stretch;
```
  * align-content
  
  ```text
   定义了多根轴线的对齐方式
```

# 项目的属性值
 * order：定义项目的排列顺序。数值越小，排列越靠前
 * flex-grow：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
 * flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
 * flex-basis:定义了在分配多余空间之前，项目占据的主轴空间（main size）
 * flex:是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
 * align-self:允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。