import React from 'react'
import Blog from './Blog'
import Produk from './Class/Produk';

const Home = () => {
    return <div>
       { 
       <div>
       <Produk nama="Pensil Mekanik Kenko 0.5" stock="98" harga="8000"/> 
       <Produk nama="Snowman Spidol Gl2 Hitam" stock="80" harga="9000"/> 
       <Produk nama="Joyko Correction Jk-101" stock="87" harga="5000"/> 
       <Produk nama="Penggaris Besi 30cm" stock="70" harga="2500"/> 

       </div>
       /*<Blog 
        tanggal="02 Juni 2020"
        judul="Teknologi Blockhain"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic,"
        /> 
         <Blog 
        tanggal="03 Juni 2020"
        judul="Teknologi Internet of Things"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic,"
        /> 
         <Blog 
        tanggal="04 Juni 2020"
        judul="Design Pattern Laravel"
        summary="Generate Lorem Ipsum placeholder text for use in your graphic,"
        /> */}
    </div>
}

export default Home;