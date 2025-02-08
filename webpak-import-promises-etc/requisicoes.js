
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); //tipo requisição, url, se é assíncrono ou não
    xhr.send(); //dados para mandar

    xhr.addEventListener('load', ()=>{
        xhr.status
    })
};