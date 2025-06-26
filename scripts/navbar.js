const logo = document.getElementById("logo")
const menu = document.getElementById("open_menu")
menu.addEventListener("click", showSidebar)
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
    logo.style.display = 'none';
}


const close = document.getElementById("close_menu")
close.addEventListener("click", hideSidebar)
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
    
    if(window.screen.width>425){
        logo.style.display = 'block';
    }
}
/*
    <script>
        function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex';
            }
    </script>
*/