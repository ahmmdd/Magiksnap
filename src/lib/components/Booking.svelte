<div id="booking">
    <div class="container">
        <h2>Contact Us!</h2>
        <div>
            <p>Toronto: <a href="tel:+14168813415">(416) 881-3415</a></p>
            <p>Inquiries: <a href="mailto:magiksnap@gmail.com">magiksnap@gmail.com</a></p>
        </div>
    </div>
</div>
<style>
#booking{
    max-width: 1440px;
    margin:20px auto;
}
#booking h2{
    font-size:42px;
    text-align: center;
    margin:0;
    color:#eee;
}
p{
    color:#eee;
}
#booking .container{
    margin:80px 20px;
    justify-content: center;
    gap:50px;
}

#booking .container div{
    display: flex;
    margin-top:50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:50px;
}
@media screen and (max-width:756px){
        #booking .container div{
            flex-direction: column;
        }
    }
#booking .container div p{
    color:#eee;
    text-align: center;
    font-size: 24px;
}
#booking .container div p a{
    color:#81b0cc;
}
</style>