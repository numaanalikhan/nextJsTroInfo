import Image from "next/image"
function Home (){
  
  return(
    <div className="  bg-yellow-100">
    {/* <img  className="mx-auto" src="https://www.hdwallpapers.in/download/pixars_up_movie_widescreen-1280x800.jpg"/> */}
    <Image
    className="mx-auto"
    src="https://m.media-amazon.com/images/M/MV5BMTMyODc0ODI2OF5BMl5BanBnXkFtZTcwODQ5OTIzMw@@._V1_.jpg"
    width={900}
    height={900}
    alt="it is a Image"
    />
    </div>
  )
}

export default Home