# 一、hooks 的基本使用

## 1、useState(初始值)

    import React,{useState} from 'react'

    const Count = () => {
      const [count,setCount] = useState(0)
      const [obj,setObj] = useState({name:'张三'})
      const [arr,setArr] = useState([1,2,3])

      const changeCount = () => {
        setCount(count+1)
      }

      const changeObj = () => {
        setObj({
          ...obj,
          age:18
        })
      }

      const changeArr = () => {
        setArr(() => {
          arr.push(4)
          return [...arr]
        })
      }
      return (
        <>
          <div>{count} - {obj.name}</div>
          <button onClick={changeCount}></button>
          <button onClick={changeObj}></button>
          <button onClick={changeArr}></button>
        <>
      )
    }

## 2、useEffect(回调函数，数组（可省略）) --可以模拟类组件中的 componentDidMount , componentDidUpdate, componentWillUnmout 三个周期函数，当组件第一次渲染完成以后会执行一次 useEffect 里面的回调函数，不写第二个参数，默认会监听组件中所有状态的变化，每次变化 useEffect 的回调函数都会被执行一次，如果你想不让它监听，则第二个参数给一个空数组（[]）.如果你只是想监听部分状态，那就在数组里面写入你要监听的状态。如果你在第一个回调函数里面再 return 一个回调函数，当组件卸载时就会帮你执行 return 的那个回调函数。

## 3、useRef(初始值) -- 通过 useRef 创建一个容器，把该容器通过 ref 属性绑定到你要获取的 dom 元素身上，react 会在渲染完成后把 dom 封装在容器中的 current 属性身上给你使用。

    import React, { useRef } from "react";
    import ReactDOM from "react-dom";

    function SearchResults() {
      const inputVal = useRef(null)
    const inputValOpt=()=>{
      console.log(inputVal.current.value)
    }

      return (
        <>

    <input type='text' ref={inputVal }/>
    <button onClick={inputValOpt}>点击</button>
        </>
      );
    }

    const rootElement = document.getElementById("root");
    ReactDOM.render(<SearchResults />, rootElement);

## 4、useContext() -- 应用场景跨组件传值 ,需要 createContext 配合使用

    import {useContext} from 'react'

    import myContext from 'a组件导出的'
    const C = () => {
      const value = useContext(myContext)
      return (

          <div>我是c组件
            {value}
          </div>

      )
    }

    const B = () => {
      return (

          <div>我是b组件
            <C />
          </div>

      )
    }

    const myContext = createContext()
    const A = () => {

      return (
        <Fragment>
          <myContext.Provider value={0}>
            <div>我是a组件</div>
            <B />
          </ myContext>
        <Fragment>
      )
    }
