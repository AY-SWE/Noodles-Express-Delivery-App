/**
 * Handles request of orders from client to server side
 * orderHandler.js will bring us here, where it will make a new order in sanity studio, then it will send a newly created id  back to orderHandler.js
 */

import { client } from "../../lib/client";

export default async function handler (req, res){
    switch(req.method){
        case "POST":
        const newOrder = await JSON.parse(req.body);
        try{
            await client.create({
                _type: 'order',
                name: newOrder.name,
                phone: newOrder.phone,
                address: newOrder.address,
                total: newOrder.total,
                method: newOrder.method,
                status: 1
            }).then((data)=>{
                res.status(200).json(data._id);
            })
        }   
        catch(err){
            console.log(err);
            res.status(500).json({msg: "POST newOrder error"})
        }
        break;
    }
}