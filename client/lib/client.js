/*
    This is where we connect our sanity datastore with our next.js application
    
    @author Andy Yang
*/

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "aky3mmcd",
    dataset: "production",
    apiVersion: "2022-07-21",
    useCdn: true,
    token:  "skEayuKIDfbHyslWboQe3xUBfeOjOwkQ18wCOn96fO6SeKPLH4kr3gv12t515XDmePl7oztQ4ljJ3sFx285ZoNVVRFBGeThUqQFJdM7tjQmBBjNNykMybpKSgP3Yl6fEXfpBjydjb4PVCr2tdvoxPxgeBo5erUsSY21PF3JCKLIIejqkmsRM"                    
    // token copied from sanity.io, manage projects settings - api 
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);   //function will load image from databse to clientside