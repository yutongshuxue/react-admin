import React from "react";
import {connect} from 'react-redux'

const BookDetail = (props) => {

  console.log(props)
  const { city } = props

  return (
    <div>图书详情页--{city}</div>
  )
}

const mapStateToProps = state =>{
  return {
    city:state.city.city
  }
}

export default connect(mapStateToProps,null)(BookDetail)