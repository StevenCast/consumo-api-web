 
 let url = `https://jsonplaceholder.typicode.com/users`
 
const getUsers = async() => {

    try {
        let response = await fetch(url);
        let data = await response.json();
        paintUsers(data);
    } catch (error) {
        console.log(error);
    }
}


getUsers()


const paintUsers = (data) => {
    let body = ""
    for(let i =0; i< data.length; i++){
        body+= `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById("data").innerHTML = body;
}


