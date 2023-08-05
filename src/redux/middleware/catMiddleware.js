import { ADD_TO_CART, CHECK_CART, EMPTY_CART, INIT, REMOVE_FROM_CART } from "../action/action-type"
import { addToCart, checkCart } from "../action/cartActions";

export function saveCourseMiddleware(store){
    return function(next){
        return function(action){
            if(action.type===ADD_TO_CART){
                let localStorageItem=localStorage.getItem("cart");
                if(!localStorageItem){
                    let cartArray= [action.payload]
                    localStorage.setItem("cart",JSON.stringify(cartArray));
                    return;
                }
               let parseCartData= JSON.parse(localStorageItem)
               parseCartData.push(action.payload);
                localStorage.setItem("cart",JSON.stringify(parseCartData));    
            }

            if(action.type===REMOVE_FROM_CART){
                let localStorageItem=localStorage.getItem("cart")
                if(localStorage){
                    let carts= JSON.parse(localStorageItem)
                    let updatedCart= carts.filter((cart)=>cart.courseId!==action.payload)
                    localStorage.setItem("cart",JSON.stringify(updatedCart));  
                }
            }

            if(action.type===EMPTY_CART){
               localStorage.setItem("cart",[]);
            }

            
  
            next(action);
        }

    }
};


export const checkCartMiddleware = (store) => (next) => (action) => {
    if (action.type === INIT) {
      const cartsData = localStorage.getItem('cart');
      if (cartsData) {  
        store.dispatch(checkCart(JSON.parse(cartsData)));
      } 
    }
    next(action);
  };
  