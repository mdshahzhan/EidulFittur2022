

function shahjahan(){
    let count = 300;
    let show = document.querySelector('section');
    let i = 0;
    while(i<count){
        let shopon = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        
        let size = Math.random() * 15;
        shopon.style.left = x + 'px';
        shopon.style.top = y + 'px';
        shopon.style.width = 1 + size + 'px';
        shopon.style.heigth = 1 + size + 'px';
        
        shopon.style.animationDuration = 5 + size + 's';
        shopon.style.animationDelay = size + 's';
        show.appendChild(shopon);
        i++
    }

}

shahjahan()


