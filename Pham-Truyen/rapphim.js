var auth = JSON.parse(window.localStorage.getItem('auth')); 
if(auth){
    document.getElementById('authIsset').innerHTML ='Xin chào '+auth[0].username;
}
else{
    
}