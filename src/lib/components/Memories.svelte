<script>
  // import SwiperCore, { Controller } from 'swiper';
  import { Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  // import SwiperComponent from "swiper/esm/svelte/swiper.svelte";
  //   import { Swiper } from "swiper";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";

  import { fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';

  let isInView = false;
  

  const phototemplates = [
    {
        "imageLink": "/images/templates/2x6/2x6 (01).webp",
        "imgName" : "2x6 (01)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (02).webp",
        "imgName" : "2x6 (02)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (03).webp",
        "imgName" : "2x6 (03)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (04).webp",
        "imgName" : "2x6 (04)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (05).webp",
        "imgName" : "2x6 (05)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (06).webp",
        "imgName" : "2x6 (06)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (07).webp",
        "imgName" : "2x6 (07)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (08).webp",
        "imgName" : "2x6 (08)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (09).webp",
        "imgName" : "2x6 (09)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (10).webp",
        "imgName" : "2x6 (10)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (11).webp",
        "imgName" : "2x6 (11)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (12).webp",
        "imgName" : "2x6 (12)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (13).webp",
        "imgName" : "2x6 (13)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (14).webp",
        "imgName" : "2x6 (14)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (15).webp",
        "imgName" : "2x6 (15)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (16).webp",
        "imgName" : "2x6 (16)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (17).webp",
        "imgName" : "2x6 (17)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (18).webp",
        "imgName" : "2x6 (18)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (19).webp",
        "imgName" : "2x6 (19)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (20).webp",
        "imgName" : "2x6 (20)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (21).webp",
        "imgName" : "2x6 (21)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (22).webp",
        "imgName" : "2x6 (22)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (23).webp",
        "imgName" : "2x6 (23)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (24).webp",
        "imgName" : "2x6 (24)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (25).webp",
        "imgName" : "2x6 (25)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (26).webp",
        "imgName" : "2x6 (26)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (27).webp",
        "imgName" : "2x6 (27)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (28).webp",
        "imgName" : "2x6 (28)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (29).webp",
        "imgName" : "2x6 (29)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (30).webp",
        "imgName" : "2x6 (30)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (31).webp",
        "imgName" : "2x6 (31)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (32).webp",
        "imgName" : "2x6 (32)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (33).webp",
        "imgName" : "2x6 (33)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (34).webp",
        "imgName" : "2x6 (34)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (35).webp",
        "imgName" : "2x6 (35)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (36).webp",
        "imgName" : "2x6 (36)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (37).webp",
        "imgName" : "2x6 (37)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (38).webp",
        "imgName" : "2x6 (38)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (39).webp",
        "imgName" : "2x6 (39)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (40).webp",
        "imgName" : "2x6 (40)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (41).webp",
        "imgName" : "2x6 (41)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (42).webp",
        "imgName" : "2x6 (42)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (43).webp",
        "imgName" : "2x6 (43)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (44).webp",
        "imgName" : "2x6 (44)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (45).webp",
        "imgName" : "2x6 (45)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (46).webp",
        "imgName" : "2x6 (46)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (47).webp",
        "imgName" : "2x6 (47)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (48).webp",
        "imgName" : "2x6 (48)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (49).webp",
        "imgName" : "2x6 (49)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (50).webp",
        "imgName" : "2x6 (50)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (51).webp",
        "imgName" : "2x6 (51)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (52).webp",
        "imgName" : "2x6 (52)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (53).webp",
        "imgName" : "2x6 (53)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (54).webp",
        "imgName" : "2x6 (54)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (55).webp",
        "imgName" : "2x6 (55)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (56).webp",
        "imgName" : "2x6 (56)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (57).webp",
        "imgName" : "2x6 (57)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (58).webp",
        "imgName" : "2x6 (58)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (59).webp",
        "imgName" : "2x6 (59)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (60).webp",
        "imgName" : "2x6 (60)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (61).webp",
        "imgName" : "2x6 (61)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (62).webp",
        "imgName" : "2x6 (62)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (63).webp",
        "imgName" : "2x6 (63)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (64).webp",
        "imgName" : "2x6 (64)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (65).webp",
        "imgName" : "2x6 (65)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (66).webp",
        "imgName" : "2x6 (66)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (67).webp",
        "imgName" : "2x6 (67)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (68).webp",
        "imgName" : "2x6 (68)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (69).webp",
        "imgName" : "2x6 (69)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (70).webp",
        "imgName" : "2x6 (70)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (71).webp",
        "imgName" : "2x6 (71)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (72).webp",
        "imgName" : "2x6 (72)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (73).webp",
        "imgName" : "2x6 (73)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (74).webp",
        "imgName" : "2x6 (74)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (75).webp",
        "imgName" : "2x6 (75)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (76).webp",
        "imgName" : "2x6 (76)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (77).webp",
        "imgName" : "2x6 (77)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (78).webp",
        "imgName" : "2x6 (78)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (79).webp",
        "imgName" : "2x6 (79)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (80).webp",
        "imgName" : "2x6 (80)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },{
        "imageLink": "/images/templates/2x6/2x6 (81).webp",
        "imgName" : "2x6 (81)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },
      {
        "imageLink": "/images/templates/2x6/2x6 (82).webp",
        "imgName" : "2x6 (82)",
        "imageDescription": "2x6",
        "imageTag": "2x6"
      },

//4x6
{
        "imageLink": "/images/templates/4x6/4x6 (1).webp",
    "imgName": "4x6 (1)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (2).webp",
    "imgName": "4x6 (2)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (3).webp",
    "imgName": "4x6 (3)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (4).webp",
    "imgName": "4x6 (4)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (5).webp",
    "imgName": "4x6 (5)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (6).webp",
    "imgName": "4x6 (6)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (7).webp",
    "imgName": "4x6 (7)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (8).webp",
    "imgName": "4x6 (8)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (9).webp",
    "imgName": "4x6 (9)",
    "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (10).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (11).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (12).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (13).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (14).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (15).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (16).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (17).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (18).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (19).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (20).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (21).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (22).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (23).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (24).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (25).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (26).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (27).webp",
        "imgName": "4x6 (27)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (28).webp",
        "imgName": "4x6 (28)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (29).webp",
        "imgName": "4x6 (29)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (30).webp",
        "imgName": "4x6 (30)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (31).webp",
        "imgName": "4x6 (31)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (32).webp",
        "imgName": "4x6 (32)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (33).webp",
        "imgName": "4x6 (33)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (34).webp",
        "imgName": "4x6 (34)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (35).webp",
        "imgName": "4x6 (35)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (36).webp",
        "imgName": "4x6 (36)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (37).webp",
        "imgName": "4x6 (37)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (38).webp",
        "imgName": "4x6 (38)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (39).webp",
        "imgName": "4x6 (39)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (40).webp",
        "imgName": "4x6 (40)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (41).webp",
        "imgName": "4x6 (41)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (42).webp",
        "imgName": "4x6 (42)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (43).webp",
        "imgName": "4x6 (43)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (44).webp",
        "imgName": "4x6 (44)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (45).webp",
        "imgName": "4x6 (45)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (46).webp",
        "imgName": "4x6 (46)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (47).webp",
        "imgName": "4x6 (47)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (48).webp",
        "imgName": "4x6 (48)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (49).webp",
        "imgName": "4x6 (49)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (50).webp",
        "imgName": "4x6 (50)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (51).webp",
        "imgName": "4x6 (51)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (52).webp",
        "imgName": "4x6 (52)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (53).webp",
        "imgName": "4x6 (53)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (54).webp",
        "imgName": "4x6 (54)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (55).webp",
        "imgName": "4x6 (55)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (56).webp",
        "imgName": "4x6 (56)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (57).webp",
        "imgName": "4x6 (57)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (58).webp",
        "imgName": "4x6 (58)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (59).webp",
        "imgName": "4x6 (59)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (60).webp",
        "imgName": "4x6 (60)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (61).webp",
        "imgName": "4x6 (61)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (62).webp",
        "imgName": "4x6 (62)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (63).webp",
        "imgName": "4x6 (63)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (64).webp",
        "imgName": "4x6 (64)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (65).webp",
        "imgName": "4x6 (65)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (66).webp",
        "imgName": "4x6 (66)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (67).webp",
        "imgName": "4x6 (67)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (68).webp",
        "imgName": "4x6 (68)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (69).webp",
        "imgName": "4x6 (69)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (70).webp",
        "imgName": "4x6 (70)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (71).webp",
        "imgName": "4x6 (71)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (72).webp",
        "imgName": "4x6 (72)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (73).webp",
        "imgName": "4x6 (73)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (74).webp",
        "imgName": "4x6 (74)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (75).webp",
        "imgName": "4x6 (75)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (76).webp",
        "imgName": "4x6 (76)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (77).webp",
        "imgName": "4x6 (77)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (78).webp",
        "imgName": "4x6 (78)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (79).webp",
        "imgName": "4x6 (79)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (80).webp",
        "imgName": "4x6 (80)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (81).webp",
        "imgName": "4x6 (81)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (82).webp",
        "imgName": "4x6 (82)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (83).webp",
        "imgName": "4x6 (83)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (84).webp",
        "imgName": "4x6 (84)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (85).webp",
        "imgName": "4x6 (85)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (86).webp",
        "imgName": "4x6 (86)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (87).webp",
        "imgName": "4x6 (87)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (88).webp",
        "imgName": "4x6 (88)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (89).webp",
        "imgName": "4x6 (89)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (90).webp",
        "imgName": "4x6 (90)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (91).webp",
        "imgName": "4x6 (91)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (92).webp",
        "imgName": "4x6 (92)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (93).webp",
        "imgName": "4x6 (93)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (94).webp",
        "imgName": "4x6 (94)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (95).webp",
        "imgName": "4x6 (95)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (96).webp",
        "imgName": "4x6 (96)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (97).webp",
        "imgName": "4x6 (97)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (98).webp",
        "imgName": "4x6 (98)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (99).webp",
        "imgName": "4x6 (99)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (100).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (101).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (102).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (103).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (104).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (105).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (106).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (107).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (108).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (109).webp",
        "imgName": "4x6 (10)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (110).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (111).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (112).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (113).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (114).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (115).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (116).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (117).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (118).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (119).webp",
        "imgName": "4x6 (11)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (120).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (121).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (122).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (123).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (124).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (125).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (126).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (127).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (128).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (129).webp",
        "imgName": "4x6 (12)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (130).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (131).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (132).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (133).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (134).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (135).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (136).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (137).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (138).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (139).webp",
        "imgName": "4x6 (13)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (140).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (141).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (142).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (143).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (144).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (145).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (146).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (147).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (148).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (149).webp",
        "imgName": "4x6 (14)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (150).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (151).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (152).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (153).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (154).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (155).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (156).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (157).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (158).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (159).webp",
        "imgName": "4x6 (15)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (160).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (161).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (162).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (163).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (164).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (165).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (166).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (167).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (168).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (169).webp",
        "imgName": "4x6 (16)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (170).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (171).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (172).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (173).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (174).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (175).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (176).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (177).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (178).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (179).webp",
        "imgName": "4x6 (17)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (180).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (181).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (182).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (183).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (184).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (185).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (186).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (187).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (188).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (189).webp",
        "imgName": "4x6 (18)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (190).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (191).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (192).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (193).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (194).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (195).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (196).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (197).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (198).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (199).webp",
        "imgName": "4x6 (19)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (200).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (201).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (202).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (203).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (204).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (205).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (206).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (207).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (208).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (209).webp",
        "imgName": "4x6 (20)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (210).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (211).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (212).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (213).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (214).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (215).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (216).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (217).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (218).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (219).webp",
        "imgName": "4x6 (21)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (220).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (221).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (222).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (223).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (224).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (225).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (226).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (227).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (228).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (229).webp",
        "imgName": "4x6 (22)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (230).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (231).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (232).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (233).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (234).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (235).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (236).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (237).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (238).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (239).webp",
        "imgName": "4x6 (23)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (240).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (241).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (242).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (243).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (244).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (245).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (246).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (247).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (248).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (249).webp",
        "imgName": "4x6 (24)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (250).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (251).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (252).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (253).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (254).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (255).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (256).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (257).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (258).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (259).webp",
        "imgName": "4x6 (25)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (260).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (261).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (262).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (263).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (264).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },{
        "imageLink": "/images/templates/4x6/4x6 (265).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (266).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (267).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (268).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (269).webp",
        "imgName": "4x6 (26)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (270).webp",
        "imgName": "4x6 (27)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (271).webp",
        "imgName": "4x6 (27)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (272).webp",
        "imgName": "4x6 (27)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (273).webp",
        "imgName": "4x6 (27)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      },
      {
        "imageLink": "/images/templates/4x6/4x6 (274).webp",
        "imgName": "4x6 (27)",
        "imageDescription": "4x6",
        "imageTag": "4x6"
      }
  ];
  //pnpm run dev
</script>

<div id="memories">
  <div class="container"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
  >
  {#if isInView}
    <h2 transition:fly="{{ y: 50, duration: 1000 }}">Creating Memories</h2>
    <p transition:fly="{{ y: 50, duration: 1000, delay: 500 }}">
      We provide unlimited high resolution photos for your guests, personalized
      with custom graphics of your choice. We also offer online photo galleries,
      fun props, and more, to help make your event truly unforgettable.
    </p>
    <div class="swiper-memories" transition:fly="{{ y: 50, duration: 1000, delay:1000 }}">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        centeredSlides={true}
        roundLengths={true}
        loop={false}
        on:slideChange={() => console.log("slide change")}
      >
      {#each phototemplates as phototemplate, i}
        <SwiperSlide>

          <h3 style="text-align: center;">{phototemplate.imgName}</h3>
          <img
            src="{phototemplate.imageLink}"
            alt="{phototemplate.imageDescription}"
          />
        </SwiperSlide>
        {/each}
      </Swiper>
    </div>
    {/if}
  </div>
</div>

<style>
  #memories {
    background: #e6e7e8;
    border-radius: 25px;
  }
  #memories .container {
    display: flex;
    /* margin:80px auto; */
    padding: 100px;
    flex-direction: column;
    justify-content: center;
  }
  #memories img {
    /*max-height: 50%;
    max-width: 50%;*/
    margin: 0 auto;
  }
  #memories h2 {
    font-size: 42px;
    text-align: center;
    margin: 0;
  }
  #memories p {
    font-size: 24px;
    color: #041e2d;
    text-align: center;
    max-width: 1100px;
    margin: 20px auto;
  }
  .container {
    max-width: 1440px;
    margin: 80px auto;
  }
  .swiper-memories {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
  :global(.swiper) {
    padding: 50px 0;
  }
  :global(.swiper-memories .swiper-slide) {
    transform: scale(0.8);
  }
  :global(.swiper-memories .swiper-slide img) {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  }
  :global(.swiper-memories .swiper-slide-active) {
    transform: scale(1);
    overflow: visible;
  }
  :global(.swiper-memories .swiper-slide-active img) {
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
  }
  /* .swiper-wrapper{
        max-width: 400px;
        margin:0 auto;
    }
    .swiper-slide img{
        width:100%;
        height:auto;
        overflow: hidden;
    } */
</style>
