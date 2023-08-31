const loadcontant = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const catData = data.data;
    showcategory(catData);

}
// show category
const showcategory = (data) => {
    console.log(data)
    const catagorySection = document.getElementById('catagory-button')
    data.forEach(catData => {
        const div = document.createElement('div');
        catagory(1000)
        // div.classList.add('div')
        div.classList.add('mt-4')

        div.innerHTML = `
            <button onclick="catagory('${catData.category_id}')" class="btn btn-red" id="active-category-button">${catData.category}</button
        `


        console.log(catData.category)
        catagorySection.appendChild(div)
    });

}

// category contant
const catagory = async (id) => {
    console.log("this is all", id)
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    let video_details = data.data;
    console.log(video_details)

   card(video_details);
    
}

//category card

const card=(video_details)=>{
    const phTube_video_card = document.getElementById('phTube-video');
    phTube_video_card.textContent = '';

    video_details.forEach(element => {
        console.log(element)
        // console.log(element.authors.profile_picture)
// if (element !="") {
     // phTube-video card
     const div = document.createElement('div');
     div.classList = "card card-compact bg-base-100 shadow-xl mt-10";
     div.innerHTML = `
 <figure><img src="${element.thumbnail}" alt="Shoes" /></figure>
 <div class="card-body flex flex-row">
   <div class="w-3/12">
   <img src=${element.authors[0].profile_picture}" id="authors-img"/>
   </div>
   <div class="">
   <h2 class="card-title text-lg">${element.title}</h2>
  
   <p class='flex items-center gap-2'>
${element.authors[0].profile_name}
${element.authors[0].verified ? '<img src="./image/verified-icon.webp"  class="w-[40px]"/>' : ''}
</p>
   <p>${element.others.views}</p>
   </div>
 </div>
 `
// }
       
        phTube_video_card.appendChild(div)
    });

}

loadcontant()