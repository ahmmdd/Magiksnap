<script>
    import { fade } from 'svelte/transition';
    
</script>
<header>
    <div class="header-main"  transition:fade>
        <div>
            <img src="/images/magik-snap-icon.svg" alt="Magik Snap Icon" width="120px" height="auto"/>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Memories</a>
                    </li>
                    <li>
                        <a href="/">How it works</a>
                    </li>
                    <li>
                        <a href="/">Templates</a>
                    </li>
                    <li>
                        <a href="/">Backdrops</a>
                    </li>
                    <li>
                        <a href="/">Packages</a>
                    </li>
                    <li class="book">
                        <a href="/">Book Yours Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<style>
header{
    background:#e6e7e8;
    padding:20px 0;
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
    background: #ed1c24;
    padding:10px;
    border-radius: 15px;
}
header nav ul li.book a{
    color:#e2e419;
}
</style>