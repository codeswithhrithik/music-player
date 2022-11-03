`// let d=document.createElement("div");
// d.classList.add("two");
// let h=document.createElement("h1");
// h.append("New");
// d.append(h);
// document.querySelector(".one").append(d);
// project js
let musics=[

    {
        id:1,
        name:"French kiss",
        artist:"sabir toshib",
        audioSrc:"jss-ess/First JavaScriipt Project/Songs/01 - French Kiss - DownloadMing.SE.mp3",
        imageSrc:"./Images/Frenchkiss.jpg"
    },
    {
        id:2,
        name:"Adhi Adhi Raat",
        artist:"Bilaal Shed",
        audioSrc:"./Songs/01 Adhi Adhi Raat (Bilal Saeed).mp3",
        imageSrc:"./Images/adhi adhi raat.jpg"
    },
    {
        id:3,
        name:"Barish",
        artist:"Arijit , shreya",
        audioSrc:"./Songs/01 Baarish - Half Girlfriend (Ash King) 190Kbps.mp3",
        imageSrc:"./Images/barish.jpg"
    },
    {
        id:4,
        name:"Laboon Ka kalobar",
        artist:"uknown",
        audioSrc:"./Songs/01 Labo Kaa Kalobar - 190Kbps.mp3",
        imageSrc:"./Images/laboon ka karobar.jpg"
    },
    {
        id:5,
        name:"Music is my art",
        artist:"Nimat Salamat ",
        audioSrc:"./Songs/01 Music Is My Art (Niamat Salaamat) Zubaan - 190Kbps.mp3",
        imageSrc:"./Images/music is my art.jpg"
    },
    {
        id:6,
        name:"Sasoon ko",
        artist:"Arijit Singh",
        audioSrc:"./Songs/01 Saanson Ko (Zid) -320Kbps [PagalWorld.com].mp3",
        imageSrc:"./Images/sasoon ko.jpg"
    },
    {
        id:7,
        name:"Soach na sake",
        artist:"Airjit singh",
        audioSrc:"./Songs/01 Soch Na Sake (Airlift) Arijit Singh 190Kbps.mp3",
        imageSrc:"./Images/soach na sake.jpg"
    },
    {
        id:8,
        name:"Bullya",
        artist:"unknown",
        audioSrc:"./Songs/02 Bulleya - Ae Dil Hai Mushkil - 190Kbps.mp3",
        imageSrc:"./Images/bulleya.jpg"
    },
    {
        id:9,
        name:"Jeena jeena",
        artist:"Atif aslam",
        audioSrc:"./Songs/02 Jeena Jeena - Badlapur [Atif Aslam] 190Kbps-1.mp3",
        imageSrc:"./Images/jeena jeena.jpg"
    },
    {
        id:10,
        name:"Tu zaroori",
        artist:"Arijit singh",
        audioSrc:"./Songs/02 Tu Zaroori - 190kbps.mp3",
        imageSrc:"./Images/tu zaroori.jpg"
    }
]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);
}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}