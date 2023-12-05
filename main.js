import './style.css'

const url = `https://restcountries.com/v3.1/all`
const root = document.querySelector("#app")
const container = document.querySelector(".container")


let myData = []
const fetchUser = async () =>{
try {
    const response =  await fetch(url)
    const data = await response.json()
        
        for(let e of data){
          myData.push(e)
        }
} catch (error) {
    console.log("error ===========>",error)
}
}

const fetchedData = async ()=>{ 
     await Promise.all([fetchUser()])

    console.log("myData",myData)
    // displayUser(myData)
    let x = document.createElement("div")
    const displayUser = (item) =>{
      let template = document.createElement('div')
      template.setAttribute("class","card")
      for(let el of item){
        template.innerHTML = `
        <img src=${el.flags.png} alt="??"/>
        <h3>${el.name.common}</h3>
        <p>Capitale: ${el.capital}</p>
        <p>Continent :${el.continents}</p>
      
    `
  
     container.append(template)
  }
  // container.append(x)

      }
    
    displayUser(myData)
}

fetchedData()




// console.log(data)
// const displayUser = (item) =>{
//   let template = document.createElement('div')

  
// }
// displayUser(data)
