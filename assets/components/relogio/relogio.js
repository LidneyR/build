relogio=()=>{

    const data=new Date()
    let hr=data.getHours()
    let mn=String(data.getMinutes()).padStart(2, '0');
    let ms=String(data.getSeconds()).padStart(2, '0')

    let horaatual=hr+":"+mn+":"+ms
    console.log(horaatual)

    // console.log(horaatual)
    return horaatual
}

a=1
genarateID=()=>{
    // console.log(a+=1)
    return a+=1
}
 
//  setInterval(relogio(),500)

//  setInterval(genarateID, 500);