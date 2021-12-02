var srcs = [
   "http://www.hammarbyklanen.se/wp-content/uploads/2018/04/solheim-1-640x350.jpg",
    "https://www.bajenfans.se/media/1025/busen-logo-2x.png?width=1000&mode=resize&quality=90&scaleup=false",
    "https://i.pinimg.com/originals/78/be/ec/78beec97cbfb8c0c8f6058a0e283f707.jpg",
    "https://pbs.twimg.com/profile_images/1270019380173320195/gvKnMLf3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNs_KOVYZML9IWriyzptyMWLyj0S5xM8kUkA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFvggFYmw8RLALhwNdyIoWwpAOcESw0UVsw&usqp=CAU",
    "/public/images/ajdå.png",
    "https://i.pinimg.com/236x/47/82/90/478290ff66e11c4f49d060d50bb1d971--la-sede-stockholm-sweden.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtRPYUuRPBkPpi877rW4oBXkWDGtgvGIkWQ&usqp=CAU",
    "https://www.maringuiden.se/forum/uploads/monthly_2019_05/260015034_VirBajen.jpg.d44b1e50c7ae6204acb306d1b9b34d08.jpg",
    "https://pbs.twimg.com/profile_images/814763890789720064/ZC35R7J9_400x400.jpg",
    "https://www.hammarbyhockey.se/wp-content/uploads/2017/07/BARA_BAJARE_LARGE-890x467.png",
    "https://hammarbytff.sportadmin.se/images/1213/35131/1057687_1024.JPG?v=2021-03-22%2017:34:12"
]

for (let i = 0; i < srcs.length; i++) {
    const src = srcs[i];
    var img = document.createElement('img')
    img.src = src
    document.querySelector('marquee').appendChild(img)
}