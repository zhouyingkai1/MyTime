import * as homeServices from '../services/homeServices'

export default{
  namespace: 'home',
  state: {
    isSearch: false,
    banner:[],
    listsOrder: [{
      id: 0,
      key: 'lized',
      name: '推荐歌单'
    },{
      id: 1,
      key: 'newSongs',
      name: '最新音乐'
    },{
      id: 2,
      key: 'mv',
      name: '推荐MV'
    },{
      id: 3,
      key: 'dj',
      name: '主播电台'
    },{
      id: 4,
      key: 'privatecontent',
      name: '独家放送'
    }],
    lized:[],
    newSongs: [],
    mvList: [],
    djList: [],
    privatecontent: [],
    isDidMount: false
  },
  effects: {
    // dj电台
    *getDjProgram({payload}, {call, put}) {
      const result = yield call(homeServices.getDjProgram,'')
      if(result.code == 200){
        yield put({
          type: 'updateState',
          payload: {
            djList: result.result
          }
        })
      }
    },
    //独家放送
    *getPrivatecontent({payload}, {call, put}) {
      const result = yield call(homeServices.getPrivatecontent,'')
      if(result.code == 200){
        yield put({
          type: 'updateState',
          payload: {
            privatecontent: result.result
          }
        })
        storage.save({
          key: 'privatecontent',  
          data: result.result,
          expires: null
        });
      }
    },
    *getBanner({payload}, {call, put}) {
      const result = yield call(homeServices.getBanner,'')
      if(result.code == 200){
        yield put({
          type: 'updateState',
          payload: {
            banner: result.banners
          }
        })
        storage.save({
          key: 'banner',  
          data: result.banners,
          expires: null
        });
      }
    },
    *getMv({payload}, {call, put}) {
      const result = yield call(homeServices.getMv,'')
      if(result.code == 200){
        yield put({
          type: 'updateState',
          payload: {
            mvList: result.result
          }
        })
        storage.save({
          key: 'mvList',  
          data: result.result,
          expires: null
        });
      }
    },
    //推荐歌单
    *getPersonalized({payload}, {call, put}) {
      const result = yield call(homeServices.getPersonalized,'')
      if(result.code == 200){
        yield put({
          type: 'updateState',
          payload: {
            lized: result.result
          }
        })
        storage.save({
          key: 'lized',  
          data: result.result,
          expires: null
        });
      }
    },
    *getNewSong({payload}, {call, put}) {
      const result = yield call(homeServices.getNewSong,'')
      if(result.code == 200){
        let data =  result.result.slice(0,5)
        data.unshift({
          id: 0,
          name: '新歌推荐',
          song:{
            artists:[
              {
                name: '推荐合口味的新歌'
              }
            ]
          }
        })
        yield put({
          type: 'updateState',
          payload: {
            newSongs: data
          }
        })
        storage.save({
          key: 'newSongs',  
          data: data,
          expires: null
        });
      }
    },
  },
  reducers: {
    updateState( state, {payload} ){
      console.log(payload,'payload')
      return {...state, ...payload}
    }
  }
}