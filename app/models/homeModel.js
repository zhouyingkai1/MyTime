export default{
  namespace: 'home',
  state: {
    imgData: [{
      id: 1,
      img: 'http://ww4.sinaimg.cn/large/610dc034jw1f41lxgc3x3j20jh0tcn14.jpg',
    },{
      id: 2,
      img: 'http://ww4.sinaimg.cn/large/610dc034jw1f76axy6xcsj20u00yqq49.jpg',
    },{
      id: 3,
      img: 'http://ww2.sinaimg.cn/large/610dc034jw1f72v5ra09fj20u011hdit.jpg',
    },{
      id: 4,
      img: 'http://ww3.sinaimg.cn/large/610dc034gw1f5pu0w0r56j20m80rsjuy.jpg',
    },{
      id: 5,
      img: 'http://ac-olwhhm4o.clouddn.com/4063qegYjlC8nx6uEqxV0kT3hn6hdqJqVWPKpdrS',
    },{
      id: 6,
      img: 'http://ww4.sinaimg.cn/large/7a8aed7bjw1f1yjc38i9oj20hs0qoq6k.jpg',
    },{
      id: 7,
      img: 'http://ww4.sinaimg.cn/large/7a8aed7bjw1ezrtpmdv45j20u00spahy.jpg',
    }],
    dataList: [],
    visible: false,
    text: '',
    modalImg: '',
    total: 1,
    isrefresh: false,
    currentPage: 1,
    isFull: false,
    didMount: false
  },
  effects: {
    *fetchData({payload}, {call, select, put}) {
      const total = yield select(state=> state.home.total)
      if(page > total ){
        yield put({
          type: 'updateState',
          payload: { isFull: true}
        })
        return
      }
      const result = yield call(TestApi.artcleList, payload)
      if(result.code == '000'){
        if(page>1){
          yield put({
            type: 'updateState',
            payload: {
              dataList: this.state.dataList.concat(data.data),
              total: Math.ceil(data.total/10),
              refresh: false,
              isLoading: false,
              currentPage: page
            }
          })
        }else{
          yield put({
            type: 'updateState',
            payload: {
              dataList: data.data,
              total: data.total,
              refresh: false
            }
          })
        }
      }
    }
  },
  reducers: {
    updateState( state, {payload} ){
      return {...state, ...payload}
    }
  }
}