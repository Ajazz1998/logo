
document.getElementById('opens').addEventListener( "click", () => {
    console.log('click')
    const topNav = document.getElementById('topnav');

    if(topNav.style.display === 'none'){
        topNav.style.display = 'block';

    }else{
        topNav.style.display = 'none'
    }
})