const music = new Audio('1.mp3');


// create Array 

const songs = [
    {
        id: '1',
        songName: ` Jagira (Remix by DJ Asilbek)<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: ` Janze (Remix by DJ Asilbek)<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/2.jpg"
    },
    {
        id: '3',
        songName: ` Sevarami Madina (Remix by DJ Asilbek)<br>
        <div class="subtitle">Mirjalol Ne'matov</div>`,
        poster: "img/3.jpg"
    },
    {
        id: '4',
        songName: ` Yuragimni yaraladi (Remix by DJ Asilbek) <br>
        <div class="subtitle">Xamdam Sobirov va Gulinur</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '5',
        songName: ` Gitara (Remix by DJ Asilbek)<br>
        <div class="subtitle">Mirjalol Ne'matov</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        songName: ` Qo'limda rubob (Remix by DJ Asilbek)<br>
        <div class="subtitle">Mirjalol Ne'matov</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '7',
        songName: `Yetmasmidi  <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '8',
        songName: `Meni yo'qlab kelgan  <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '9',
        songName: `Bevafo dil  <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '10',
        songName: `Qishlog'imda  <br>
        <div class="subtitle">Uzmir Mira</div>`,
        poster: "img/10.jpg"
    },
    {
        id: '11',
        songName: `Musofrida yurgan akalar<br>
        <div class="subtitle">Axror Baxshi</div>`,
        poster: "img/11.jpg"
    },
    {
        id: '12',
        songName: `Qolmadi choram  <br>
        <div class="subtitle">Osman Navruzov</div>`,
        poster: "img/12.jpg"
    },
    {
        id: '13',
        songName: `Bola bo'lib qolsaydim  <br>
        <div class="subtitle">Jasurbek Mirzajonov</div>`,
        poster: "img/13.jpg"
    },
    {
        id: '14',
        songName: `Janzemande  <br>
        <div class="subtitle">Feruza Egamova</div>`,
        poster: "img/14.jpg"
    },
    {
        id: '15',
        songName: `Bilmaysan yor <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/15.jpg"
    },
    {
        id: '16',
        songName: `Mayli Yayra <br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/16.jpg"
    },
    {
        id: '17',
        songName: `Kirib ketibsan Do'st <br>
        <div class="subtitle">Java</div>`,
        poster: "img/17.jpg"
    },
    {
        id: '18',
        songName: `Ko'k Jiguli <br>
        <div class="subtitle">Ozoda Nursaidova</div>`,
        poster: "img/18.jpg"
    },
    {
        id: '19',
        songName: `Boburbek Arapbayev <br>
        <div class="subtitle">Yonimda Qol</div>`,
        poster: "img/19.jpg"
    },
    {
        id: '20',
        songName: `Yetmasmidi<br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '21',
        songName: `Meni yo'qlab kelgan  <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '22',
        songName: `Bevafo dil  <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '23',
        songName: `Bilmaysan yor <br>
        <div class="subtitle">Jaloliddin Ahmadaliyev</div>`,
        poster: "img/15.jpg"
    },
    {
        id: '24',
        songName: ` Jagira<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '25',
        songName: ` Janze<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/2.jpg"
    },
    {
        id: '26',
        songName: `Yuragimni yaraladi<br>
        <div class="subtitle">Xamdam Sobirov Gu...</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '27',
        songName: `Mayli yayra<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/16.jpg"
    },
    {
        id: '28',
        songName: `Qizil ko'ylagim<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/20.jpg"
    },
    {
        id: '29',
        songName: `Sevmagan kim bor<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/21.jpg"
    },
    {
        id: '30',
        songName: `Yaxshi ko'rsam ni...<br>
        <div class="subtitle">Xamdam Sobirov</div>`,
        poster: "img/22.jpg"
    },
];

Array.from(document.getElementsByClassName('songItem1')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        wave.classList.remove('active2');
    }
});


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem1')).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        wave.classList.add('active2');
        music.addEventListener('ended', () => {
            masterPlay.classList.remove('bi-pause-circle');
            masterPlay.classList.add('bi-play-circle');
            wave.classList.remove('active2');
        });
        music.addEventListener('ended', () => {
            masterPlay.target.classList.add('bi-pause-circle-fill')
            masterPlay.target.classList.remove('bi-play-circle-fill')
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .2)";
    })

});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

music.addEventListener('ended', () => {
    masterPlay.classList.remove('bi-pause-circle');
    masterPlay.classList.add('bi-play-circle');
    wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_bar.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem1')).length;
    }
    music.src = `${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })


    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem1'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .2)";
    masterPlay.classList.add('bi-pause-circle');
    masterPlay.classList.remove('bi-play-circle');
    wave.classList.add('active2');
})



next.addEventListener('click', () => {
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem1')).length) {
        index = 1;
    }
    music.src = `${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
    })


    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem1'))[`${index - 1}`].style.background = "rgb(105, 105, 170, .2)";
    masterPlay.classList.add('bi-pause-circle');
    masterPlay.classList.remove('bi-play-circle');
    wave.classList.add('active2');
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.querySelectorAll('.pop_song')[0];

left_scroll.addEventListener('click', () => {
    pop_song.scrollLeft -= 400;
})
right_scroll.addEventListener('click', () => {
    pop_song.scrollLeft += 400;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
// let item = document.getElementsByClassName('songItem1');

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
});

let discover = document.getElementById('discover');
let alboms = document.getElementById('alboms');
let songSide = document.getElementsByClassName('song_side')[0];
let all = document.getElementById('all');
let pop_song2 = document.getElementById('pop_song');
let text = document.getElementById('text');
let arrow = document.getElementById('arrow');
let popSong2 = document.getElementById('pop_song2');
let popSong3 = document.getElementById('pop_song3');
let popSong4 = document.getElementById('pop_song4');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');

alboms.addEventListener('click', () => {
    popSong3.style.display = "flex";
    pop_song2.style.display = "none";
    text.innerHTML = "";
    text1.style.display = "flex";
    text2.style.display = "flex";
    alboms.style.color = "rgb(255, 255, 255) ";
    all.style.color = "rgb(76,82,98)";
    popSong4.style.display = 'flex'
    discover.style.color = "rgb(76,82,98)";
    discover.addEventListener('mouseover', () => {
        discover.style.color = "rgb(255, 255, 255)";
    })
    discover.addEventListener('mouseout', () => {
        discover.style.color = "rgb(76,82,98)";
    })
    alboms.addEventListener('mouseover', () => {
        alboms.style.color = "rgb(255, 255, 255)";
    })
    alboms.addEventListener('mouseout', () => {
        alboms.style.color = "rgb(255, 255, 255)";
    })
    all.addEventListener('mouseover', () => {
        all.style.color = "rgb(255, 255, 255)";
    })
    all.addEventListener('mouseout', () => {
        all.style.color = "rgb(76,82,98)";
    })
    arrow.style.left = "77px";
    arrow.style.width = '100%'
    popSong2.style.display = "none";
    popSong3.style.display = 'flex'
    text1.style.display = "flex"
    text2.style.display = "flex"
    songSide.style.overflowY = "scroll";
});
discover.addEventListener('click', () => {
    text.innerHTML = "Popular Song";
    text1.style.display = "none";
    text2.style.display = "none";
    songSide.style.overflowY = "hidden";
    discover.style.color = "rgb(255, 255, 255)";
    arrow.style.left = "0px";
    arrow.style.width = '100%'
    alboms.style.color = "rgb(76,82,98)";
    all.style.color = "rgb(76,82,98)";
    alboms.addEventListener('mouseover', () => {
        alboms.style.color = "rgb(255, 255, 255)";
    })
    alboms.addEventListener('mouseout', () => {
        alboms.style.color = "rgb(76,82,98)";
    })
    discover.addEventListener('mouseover', () => {
        discover.style.color = "rgb(255, 255, 255)";
    })
    discover.addEventListener('mouseout', () => {
        discover.style.color = "rgb(255, 255, 255)";
    })
    all.addEventListener('mouseover', () => {
        all.style.color = "rgb(255, 255, 255)";
    })
    all.addEventListener('mouseout', () => {
        all.style.color = "rgb(76,82,98)";
    })
    pop_song2.style.display = "flex";
    popSong2.style.display = "none";
    popSong3.style.display = "none";
    popSong4.style.display = 'none'
});
all.addEventListener('click', () => {
    discover.style.color = "rgb(76,82,98)";
    arrow.style.left = "149px";
    arrow.style.width = '30px'
    all.style.color = "rgb(255, 255, 255)";
    alboms.style.color = "rgb(76,82,98)";
    songSide.style.overflowY = "scroll";
    alboms.addEventListener('mouseover', () => {
        alboms.style.color = "rgb(255, 255, 255)";
    })
    alboms.addEventListener('mouseout', () => {
        alboms.style.color = "rgb(76,82,98)";
    })
    discover.addEventListener('mouseover', () => {
        discover.style.color = "rgb(255, 255, 255)";
    })
    discover.addEventListener('mouseout', () => {
        discover.style.color = "rgb(76,82,98)";
    });
    all.addEventListener('mouseover', () => {
        all.style.color = "rgb(255, 255, 255)";
    })
    all.addEventListener('mouseout', () => {
        all.style.color = "rgb(255, 255, 255)";
    })
    text.innerText = "";
    pop_song2.style.display = "none";
    pop_song2.style.height = 'auto';
    popSong2.style.display = "grid";
    popSong2.style.gridTemplateColumns = "auto auto auto auto auto auto auto auto auto ";
    popSong2.style.height = "auto";
    popSong4.style.display = "none";
    popSong3.style.display = 'none'
    text1.style.display = "none"
    text2.style.display = "none"
})