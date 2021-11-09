//Nivell 2 Exercici 1


const dosSeg = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (`hola`);
        }, 2000)
    })
}
async function nivell2(){
    try{
        const msg = await dosSeg()
        console.log(msg)
        return msg
    } catch(err){
        console.log(err)
    }
  }

//nivell2();

module.exports ={
    dosSeg,
    nivell2
}

