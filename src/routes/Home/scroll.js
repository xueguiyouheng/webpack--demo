import React, {useState, useEffect} from 'react'

const ns = "scroll-offset" 
export default () => {
  const [num, setNum] = useState(0)
  const list = [
    {
      name: '轩轩',
      color: 'red',
    },
    {
      name:  '小轩轩',
      color: 'blue',
    },
    {
      name: '小小轩轩',
      color: 'yellow',
    },
    {
      name: '大大轩轩',
      color: 'brown',
    },
    {
      name: '第一名轩轩',
      color: 'pink',
    },
    {
      name: '最棒的轩轩',
      color: 'purple',
    },
  ]

  useEffect(() => {
    initEvent();
  }, [])


// 创建滚动事件处理函数
const handleScroll = (event) => {
  // console.log("滚动条正在滚动...", event);
  const a = document.getElementById("Scroll").getBoundingClientRect().left;
  console.log(a, 2222, num)
  const elem = document.getElementById("container")
    // elem.scrollTo({
    //   top: 0,
    //   left: 1000,
    //   // behavior: "smooth",
    // });
    // setNum(num - 524)
    
  if ( num - a > 0) {
    // elem.scrollTo({
    //   top: 0,
    //   left: num - 524,
    //   // behavior: "smooth",
    // });
    setNum(num - 524)
  } else if (num - a < 0) {
    // elem.scrollTo({
    //   top: 0,
    //   left: num + 524,
    //   // behavior: "smooth",
    // });
    setNum(num + 524)
  }
  
}

  const initEvent = () => {
    const demo = document.getElementById('container')
    demo.addEventListener('scroll', handleScroll, true)
    console.log(111, demo)
  }

  console.log(111666, num)
  return (
    <div className={ns}>
      <div className={`${ns}-container`} id="container">
        <div className={`${ns}-container-list`} id="Scroll">
          {
            list.map(elem => {
              return (
                <div className={`${ns}-container-list-item ${elem.color}`} style={{border: `1px solid ${elem.color}`}} key={elem.name} id={elem.color}>
                  <span>{elem.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}