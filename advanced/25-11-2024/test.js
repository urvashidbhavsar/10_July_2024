async function greeting(){
    return "helo good morning"
}

// console.log(greeting());
// greeting().then(msg=>console.log(msg))

// asyn await

console.log("fisrt line ------")

async function helloPrintafter_Await (){
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("settimetimeout call --------")
        },3000)
    })
    let result = await data
    console.log(result)
    console.log("second line --------")
}

helloPrintafter_Await()

// console.log("end ------")