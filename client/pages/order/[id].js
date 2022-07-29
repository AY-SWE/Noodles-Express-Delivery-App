export const getServerSideProps = async({params}) => {
    const query = `*[_type == "order" && _id == '${params.id}']`;
    const noodles = await client.fetch(query);
    return {
      props:{
        noodles 
      }
    }
  }

export default function Orders({order}) {
    
};
