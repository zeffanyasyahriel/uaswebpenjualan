import React, {useState} from 'react'
import TampilComp from './TampilComp';
const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    //login
    const [dataLogin, setDataLogin] = useState({username:'zeffa', token:'123abcd', isiLogin: false})

    //cek kondisi sudah login / belum

    let tampil;
    if(dataLogin.isiLogin){
        tampil = <TampilComp
        username = {dataLogin.username}
        fungsi = {tambahJumlah.bind(this)}
        jumlah = {jumlah} />
    }else{
        tampil= <TampilComp username="Maaf anda belum login" disable= {true}/>
    }

    return (
        <div>
            {tampil}
        </div>
    )

    }

export default HooksComp;