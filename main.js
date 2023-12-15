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
        <img  class ="img" src=${el.flags.png} alt="??"/>
        <h3>${el.name.common}</h3>
        <p><b>Capitale:</b> ${el.capital}</p>
        <p><b>Continent:</b>${el.continents}</p>
      
    `
  
     container.append(template)
  }
  // container.append(x)
  document.body.append(container)

      }
    
    displayUser(myData)
}

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Search for a country");
document.body.append(searchInput);


const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  document.body.append(searchButton);


fetchedData()




// console.log(data)
// const displayUser = (item) =>{
//   let template = document.createElement('div')

  
// }
// displayUser(data)
