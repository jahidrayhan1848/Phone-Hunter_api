
const phoneDataLoad= async(searchText,isShowAll)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data= await res.json();
    const phones=data.data
    displayPhone(phones,isShowAll)
}

 const displayPhone=(phones,isShowAll)=>{
  //  console.log(phones);
   //  show all button container 
   const showAllContainer = document.getElementById('show-all-container');
  //  console.log(showAllContainer);
   if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove('hidden')
   }
   else {
     showAllContainer.classList.add('hidden')
   }
   //  console.log('show all', isShowAll );
   if (!isShowAll) {
      
     phones=phones.slice(0,12)
    }
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
                      <div class="card-actions justify-center">
                        <button onClick="showSinglePhoneData('${phone.slug}')" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
                 
        
        
        `;
        phoneContainer.appendChild(div)
        


        
    });
   loadingSpinner(false)
   

}
 
const handleData = (isShowAll) => {
  // console.log(isShowAll)
  loadingSpinner(true)
  const inputText = document.getElementById("search-text");
  const inputValue = inputText.value;
  phoneDataLoad(inputValue,isShowAll)
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
 
// handle showall button 
const handleShowAll = () => {
  handleData(true)
  
}

// show details single phone
const showSinglePhoneData = async (id) => {
  // console.log('clicked', id);
  // data load by single Id 
  const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone= data.data
  showDetails(phone)
  
  
  
}

//  show details on modal \
const showDetails = (phone) => {
  console.log(phone)
  const {image,name,mainFeatures}=phone
  show_single_data_ByID.showModal()
  // modal container div 
  const modalContainer = document.getElementById('model-container');

  modalContainer.innerHTML = `
      <div class= "text-center w-[268px]">
     <img src="${image}" alt="">
      <div class="my-7">
    <h3  class="font-bold text-3xl">${name}</h3>
     <p><span>Storage:${mainFeatures.storage}</span></p>
      </div>
   </div>
  
  `;
 

  
}


phoneDataLoad('iphone');