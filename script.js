
var masterplay=document.getElementById("masterplay");
var prev=document.getElementById("previous");
var nex=document.getElementById("next");
var progressBar=document.getElementById("bar");
var AcoverPage=document.getElementById("coverpicture1");
var NcoverPage=document.getElementById("coverpicture2");
var side1=document.getElementById("AW");
var side2=document.getElementById("NC");
var flipper=document.getElementById("flipper");
var flipbox=document.getElementById("flipbox");
var songs=Array(10);

var songs1=[
    {index:0, songName: "alone", path: "songs/alan/Alone.mp3", cover:"img/AlanWalker/alone.jpg", gif: "a_0", play_pause: "p0"},
    {index:1, songName: "darkside", path: "songs/alan/Darkside.mp3", cover:"img/AlanWalker/darkside.jpg", gif: "a_1", play_pause: "p1"},
    {index:2, songName: "faded", path: "songs/alan/Faded.mp3", cover:"img/AlanWalker/faded.jpg", gif: "a_2", play_pause: "p2"},
    {index:3, songName: "headingHome", path: "songs/alan/HeadingHome.mp3", cover:"img/AlanWalker/headingHome.jpg", gif: "a_3", play_pause: "p3"},
    {index:4, songName: "liveFast", path: "songs/alan/LiveFast.mp3", cover:"img/AlanWalker/liveFast.jpg", gif: "a_4", play_pause: "p4"},
    {index:5, songName: "onmyWay", path: "songs/alan/OnMyWay.mp3", cover:"img/AlanWalker/onmyWay.jpg", gif: "a_5", play_pause: "p5"},
    {index:6, songName: "paradise", path: "songs/alan/Paradise.mp3", cover:"img/AlanWalker/paradise.jpg", gif: "a_6", play_pause: "p6"},
    {index:7, songName: "play", path: "songs/alan/Play.mp3", cover:"img/AlanWalker/play.jpg", gif: "a_7", play_pause: "p7"},
    {index:8, songName: "sheep", path: "songs/alan/Sheep.mp3", cover:"img/AlanWalker/sheep.jpg", gif: "a_8", play_pause: "p8"},
    {index:9, songName: "spectre", path: "songs/alan/Spectre.mp3", cover:"img/AlanWalker/spectre.jpg", gif: "a_9", play_pause: "p9"},
]
var songs2=[
    {index:0, songName: "cradles", path: "songs/ncs/cradles.mp3", cover:"img/NCS/cradles.jpg", gif: "b_0", play_pause: "p00"},
    {index:1, songName: "dreams", path: "songs/ncs/dreams.mp3", cover:"img/NCS/dreams.jpg", gif: "b_1", play_pause: "p01"},
    {index:2, songName: "fearless", path: "songs/ncs/fearless.mp3", cover:"img/NCS/fearless.jpg", gif: "b_2", play_pause: "p02"},
    {index:3, songName: "heroes", path: "songs/ncs/heroes.mp3", cover:"img/NCS/heroes.jpg", gif: "b_3", play_pause: "p03"},
    {index:4, songName: "invincible", path: "songs/ncs/invincible.mp3", cover:"img/NCS/invincible.jpg", gif: "b_4", play_pause: "p04"},
    {index:5, songName: "invisible", path: "songs/ncs/invisible.mp3", cover:"img/NCS/invisible.jpg", gif: "b_5", play_pause: "p05"},
    {index:6, songName: "newad", path: "songs/ncs/newad.mp3", cover:"img/NCS/newad.jpg", gif: "b_6", play_pause: "p06"},
    {index:7, songName: "on", path: "songs/ncs/on.mp3", cover:"img/NCS/on.jpg", gif: "b_7", play_pause: "p07"},
    {index:8, songName: "phoenix", path: "songs/ncs/phoenix.mp3", cover:"img/NCS/phoenix.jpg", gif: "b_8", play_pause: "p08"},
    {index:9, songName: "royalty", path: "songs/ncs/royalty.mp3", cover:"img/NCS/royalty.jpg", gif: "b_9", play_pause: "p09"},
]

var nc,aw;
var Music=new Audio(songs1[0].path);
play(songs1,AcoverPage,Music);

function view1(){
    Music.src=songs1[0].path;
    AcoverPage.src="img/AlanWalker/aw.jpg";
    flipbox.style.transform='rotateY(360deg)';
    nc=document.getElementById('NC');
    aw=document.getElementById('AW');
    nc.style.color='white';
    aw.style.color='green';
    nc.style.fontSize='medium';
    aw.style.fontSize='larger';
    progressBar.value=0;
    play(songs1,AcoverPage,Music);
}
function view2(){
    Music.src=songs2[0].path;
    NcoverPage.src="img/NCS/ncs.jpg";
    flipbox.style.transform='rotateY(180deg)';
    nc=document.getElementById('NC');
    aw=document.getElementById('AW');
    aw.style.color='white';
    nc.style.color='green';
    aw.style.fontSize='medium';
    nc.style.fontSize='larger';
    progressBar.value=0;
    play(songs2,NcoverPage,Music);
}
    
function play(songs,coverPage,music){
    function makeAllPlays_andRemoveGifs(){
        songs.forEach(i =>{
            document.getElementById(i.gif).style.opacity=0;
            document.getElementById(i.play_pause).classList.remove("fa-pause-circle");
            document.getElementById(i.play_pause).classList.add("fa-play-circle");
        })
    }
    function makeSameBG(){
        songs.forEach(i=>{
            document.getElementById(i.songName).style.backgroundColor="rgb(41, 41, 67,1)";
        })
    }

    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");

    makeAllPlays_andRemoveGifs();
    makeSameBG();
    
    let songIndex;
    let playing=0;
    let flag=1;

    songs.forEach(i => {
        (document.getElementById(i.songName)).addEventListener("click",()=>{
            console.log("hello");
            makeAllPlays_andRemoveGifs();
            songIndex=i.index;
            makeSameBG();
            music.src=i.path;
            music.play();
            coverPage.src=i.cover;
            document.getElementById(i.gif).style.opacity=1;;
            Play_pause=document.getElementById(i.play_pause);
            Play_pause.classList.remove("fa-play-circle");
            Play_pause.classList.add("fa-pause-circle");
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            document.getElementById(songs[songIndex].songName).style.backgroundColor="black";
            playing=1;
        })
    });

    music.addEventListener('timeupdate', ()=>{ 
        progressBar.value= parseInt((music.currentTime/music.duration)* 100); 
    })
    progressBar.addEventListener('change', ()=>{
        music.currentTime = progressBar.value*music.duration/100;
    })

    masterplay.addEventListener("click",()=>{
        if(playing==1){
            music.pause();
            masterplay.classList.remove("fa-pause-circle");
            masterplay.classList.add("fa-play-circle");
            playing=0;
        }
        else if(music.paused && flag==0){
            music.play();
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            playing=1;
        }
        else{
            music.play();
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            coverPage.src=songs[songIndex].cover;
            document.getElementById(songs[songIndex].gif).style.opacity=1;
            document.getElementById(songs[songIndex].play_pause).classList.remove("fa-play-circle");
            document.getElementById(songs[songIndex].play_pause).classList.add("fa-pause-circle");
            document.getElementById(songs[songIndex].songName).style.backgroundColor="black";
            playing=1;
            flag=0;
        }
    })

    nex.addEventListener("click",()=>{
        songIndex=(songIndex+1)%10;
        makeAllPlays_andRemoveGifs();
        makeSameBG();
        music.src=songs[songIndex].path;
        music.play();
        coverPage.src=songs[songIndex].cover;
        document.getElementById(songs[songIndex].gif).style.opacity=1;
        document.getElementById(songs[songIndex].play_pause).classList.remove("fa-play-circle");
        document.getElementById(songs[songIndex].play_pause).classList.add("fa-pause-circle");
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        document.getElementById(songs[songIndex].songName).style.backgroundColor="black";
        playing=1;
    })

    prev.addEventListener("click",()=>{
        songIndex=(songIndex+9)%10;
        makeAllPlays_andRemoveGifs();
        makeSameBG();
        music.src=songs[songIndex].path;
        music.play();
        coverPage.src=songs[songIndex].cover;
        document.getElementById(songs[songIndex].gif).style.opacity=1;
        document.getElementById(songs[songIndex].play_pause).classList.remove("fa-play-circle");
        document.getElementById(songs[songIndex].play_pause).classList.add("fa-pause-circle");
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        document.getElementById(songs[songIndex].songName).style.backgroundColor="black";
        playing=1;
    })
    songIndex=0;
}
