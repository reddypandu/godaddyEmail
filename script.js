const ul = document.createElement("ul");
ul.id = "las"
ul.className = "las"


const items = [
    {
        id:1,
        title:"Pandu",
        imgSrc:"https://tpc.googlesyndication.com/simgad/3947044915096088566",

    },
    {
        id:2,
        title:"Ranga",
        imgSrc:"https://www.whois.com/images/chiclet_wph.png",

    },
    {
        id:3,
        title:"Reddy",
        imgSrc:"https://www.whois.com/images/tld/site.png",

    },
    {
        id:4,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:5,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:6,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:7,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:8,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:9,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:10,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:11,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
    {
        id:12,
        title:"Pothula",
        imgSrc:"https://www.whois.com/images/tld/today.png",

    },
];
items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
   
    <h3>${item.id}. ${item.title}</h3>
    <img src="${item.imgSrc}"/>
    `;
    ul.appendChild(li);
});




const red = document.getElementById("red");

red.appendChild(ul)
