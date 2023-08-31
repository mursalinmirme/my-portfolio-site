const loadData = async (searchValue='13',isShowAll) =>{
    const apiUrl = (`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const jsonData = await fetch(apiUrl);
    const data = await jsonData.json();
    const phones = data.data;
    console.log(phones)
    displayPhones(phones,isShowAll);
}
// search mobile function 
const searchValue = (isShowAll) =>{
    const phonesContainer = document.getElementById('phonesContainer')
    phonesContainer.innerHTML = '';
    showLoading(true);
    const SearchIput = document.getElementById('SearchIput').value;
    loadData(SearchIput,isShowAll);
}

// 
const showLoading = (isLoading) =>{
    const showLoading = document.getElementById('loading-spiner');
    if(isLoading){
        showLoading.classList.remove('hidden');
    }else{
        showLoading.classList.add('hidden');

    }
}
// show all items 
const showAllMobile = () =>{
    searchValue(true);
}

// searchValue();




// display mobiles
const displayPhones = (phones,isShowAll) =>{
    const emptyMessage = document.getElementById('emptyMessage');
    if(phones.length === 0){
        emptyMessage.classList.remove('hidden')
    }else{
        emptyMessage.classList.add('hidden')
    }

    const showallBtn = document.getElementById('showAllBtn');
    if(phones.length > 12 && !isShowAll){
        showallBtn.classList.remove('hidden')
    }else{
        showallBtn.classList.add('hidden')

    }
    if(!isShowAll){
        phones = phones.slice(0,12);
    }

    // console.log(phones)
    phones.forEach(phone => {
       
    const cardDiv = document.createElement('div');
    cardDiv.classList = `p-5 border rounded-lg border-gray-300`;
    cardDiv.innerHTML = `
    <div class="flex py-10 justify-center items-center rounded-lg bg-gray-200">
        <img class="w-[170px] h-[200px] rounded-xl" src="${phone.image}" alt="">
    </div>
    <div class="text-center">
       <h3 class="mt-8 text-2xl font-bold">${phone.phone_name}</h3>
          <p class="text-base mt-4 text-gray-500 px-7">There are many variations of passages of available, but the majority have suffered</p>
             <h4 class="font-bold text-2xl mt-5">$999</h4>
        <button onclick="mobileInfo('${phone.slug}')" class="bg-sky-500 py-2.5 text-white font-medium mt-5 text-base px-5 rounded-lg border-none outline-none">Show Details</button>
    </div>
    `;
    phonesContainer.appendChild(cardDiv);
    });
// hide speiner
showLoading(false);
}

// mobile info
const mobileInfo = async (slug) =>{
    // alert(slug);
    const api = `https://openapi.programming-hero.com/api/phone/${slug}`;
    const getData = await fetch(api);
    const jsonPhoneDetail = await getData.json();
    const phoneDetail = jsonPhoneDetail.data;
    showModbileInfo(phoneDetail);
}

const showModbileInfo = (phoneDetail) => {
    // console.log(phoneDetail);
const modalContainer = document.getElementById('modalContainer');
    // call modal
    showMobileInfo.showModal();

    modalContainer.innerHTML = `
    <div class="flex py-10 justify-center items-center rounded-lg bg-gray-200">
        <img class="w-[220px] h-[300px] rounded-xl" src="${phoneDetail.image}" alt="">
        </div>
    <div class="">
    <h3 class="mt-8 text-2xl font-bold">${phoneDetail.name}</h3>
        <p class="text-base mt-4 text-gray-500">There are many variations of passages of available, but the majority have suffered</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Storage:</span> ${phoneDetail?.mainFeatures?.storage}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Display-Size:</span> ${phoneDetail?.mainFeatures?.displaySize}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Chipset:</span> ${phoneDetail?.mainFeatures?.chipSet}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Memory:</span> ${phoneDetail?.mainFeatures?.memory}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Slug:</span> ${phoneDetail?.slug}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Release date:</span> ${phoneDetail?.releaseDate}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">Brand:</span> ${phoneDetail?.brand}</p>
        <p class="mt-5 text-gray-500"><span class="font-semibold text-gray-600">GPS:</span> ${phoneDetail?.others?.GPS}</p>
        
    </div>
    `
}



loadData();






