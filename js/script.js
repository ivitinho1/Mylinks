const mode = document.getElementById('switch')

mode.addEventListener('click', () =>{
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "https://media.licdn.com/dms/image/D4D03AQFFDJNzVu0KCg/profile-displayphoto-shrink_200_200/0/1690239263415?e=1697673600&v=beta&t=Xk58wwL04_20-9gAOucxYbR0HnzytGN8DFKAp1wSYpg");
    } else {
        img.setAttribute("src", "https://avatars.githubusercontent.com/u/124622626?v=4");
    } 
})
