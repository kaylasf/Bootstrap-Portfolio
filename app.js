const navie = document.getElementById('navie')
const navTitle = document.getElementById('navTitle')


window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <=  800)
     {

        nav.className = ' lead navbar fixed-top navbar-expand-sm navbar-light bg-transparent text-light'; 
        navTitle.innerHTML = "Website Under Construction"

  }else
  {
    nav.className = 'lead navbar fixed-top navbar-expand-sm navbar-light bg-light  text-light';

    navTitle.innerHTML = "Kayla San Filippo"

}

};