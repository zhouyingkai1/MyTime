import * as homeServices from '../services/homeServices'

export default{
  namespace: 'home',
  state: {
    isSearch: false,
    lized: [{
      title: '1古装电视剧里的相思曲，如诗情感如歌话',
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
      times: 1000
    },{
      title: '2歌单名称',
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
      times: 300
    },{
      title: '3古装电视剧里的相思曲，如诗情感如歌话',
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
      times: 212
    },{
      title: '4古装电视剧里的相思曲，如诗情感如歌话',
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
      times: 12
    },{
      title: '5古装电视剧里的相思曲，如诗情感如歌话',
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
      times: 23
    },{
      title: '6古装电视剧里的相思曲，如诗情感如歌话',
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
      times: 1000
    }]
  },
  effects: {
    *getPersonalized({payload}, {call, put}) {
      const result = yield call(homeServices.getPersonalized,'')
      console.log(result,'result')
    }
  },
  reducers: {
    updateState( state, {payload} ){
      return {...state, ...payload}
    }
  }
}