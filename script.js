
let Searchbtn = document.getElementsByClassName("button")[0]
Searchbtn.addEventListener("click",GetAnime)




let AnimeName
function GetAnime(){
    AnimeName = document.getElementsByClassName("form-control")[0].value
    if(AnimeName.length <3){
        alert("fill atleast 3 char")
    }
    else{
        RandomWord()
        .then((data)=>
        {
            document.getElementsByClassName("gridcontainer")[0].innerHTML=""
            console.log(data)
            let max_length = data.length
            if(data.length >10)
            {
                max_length =10
            }
            for(let i=0;i<max_length;i++)
            {
                let div = document.createElement("div")
                start_date=data[i].start_date.split("T")[0]
                end_date=data[i].end_date
                if(end_date == null)
                {
                    end_date ="Running"
                }
                else{
                    end_date = end_date.split("T")[0]
                }
                div.innerHTML=`<img class="poster" src="${data[i].image_url}" >
                <ul>
                    <li class="title">Title:- ${data[i].title}</li>
                    <li>Type: ${data[i].type}</li>
                    <li>IMDB: ${data[i].score}</li>
                    <li>start_date: ${start_date}</li>
                    <li>end_date: ${end_date}</li>

                </ul>`
                div.setAttribute("class","col")
                document.getElementsByClassName("gridcontainer")[0].appendChild(div)
                console.log(data[i].episodes)
            }
        })
        .catch((err)=>console.log(err))
    }
}

async function RandomWord(){
    try{
       let GetAnimeList = await fetch(`https://api.jikan.moe/v3/search/anime?q=${AnimeName}`)
       let data = await GetAnimeList.json()
       data = data.results
       return data
    }
    catch(err){
        console.log(err)
    }
}


//On loading the page
AnimeName = "naruto"
RandomWord()
        .then((data)=>
        {
            document.getElementsByClassName("gridcontainer")[0].innerHTML=""
            console.log(data)
            let max_length = data.length
            if(data.length >10)
            {
                max_length =10
            }
            for(let i=0;i<max_length;i++)
            {
                let div = document.createElement("div")
                start_date=data[i].start_date.split("T")[0]
                end_date=data[i].end_date
                if(end_date == null)
                {
                    end_date ="Running"
                }
                else{
                    end_date = end_date.split("T")[0]
                }
                div.innerHTML=`<img class="poster" src="${data[i].image_url}" >
                <ul>
                    <li class="title">Title:- ${data[i].title}</li>
                    <li>Type: ${data[i].type}</li>
                    <li>IMDB: ${data[i].score}</li>
                    <li>start_date: ${start_date}</li>
                    <li>end_date: ${end_date}</li>

                </ul>`
                div.setAttribute("class","col")
                document.getElementsByClassName("gridcontainer")[0].appendChild(div)
                console.log(data[i].episodes)
            }
        })
        .catch((err)=>console.log(err))
    





