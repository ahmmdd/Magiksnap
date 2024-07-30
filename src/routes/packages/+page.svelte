<script>
    import Packages from '$lib/components/Packages.svelte';
</script>
<div id="pkgs">
<p>
    At <span class="yellow">MagikSnap Corp.</span>, we're dedicated to making your event unforgettable with our exceptional <span class="yellow">photobooth packages.</span> Whether you're planning a <span class="yellow">wedding</span>, <span class="yellow">birthday bash</span>, <span class="yellow">corporate event</span>, or any <span class="yellow">special occasion</span>, we have the perfect package to suit your needs.
    Our packages are designed to provide everything you need for a seamless and <span class="yellow">entertaining photobooth experience</span>. From high-quality <span class="yellow">props</span> to <span class="yellow">customizable backdrops</span>, we ensure that every detail is taken care of, allowing you and your guests to focus on <span class="yellow">creating lasting memories</span>.
    Choose from a variety of packages tailored to fit different budgets and preferences. Our basic packages include essential features such as unlimited photo prints, digital copies, and a friendly onsite attendant to assist your guests throughout the event. For those looking for an extra touch of luxury, our premium packages offer additional enhancements like themed props, custom backdrop options, and even social media integration for instant sharing.
    No matter which package you choose, you can count on <span class="yellow">MagikSnap Corp.</span> to deliver top-notch service and unparalleled entertainment value. Let us bring the fun to your next event and turn moments into memories that will be cherished for years to come. Contact us today to book your photobooth package and let the magic begin!
</p>
<Packages />
</div>
<style>
#pkgs{
        width: 100%;
        max-width: 1440px;
        padding:0 20px;
        margin:0px auto;
        min-height: calc(100vh - 178px);
        display: grid;
        grid-template-columns: 100%;
        justify-content: space-between;
        align-items: center;
        gap:40px;
    }
    
    #pkgs p{
        color:#e6e7e8;
        font-size:16px;
    }
    #pkgs img{
        width: 100%;
        height: auto;
        border: none;
    }
    span.yellow{
        color:#f7e033;
    }
    @media screen and (max-width:756px){
        #pkgs{
            grid-template-columns: 100%;
        }
    }

</style>