// import {request} from './request'
import axios from 'axios'
export function getCityData() {
  // return request({
  //   url:'/cityList'
  // })
  return axios.get('/api/cityList')
}


export function getPlayingNowData(cityId) {
  return axios.get('/api/movieOnInfoList', { params: {cityId} })
}


export function getComingingSoonData(cityId) {
  return axios.get('/api/movieComingList', { params: { cityId } })
}


export function getSearchData(cityId,kw) {
  return axios.get('/api/searchList', { params: { cityId,kw } })
}

export function getNowCityData() {
  return axios.get('/api/getLocation')
}