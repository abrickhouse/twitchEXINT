import "./App.css";
import Message from "./Message";
import React, { useState } from "react";
import { BsFillCursorFill } from "react-icons/bs";

//LATER
// need the messages to pop up almost independent of user interaction
// add the collect coins button?
// expand the idea
// what happens after it gets crowded
// can you clear it? can you interact with it?
// do you have to navigate through it?
//

// thinking about how the way that i present the chats right now,
// takes them out of their natural context and time
// they are out of order and off beat from how they were initially posted
// --> disjointed/disconnected/out of order
// unable to communicate clearly
// can only do about 10 before it's completely unreadable
// who is reading it? who is recieving it?
// communication
//internet sites like this feel sort of cool bc
// youre connected to like thousands of people at once
// but it's sort of like you couldn't be more disconnected

// what if it cleared whatever word you typed in from everyone elses
// and you can keep going until the screen is clear
// when you have said everything that anyone else has said

// or it'd be cool if you typed in a word or character and
// it showed you every comment taht also uses that word/character

// i dont want it to just like stop and become unusable like
// i want you to be able to stay there for a while and play with it

// something about how this forces you to pay attention and read/acknowledge each comment
// and also notice how some word get rid of large quantities of the comments

// look for this character in all of arr2 txts
// if the thing is in arr2, take it out as like a substring or whatever
// take out extra spaces
// if it is zero characters after this, remove this from the array
// this would make it so that there is some end where you type and
// there will be no extra noise

const arr = [
  {
    user: "dj_idcore",
    txt: "Just gonna add two of my fav 'buttrock' adjacent tunes",
  },
  {
    user: "HasanabiIndustrees",
    txt: "peepoPogO azan",
  },
  {
    user: "gizmomacks",
    txt: "Live DinkDonk",
  },
  {
    user: "BurgerShot5",
    txt: "OMEGALUL",
  },
  {
    user: "Stayhungryy",
    txt: "y not",
  },
  {
    user: "The_Notorious_R_O_B",
    txt: "ayyyeeee",
  },
  {
    user: "oatmeek",
    txt: "PogU",
  },
  {
    user: "aniki_math",
    txt: "Live",
  },
  {
    user: "OLIV_R",
    txt: "LETSGO",
  },
  {
    user: "gizmomacks",
    txt: "Live  DinkDonk",
  },
  {
    user: "choppytoppy",
    txt: "LIV",
  },
  {
    user: "HORSTBEFEHL",
    txt: "PogU",
  },
  {
    user: "cecikm",
    txt: "hi feinClap",
  },
  {
    user: "robin1904",
    txt: "Karl Marx",
  },
  {
    user: "ByteSized_",
    txt: "#trivia ashiBuh",
  },
  {
    user: "sebbaru_",
    txt: "i finally made it",
  },
  {
    user: "mama_2210",
    txt: "classic lol",
  },
  {
    user: "lassereino",
    txt: "Fuck he's live again",
  },
  {
    user: "buffygeek",
    txt: "chill chat",
  },
  {
    user: "jawsh56",
    txt: "hasBuff hasBuff hasBuff hasBuff",
  },

  {
    user: "aidenaspect",
    txt: "raid me",
  },
  {
    user: "TewwibleOz",
    txt: "hasHi hasHi'",
  },
  {
    user: "Esan3san",
    txt: "hasL hasL hasL hasL",
  },
  {
    user: "TheeHamSolo",
    txt: "pepeD",
  },
  {
    user: "iforgotmypasswordspepega",
    txt: "YAY",
  },
  {
    user: "pariakj",
    txt: "Im new to twitch",
  },
  {
    user: "juice_0666",
    txt: "what up chat",
  },
  {
    user: "dantraa",
    txt: "Hi chat <3",
  },
  {
    user: "cmarts",
    txt: "Grrr",
  },
  {
    user: "katitie_",
    txt: "good morning chat'",
  },
  {
    user: "BlokeW",
    txt: "Jammies",
  },
  {
    user: "ColorfullyOffbeat",
    txt: "Gayge",
  },
  {
    user: "Looneqq",
    txt: "Jammies",
  },
  {
    user: "justclownbiz",
    txt: "Jammies",
  },
  {
    user: "laserkei",
    txt: "Jammies",
  },
  {
    user: "somechillthoughts",
    txt: "OMEGALUL",
  },
  {
    user: "OnlyFaaact",
    txt: "YOOOOOOO",
  },
  {
    user: "Avenged7gabe",
    txt: "Jammies Jammies Jammies",
  },
  {
    user: "tamannuh",
    txt: "hasJAM",
  },
  {
    user: "shrishrii",
    txt: "OMEGALUL",
  },

  {
    user: "Erigel",
    txt: "monkaW",
  },
  {
    user: "WoodenMonkeyGod",
    txt: "audio is fucked",
  },
  {
    user: "Pasicho",
    txt: "monkaW covid vision",
  },

  {
    user: "vampirecurrency",
    txt: "???",
  },
  {
    user: "DRNippler",
    txt: "no shit",
  },
  {
    user: "intensegirthquake",
    txt: "OF COURSE ITS A SCAM BRO",
  },
  {
    user: "jackattack30",
    txt: "the straightest man in world invented that game",
  },
  {
    user: "numbuh34",
    txt: "KEKL NO SHIT",
  },
  {
    user: "KidQuinoa",
    txt: "expensive piss",
  },
  {
    user: "flowerpew",
    txt: "-8 KEKW",
  },
  {
    user: "Kearsed2k",
    txt: "-8$ KEKL",
  },
  {
    user: "aNevikk",
    txt: "-8",
  },
  {
    user: "crassbandicoot",
    txt: "-$8",
  },
  {
    user: "nawttnawtt",
    txt: "Is he hungover",
  },
  {
    user: "Diraction",
    txt: "WAYTOODANK",
  },
  {
    user: "purpledreams319",
    txt: "tea",
  },
  {
    user: "jakichaan",
    txt: "You gotta drink lots of water too WeirdDude",
  },
  {
    user: "iSMELLLAVENDER",
    txt: "HUH ????????",
  },
  {
    user: "artemis266",
    txt: "isn't that for your liver?",
  },
  {
    user: "retropotatoee",
    txt: "MY MOM HAD SOME MEXICAN MEDICINE SHE WOULD GIVE ME BACK IN THE DAY",
  },
  {
    user: "Dread90",
    txt: "FeelsAmazingMan 💊",
  },
  {
    user: "ryul2",
    txt: "widepeepoHas cancer",
  },
  {
    user: "IgiveBluebells",
    txt: "C R Y S T A L D A D D Y",
  },

  {
    user: "jaaminoes",
    txt: ":3",
  },
  {
    user: "MisterBongwater",
    txt: 'this is like "no we have black twitch why can\'t we have white twitch" hasChud',
  },
  {
    user: "o_seuvizinho",
    txt: "KEKW",
  },
  {
    user: "xxxnsnsnsxxx",
    txt: "CAUCASITY IS THE BEST WORD I HAVE HEARD THIS DAY LMAOOO",
  },
  {
    user: "ChazzGrove",
    txt: "Idk with this chat sometimes",
  },
  {
    user: "XDarons",
    txt: "least triggered hasan subscriber",
  },
  {
    user: "brenaebri",
    txt: "REDEEM YOURSELF",
  },
  {
    user: "jakichaan",
    txt: "KEKW",
  },
  {
    user: "particlesolo",
    txt: "Chatting /s",
  },
  {
    user: "sunflowertsukii",
    txt: "OMEGALUL",
  },

  {
    user: "1337h4x",
    txt: "What's /s mean?",
  },
  {
    user: "LunaLamperouge",
    txt: "Isn't /s sarcasm KEKL",
  },
  {
    user: "badtour",
    txt: "no????????????",
  },

  {
    user: "NanashiADD",
    txt: "leftist audio",
  },
  {
    user: "BKHei_",
    txt: "WAYTOODANK",
  },
  {
    user: "Bloodysenbonzakura",
    txt: "NODDERS",
  },
  {
    user: "kakirin__",
    txt: "whats the song ???????",
  },
  {
    user: "dolphin3njoyer",
    txt: "HUH",
  },
  {
    user: "luvabunny613",
    txt: "HUH",
  },
  {
    user: "haventk",
    txt: "HUH",
  },
  {
    user: "crassbandicoot",
    txt: "THAT WAS FUNNY KEKW",
  },
  {
    user: "Azrebalmung",
    txt: '"im a big supporter of fun"......but youre a socialist',
  },
  {
    user: "medusifer",
    txt: "TAKE A NAP",
  },
  {
    user: "jedhug",
    txt: "least weird discord chatter",
  },
  {
    user: "nellacon",
    txt: "why do you never bully me :(",
  },
  {
    user: "mahtuu444",
    txt: "why does he look so old",
  },
  {
    user: "alieeezy",
    txt: "???? RACIST",
  },
  {
    user: "betahvhs",
    txt: "HES A FLAT EARTHER THAT IS ALL YOU HAVE TO SAY",
  },
  {
    user: "boomerbyleth",
    txt: "monkaW",
  },
  {
    user: "JustBeJo",
    txt: "SAY IT PUSSY",
  },
  {
    user: "bratgal",
    txt: "😭😭😭😭",
  },
  {
    user: "0R4C73",
    txt: "TOO BASED",
  },
  {
    user: "Brues1",
    txt: "SUPSUPSUPSUPSUPSUPSUPSUP",
  },

  {
    user: "mama_2210",
    txt: "classic lol",
  },
  {
    user: "teeejae",
    txt: "broke boi OMEGALUL",
  },
  {
    user: "Varama420",
    txt: "Sussy",
  },
  {
    user: "AvinashSharma13",
    txt: "get him to put cra*ker on his palm.",
  },

  {
    user: "oldman_gardo",
    txt: "RIGGED",
  },
  {
    user: "teeejae",
    txt: "broke boi OMEGALUL",
  },
  {
    user: "Varama420",
    txt: "Sussy",
  },
  {
    user: "MN651",
    txt: "OMEGALUL",
  },

  {
    user: "bettinghamm",
    txt: "TOOBASED",
  },
  {
    user: "gdknightmare",
    txt: "KEKW",
  },
  {
    user: "bruhitsdivya",
    txt: "1",
  },
  {
    user: "omar_xd_",
    txt: "KEKW",
  },

  {
    user: "Kensai_F",
    txt: "KEKW",
  },
  {
    user: "AfroTohru",
    txt: "KEKW",
  },
  {
    user: "JacePatrick",
    txt: "KEKW",
  },
  {
    user: "femmerose",
    txt: "KEKW",
  },

  {
    user: "temporal_archer",
    txt: "you💳know💳what💳to💳do💳",
  },
  {
    user: "GMHikarooo",
    txt: "D:",
  },
  {
    user: "kkonakov",
    txt: "he has a heart afterall",
  },
  {
    user: "Plubilee",
    txt: "Get him to do a vagina hand tattoo!!!!!!! ",
  },

  {
    user: "dutypt",
    txt: "least greedy millionare",
  },
  {
    user: "GMHikarooo",
    txt: "D:",
  },
  {
    user: "kkonakov",
    txt: "he has a heart afterall",
  },
  {
    user: "Plubilee",
    txt: "Get him to do a vagina hand tattoo!!!!!!! ",
  },

  {
    user: "captain_SPOG",
    txt: "omg hes pooping",
  },
  {
    user: "Stefie_rella",
    txt: "PogU",
  },
  {
    user: "neptune_1111",
    txt: "PogU",
  },
  {
    user: "manicpixieghoul",
    txt: "PogU",
  },

  {
    user: "dantosh",
    txt: "PogU",
  },
  {
    user: "JefeVergas",
    txt: "PogU",
  },
  {
    user: "FriedSliceTX",
    txt: "PogU",
  },

  {
    user: "littlehappyrat",
    txt: "PogU",
  },
  {
    user: "minepine_",
    txt: "PogU",
  },
  {
    user: "papapanchy",
    txt: "PogU",
  },

  {
    user: "0Dbp",
    txt: "wait he got edgar cut KEKL",
  },
  {
    user: "WHlTERIVER",
    txt: "WTF THAT HAIRCUT",
  },
  {
    user: "minepine_",
    txt: "PogU",
  },
  {
    user: "papapanchy",
    txt: "PogU",
  },

  {
    user: "Matthewwerf",
    txt: "KEKW",
  },
  {
    user: "stovetotheface",
    txt: "KEKW",
  },
  {
    user: "manicpixieghoul",
    txt: "KEKW",
  },
  {
    user: "walllflowers",
    txt: "KEKW",
  },

  {
    user: "ArtemisOfSaturn",
    txt: "L KEKW",
  },
  {
    user: "poximusmaximus",
    txt: "SCAMMER",
  },
  {
    user: "manicpixieghoul",
    txt: "KEKW",
  },
  {
    user: "walllflowers",
    txt: "KEKW",
  },
  { user: "just_a_chris", txt: "PogU" },
  { user: "jsenju527", txt: "PogU" },
  { user: "GothamRhinox", txt: "PogU" },
  { user: "LRZuKaTo", txt: "PogU" },
  { user: "LaBestia95", txt: "PogU" },
  { user: "CasketKicker", txt: "PogU" },
  { user: "xguardian426", txt: "OMEGALUL" },
  { user: "straightcash385", txt: "OMEGALUL" },
  { user: "peasantsteven", txt: "KEKW" },
  { user: "dodo241", txt: "KEKW" },
  { user: "neptune_1111", txt: "PogU" },
  { user: "sweetsydney", txt: "KEKW" },
  { user: "easy_modez", txt: "PogU" },
  { user: "NoobAlike", txt: "OMEGALUL" },
  { user: "stickypeach420", txt: "KEKW" },
  { user: "kaysohee", txt: "W SCAM" },
  { user: "uwubottomuwu", txt: "PogU" },
  { user: "ggoosedown", txt: "PogU" },
  { user: "superbugging", txt: "KEKW" },
  { user: "papapanchy", txt: "PogU" },
  { user: "JonnyTheUnicorn", txt: "KEKW" },
  { user: "superbugging", txt: "PogU" },
  { user: "HawaiianHercules", txt: "OMEGALUL" },
  { user: "F13ND1SH_GH0UL", txt: "PogU" },
  { user: "Classicint", txt: "PogU" },
  { user: "grilledcheesebandit", txt: "PogU" },
  {
    user: "poguli",
    txt: "SAVE THE KIDS PogU SAVE THE KIDS PogU SAVE THE KIDS PogU SAVE THE KIDS PogU SAVE THE KIDS PogU",
  },
  { user: "nezical", txt: "PogU" },
  { user: "almondsarethebestnut", txt: "KEKW" },
  { user: "peasantsteven", txt: "OMEGALUL" },
  { user: "vcentsk", txt: "KEKW" },
  { user: "residentshitter", txt: "KEKW" },
  { user: "ttttypes", txt: "KEKW" },
  { user: "Lupine573", txt: "KEKW" },
  { user: "ayojlyn", txt: "KEKW" },
  { user: "DirtyMerlin", txt: "KEKW" },
  { user: "Guadaloopz", txt: "KEKW" },
  { user: "funnelcayke", txt: "KEKW L" },
  { user: "UnconscientiousObjector", txt: "peepoGiggles" },
  { user: "MN651", txt: "KEKL" },
  { user: "FriedSliceTX", txt: "KEKL" },
  { user: "femmerose", txt: "KEKL" },
  { user: "RavenNeck103", txt: "KEKL " },
  { user: "Frigeo", txt: "KEKW ..." },
  { user: "Stefie_rella", txt: "KEKW KEKW KEKW" },
  { user: "neptune_1111", txt: "PogU" },
  { user: "lollipopenjoyer", txt: "KEKW" },
  { user: "bruhitsdivya", txt: "its giving edgar" },
  { user: "glockstarr11", txt: "PogU" },
  { user: "matthewgg77", txt: "PogU" },
  { user: "xpyb", txt: "KEKL" },
  { user: "turb0kiIIer", txt: "DO IT" },
  { user: "lionisnotaleo", txt: "PogU" },
  { user: "dilawnww", txt: "PogU" },
  { user: "ultimazzz", txt: "OMEGALUL" },
  { user: "fleaisme", txt: "PogU" },
  { user: "wgmeister", txt: "PogU" },
  { user: "minepine_", txt: "PogU" },
  { user: "ultimazzz", txt: "KEKW" },
  { user: "patches233", txt: "KEKW" },
  { user: "moe_ron", txt: "PogU" },
  { user: "wettowel420", txt: "PogU" },
  {
    user: "BreakfastWithBeast",
    txt: '"for the kids" or for the tax write off L STREAMERS',
  },
  { user: "CrYyPtiD", txt: "PogU" },
  { user: "mediocreson", txt: "jerma sus wins no matter what" },
  { user: "Gayge69", txt: "TWIN TOWER TATTOO" },
  { user: "srb373", txt: "PogU" },
  { user: "gifsmooth", txt: "he's doing EFFECTIVE ALTRUISM" },
  { user: "n1cky_tv", txt: "KEKW" },
  { user: "Cynic84", txt: "Kappa" },
  { user: "witchhag11", txt: "PogU" },
  { user: "aicho3o", txt: "PogU" },
  { user: "bakedbluedevil", txt: "KEKW" },
  { user: "kotto7877", txt: "KEKW" },
  { user: "GiantWill", txt: "KEKW" },
  { user: "KDogg241", txt: "That haircut is wild KEKW" },
  { user: "mousetwap", txt: "bowl cut" },
  { user: "lfrantasyl", txt: "KEKW" },
  { user: "RoninHavok", txt: "PogU" },
  { user: "YoitsCN", txt: "PogU" },
  { user: "SAIAnarra", txt: "HES A BEAST" },
  { user: "resident_evils", txt: "KEKW" },
  { user: "moe_ron", txt: "DO IT" },
  { user: "kingThayre", txt: "He looks like an amish guy " },
  { user: "AmysGrave", txt: "KEKW" },
  { user: "Oo_Double_T_oO", txt: "PogU" },
  { user: "jemparoni", txt: "feed the kids" },
  { user: "Common___Sense", txt: "i mean Hmm" },
  { user: "neonics_cosplay", txt: "PogU" },
  { user: "magkom", txt: "PogU" },
  { user: "DevinToyoki", txt: "SCAMWIG" },
  { user: "Ed_the_Human", txt: "hasPause" },
  { user: "ScreamPillow", txt: "PogU" },
  { user: "W0LFzzzy", txt: "KEKW" },
  { user: "alittlelesslung", txt: "25k? real socialism is 25k" },
  { user: "devilesk", txt: "PogU" },
  { user: "nintenchrisx2", txt: "KEKW jesus" },
  { user: "ti145mmy", txt: "9/11 do it do it doit" },
  { user: "idnasyarrel", txt: "i think he might" },
  { user: "aGaggleOfEwoks", txt: "PogU" },
  { user: "HellsWrathMT", txt: "10,001" },
  { user: "Tip_Boi", txt: "just a lil for the kids" },
  { user: "tyyytrackk", txt: "PogU" },
  { user: "Sky_Anon", txt: "10,001" },
  { user: "antifa_cto", txt: "PogU" },
  { user: "saint_moira", txt: "PogU" },
  { user: "dazeeplayez", txt: "Scamwig lol" },
  { user: "truckguy43", txt: "C WORD DO IT" },
  { user: "CHUPAWUNGA", txt: "PogU" },
  { user: "Yopipimps", txt: "9/11?" },
  { user: "Clonek1ng", txt: "worth" },
  { user: "alex_the_sasser", txt: "PogU" },
  { user: "pARASOCIAL_aNDY", txt: "L COIN OMEGALUL" },
  { user: "CrYyPtiD", txt: "PogU" },
  { user: "ElizaAimes", txt: "what tattoo?" },
  { user: "golden_ren", txt: "KEKW" },
  { user: "LaziestCommie", txt: "he looks so damn evil OMEGALUL" },
  { user: "patches233", txt: "PogU" },
  { user: "viereugen", txt: "OMEGALUL" },
  { user: "kyuhakxx", txt: "PepeLa" },
  { user: "kay_rose_bee", txt: "OMEGALUL" },
  { user: "AutKoe", txt: "KEKW" },
  { user: "dantheman0700", txt: "FEED THE KIDS Madge" },
  { user: "PigeonPotPies", txt: "KEKW" },
  { user: "vanya616", txt: "PogU" },
  { user: "seeayy", txt: "KEKW" },
  { user: "eichenlaubm", txt: "Do it!!!!!" },
  { user: "vcentsk", txt: "PauseChamp" },
  { user: "Dmesh", txt: "PogU" },
  { user: "27sush", txt: "make him get a DOGECOIN" },
  { user: "NeshaTiara", txt: "PepeLa SEND IT" },
  { user: "tiuliu", txt: "do itttt" },
  { user: "jdubya181", txt: "LMAO is that a vest?" },
  { user: "ponderosopine", txt: "KEKW" },
  { user: "xpyb", txt: "ROLLED" },
  { user: "kator_gator", txt: "the world will know haha love it" },
  { user: "four04__", txt: "KEKW" },
  { user: "censrdcolors", txt: "PogU" },
  { user: "DuccShark", txt: "OMEGALUL WNED" },
  { user: "SmileySpaceX", txt: "W H OMEGALUL" },
  { user: "dilawnww", txt: "KEKW" },
  { user: "DustOffMars", txt: "WH OMEGALUL" },
  { user: "huphonic", txt: "CUSSY TATTOO" },
  { user: "ddsing_", txt: "PogU" },
  { user: "lizardOvrlord", txt: "KEKW" },
  { user: "johnEsmokes", txt: "PogU" },
  { user: "neonics_cosplay", txt: "KARL MARX TATTOO PogU" },
  { user: "fountainhooks", txt: "PogU" },
  { user: "JannePar", txt: "PogU" },
  { user: "comer310", txt: "KEKW" },
  { user: "fininant", txt: "KEKW" },
  { user: "straightcash385", txt: "PogU" },
  { user: "sandwatcher", txt: "PogU" },
  { user: "vlorpflash112", txt: "u got got OMEGALUL" },
  { user: "madamedrak", txt: "KEKW" },
  { user: "WingyDingies", txt: "PogU" },
  { user: "easy_modez", txt: "YESSIR KEKL" },
  { user: "Oddchildout", txt: "KEKL" },
];

var arr2 = [
  {
    user: "dj_idcore",
    txt: "Just gonna add two of my fav 'buttrock' adjacent tunes",
  },
  {
    user: "HasanabiIndustrees",
    txt: "peepoPogO azan",
  },
  {
    user: "gizmomacks",
    txt: "Live DinkDonk",
  },
  {
    user: "BurgerShot5",
    txt: "OMEGALUL",
  },
  {
    user: "Stayhungryy",
    txt: "y not",
  },
  {
    user: "The_Notorious_R_O_B",
    txt: "ayyyeeee",
  },
  {
    user: "oatmeek",
    txt: "PogU",
  },
  {
    user: "aniki_math",
    txt: "Live",
  },
  {
    user: "OLIV_R",
    txt: "LETSGO",
  },
  {
    user: "gizmomacks",
    txt: "Live  DinkDonk",
  },
  {
    user: "choppytoppy",
    txt: "LIV",
  },
  {
    user: "HORSTBEFEHL",
    txt: "PogU",
  },
  {
    user: "cecikm",
    txt: "hi feinClap",
  },
  {
    user: "robin1904",
    txt: "Karl Marx",
  },
  {
    user: "ByteSized_",
    txt: "#trivia ashiBuh",
  },
  {
    user: "sebbaru_",
    txt: "i finally made it",
  },
  {
    user: "mama_2210",
    txt: "classic lol",
  },
  {
    user: "lassereino",
    txt: "Fuck he's live again",
  },
  {
    user: "buffygeek",
    txt: "chill chat",
  },
  {
    user: "jawsh56",
    txt: "hasBuff hasBuff hasBuff hasBuff",
  },

  {
    user: "aidenaspect",
    txt: "raid me",
  },
  {
    user: "TewwibleOz",
    txt: "hasHi hasHi'",
  },
  {
    user: "Esan3san",
    txt: "hasL hasL hasL hasL",
  },
  {
    user: "TheeHamSolo",
    txt: "pepeD",
  },
  {
    user: "iforgotmypasswordspepega",
    txt: "YAY",
  },
  {
    user: "pariakj",
    txt: "Im new to twitch",
  },
  {
    user: "juice_0666",
    txt: "what up chat",
  },
  {
    user: "dantraa",
    txt: "Hi chat <3",
  },
  {
    user: "cmarts",
    txt: "Grrr",
  },
  {
    user: "katitie_",
    txt: "good morning chat'",
  },
  {
    user: "BlokeW",
    txt: "Jammies",
  },
  {
    user: "ColorfullyOffbeat",
    txt: "Gayge",
  },
  {
    user: "Looneqq",
    txt: "Jammies",
  },
  {
    user: "justclownbiz",
    txt: "Jammies",
  },
  {
    user: "laserkei",
    txt: "Jammies",
  },
  {
    user: "somechillthoughts",
    txt: "OMEGALUL",
  },
  {
    user: "OnlyFaaact",
    txt: "YOOOOOOO",
  },
  {
    user: "Avenged7gabe",
    txt: "Jammies Jammies Jammies",
  },
  {
    user: "tamannuh",
    txt: "hasJAM",
  },
  {
    user: "shrishrii",
    txt: "OMEGALUL",
  },

  {
    user: "Erigel",
    txt: "monkaW",
  },
  {
    user: "WoodenMonkeyGod",
    txt: "audio is fucked",
  },
  {
    user: "Pasicho",
    txt: "monkaW covid vision",
  },

  {
    user: "vampirecurrency",
    txt: "???",
  },
  {
    user: "DRNippler",
    txt: "no shit",
  },
  {
    user: "intensegirthquake",
    txt: "OF COURSE ITS A SCAM BRO",
  },
  {
    user: "jackattack30",
    txt: "the straightest man in world invented that game",
  },
  {
    user: "numbuh34",
    txt: "KEKL NO SHIT",
  },
  {
    user: "KidQuinoa",
    txt: "expensive piss",
  },
  {
    user: "flowerpew",
    txt: "-8 KEKW",
  },
  {
    user: "Kearsed2k",
    txt: "-8$ KEKL",
  },
  {
    user: "aNevikk",
    txt: "-8",
  },
  {
    user: "crassbandicoot",
    txt: "-$8",
  },
  {
    user: "nawttnawtt",
    txt: "Is he hungover",
  },
  {
    user: "Diraction",
    txt: "WAYTOODANK",
  },
  {
    user: "purpledreams319",
    txt: "tea",
  },
  {
    user: "jakichaan",
    txt: "You gotta drink lots of water too WeirdDude",
  },
  {
    user: "iSMELLLAVENDER",
    txt: "HUH ????????",
  },
  {
    user: "artemis266",
    txt: "isn't that for your liver?",
  },
  {
    user: "retropotatoee",
    txt: "MY MOM HAD SOME MEXICAN MEDICINE SHE WOULD GIVE ME BACK IN THE DAY",
  },
  {
    user: "Dread90",
    txt: "FeelsAmazingMan 💊",
  },
  {
    user: "ryul2",
    txt: "widepeepoHas cancer",
  },
  {
    user: "IgiveBluebells",
    txt: "C R Y S T A L D A D D Y",
  },

  {
    user: "jaaminoes",
    txt: ":3",
  },
  {
    user: "MisterBongwater",
    txt: 'this is like "no we have black twitch why can\'t we have white twitch" hasChud',
  },
  {
    user: "o_seuvizinho",
    txt: "KEKW",
  },
  {
    user: "xxxnsnsnsxxx",
    txt: "CAUCASITY IS THE BEST WORD I HAVE HEARD THIS DAY LMAOOO",
  },
  {
    user: "ChazzGrove",
    txt: "Idk with this chat sometimes",
  },
  {
    user: "XDarons",
    txt: "least triggered hasan subscriber",
  },
  {
    user: "brenaebri",
    txt: "REDEEM YOURSELF",
  },
  {
    user: "jakichaan",
    txt: "KEKW",
  },
  {
    user: "particlesolo",
    txt: "Chatting /s",
  },
  {
    user: "sunflowertsukii",
    txt: "OMEGALUL",
  },

  {
    user: "1337h4x",
    txt: "What's /s mean?",
  },
  {
    user: "LunaLamperouge",
    txt: "Isn't /s sarcasm KEKL",
  },
  {
    user: "badtour",
    txt: "no????????????",
  },

  {
    user: "NanashiADD",
    txt: "leftist audio",
  },
  {
    user: "BKHei_",
    txt: "WAYTOODANK",
  },
  {
    user: "Bloodysenbonzakura",
    txt: "NODDERS",
  },
  {
    user: "kakirin__",
    txt: "whats the song ???????",
  },
  {
    user: "dolphin3njoyer",
    txt: "HUH",
  },
  {
    user: "luvabunny613",
    txt: "HUH",
  },
  {
    user: "haventk",
    txt: "HUH",
  },
  {
    user: "crassbandicoot",
    txt: "THAT WAS FUNNY KEKW",
  },
  {
    user: "Azrebalmung",
    txt: '"im a big supporter of fun"......but youre a socialist',
  },
  {
    user: "medusifer",
    txt: "TAKE A NAP",
  },
  {
    user: "jedhug",
    txt: "least weird discord chatter",
  },
  {
    user: "nellacon",
    txt: "why do you never bully me :(",
  },
  {
    user: "mahtuu444",
    txt: "why does he look so old",
  },
  {
    user: "alieeezy",
    txt: "???? RACIST",
  },
  {
    user: "betahvhs",
    txt: "HES A FLAT EARTHER THAT IS ALL YOU HAVE TO SAY",
  },
  {
    user: "boomerbyleth",
    txt: "monkaW",
  },
  {
    user: "JustBeJo",
    txt: "SAY IT PUSSY",
  },
  {
    user: "bratgal",
    txt: "😭😭😭😭",
  },
  {
    user: "0R4C73",
    txt: "TOO BASED",
  },
  {
    user: "Brues1",
    txt: "SUPSUPSUPSUPSUPSUPSUPSUP",
  },

  {
    user: "mama_2210",
    txt: "classic lol",
  },
  {
    user: "teeejae",
    txt: "broke boi OMEGALUL",
  },
  {
    user: "Varama420",
    txt: "Sussy",
  },
  {
    user: "AvinashSharma13",
    txt: "get him to put cra*ker on his palm.",
  },

  {
    user: "oldman_gardo",
    txt: "RIGGED",
  },
  {
    user: "teeejae",
    txt: "broke boi OMEGALUL",
  },
  {
    user: "Varama420",
    txt: "Sussy",
  },
  {
    user: "MN651",
    txt: "OMEGALUL",
  },

  {
    user: "bettinghamm",
    txt: "TOOBASED",
  },
  {
    user: "gdknightmare",
    txt: "KEKW",
  },
  {
    user: "bruhitsdivya",
    txt: "1",
  },
  {
    user: "omar_xd_",
    txt: "KEKW",
  },

  {
    user: "Kensai_F",
    txt: "KEKW",
  },
  {
    user: "AfroTohru",
    txt: "KEKW",
  },
  {
    user: "JacePatrick",
    txt: "KEKW",
  },
  {
    user: "femmerose",
    txt: "KEKW",
  },

  {
    user: "temporal_archer",
    txt: "you💳know💳what💳to💳do💳",
  },
  {
    user: "GMHikarooo",
    txt: "D:",
  },
  {
    user: "kkonakov",
    txt: "he has a heart afterall",
  },
  {
    user: "Plubilee",
    txt: "Get him to do a vagina hand tattoo!!!!!!! ",
  },

  {
    user: "dutypt",
    txt: "least greedy millionare",
  },
  {
    user: "GMHikarooo",
    txt: "D:",
  },
  {
    user: "kkonakov",
    txt: "he has a heart afterall",
  },
  {
    user: "Plubilee",
    txt: "Get him to do a vagina hand tattoo!!!!!!! ",
  },

  {
    user: "captain_SPOG",
    txt: "omg hes pooping",
  },
  {
    user: "Stefie_rella",
    txt: "PogU",
  },
  {
    user: "neptune_1111",
    txt: "PogU",
  },
  {
    user: "manicpixieghoul",
    txt: "PogU",
  },

  {
    user: "dantosh",
    txt: "PogU",
  },
  {
    user: "JefeVergas",
    txt: "PogU",
  },
  {
    user: "FriedSliceTX",
    txt: "PogU",
  },

  {
    user: "littlehappyrat",
    txt: "PogU",
  },
  {
    user: "minepine_",
    txt: "PogU",
  },
  {
    user: "papapanchy",
    txt: "PogU",
  },

  {
    user: "0Dbp",
    txt: "wait he got edgar cut KEKL",
  },
  {
    user: "WHlTERIVER",
    txt: "WTF THAT HAIRCUT",
  },
  {
    user: "minepine_",
    txt: "PogU",
  },
  {
    user: "papapanchy",
    txt: "PogU",
  },

  {
    user: "Matthewwerf",
    txt: "KEKW",
  },
  {
    user: "stovetotheface",
    txt: "KEKW",
  },
  {
    user: "manicpixieghoul",
    txt: "KEKW",
  },
  {
    user: "walllflowers",
    txt: "KEKW",
  },

  {
    user: "ArtemisOfSaturn",
    txt: "L KEKW",
  },
  {
    user: "poximusmaximus",
    txt: "SCAMMER",
  },
  {
    user: "manicpixieghoul",
    txt: "KEKW",
  },
  {
    user: "walllflowers",
    txt: "KEKW",
  },
  { user: "just_a_chris", txt: "PogU" },
  { user: "jsenju527", txt: "PogU" },
  { user: "GothamRhinox", txt: "PogU" },
  { user: "LRZuKaTo", txt: "PogU" },
  { user: "LaBestia95", txt: "PogU" },
  { user: "CasketKicker", txt: "PogU" },
  { user: "xguardian426", txt: "OMEGALUL" },
  { user: "straightcash385", txt: "OMEGALUL" },
  { user: "peasantsteven", txt: "KEKW" },
  { user: "dodo241", txt: "KEKW" },
  { user: "neptune_1111", txt: "PogU" },
  { user: "sweetsydney", txt: "KEKW" },
  { user: "easy_modez", txt: "PogU" },
  { user: "NoobAlike", txt: "OMEGALUL" },
  { user: "stickypeach420", txt: "KEKW" },
  { user: "kaysohee", txt: "W SCAM" },
  { user: "uwubottomuwu", txt: "PogU" },
  { user: "ggoosedown", txt: "PogU" },
  { user: "superbugging", txt: "KEKW" },
  { user: "papapanchy", txt: "PogU" },
  { user: "JonnyTheUnicorn", txt: "KEKW" },
  { user: "superbugging", txt: "PogU" },
  { user: "HawaiianHercules", txt: "OMEGALUL" },
  { user: "F13ND1SH_GH0UL", txt: "PogU" },
  { user: "Classicint", txt: "PogU" },
  { user: "grilledcheesebandit", txt: "PogU" },
  {
    user: "poguli",
    txt: "SAVE THE KIDS PogU SAVE THE KIDS PogU SAVE THE KIDS PogU SAVE THE KIDS PogU SAVE THE KIDS PogU",
  },
  { user: "nezical", txt: "PogU" },
  { user: "almondsarethebestnut", txt: "KEKW" },
  { user: "peasantsteven", txt: "OMEGALUL" },
  { user: "vcentsk", txt: "KEKW" },
  { user: "residentshitter", txt: "KEKW" },
  { user: "ttttypes", txt: "KEKW" },
  { user: "Lupine573", txt: "KEKW" },
  { user: "ayojlyn", txt: "KEKW" },
  { user: "DirtyMerlin", txt: "KEKW" },
  { user: "Guadaloopz", txt: "KEKW" },
  { user: "funnelcayke", txt: "KEKW L" },
  { user: "UnconscientiousObjector", txt: "peepoGiggles" },
  { user: "MN651", txt: "KEKL" },
  { user: "FriedSliceTX", txt: "KEKL" },
  { user: "femmerose", txt: "KEKL" },
  { user: "RavenNeck103", txt: "KEKL " },
  { user: "Frigeo", txt: "KEKW ..." },
  { user: "Stefie_rella", txt: "KEKW KEKW KEKW" },
  { user: "neptune_1111", txt: "PogU" },
  { user: "lollipopenjoyer", txt: "KEKW" },
  { user: "bruhitsdivya", txt: "its giving edgar" },
  { user: "glockstarr11", txt: "PogU" },
  { user: "matthewgg77", txt: "PogU" },
  { user: "xpyb", txt: "KEKL" },
  { user: "turb0kiIIer", txt: "DO IT" },
  { user: "lionisnotaleo", txt: "PogU" },
  { user: "dilawnww", txt: "PogU" },
  { user: "ultimazzz", txt: "OMEGALUL" },
  { user: "fleaisme", txt: "PogU" },
  { user: "wgmeister", txt: "PogU" },
  { user: "minepine_", txt: "PogU" },
  { user: "ultimazzz", txt: "KEKW" },
  { user: "patches233", txt: "KEKW" },
  { user: "moe_ron", txt: "PogU" },
  { user: "wettowel420", txt: "PogU" },
  {
    user: "BreakfastWithBeast",
    txt: '"for the kids" or for the tax write off L STREAMERS',
  },
  { user: "CrYyPtiD", txt: "PogU" },
  { user: "mediocreson", txt: "jerma sus wins no matter what" },
  { user: "Gayge69", txt: "TWIN TOWER TATTOO" },
  { user: "srb373", txt: "PogU" },
  { user: "gifsmooth", txt: "he's doing EFFECTIVE ALTRUISM" },
  { user: "n1cky_tv", txt: "KEKW" },
  { user: "Cynic84", txt: "Kappa" },
  { user: "witchhag11", txt: "PogU" },
  { user: "aicho3o", txt: "PogU" },
  { user: "bakedbluedevil", txt: "KEKW" },
  { user: "kotto7877", txt: "KEKW" },
  { user: "GiantWill", txt: "KEKW" },
  { user: "KDogg241", txt: "That haircut is wild KEKW" },
  { user: "mousetwap", txt: "bowl cut" },
  { user: "lfrantasyl", txt: "KEKW" },
  { user: "RoninHavok", txt: "PogU" },
  { user: "YoitsCN", txt: "PogU" },
  { user: "SAIAnarra", txt: "HES A BEAST" },
  { user: "resident_evils", txt: "KEKW" },
  { user: "moe_ron", txt: "DO IT" },
  { user: "kingThayre", txt: "He looks like an amish guy " },
  { user: "AmysGrave", txt: "KEKW" },
  { user: "Oo_Double_T_oO", txt: "PogU" },
  { user: "jemparoni", txt: "feed the kids" },
  { user: "Common___Sense", txt: "i mean Hmm" },
  { user: "neonics_cosplay", txt: "PogU" },
  { user: "magkom", txt: "PogU" },
  { user: "DevinToyoki", txt: "SCAMWIG" },
  { user: "Ed_the_Human", txt: "hasPause" },
  { user: "ScreamPillow", txt: "PogU" },
  { user: "W0LFzzzy", txt: "KEKW" },
  { user: "alittlelesslung", txt: "25k? real socialism is 25k" },
  { user: "devilesk", txt: "PogU" },
  { user: "nintenchrisx2", txt: "KEKW jesus" },
  { user: "ti145mmy", txt: "9/11 do it do it doit" },
  { user: "idnasyarrel", txt: "i think he might" },
  { user: "aGaggleOfEwoks", txt: "PogU" },
  { user: "HellsWrathMT", txt: "10,001" },
  { user: "Tip_Boi", txt: "just a lil for the kids" },
  { user: "tyyytrackk", txt: "PogU" },
  { user: "Sky_Anon", txt: "10,001" },
  { user: "antifa_cto", txt: "PogU" },
  { user: "saint_moira", txt: "PogU" },
  { user: "dazeeplayez", txt: "Scamwig lol" },
  { user: "truckguy43", txt: "C WORD DO IT" },
  { user: "CHUPAWUNGA", txt: "PogU" },
  { user: "Yopipimps", txt: "9/11?" },
  { user: "Clonek1ng", txt: "worth" },
  { user: "alex_the_sasser", txt: "PogU" },
  { user: "pARASOCIAL_aNDY", txt: "L COIN OMEGALUL" },
  { user: "CrYyPtiD", txt: "PogU" },
  { user: "ElizaAimes", txt: "what tattoo?" },
  { user: "golden_ren", txt: "KEKW" },
  { user: "LaziestCommie", txt: "he looks so damn evil OMEGALUL" },
  { user: "patches233", txt: "PogU" },
  { user: "viereugen", txt: "OMEGALUL" },
  { user: "kyuhakxx", txt: "PepeLa" },
  { user: "kay_rose_bee", txt: "OMEGALUL" },
  { user: "AutKoe", txt: "KEKW" },
  { user: "dantheman0700", txt: "FEED THE KIDS Madge" },
  { user: "PigeonPotPies", txt: "KEKW" },
  { user: "vanya616", txt: "PogU" },
  { user: "seeayy", txt: "KEKW" },
  { user: "eichenlaubm", txt: "Do it!!!!!" },
  { user: "vcentsk", txt: "PauseChamp" },
  { user: "Dmesh", txt: "PogU" },
  { user: "27sush", txt: "make him get a DOGECOIN" },
  { user: "NeshaTiara", txt: "PepeLa SEND IT" },
  { user: "tiuliu", txt: "do itttt" },
  { user: "jdubya181", txt: "LMAO is that a vest?" },
  { user: "ponderosopine", txt: "KEKW" },
  { user: "xpyb", txt: "ROLLED" },
  { user: "kator_gator", txt: "the world will know haha love it" },
  { user: "four04__", txt: "KEKW" },
  { user: "censrdcolors", txt: "PogU" },
  { user: "DuccShark", txt: "OMEGALUL WNED" },
  { user: "SmileySpaceX", txt: "W H OMEGALUL" },
  { user: "dilawnww", txt: "KEKW" },
  { user: "DustOffMars", txt: "WH OMEGALUL" },
  { user: "huphonic", txt: "CUSSY TATTOO" },
  { user: "ddsing_", txt: "PogU" },
  { user: "lizardOvrlord", txt: "KEKW" },
  { user: "johnEsmokes", txt: "PogU" },
  { user: "neonics_cosplay", txt: "KARL MARX TATTOO PogU" },
  { user: "fountainhooks", txt: "PogU" },
  { user: "JannePar", txt: "PogU" },
  { user: "comer310", txt: "KEKW" },
  { user: "fininant", txt: "KEKW" },
  { user: "straightcash385", txt: "PogU" },
  { user: "sandwatcher", txt: "PogU" },
  { user: "vlorpflash112", txt: "u got got OMEGALUL" },
  { user: "madamedrak", txt: "KEKW" },
  { user: "WingyDingies", txt: "PogU" },
  { user: "easy_modez", txt: "YESSIR KEKL" },
  { user: "Oddchildout", txt: "KEKL" },
];

function App() {
  const [yours, setYours] = useState(0);
  const [num, setNum] = useState(2);
  const [mess, setMess] = useState([]);

  for (let i = 0; i < 2; i++) {
    let x = randomInt();
    mess.push(<Message user={arr2[x].user} text={arr2[x].txt} />);
  }

  function randomInt() {
    return Math.floor(Math.random() * (0 + arr2.length));
  }

  function clean(word) {
    // go through array to see if each element contains word
    // -- split each element by " " to get individual words

    // if it does replace the entire thing with 'deleted'

    for (let i = 0; i < arr2.length; i++) {
      let str = arr2[i].txt;
      let strsplit = str.toString().split(" ");
      let bool = false;
      for (let j = 0; j < strsplit.length; j++) {
        if (strsplit[j].toLowerCase() === word.toLowerCase()) {
          bool = true;
        }
      }
      if (bool) {
        arr2[i].txt = "deleted";
      }
    }
    // filter out deleted
    arr2 = arr2.filter((a) => a.txt !== "deleted");
  }

  function post() {
    clean(yours);
    setNum(num + num / 2);
    setMess((prevMess) => []);
    for (let i = 0; i < num; i++) {
      let x = randomInt();
      setMess((prevMess) => [
        ...prevMess,
        <Message user={arr2[x].user} text={arr2[x].txt} />,
      ]);
    }
  }

  function next(wow) {
    setYours(wow);
  }

  return (
    <div className="App">
      <header className="App-header">
        {mess}
        <form className="form">
          <input onChange={(e) => next(e.target.value)} />
          <button type="button" className="button" onClick={() => post()}>
            <BsFillCursorFill />
          </button>
        </form>
        <div className="head">
          <h5>What do you see?</h5>
          <h3>
            {arr.length - arr2.length} / {arr.length}
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;
