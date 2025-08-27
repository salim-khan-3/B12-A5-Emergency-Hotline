const services = [
  {
    name: "National Emergency Number",
    serviceType: "National Emergency",
    number: "999",
    category: "All",
    icon: "./assets/emergency.png",
  },
  {
    name: "Police Helpline Number",
    serviceType: "Police",
    number: "999",
    category: "Police",
    icon: "./assets/police.png",
  },
  {
    name: "Fire Service Number",
    serviceType: "Fire Service",
    number: "999",
    category: "Fire",
    icon: "./assets/fire-service.png",
  },
  {
    name: "Ambulance Service",
    serviceType: "Ambulance",
    number: "1994-999999",
    category: "Health",
    icon: "./assets/ambulance.png",
  },
  {
    name: "Women & Child Helpline",
    serviceType: "Women & Child Helpline",
    number: "109",
    category: "Help",
    icon: "./assets/emergency.png",
  },
  {
    name: "Anti-Corruption Helpline",
    serviceType: "Anti-Corruption",
    number: "106",
    category: "Govt.",
    icon: "./assets/emergency.png",
  },
  {
    name: "Electricity Helpline",
    serviceType: "Electricity Outage",
    number: "16216",
    category: "Electricity",
    icon: "./assets/emergency.png",
  },
  {
    name: "Brac Helpline",
    serviceType: "Brac",
    number: "16445",
    category: "NGO",
    icon: "./assets/emergency.png",
  },
  {
    name: "Bangladesh Railway Helpline",
    serviceType: "Bangladesh Railway",
    number: "163",
    category: "Travel",
    icon: "./assets/emergency.png",
  },
];

const cardContainer = document.getElementById("card-container");

for (const service of services) {
  const card = document.createElement("div");
  card.classList = "bg-base-100 max-w-[436px] shadow-sm p-8";

  card.innerHTML = `
  <div class="flex justify-between items-center">
                <div class="p-[14px] bg-[#FFE3E2] rounded-[16px]">
                  <img
                    class="w-8 h-8"
                    src="${service.icon}"
                    alt=""
                  />
                </div>
                <div class="text-2xl heart-button">
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div class="card-body p-0 gap-0">
                <div>
                  <h2 class="card-title font-bold text-2xl">
                    ${service.name}
                  </h2>
                  <p class="text-xl text-[#5C5C5C] mt-1">${service.serviceType}</p>
                </div>
                <div class="my-6">
                  <p class="text-[32px] font-bold text-[#111111]">${service.number}</p>
                  <span
                    class="bg-[#F2F2F2] badge px-4 py-[6px] rounded-full mt-1"
                    >${service.category}</span
                  >
                </div>
                <div class="card-actions justify-end">
                  <button
                    class="btn btn-neutral btn-outline text-[#5C5C5C] cursor-pointer text-[16px] border-[#5C5C5C] flex items-center py-4 flex-1 rounded-[8px] hover:text-[#fff]"
                  >
                    <i class="fa-regular fa-copy"></i><span>Copy</span>
                  </button>
                  <button
                    class="btn bg-[#00A63E] text-[#fff] cursor-pointer text-[16px] rounded-[8px] py-4 flex items-center flex-1"
                  >
                    <i class="fa-solid fa-phone"></i><span>Call</span>
                  </button>
                </div>
              </div>
  `;

  cardContainer.appendChild(card);
}

let heartCounter = 0;
const heartCount = document.getElementById('heartCount');
const heartButton = document.querySelectorAll('.heart-button');

for(const heartBtn of heartButton){
  heartBtn.addEventListener('click', function(){
    heartCounter++;
    heartCount.innerText = heartCounter;
  })
}

