import React from "react";
import {connect} from 'react-redux'
import { changeCity } from '@/redux/actions/city'

const Book = (props) => {

  const changeName = () => {
    props.change()
  }

  return (
    <div onClick={changeName}>图书列表页</div>
  )
}

const mapDispathToProps = dispatch => {
  return{
    change:() => {
      dispatch(changeCity())
    }
  }
}

export default connect(null,mapDispathToProps)(Book)