//filename is within square brackets because slug is dynamic
/*
    This is what each individual noodle page would look like
    
    @author Andy Yang
*/

import Layout from '../../components/Layout'
import React from 'react'
import { client } from '../../lib/client';

export default function Noodle({noodles}){       
    console.log(noodles);       //fixed by console log noodles, not noodle
    return(
        <Layout>
            asd
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