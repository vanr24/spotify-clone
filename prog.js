console.log("welcome to spotify")
let audioelement = new Audio("songs/1.mp3");
let songindex=0;
let masterplay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    
    {songname: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songname: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songname: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songname: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songname: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songname: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songname: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname ;

})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
}) 
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname ;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6)
    {
        songindex=0;
    }
    else{
        songindex+=1;
    }

    audioelement.src=`songs/${songindex+1}.mp3`; 
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>
{
    
     progress = parseInt((audioelement.currentTime/audioelement.duration)* 100); 
     
    myprogressbar.value = progress;


})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=(myprogressbar.value*audioelement.duration)/100 ;
})

