
// loading api data
const loadcontant = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catData = data.data;
    showcategory(catData);

}
// show category
const showcategory = (data) => {
    // console.log(data)
    const catagorySection = document.getElementById('catagory-button')
    data.forEach(catData => {
        const div = document.createElement('div');
        catagory(1000)
        // div.classList.add('div')
        div.classList.add('mt-4')

        div.innerHTML = `
            <button onclick="catagory('${catData.category_id}')" class="btn btn-red" id="active-category-button">${catData.category}</button
        `
        // console.log(catData.category)
        catagorySection.appendChild(div)
    });

}

// category contant
const catagory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    let video_details = data.data;
    // console.log(video_details)

    card(video_details);
    // sort2(video_details)
}

//category card

const card = (video_details) => {
    // get parent element by id
    const phTube_video_card = document.getElementById('phTube-video');
    phTube_video_card.textContent = '';


    if (video_details.length !== 0) {
        video_details.forEach(element => {
           
            //convart time
            let { hour, min } = convartTime(element.others.posted_date)

            const div = document.createElement('div');
            div.classList = "card card-compact bg-base-100 shadow-xl mt-10";
            div.innerHTML = `
     <figure><img src="${element.thumbnail}" alt="Shoes" class="h-[200px]" /></figure>
     <div class="timeSection">
     ${element.others.posted_date ? `<p id="convartTime">${hour} hrs ${min} min ago <p>` : " "} 
     </div>
    
     <div class="card-body flex flex-row">
       <div class="w-[20%]">
       <img src=${element.authors[0].profile_picture}" id="authors-img"/>
       </div>
       <div class="">
       <h2 class="card-title text-lg">${element.title}</h2>
      
       <p class='flex items-center gap-2'>
    ${element.authors[0].profile_name}
    ${element.authors[0].verified ? '<img src="./image/verified-icon.png"  class="w-[20px]"/>' : ''}
    </p>
       <p>${element.others.views}</p>
       </div>
     </div>
     `


            phTube_video_card.appendChild(div)
        });
    }
    // phtube card which is empty

    else {
        const div = document.createElement('div');
        div.classList = "text-center mx-auto w-[100%] md:w-[200%] lg:w-[400%] mt-20"
        div.innerHTML = `
        <img src="./image/icon.png" class="mx-auto"/>
           <h1 class="text-4xl font-bold">Oops!! Sorry, There is no </br>content here</h1>
        `
        phTube_video_card.appendChild(div);
    }


}

const convartTime = (seconds) => {

    const hour = Math.floor(seconds / 3600);
    const min = (Math.floor(seconds % 3600) / 60).toFixed(0);
    // min.toFixed(2)

    return { hour, min }


}
loadcontant()


