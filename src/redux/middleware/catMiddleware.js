import { addItemToCart, getAllItemFromCart, removeAllCart, removeItemFromCart } from "../../service/CartService";
import { ADD_TO_CART, CHECK_CART, EMPTY_CART, INIT, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART } from "../action/action-type"
import { addToCart, checkCart, removeFromCart } from "../action/cartActions";
import { toast } from "react-toastify";

export function saveCourseMiddleware(store) {
    return function (next) {
        return  function (action) {
            if (action.type === ADD_TO_CART) {
                console.log(2)
                try{
                    // addItemToCart(action.payload.courseId);
                }catch(err){
                    const {status}=err;
                    console.log(status)
                }
            }

            if (action.type === REMOVE_FROM_CART) {
                console.log("remove from cart", action.payload)
                try{
                    removeItemFromCart(action.payload);
                }catch(err){
                    console.log(err)
                }
            }

            if (action.type === REMOVE_ALL_FROM_CART) {
                try{
                    removeAllCart();  
                }catch(err){
                    console.log(err)
                }
                 
            }



            next(action);
        }

    }
};


export const checkCartMiddleware = (store) => (next) => async (action) => {
    if (action.type === INIT) {
        try {
            const { data } = await getAllItemFromCart()
            if (data) {
                store.dispatch(checkCart(data));
            }
        } catch (err) {
            console.log(err.response.status)
            const { status } = err;
        }
    }
    next(action);
};
