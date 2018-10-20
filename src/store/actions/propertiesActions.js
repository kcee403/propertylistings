import * as actionTypes from './actionTypes.js';
import data from '../../components/data/Data';
//
// export const fetchOrders = () => {
//     return dispatch => {
//         dispatch(fetchOrdersStart());
//         axios.get( '/orders.json' )
//             .then( res => {
//                 const fetchedOrders = [];
//                 for ( let key in res.data ) {
//                     fetchedOrders.push( {
//                         ...res.data[key],
//                         id: key
//                     } );
//                 }
//                 dispatch(fetchOrdersSuccess(fetchedOrders));
//             } )
//             .catch( err => {
//                 dispatch(fetchOrdersFail(err));
//             } );
//     };
// };
//
// export const toggleFilter = () => {
//   const action = {
//     type: actionTypes.TOGGLEFILTER,
//   }
//   return action;
// }

export const fetchProperties = () => {

  const action = {
    type: actionTypes.FETCHPROPERTIES,
    data,
  }
  return action;
}
