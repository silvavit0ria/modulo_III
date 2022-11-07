function createNode(element){
    return document.createElement(element)
}
function append(parent, el){
    return parent.appendChild(el)
}
const ol = document.getElementById("atores")
const url = "https://randomuser.me/api/?results=10&nat=BR"
fetch(url)
    .then((resp)=>resp.json())
    .then(function(data){
        let atores=data.results 
        return atores.map(function(ator){
            let li= createNode("li")
            let img = createNode("img")
            let span = createNode("span")
            
            img.src = ator.picture.medium
            span.innerHTML= `${ator.name.first} ${ator.name.last} ${ator.location.state} ${ator.location.country}`
            append(li, img)
            append(li, span)
            append(ol, li)
          
        })
    })
    .catch(function(error){
        console.log(error)
    })