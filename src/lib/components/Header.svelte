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
                        <a target="_blank" href="https://linktr.ee/magiksnap">Book Yours Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<style>
header{ 
    background:#81b0cc;
    padding:20px;
    border-radius:0 0 20px 20px;
}
.header-main{
    max-width: 1440px;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    align-items:baseline;
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
header nav ul li.book{
    background: #041e2d;
    padding:10px;
    border-radius: 15px;
}
header nav ul li.book a{
    color:#e2e419;
}
</style>