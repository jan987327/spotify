console.log("Hello you");

//intialize the variables
let songIndex = 0;
let audioelement = new Audio('song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongPlay=document.getElementById("masterSongPlay");
let songs = [
    {songName:"Apeshit", filePath:"song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "blue jeans", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "body electric", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Peaches", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "found love", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "one step closer", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "born to die", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    {songName:"strange like me", filePath:"song/8.mp3", coverPath:"covers/8.jpg"}
    
]
songItem.forEach((element,i )=>{
    console.log(element, 1);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
        
})
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioelement.currentTime / audioelement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioelement.currentTime = myProgressBar.value * audioelement.duration/100;
} )

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        console.log(e.target)
        audioelement.src = `song/${songIndex}.mp3`;
         masterSongPlay.innerText = songs[songIndex-1].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
})
document.getElementById("next").addEventListener('click', () => {
    if (songIndex >=7) {
        songIndex = 0;
    }
    else {
        songIndex++;
    }
        audioelement.src = `song/${songIndex+1}.mp3`;
        masterSongPlay.innerText = songs[songIndex-1].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex--;
    }
        audioelement.src = `song/${songIndex+1}.mp3`;
        masterSongPlay.innerText = songs[songIndex-1].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');   
})
