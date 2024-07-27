function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}


let isPlaying1 = false

let currentsong1 = new Audio('/Spotify/song/Starboy.mp3');
document.getElementById('star-boy').addEventListener('click', () => {
  document.querySelector('#pevbtn').addEventListener("click", () => {
    isPlaying1 = false
    isPlaying5= true
    currentsong5.play();
    document.querySelector("#playbtn5").innerHTML = '<img src="/Spotify/photos/pause.svg" alt="">'
    document.querySelector("#playbtn5").style.opacity = 1
    document.querySelector("#hot-line").style.backgroundColor = "#333"
    
    document.querySelector("#playbtn1").style.opacity = 0
    document.querySelector("#playbtn2").style.opacity = 0
    document.querySelector("#playbtn3").style.opacity = 0
    document.querySelector("#playbtn4").style.opacity = 0
    document.querySelector("#star-boy").style.backgroundColor = "#121212"
    document.querySelector("#gods-plan").style.backgroundColor = "#121212"
    document.querySelector("#MONTERO").style.backgroundColor = "#121212"
    document.querySelector("#No-root").style.backgroundColor = "#121212"
    document.querySelector("#song-name").innerHTML = "Hot Line"
    currentsong1.pause()
    currentsong2.pause()
    currentsong3.pause()
    currentsong4.pause()
    currentsong2.currentTime = 0
    currentsong3.currentTime = 0
    currentsong4.currentTime = 0
    currentsong1.currentTime = 0
    currentsong5.addEventListener("timeupdate", (e) => {
      console.log(currentsong5.currentTime, currentsong5.duration)
      document.querySelector("#time-song").innerText = `${secondsToMinutesSeconds(currentsong5.currentTime)} : ${secondsToMinutesSeconds(currentsong5.duration)}`
      document.querySelector(".cricle").style.left = (currentsong5.currentTime / currentsong5.duration) * 100 + "%";
      
    });
  })
  document.getElementById('star-boy').addEventListener("click", () => {
    if (isPlaying1 == false) {
      currentsong1.play();
      currentsong5.pause()
      currentsong2.pause()
      currentsong3.pause()
      currentsong4.pause()
      isPlaying1 = true;
      document.querySelector("#playbtn1").innerHTML = '<img src="/Spotify/photos/pause.svg" alt="">'
        document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="/Spotify/photos/play-for-seekbar.svg" alt="">'
      // document.querySelector("#playbtn1").style.opacity = 1
      // document.querySelector("#star-boy").style.backgroundColor = "#333"
    }
    else {
      currentsong1.pause();
      isPlaying1 = false;
      document.querySelector("#playbtn1").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
      document.querySelector("#play-for-seekbar").innerHTML = ' <img id="play-for-seekbar" src="/Spotify/photos/pause-for-seekbar.svg" alt="">'
      
    }
  });
  
  document.querySelector("#play-for-seekbar").addEventListener('click', () => {
    if (isPlaying1 == false) {
      currentsong1.play();
      currentsong5.pause()
      currentsong2.pause()
      currentsong3.pause()
      currentsong4.pause()
      isPlaying1 = true;
      document.querySelector("#playbtn1").innerHTML = '<img src="/Spotify/photos/pause.svg" alt="">'
      document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="/Spotify/photos/play-for-seekbar.svg" alt="">'
      // document.querySelector("#playbtn1").style.opacity = 1
      // document.querySelector("#star-boy").style.backgroundColor = "#333"
    }
    else {
      currentsong1.pause();
      isPlaying1 = false;
      document.querySelector("#playbtn1").innerHTML = '<img src="/Spotify/photos/play-playlist.svg" alt="" >';
      document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="/Spotify/photos/pause-for-seekbar.svg" alt="">'
      
    }
  });
  
  
  
  if (isPlaying1) {
    currentsong1.pause();
    isPlaying1 = false;
    document.querySelector("#playbtn1").innerHTML = '<img src="/Spotify/photos/play-playlist.svg" alt="" >';
    
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="/Spotify/photos/pause-for-seekbar.svg" alt="">'
    
    
  } else {
    currentsong1.play();
    isPlaying1 = true;
    document.querySelector("#playbtn1").innerHTML = '<img src="/Spotify/photos/pause.svg" alt="">'
    document.querySelector("#playbtn1").style.opacity = 1
    document.querySelector("#star-boy").style.backgroundColor = "#333"


    document.querySelector(".a").style.color = "white"
    document.querySelector(".b").style.color = "gray"
    document.querySelector(".c").style.color = "gray"
    document.querySelector(".d").style.color = "gray"
    document.querySelector(".e").style.color = "gray"
    document.querySelector("#playbtn2").style.opacity = 0
    document.querySelector("#playbtn3").style.opacity = 0
    document.querySelector("#playbtn4").style.opacity = 0
    document.querySelector("#playbtn5").style.opacity = 0
    document.querySelector("#gods-plan").style.backgroundColor = "#121212"
    document.querySelector("#MONTERO").style.backgroundColor = "#121212"
    document.querySelector("#hot-line").style.backgroundColor = "#121212"
    document.querySelector("#No-root").style.backgroundColor = "#121212"
    currentsong2.currentTime = 0
    currentsong3.currentTime = 0
    currentsong4.currentTime = 0
    currentsong5.currentTime = 0
    currentsong5.pause()
    currentsong2.pause()
    currentsong3.pause()
    currentsong4.pause()
}

  document.querySelector("#song-name").innerText = "Star Boy"
  currentsong1.addEventListener("timeupdate", (e) => {
    console.log(currentsong1.currentTime, currentsong1.duration)
    document.querySelector("#time-song").innerText = `${secondsToMinutesSeconds(currentsong1.currentTime)} : ${secondsToMinutesSeconds(currentsong1.duration)}`
    document.querySelector(".cricle").style.left = (currentsong1.currentTime / currentsong1.duration) * 100 + "%";
    console.log((currentsong1.currentTime / currentsong1.duration) * 100 + "%")
  })
  document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="/Spotify/photos/play-for-seekbar.svg" alt="">'

})



let isPlaying2 = false

let currentsong2 = new Audio('../song/GodsPlan.mp3');
document.getElementById('gods-plan').addEventListener('click', () => {
  document.querySelector("#play-for-seekbar").addEventListener('click', () => {

    if (isPlaying2 == false) {
      currentsong2.play();
      currentsong5.pause()
      currentsong1.pause()
      currentsong3.pause()
      currentsong4.pause()
      isPlaying2 = true;
      document.querySelector("#playbtn2").innerHTML = '<img src="../photos/pause.svg" alt="">'
      document.querySelector("#play-for-seekbar").innerHTML = '<img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
      // document.querySelector("#playbtn2").style.opacity = 1
      // document.querySelector("#god-plan").style.backgroundColor = "#333"
    }
    else {
      currentsong2.pause();
      isPlaying2 = false;
      document.querySelector("#playbtn2").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
      document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'

    }
  });

  if (isPlaying2) {
    currentsong2.pause();
    isPlaying2 = false;
    document.querySelector("#playbtn2").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'
  } else {
    currentsong2.play();
    isPlaying2 = true;
    document.querySelector("#playbtn2").innerHTML = '<img src="../photos/pause.svg" alt="">'
    document.querySelector("#playbtn2").style.opacity = 1
    document.querySelector("#gods-plan").style.backgroundColor = "#333"

    document.querySelector(".b").style.color = "white"
    document.querySelector(".a").style.color = "gray"
    document.querySelector(".c").style.color = "gray"
    document.querySelector(".d").style.color = "gray"
    document.querySelector(".e").style.color = "gray"

    document.querySelector("#playbtn1").style.opacity = 0
    document.querySelector("#playbtn3").style.opacity = 0
    document.querySelector("#playbtn4").style.opacity = 0
    document.querySelector("#playbtn5").style.opacity = 0
    document.querySelector("#star-boy").style.backgroundColor = "#121212"
    document.querySelector("#MONTERO").style.backgroundColor = "#121212"
    document.querySelector("#hot-line").style.backgroundColor = "#121212"
    document.querySelector("#No-root").style.backgroundColor = "#121212"
    currentsong1.pause()
    currentsong5.pause()
    currentsong3.pause()
    currentsong4.pause()
    currentsong1.currentTime = 0
    currentsong3.currentTime = 0
    currentsong4.currentTime = 0
    currentsong5.currentTime = 0
    document.querySelector("#song-name").innerText = `God's plan`
    currentsong2.addEventListener("timeupdate", (e) => {
      console.log(currentsong2.currentTime, currentsong2.duration)
      document.querySelector("#time-song").innerText = `${secondsToMinutesSeconds(currentsong2.currentTime)} : ${secondsToMinutesSeconds(currentsong2.duration)}`
      document.querySelector(".cricle").style.left = (currentsong2.currentTime / currentsong2.duration) * 100 + "%";
    });
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
  }
}
);

let isPlaying3 = false

let currentsong3 = new Audio('../song/MONTERO (Call Me By Your Name).mp3');
document.getElementById('MONTERO').addEventListener('click', () => {
  document.querySelector("#play-for-seekbar").addEventListener('click', () => {

    if (isPlaying3 == false) {
      currentsong3.play();
      currentsong5.pause()
      currentsong1.pause()
      currentsong2.pause()
      currentsong4.pause()
      isPlaying3 = true;
      document.querySelector("#playbtn3").innerHTML = '<img src="../photos/pause.svg" alt="">'
      document.querySelector("#play-for-seekbar").innerHTML = '<img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
      // document.querySelector("#playbtn2").style.opacity = 1
      // document.querySelector("#god-plan").style.backgroundColor = "#333"
    }
    else {
      currentsong3.pause();
      isPlaying3 = false;
      document.querySelector("#playbtn3").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
      document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'

    }
  });

  if (isPlaying3) {
    currentsong3.pause();
    isPlaying3 = false;
    document.querySelector("#playbtn3").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'
  } else {
    currentsong3.play();
    isPlaying3 = true;
    document.querySelector("#playbtn3").innerHTML = '<img src="../photos/pause.svg" alt="">'
    document.querySelector("#playbtn3").style.opacity = 1
    document.querySelector("#MONTERO").style.backgroundColor = "#333"

    document.querySelector(".c").style.color = "white"
    document.querySelector(".b").style.color = "gray"
    document.querySelector(".a").style.color = "gray"
    document.querySelector(".d").style.color = "gray"
    document.querySelector(".e").style.color = "gray"

    document.querySelector("#playbtn1").style.opacity = 0
    document.querySelector("#playbtn2").style.opacity = 0
    document.querySelector("#playbtn4").style.opacity = 0
    document.querySelector("#playbtn5").style.opacity = 0
    document.querySelector("#star-boy").style.backgroundColor = "#121212"
    document.querySelector("#gods-plan").style.backgroundColor = "#121212"
    document.querySelector("#hot-line").style.backgroundColor = "#121212"
    document.querySelector("#No-root").style.backgroundColor = "#121212"
    currentsong1.pause()
    currentsong2.pause()
    currentsong5.pause()
    currentsong4.pause()
    currentsong2.currentTime = 0
    currentsong1.currentTime = 0
    currentsong4.currentTime = 0
    currentsong5.currentTime = 0
    document.querySelector("#song-name").innerText = `MONTERO`
    currentsong3.addEventListener("timeupdate", (e) => {
      console.log(currentsong3.currentTime, currentsong3.duration)
      document.querySelector("#time-song").innerText = `${secondsToMinutesSeconds(currentsong3.currentTime)} : ${secondsToMinutesSeconds(currentsong3.duration)}`
      document.querySelector(".cricle").style.left = (currentsong3.currentTime / currentsong3.duration) * 100 + "%";

    });
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
  }
}
);

let isPlaying4 = false

let currentsong4 = new Audio('../song/No Roots.mp3');
document.getElementById('No-root').addEventListener('click', () => {
  document.querySelector("#play-for-seekbar").addEventListener('click', () => {

    if (isPlaying4 == false) {
      currentsong4.play();
      currentsong5.pause()
      currentsong1.pause()
      currentsong2.pause()
      currentsong3.pause()
      isPlaying4 = true;
      document.querySelector("#playbtn4").innerHTML = '<img src="../photos/pause.svg" alt="">'
      document.querySelector("#play-for-seekbar").innerHTML = '<img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
      // document.querySelector("#playbtn2").style.opacity = 1
      // document.querySelector("#god-plan").style.backgroundColor = "#333"
    }
    else {
      currentsong4.pause();
      isPlaying4 = false;
      document.querySelector("#playbtn4").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
      document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'

    }
  });

  if (isPlaying4) {
    currentsong4.pause();
    isPlaying4 = false;
    document.querySelector("#playbtn4").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'
  }
  else {
    currentsong4.play();
    isPlaying4 = true;
    document.querySelector("#playbtn4").innerHTML = '<img src="../photos/pause.svg" alt="">'
    document.querySelector("#playbtn4").style.opacity = 1
    document.querySelector("#No-root").style.backgroundColor = "#333"

    document.querySelector(".d").style.color = "white"
    document.querySelector(".b").style.color = "gray"
    document.querySelector(".c").style.color = "gray"
    document.querySelector(".a").style.color = "gray"
    document.querySelector(".e").style.color = "gray"

    document.querySelector("#playbtn1").style.opacity = 0
    document.querySelector("#playbtn2").style.opacity = 0
    document.querySelector("#playbtn3").style.opacity = 0
    document.querySelector("#playbtn5").style.opacity = 0
    document.querySelector("#star-boy").style.backgroundColor = "#121212"
    document.querySelector("#gods-plan").style.backgroundColor = "#121212"
    document.querySelector("#MONTERO").style.backgroundColor = "#121212"
    document.querySelector("#hot-line").style.backgroundColor = "#121212"
    currentsong1.pause()
    currentsong2.pause()
    currentsong3.pause()
    currentsong5.pause()
    currentsong2.currentTime = 0
    currentsong3.currentTime = 0
    currentsong1.currentTime = 0
    currentsong5.currentTime = 0
    document.querySelector("#song-name").innerText = `No Roots`
    currentsong4.addEventListener("timeupdate", (e) => {
      console.log(currentsong4.currentTime, currentsong4.duration)
      document.querySelector("#time-song").innerText = `${secondsToMinutesSeconds(currentsong4.currentTime)} : ${secondsToMinutesSeconds(currentsong4.duration)}`
      document.querySelector(".cricle").style.left = (currentsong4.currentTime / currentsong4.duration) * 100 + "%";
    });
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
  }
}
);

let isPlaying5 = false

let currentsong5 = new Audio('../song/Hotline Bling.mp3');
document.getElementById('hot-line').addEventListener('click', () => {
  document.querySelector("#play-for-seekbar").addEventListener('click', () => {

    if (isPlaying5 == false) {
      currentsong5.play();
      currentsong2.pause()
      currentsong1.pause()
      currentsong3.pause()
      currentsong4.pause()
      isPlaying5 = true;
      document.querySelector("#playbtn5").innerHTML = '<img src="../photos/pause.svg" alt="">'
      document.querySelector("#play-for-seekbar").innerHTML = '<img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'
      // document.querySelector("#playbtn2").style.opacity = 1
      // document.querySelector("#god-plan").style.backgroundColor = "#333"
    }
    else {
      currentsong5.pause();
      isPlaying5 = false;
      document.querySelector("#playbtn5").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
      document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'

    }
  });

  if (isPlaying5) {
    currentsong5.pause();
    isPlaying5 = false;
    document.querySelector("#playbtn5").innerHTML = '<img src="../photos/play-playlist.svg" alt="" >';
    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/pause-for-seekbar.svg" alt="">'
  } else {
    currentsong5.play();
    isPlaying5 = true;
    document.querySelector("#playbtn5").innerHTML = '<img src="../photos/pause.svg" alt="">'
    document.querySelector("#playbtn5").style.opacity = 1
    document.querySelector("#hot-line").style.backgroundColor = "#333"

    document.querySelector(".e").style.color = "white"
    document.querySelector(".b").style.color = "gray"
    document.querySelector(".c").style.color = "gray"
    document.querySelector(".d").style.color = "gray"
    document.querySelector(".a").style.color = "gray"

    document.querySelector("#playbtn1").style.opacity = 0
    document.querySelector("#playbtn2").style.opacity = 0
    document.querySelector("#playbtn3").style.opacity = 0
    document.querySelector("#playbtn4").style.opacity = 0
    document.querySelector("#star-boy").style.backgroundColor = "#121212"
    document.querySelector("#gods-plan").style.backgroundColor = "#121212"
    document.querySelector("#MONTERO").style.backgroundColor = "#121212"
    document.querySelector("#No-root").style.backgroundColor = "#121212"
    currentsong1.pause()
    currentsong2.pause()
    currentsong3.pause()
    currentsong4.pause()
    currentsong2.currentTime = 0
    currentsong3.currentTime = 0
    currentsong4.currentTime = 0
    currentsong1.currentTime = 0
    document.querySelector("#song-name").innerText = `Hotline Bling`
    currentsong5.addEventListener("timeupdate", (e) => {
      console.log(currentsong5.currentTime, currentsong5.duration)
      document.querySelector("#time-song").innerText = `${secondsToMinutesSeconds(currentsong5.currentTime)} : ${secondsToMinutesSeconds(currentsong5.duration)}`
      document.querySelector(".cricle").style.left = (currentsong5.currentTime / currentsong5.duration) * 100 + "%";

    });


    document.querySelector("#play-for-seekbar").innerHTML = '  <img id="play-for-seekbar" src="../photos/play-for-seekbar.svg" alt="">'

  }
}
);
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0"
  
})
document.querySelector(".rignt-main").addEventListener("click", ()=>{
  document.querySelector(".left").style.left = "-100%"
 
})

document.querySelector(".signupbtn").addEventListener("click", ()=>{
  document.querySelector(".main").style.display = "none";
  document.querySelector(".signup-main").style.display = "flex";
})

document.querySelector(".loginbtn").addEventListener("click", ()=>{
  document.querySelector(".login-main").style.display = "flex";
  document.querySelector(".main").style.display = "none";
})
document.querySelector(".next").addEventListener("click", ()=>{
  document.querySelector(".signup-main").style.display = "none";
  document.querySelector(".main").style.display = "block";
})
document.querySelector(".logbtn").addEventListener("click", ()=>{
  document.querySelector(".login-main").style.display = "none";
  document.querySelector(".main").style.display = "block";
})
document.querySelector(".donu").addEventListener("click", ()=>{
  document.querySelector(".login-main").style.display = "none";
  document.querySelector(".signup-main").style.display = "flex";
})
document.querySelector(".logu").addEventListener("click", ()=>{
  document.querySelector(".login-main").style.display = "flex";
  document.querySelector(".signup-main").style.display = "none";
})