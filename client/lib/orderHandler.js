/*
    This is we handle the formData from order modal
    we will call createOrder function in orderModal.js when we click place order
    
    @author Andy Yang
*/

export const createOrder = async({name, phone, address, total, paymentMethod})=>{
    const res = await fetch('/api/order',{       //fetch is a default function in next.js framework, we dont need to setup axios or express
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            method: paymentMethod,
            status: 1
        }),
    });

    const id = await res.json();  //page/api/order will return the id      
    return id;
} 