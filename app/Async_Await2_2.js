//Nivell 2 Exercici 1


const dosSeg = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve (`hola`);
        }, 2000)
    })
}
async function nivell2(){
    try{
        console.log(await dosSeg())
    } catch(err){
        console.log(err)
    }
  }

//nivell2();

module.exports ={
    nivell2
}

