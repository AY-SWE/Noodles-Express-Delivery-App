//filename is within square brackets because slug is dynamic
/*
    This is what each individual noodle order page would look like, created dynamically
    
    @author Andy Yang
*/

import css from '../../styles/Order.module.css'
import Layout from '../../components/Layout';
import { client, urlFor } from '../../lib/client';
import Image from 'next/image';
import Cooking from "../../sampleImages/cooking2.png"
import Spinner from "../../sampleImages/spinner.svg"
import Onway from "../../sampleImages/onway.png"
import {UilBill, UilBox } from "@iconscout/react-unicons"

export const getServerSideProps = async({params}) => {
    const query = `*[_type == "order" && _id == '${params.id}']`;
    const order = await client.fetch(query);
    return {
      props:{
        order: order[0] 
      }
    }
  }

export default function Orders({order}) {
    return(
      <Layout>
          <div className={css.container}>
              <span className={css.heading}>
                  Order in Process
              </span>

              <div className={css.details}>
                  <div><span>Order ID </span><span># {order._id}</span>
                  </div>
                  <div><span>Customer Name </span><span>{order.name}</span>
                  </div>
                  <div><span>Phone </span><span>{order.phone}</span>
                  </div>
                  <div><span>Method </span><span>{order.method === 0?'Cash upon Delivery':'Online Payment (Paid)'}</span>
                  </div>
                  <div><span>Total </span><span>$ {order.total}</span>
                  </div>
              </div>

              <div className={css.statusContainer}>
                  <div className={css.status}>
                    <UilBill width={50} height={50}/>
                      <span>Payment</span>
                      {order.method === 0?<span className={css.pending}>Pay upon Delivery</span> 
                      : <span className={css.pendingOnline}>Paid via Online</span>}
                  </div>

                  <div className={css.status}>
                      <Image src={Cooking} alt="" width={55} height={55   }/>
                      <span>Cooking</span>

                      {order.status === 1 && (
                        <div className={css.spinner}>
                            <Image src={Spinner} alt=""/>
                        </div>
                      )}

                      {order.status > 1 && (
                        <span className={css.completed}>Completed</span>
                      )}
                  </div>

                  <div className={css.status}>
                      <Image src={Onway} alt="" width={50} height={50}/>
                      <span>En route</span>

                      {order.status === 2 && (
                        <div className={css.spinner}>
                            <Image src={Spinner} alt=""/>
                        </div>
                      )}

                      {order.status > 2 && (
                        <span className={css.completed}>Completed</span>
                      )}
                  </div>

                  <div className={css.status}>
                      <UilBox width={50} height={50}/>
                      <span>Delivered</span>

                      {order.status === 3 && (
                        <div className={css.spinner}>
                            <Image src={Spinner} alt=""/>
                        </div>
                      )}

                    {order.status > 3 && (
                        <span className={css.completed}>Completed</span>
                      )}
                      
                  </div>


              </div>
          </div>
      </Layout>
    )
};
