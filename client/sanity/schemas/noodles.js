/*
    This is where we specify the format of the data we're going to put into
    the database.
    
    @author Andy Yang
*/

export default{
    name:'noodles',
    title:'noodles',
    type: 'document',
    fields:[
        {
            name: 'image',
            title:'image',
            type:'image',
            options:{
                hotspot: true           //when we need to crop.modify the image directly, cool feaature in sanity studio
            }
        },
        {
            name: 'name',
            title:'name',
            type:'string'
        },
        {
            name: 'slug',       //slug is an unique url
            title:'slug',
            type:'slug',
            options:{
                source: 'name',
                maxLength:90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of: [{type:'number'}]
        },
        {
            name: 'details',
            title: 'details',
            type: 'string',
        }
    ]
}