const mypromise = new Promise((resolve,reject) => {
    let sucess = true;
    if(sucess) {
        resolve("Promise resolved")
    }else{
        reject("Promise rejected")
    }
}
);
mypromise.then((message) => console.log(message)
)
.catch((err) => console.log(err)
);
 