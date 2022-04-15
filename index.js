function submitData(data){
    fetch('http://localhost:3000/dogs',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/JSON'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}