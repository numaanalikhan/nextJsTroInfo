import Link from "next/link";

function Home (){
  return(<>
  <div className="text-center text-3xl mt-10">
    <h1>This is Home Page Route</h1>
    <Link href={'/about'}>Go to About Page</Link>
  </div>
  </>)
}

export default Home;