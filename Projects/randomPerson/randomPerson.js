const url = "https://randomuser.me/api/";
    
function userDetails(firstName ,lastName ,gender, cellPhone , address , email , age , picture){
        document.querySelector('img').src=`${picture}`;
        document.querySelector('h5').innerHTML = `
        Hi ! My Name is ${firstName} ${lastName}  
        <br> 
        Gender : ${gender}
        <br>
        cell phone : ${cellPhone}
        <br>
        Address : ${address} 
        <br>
        Email : ${email} <br> 
        Age : ${age}`;
    }

userDetails('Varun' , 'Chandola' ,'Male' ,'9027437838' , 'Nawabi Road , Haldwani' , 'varun7122001@gmail.com' ,'22' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/399px-Brad_Pitt_2019_by_Glenn_Francis.jpg')


// async function newUser(){
//     try{
//         const response = await fetch(url);
//         const details =  await response.json()
//         let info = details.results[0];
//         userDetails(info.name.first , info.name.last,info.gender,info.cell,info.location.city , info.email , info.registered.age  , info.picture.medium)
//     }catch(err){
//         alert('error : ' ,err);
//     }
// }



function newUser(){
    fetch(url)
    .then((response)=>{
        return response.json();
    }).then((details)=>{
        let info =  details.results[0] ;
        userDetails(info.name.first , info.name.last,info.gender,info.cell,info.location.city,info.email,info.registered.age,info.picture.medium);
    }).catch((err)=>{
        alert(err)
    })
}

const button = document.querySelector('button');
button.addEventListener('click' , newUser )
