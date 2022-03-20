const container = document.querySelector('#dog-image-container')
const secondContainer = document.querySelector('#dog-breeds')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.querySelector('#breed-dropdown')
let imgArray = []

dropDown.addEventListener('change',handleChange)
secondContainer.addEventListener('click', handleclick)
 
function imgContainer(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images =>{
        const imgs = images.message 
         imgArray = imgs.map((img) =>{
            let i = `<img src=${img}>`
            return i
            })
        imgArray.forEach(element => {
            container.innerHTML +=element
        });
    })

}

function breedContainer(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breed =>{
       const breeds = Object.keys(breed.message)
       let breedArray = breeds.map((breed)=>{
           let li = `<li>${breed}</li>`
           return li
       })
       breedArray.forEach(element => {
           secondContainer.innerHTML += element
       })
    })
    
} 
function handleclick(event){
    if(event.target.nodeName === 'LI'){
        if(event.target.style.color === 'blue'){
            return event.target.style.color = "black"
        }else{
           return  event.target.style.color = 'blue'
        }
    }
    
}

function handleChange(event){
    const changeMe =  event.target.value
    console.log(breedArray)
    console.log(changeMe)
}

imgContainer()
breedContainer()