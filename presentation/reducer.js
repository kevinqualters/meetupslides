/**
 * Reducers are a core concept to redux, and enforce the (state, action) => state
 * pattern
 */
 function counter(state = 0, action) {
   switch (action.type) {
   case 'INCREMENT':
     return state + 1;
   case 'DECREMENT':
     return state - 1;
   default:
     return state;
   }
 }
