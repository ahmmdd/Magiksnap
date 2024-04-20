<script>


</script>
<div id="packages">
<div class="container">
    <div class="packages-container">
        <div>
            <h3>Digital Package</h3>
            <ul>
                <li>Photo Booth Setup</li>
                <li>Unlimited Photos</li>
                <li>Digital Copies</li>
                <li>Backdrop</li>
            </ul>
            <a href="/book-an-event">Book Yours Now</a>
        </div>
        <div>
            <h3>Printing Package</h3>
            <ul>
                <li>Photo Booth Setup</li>
                <li>Unlimited Photos</li>
                <li>Digital Copies</li>
                <li>Backdrop</li>
                <li>Unlimited Printouts</li>
                <li>Template</li>
                <li>Standard Props</li>
            </ul>
            <a href="/book-an-event">Book Yours Now</a>
        </div>
    </div>
</div>
</div>
<style>
#packages{
    /* max-width: 1440px; */
    /* margin:0 auto; */
}
#packages h2{
    font-size:42px;
    text-align: center;
    margin:0;
    color:#eee;
}
.packages-container{
    display: grid;
    margin:80px 20px;
    justify-content: center;
    grid-template-columns: 40% 40%;
    gap:50px;
}
.packages-container div{
    background:#eee;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:20px 0;
    transition: .2s all ease-in;
    box-shadow: 0px 0px 5px 1px rgba(226,228,25,.3);
}
@media screen and (max-width:756px){
        .packages-container{
            grid-template-columns: 100%;
        }
    }
.packages-container div:hover{
    transform: scale(1.02);
    box-shadow: 0px 0px 15px 3px rgba(255,255,255,.4);
}
.packages-container div:nth-child(1){
    /* transform: scale(.95); */
}
.packages-container div:nth-child(2){
    /* transform: scale(.98); */
}
.packages-container div h3{
    border-bottom:1px solid #041e2d;
    text-align: center;
    color:#041e2d;
    line-height: 1.5em;
    font-weight: bold;
    font-size: 36px;
}
.packages-container ul li{
    font-size: 18px;
    line-height: 1.5em;
    margin:0 10px;
}
.packages-container div a{
    margin:20px;
    padding:10px;
    font-weight: bold;
    margin-top: auto;
    text-decoration: none;
    text-align: center;
    background: #041e2d;
    color:#e2e419;
    border-radius: 15px;
    font-size: 18px;
    line-height: 2em;
    transition: .2s all ease-in;
}
.packages-container div a:hover{
    outline:3px solid #e6e7e8;
    box-shadow: 0px 0px 15px 3px rgba(0,0,0,.3);
}
</style>