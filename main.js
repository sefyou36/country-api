import './style.css'

const url = `https://restcountries.com/v3.1/all`
// const container = document.createElement("div")
// container.setAttribute("class","container")


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


    const displayUser = (item) =>{
      const container = document.createElement("div")
      container.setAttribute("class","container")
      for(let el of item){
        let template = document.createElement('div')
        template.setAttribute("class","card")
        template.innerHTML = `
        <img src=${el.flags.png} alt="??"/>
        <h3>${el.name.common}</h3>
        <p>Capitale: ${el.capital}</p>
        <p>Continent :${el.continents}</p>
      
    `
  
     container.append(template)
  }
  // container.append(x)
  document.body.append(container)

      }
    
    displayUser(myData)
}

fetchedData()




// console.log(data)
// const displayUser = (item) =>{
//   let template = document.createElement('div')

  
// }
// displayUser(data)
