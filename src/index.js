import store from './store';
import * as actions from './actions'

// const unsubscribe = store.subscribe(()=>{
//     console.log(`store changed`,store.getState())
// })

store.dispatch(actions.bugAdded("bug 1"))
store.dispatch(actions.bugAdded("bug 2"))
store.dispatch(actions.bugResolved(2))
console.log(store.getState())