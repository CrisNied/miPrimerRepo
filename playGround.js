function agregarHttp(url) {
    return "http://" + url
}

function procesar(url, callback){
    let links = []
    for(let i = 0; i < url.length; i++){
        links.push(callback(url[i]));
    }
    return links
}
console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp));