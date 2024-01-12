<script>
    import { fade } from 'svelte/transition';
    
</script>
<header>
    <div class="header-main"  transition:fade>
        <div>
            <a href="/">
                <img src="/images/magik-snap-icon.svg" alt="Magik Snap Icon" width="120px" height="auto"/>
            </a>
        </div>
        <div>
            <nav>
                <ul>
                    <li class="book">
                        <a href="/templates">Templates</a>
                    </li>
                    <li class="book">
                        <a href="/templates">Backdrops</a>
                    </li>
                    <li class="book">
                        <a href="/templates">Photobooth</a>
                    </li>
                    <li class="book">
                        <a href="/templates">360 Booth</a>
                    </li>
                    <li class="book">
                        <a href="/templates">Guest Book</a>
                    </li>
                    <li class="book">
                        <a href="/book-an-event">Book Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<style>
header{ 
    background:#78b8d8;
    padding:10px 20px;
    border-radius:0 0 20px 20px;
}
.header-main{
    max-width: 1440px;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    align-items:flex-end;
    justify-content: space-between;
}
header nav ul{
    list-style: none;
    margin:0;
    padding:0;
    display: flex;
    color:#041e2d;
    justify-content: center;
    align-items: center;
    /* margin:10px ; */
}
header nav ul li{
    margin:0 10px;
}
header nav ul li a{
    color:#041e2d;
    text-decoration: none;
    font-size:18px;
    font-weight: bold;
}
header nav ul li:hover{
    color:#041e2d;
    outline:3px solid #e6e7e8;
    box-shadow: 0px 0px 15px 3px rgba(0,0,0,.3);
}
header nav ul li.book{
    background: #041e2d;
    padding:10px;
    border-radius: 15px;
}
header nav ul li.book a{
    color:#e2e419;
}
</style>