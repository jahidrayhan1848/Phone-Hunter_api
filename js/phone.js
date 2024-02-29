
const phoneDataLoad= async(searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data= await res.json();
    const phones=data.data
    displayPhone(phones)
}

 const displayPhone=(phones)=>{
   console.log(phones.length);
   //  show all button container 
   const showAllContainer = document.getElementById('show-all-container');
  //  console.log(showAllContainer);
   if (phones.length > 12) {
    showAllContainer.classList.remove('hidden')
   }
   else {
     showAllContainer.classList.add('hidden')
    }
    phones=phones.slice(0,12)
  //  display 12 phones 
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
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
   loadingSpinner(false)
   

}
 
const handleData = () => {
  loadingSpinner(true)
  const inputText = document.getElementById("search-text");
  const inputValue = inputText.value;
  phoneDataLoad(inputValue)
}
const loadingSpinner = (loading) => {
  const loadingContainer = document.getElementById('loading-container');
  if (loading) {
    loadingContainer.classList.remove('hidden')
  }
  else {
    loadingContainer.classList.add('hidden')
  }

 }
phoneDataLoad('iphone');