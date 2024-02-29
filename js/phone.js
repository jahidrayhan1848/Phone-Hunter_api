
const phoneDataLoad= async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data= await res.json();
    const phones=data.data
    displayPhone(phones)
}

 const displayPhone=(phones)=>{
    console.log(phones);
    const phoneContainer=document.getElementById('phone-container');
    phones.forEach(phone => {
        // create a div 
        const div=document.createElement('div');
        div.classList=`card w-96 bg-gray-100 p-4 rounded-lg container mx-auto shadow-xl`;
        div.innerHTML=`
       
                    <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                 
        
        
        `;
        phoneContainer.appendChild(div)
        


        
    });

 }
phoneDataLoad();