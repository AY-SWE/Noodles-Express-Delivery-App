/*
    This is our Zustand global store management
    
    @author Andy Yang
*/

import create from 'zustand'

export const useStore = create(
    (set) => ({
        //cart
        cart:{                  //object
            noodles:[]
        },

        //add Noodle in cart
        addNoodles: (data) => set((state)=> ({      //function
            cart: {
                noodles: [...state.cart.noodles, data]
            }
        }))
    }) 
)
