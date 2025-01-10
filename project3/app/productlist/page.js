import Product from "./Product";

 async function ProductList() {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        
    return (
            <>
                {data.products.map((item) => (
                    <>
                <h1 key={item.id}>{item.title}</h1>
                <Product price={item.price}/>
                    </>
            ))}
        </>
    );
}

export default ProductList


// export const getStaticProps =async ()=>{
//         const res = await fetch('https://dummyjson.com/products')
//         const data = await res.json()
//         console.log(data?.products);
//         return {
//             props: { products: data.products }
//           };
        
        
//     }
// function ProductList({products}) {
    
//   return (
//     <>
//         {products.map((item)=>{
//             return(
//                 <h1 key={item.id}>
//                     {item.title}
//                 </h1>
//             )
//         })}
//     </>
//   )
// }