//filename is within square brackets because slug is dynamic
/*
    This is what each individual noodle page would look like
    
    @author Andy Yang
*/

import Layout from '../../components/Layout'
import React from 'react'
import { client, urlFor } from '../../lib/client';
import css from '../../styles/Noodle.module.css'
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { fontSize, style } from '@mui/system';
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast, {Toaster} from "react-hot-toast"

export default function Noodle({noodles}){          //prop received from getstaticprop   
    console.log(noodles);       //fixed by console log noodles, not noodle

    const [counter, setCounter] = useState(1);
    const src = urlFor(noodles.image).url();

    //handle quantity
    const handleCounter= (type) =>{
        type === "inc"
        ?setCounter((prev)=>prev+1)
        :counter === 1
        ? null
        :setCounter((prev)=> prev-1);
    };

     //handle add to cart function
     const addNoodles = useStore((state)=> state.addNoodles);
     const handleAddToCart= () =>{
        addNoodles({...noodles, price: noodles.price, quantity: counter })
        toast.success ("Added to Cart"); 
    };
    return(
        <Layout>
            {/* leftside */}
            <div className={css.container}>
                    <div className={css.noodleImage}>
                        <Image 
                        loader={()=>src} layout="fill" unoptimized objectFit='cover'
                        src={src} alt=""></Image>        {/* src = src because we're fetching image dynamically from dataset */}
                        
                    </div>
            
                
                <div className={css.rightSide}>
                    <span>{noodles.name}</span>
                    <span>{noodles.details}</span>
                    <span>$ {noodles.price}</span>
                    {/* rightside */}
                    <div className={css.quantity}>
                        <span>Quantity</span> 
                    </div>

                    <div className={css.counter}>
                        <div className={css.counterIcon} onClick={() => handleCounter("dec")}>
                            <RemoveIcon sx={{fontSize:"30px"}}/>
                        
                        </div>
                        <span>{counter}</span>

                        <div className={css.counterIcon} onClick={() => handleCounter("inc")}>
                            <AddIcon sx={{fontSize:"30px"}}/>
                   
                        </div>
                      </div>

                      {/* button */}
                      <div className={`buttons ${css.addToCartBtn}`} onClick={handleAddToCart}> 
                            Add to Cart
                      </div>
                </div>  
                <Toaster/>
            </div>
        </Layout>
    )
};

export async function getStaticPaths(){     //if a page has dynamic routes and uses getstaticprops, it needs to define a list of paths to be statically generated
    const paths = await client.fetch(           //a query
        `*[_type == "noodles" && defined(slug.current)][].slug.current` 
    );

    return {
        paths: paths.map((slug) => ({
            params:{slug}
        })),
        fallback: "blocking"
    };
}

export async function getStaticProps(context){
    const {slug = ""} = context.params;
    const noodles = await client.fetch(
        `*[_type == "noodles" && slug.current == '${slug}'][0]`
    );
    return{
        props: {
            noodles
        }
    };
}