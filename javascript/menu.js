let hidemenu = document.getElementById('hidemenu');
let menubtn = document.getElementById('menubtn');


function itembtn()
{
    if(hidemenu.style.display!='flex')
    {
        hidemenu.style.display='flex';
        menubtn.innerHTML = "View Less";
    }
    else
    {
        hidemenu.style.display= 'none';
        menubtn.innerHTML = 'View more';
    }
}
