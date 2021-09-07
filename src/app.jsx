import React, { Component } from "react";
import Navbar from "./component/navbar";
import Content from "./component/content";
import "./app.css";

/* 
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "lbJK8zWbrZH2zSg-alhFSJ0kNfE",
      "id": {
        "kind": "youtube#video",
        "videoId": "FaRbQHlegaM"
      },
      "snippet": {
        "publishedAt": "2021-08-25T19:05:54Z",
        "channelId": "UCwI4MlybmpoWdFI4faRSs_A",
        "title": "DokeV - World Premiere Gameplay Trailer | gamescom 2021",
        "description": "Dive into a gorgeous and lively world where Dokebi and humans live side-by-side! Watch DokeV's first official gameplay trailer which premiered at gamescom ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FaRbQHlegaM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FaRbQHlegaM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FaRbQHlegaM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "DokeV",
        "liveBroadcastContent": "none",
        "publishTime": "2021-08-25T19:05:54Z"
      }
    },
  ]
*/

class App extends Component {
  key1 = "AIzaSyAAGc5-7w931KT4BPwH9Mv8X9ctk0f1TVc";
  key2 = "AIzaSyBVf5GoN4nFYuoumZXHR6ZeUZvyYOMWgsI";
  state = {
    searchParam: undefined,
    item: [],
  };
  baseURL = "https://youtube.googleapis.com/youtube/v3";
  // reqSearch = async (searchParam) => {
  //   this.setState({ ...this.setState, searchParam });
  //   try {
  //     const response = await fetch(
  //       `${this.baseURL}/search?part=snippet&maxResults=25&q=${searchParam}&key=${this.key2}`,
  //       { method: "get" }
  //     );
  //     const list = await response.json();
  //     const item = list.item;
  //     this.setState({ ...this.state, searchParam, item });
  //   } catch (error) {
  //     return console.log("error", error);
  //   }
  // };
  // reqMost = async () => {
  //   try {
  //     const response = await fetch(
  //       `${this.baseURL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key2}`,
  //       { method: "get" }
  //     );
  //     const list = await response.json();
  //     const item = list.item;
  //     console.log(list);
  //     this.setState({ ...this.state, searchParam: undefined, item });
  //   } catch (error) {
  //     return console.log("error", error);
  //   }
  // };
  render() {
    const result = {
      kind: "youtube#videoListResponse",
      etag: "sADeV5DRB-brAf2vTVweq0sPl9o",
      items: [
        {
          kind: "youtube#video",
          etag: "W32uyCtlCPIxGPLeB-NE2wr98PU",
          id: "-KDasyD5m1g",
          snippet: {
            publishedAt: "2021-09-07T15:01:26Z",
            channelId: "UCYAJjqIukwm4r3GHEpJDhVw",
            title: "NBA 2K22: The City",
            description:
              "The next evolution of The City 🏙  Experience the new layout and architecture as you journey through 2K22 MyCAREER on #2KDay 9/10\n\nPre-Order Now: https://nba.2k.com/buy",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/-KDasyD5m1g/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/-KDasyD5m1g/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/-KDasyD5m1g/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "NBA 2K",
            categoryId: "20",
            liveBroadcastContent: "none",
            localized: {
              title: "NBA 2K22: The City",
              description:
                "The next evolution of The City 🏙  Experience the new layout and architecture as you journey through 2K22 MyCAREER on #2KDay 9/10\n\nPre-Order Now: https://nba.2k.com/buy",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "bQ9Im6DVv0joBnA-gWv32aakKq0",
          id: "k6ppxsRfZMA",
          snippet: {
            publishedAt: "2021-09-07T03:12:36Z",
            channelId: "UCt7fwAhXDy3oNFTAzF2o8Pw",
            title: "Drake - Certified Lover Boy ALBUM REVIEW",
            description:
              "Listen: https://www.youtube.com/watch?v=vX9msKu75qs\n\nCertified snoozer.\n\nMore rap reviews: https://www.youtube.com/playlist?list=PLP4CSgl7K7ormBIO138tYonB949PHnNcP\n\n===================================\nSubscribe: http://bit.ly/1pBqGCN\n\nPatreon: https://www.patreon.com/theneedledrop\n\nOfficial site: http://theneedledrop.com\n\nTwitter: http://twitter.com/theneedledrop\n\nInstagram: https://www.instagram.com/afantano\n\nTikTok: https://www.tiktok.com/@theneedletok\n\nTND Twitch: https://www.twitch.tv/theneedledrop\n===================================\n\nFAV TRACKS: FAIR TRADE, YEBBA'S HEARTBREAK, YOU ONLY LIVE TWICE\n\nLEAST FAV TRACK: WAY 2 SEXY\n\nDRAKE - CERTIFIED LOVER BOY / 2021 / OVO / POP RAP\n\n3/10\n\nY'all know this is just my opinion, right?",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/k6ppxsRfZMA/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/k6ppxsRfZMA/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/k6ppxsRfZMA/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/k6ppxsRfZMA/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "theneedledrop",
            tags: [
              "album",
              "review",
              "music",
              "reviews",
              "indie",
              "new",
              "lyrics",
              "listen",
              "track",
              "concert",
              "live",
              "update",
              "the needle drop",
              "anthony fantano",
              "vlog",
              "talk",
              "discussion",
              "music nerd",
              "song",
              "drake",
              "certified lover boy",
              "clb",
              "rap",
              "hip hop",
              "pop",
              "r&b",
              "way 2 sexy",
              "future",
              "kanye",
              "beef",
              "reaction",
              "champagne poetry",
            ],
            categoryId: "10",
            liveBroadcastContent: "none",
            localized: {
              title: "Drake - Certified Lover Boy ALBUM REVIEW",
              description:
                "Listen: https://www.youtube.com/watch?v=vX9msKu75qs\n\nCertified snoozer.\n\nMore rap reviews: https://www.youtube.com/playlist?list=PLP4CSgl7K7ormBIO138tYonB949PHnNcP\n\n===================================\nSubscribe: http://bit.ly/1pBqGCN\n\nPatreon: https://www.patreon.com/theneedledrop\n\nOfficial site: http://theneedledrop.com\n\nTwitter: http://twitter.com/theneedledrop\n\nInstagram: https://www.instagram.com/afantano\n\nTikTok: https://www.tiktok.com/@theneedletok\n\nTND Twitch: https://www.twitch.tv/theneedledrop\n===================================\n\nFAV TRACKS: FAIR TRADE, YEBBA'S HEARTBREAK, YOU ONLY LIVE TWICE\n\nLEAST FAV TRACK: WAY 2 SEXY\n\nDRAKE - CERTIFIED LOVER BOY / 2021 / OVO / POP RAP\n\n3/10\n\nY'all know this is just my opinion, right?",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "qn6WGbj7ipp-kv2uYlV_qGpptFQ",
          id: "bXqfgxzkm7k",
          snippet: {
            publishedAt: "2021-09-06T14:00:25Z",
            channelId: "UCKGNVB2moP-zeAWPmw8HvAA",
            title: "Minecraft but there's Custom Diamonds",
            description:
              "Playing Minecraft while there's custom diamonds brings a whole new challenge to the game!  \n\n7 DAYS LEFT To Get Your Craftee Merchandise! Click Here ► http://craftee.store/\n\n✅ SUBSCRIBE TO Craftee ► https://www.youtube.com/channel/UCKGNVB2moP-zeAWPmw8HvAA?sub_confirmation=1\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nWelcome to Craftee where we take on different challenges and play Minecraft but strange things always happen. Today we're playing Minecraft but there's Custom Diamonds! Let us know which part was your favorites and remember to drop your ideas in the comments for future videos that we can make!\n\nMinecraft but there's Custom Diamonds\n\n#Minecraft #But #Diamonds\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n🎶 Music courtesy of Epidemic Sound\nAll music used with permission from its creator.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/bXqfgxzkm7k/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/bXqfgxzkm7k/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/bXqfgxzkm7k/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/bXqfgxzkm7k/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/bXqfgxzkm7k/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Craftee",
            tags: [
              "minecraft",
              "minecraft but",
              "new minecraft",
              "craftee",
              "craft",
              "crafter",
              "crafty",
              "crafting",
              "crafting recipe",
              "crafting in minecraft",
              "minecraft update",
              "survival",
              "how to survive",
              "parkergames",
              "parker",
              "caves and cliffs",
              "caves and cliffs update",
              "new minecraft channel",
              "diamonds",
              "ender dragon",
              "fastest diamonds",
              "custom",
              "diamond",
              "emeralds",
              "new diamonds",
              "diamond update",
              "quickest way to find diamonds in minecraft",
              "custom diamonds",
              "minecraft diamonds",
              "diamond armor",
              "minecraft but diamonds",
              "rainbow diamond",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            defaultLanguage: "en-US",
            localized: {
              title: "Minecraft but there's Custom Diamonds",
              description:
                "Playing Minecraft while there's custom diamonds brings a whole new challenge to the game!  \n\n7 DAYS LEFT To Get Your Craftee Merchandise! Click Here ► http://craftee.store/\n\n✅ SUBSCRIBE TO Craftee ► https://www.youtube.com/channel/UCKGNVB2moP-zeAWPmw8HvAA?sub_confirmation=1\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬\n\nWelcome to Craftee where we take on different challenges and play Minecraft but strange things always happen. Today we're playing Minecraft but there's Custom Diamonds! Let us know which part was your favorites and remember to drop your ideas in the comments for future videos that we can make!\n\nMinecraft but there's Custom Diamonds\n\n#Minecraft #But #Diamonds\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n🎶 Music courtesy of Epidemic Sound\nAll music used with permission from its creator.",
            },
            defaultAudioLanguage: "en-US",
          },
        },
        {
          kind: "youtube#video",
          etag: "FhQduZY5pfe6_PBrqsQNOe3mW3c",
          id: "T_y7nzhnu_g",
          snippet: {
            publishedAt: "2021-09-06T16:15:21Z",
            channelId: "UCEU5ZK7DwN9ppqPFJiGah3A",
            title: 'EL ALFA "EL JEFE"  FARRUKO  - CURAZAO (VIDEO OFICIAL)',
            description:
              "Disponible en todas las plataformas digitales!\r\nhttps://ElJefe.lnk.to/ElAlfa\r\n\r\nSigueme en las redes sociales:\r\n@ElAlfaElJefe  @dherrera175 \r\n \r\n©: 2021 El Jefe Record Music. All Rights Reserved.\n\nPagina Oficial\nhttp://www.eljefemoneyrecord.com",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/T_y7nzhnu_g/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/T_y7nzhnu_g/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/T_y7nzhnu_g/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/T_y7nzhnu_g/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/T_y7nzhnu_g/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "ElAlfaElJefeTV",
            tags: [
              "Music",
              "Musica",
              "Latino",
              "Latin",
              "Urban",
              "Urbano",
              "Trap",
              "Reggaeton",
              "Dembow",
              "Rap",
              "Hip Hop",
              "Latin Hits",
              "2019 Hits",
              "Exitos del 2019",
              "Puerto Rico",
              "Dominican Republic",
              "Mexico",
              "Miami",
              "New York",
            ],
            categoryId: "10",
            liveBroadcastContent: "none",
            localized: {
              title: 'EL ALFA "EL JEFE"  FARRUKO  - CURAZAO (VIDEO OFICIAL)',
              description:
                "Disponible en todas las plataformas digitales!\r\nhttps://ElJefe.lnk.to/ElAlfa\r\n\r\nSigueme en las redes sociales:\r\n@ElAlfaElJefe  @dherrera175 \r\n \r\n©: 2021 El Jefe Record Music. All Rights Reserved.\n\nPagina Oficial\nhttp://www.eljefemoneyrecord.com",
            },
            defaultAudioLanguage: "es-419",
          },
        },
        {
          kind: "youtube#video",
          etag: "GExTdQcNjj-7gLCeNEBum-HehQ8",
          id: "4fJsQL_Y-tU",
          snippet: {
            publishedAt: "2021-09-06T17:37:43Z",
            channelId: "UCKQ-wNdh0kO5qnpPfXa2hjQ",
            title: "Ranboo goes to the city",
            description:
              "BUY MY MERCH!!! https://ranboo.fashion/\nI had to give a tour to @TommyInnit and @Tubbo because they just had no clue where they were. The benchtrio wreaks havoc yet again.\n\nEDITED BY https://twitter.com/imsalsay\n\nI am LIVE on\nhttps://www.twitch.tv/Ranboolive\u200b\u200b\nI say dumb things\nhttps://twitter.com/Ranboosaysstuff\u200b\u200b\nMERCH!:\nhttps://ranboo.fashion/\nDISCORD:\nhttps://discord.gg/ranboo\nHave an awesome day!",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/4fJsQL_Y-tU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/4fJsQL_Y-tU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/4fJsQL_Y-tU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/4fJsQL_Y-tU/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/4fJsQL_Y-tU/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Ranboo",
            tags: [
              "Ranboo",
              "Tommyinnit",
              "Tubbo",
              "vlog",
              "Ranboo vlog",
              "Ranboo in the city",
              "Ranboo in london",
              "Ranboo goes to the city",
              "Ranboo funny moments",
              "Ranboo is funny i swear",
            ],
            categoryId: "24",
            liveBroadcastContent: "none",
            localized: {
              title: "Ranboo goes to the city",
              description:
                "BUY MY MERCH!!! https://ranboo.fashion/\nI had to give a tour to @TommyInnit and @Tubbo because they just had no clue where they were. The benchtrio wreaks havoc yet again.\n\nEDITED BY https://twitter.com/imsalsay\n\nI am LIVE on\nhttps://www.twitch.tv/Ranboolive\u200b\u200b\nI say dumb things\nhttps://twitter.com/Ranboosaysstuff\u200b\u200b\nMERCH!:\nhttps://ranboo.fashion/\nDISCORD:\nhttps://discord.gg/ranboo\nHave an awesome day!",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "W3jrHFM61QK_Z5dBWxPouc-CnRQ",
          id: "uocETPj4Jx4",
          snippet: {
            publishedAt: "2021-09-04T20:00:07Z",
            channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
            title: "Extreme $500,000 Game Of Tag!",
            description:
              "I did not expect that to happen at the end...\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n--------------------------------------------------------------------",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/uocETPj4Jx4/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/uocETPj4Jx4/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/uocETPj4Jx4/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/uocETPj4Jx4/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/uocETPj4Jx4/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "MrBeast",
            categoryId: "24",
            liveBroadcastContent: "none",
            localized: {
              title: "Extreme $500,000 Game Of Tag!",
              description:
                "I did not expect that to happen at the end...\nNew Merch - https://shopmrbeast.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n--------------------------------------------------------------------",
            },
            defaultAudioLanguage: "en-US",
          },
        },
        {
          kind: "youtube#video",
          etag: "VIn09WugyF-8ZJ_7EXaM3gjtaGE",
          id: "T118pDSxRag",
          snippet: {
            publishedAt: "2021-09-07T10:00:14Z",
            channelId: "UCT4oXolSaPqL5T5TXqmPQ2A",
            title:
              "I Survived 200 Days on One Cloud in Minecraft.. Here's What Happened..",
            description:
              "I Survived 200 Days on One Cloud in Minecraft.. Here's What Happened..\nPre-Register for World Flipper's release in Early September: https://bit.ly/3AuqtLF [AD]\n\nCheck out @LilyPichu a.k.a. Cloudberry\nCheck out @yvonnie a.k.a. Adult Cloudberry\nPatreon ➜ https://patreon.com/forrestpainful (DISCLAIMER: Custom bosses REQUIRE Java Edition).\nShaders Used: Complementary Shaders - https://bit.ly/3wIJgRx\nIntro Animation Created by Spark Universe: https://sparkuniverse.com/\n\nBuy my Cloak ➜ http://lunarclient.com/forrestbono\nBisectHosting ➜ https://bisecthosting.com/FORREST\n↑ Use code “FORREST” for 25% off ↑ [SPONSORED]\nBusiness - 📩 forrest@afkcreators.com\n\nI had to survive for 100 Days of Hardcore Minecraft on One Cloud and battle The Frost Phoenix, The Void Dragon, and a Mystery Boss! Throughout the 100 Days, I encountered many natural disasters while traversing the layers of the atmosphere! Stay tuned to see what happens during the 100 Days on One Cloud!\n\nAll our models in this 100 Days video made incredibly by MexBot, ArtsByKev, Ticxo, TheAnonim, Ycar, Enderdude, V11, Anthony, LittleRoomDev, 宵閣玖鑰, JoWekker, TheLoungeMC!\n\nSocial Media:\nTwitter ➜ https://twitter.com/Forrestbono\nInstagram ➜ https://www.instagram.com/forrestbono\nDiscord ➜ https://discord.gg/CZQ7dQheXG\n\n#100Days #Hardcore #Minecraft",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/T118pDSxRag/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/T118pDSxRag/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/T118pDSxRag/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/T118pDSxRag/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/T118pDSxRag/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Forrestbono",
            tags: [
              "Forrestbono",
              "Minecraft",
              "100 days",
              "200 days",
              "300 days",
              "luke thenotable",
              "Forge Labs",
              "Painful",
              "minecraft hardcore",
              "hardcore mode",
              "minecraft hardcore mode",
              "hardcore mode minecraft",
              "hardcore minecraft survival",
              "hardcore survival minecraft",
              "minecraft hardcore survival mode",
              "I Survived 200 Days on One Cloud in Minecraft.. Here's What Happened..",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            localized: {
              title:
                "I Survived 200 Days on One Cloud in Minecraft.. Here's What Happened..",
              description:
                "I Survived 200 Days on One Cloud in Minecraft.. Here's What Happened..\nPre-Register for World Flipper's release in Early September: https://bit.ly/3AuqtLF [AD]\n\nCheck out @LilyPichu a.k.a. Cloudberry\nCheck out @yvonnie a.k.a. Adult Cloudberry\nPatreon ➜ https://patreon.com/forrestpainful (DISCLAIMER: Custom bosses REQUIRE Java Edition).\nShaders Used: Complementary Shaders - https://bit.ly/3wIJgRx\nIntro Animation Created by Spark Universe: https://sparkuniverse.com/\n\nBuy my Cloak ➜ http://lunarclient.com/forrestbono\nBisectHosting ➜ https://bisecthosting.com/FORREST\n↑ Use code “FORREST” for 25% off ↑ [SPONSORED]\nBusiness - 📩 forrest@afkcreators.com\n\nI had to survive for 100 Days of Hardcore Minecraft on One Cloud and battle The Frost Phoenix, The Void Dragon, and a Mystery Boss! Throughout the 100 Days, I encountered many natural disasters while traversing the layers of the atmosphere! Stay tuned to see what happens during the 100 Days on One Cloud!\n\nAll our models in this 100 Days video made incredibly by MexBot, ArtsByKev, Ticxo, TheAnonim, Ycar, Enderdude, V11, Anthony, LittleRoomDev, 宵閣玖鑰, JoWekker, TheLoungeMC!\n\nSocial Media:\nTwitter ➜ https://twitter.com/Forrestbono\nInstagram ➜ https://www.instagram.com/forrestbono\nDiscord ➜ https://discord.gg/CZQ7dQheXG\n\n#100Days #Hardcore #Minecraft",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "BoWRr_3kErU16icEkIX3lwg8C_4",
          id: "-nOdSj0u29U",
          snippet: {
            publishedAt: "2021-09-06T16:35:29Z",
            channelId: "UCz1D0n02BR3t51KuBOPmfTQ",
            title:
              "India Win To Take 2-1 Lead | England v India - Day 5 Highlights | 4th LV= Insurance Test 2021",
            description:
              "Go to ecb.co.uk to join We Are England Cricket Supporters for free and get priority access to tickets and much more!\n\nWatch match highlights from Day 5 the 4th LV= Insurance Test between England and India at The Oval",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/-nOdSj0u29U/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/-nOdSj0u29U/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/-nOdSj0u29U/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/-nOdSj0u29U/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/-nOdSj0u29U/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "England & Wales Cricket Board",
            tags: [
              "England",
              "England vs. India",
              "India",
              "england cricket board",
              "england cricket live",
              "england v india 2021",
              "england v india - day 4 highlights",
              "england v india highlights",
              "england v india day 5 highlights",
              "rohit sharma batting",
              "england vs india",
              "england india test",
              "england cricket highlights",
              "virat kohli",
              "cricket highlights",
              "england vs india test",
              "england india test match",
              "england vs. india 2021",
              "england cricket",
              "england vs. india test",
              "england vs. india highlights",
            ],
            categoryId: "17",
            liveBroadcastContent: "none",
            localized: {
              title:
                "India Win To Take 2-1 Lead | England v India - Day 5 Highlights | 4th LV= Insurance Test 2021",
              description:
                "Go to ecb.co.uk to join We Are England Cricket Supporters for free and get priority access to tickets and much more!\n\nWatch match highlights from Day 5 the 4th LV= Insurance Test between England and India at The Oval",
            },
            defaultAudioLanguage: "en-GB",
          },
        },
        {
          kind: "youtube#video",
          etag: "RCnUXvgoxjxoKjS3ChHAqmsOleY",
          id: "-xfRlu0rLZY",
          snippet: {
            publishedAt: "2021-09-07T02:44:29Z",
            channelId: "UCzGImHRvnk3TIQtjZ7THiig",
            title: "its been a while..",
            description:
              "the storm is coming.. \n\n2nd Channel : https://www.youtube.com/channel/UCj_fBfX3y5cop2rrDTQ4GOg\n\nTwitch : https://www.twitch.tv/lifeofgman\n\r\n\r\nthe homies that be in the vids sometimes\r\nDerek : http://bit.ly/37ufRin\r\nJosh(TheGameBroke) : http://bit.ly/2D5mM3D\r\nAnthony : http://bit.ly/3632X9p\r\n2Gs : http://bit.ly/2OdGArM\r\nMarshawn : http://bit.ly/2pOrgIf\r\nMarcus : http://bit.ly/2KMXfQT\r\nUniverse (Vinyl) : http://bit.ly/338OHKp \r\nNasty : http://bit.ly/2D5n8Y1\r\n\r\niF YOU rEADING tHIS, yOU cUTE.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/-xfRlu0rLZY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/-xfRlu0rLZY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/-xfRlu0rLZY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/-xfRlu0rLZY/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/-xfRlu0rLZY/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "GMAN",
            tags: [
              "Best Dribbler",
              "Best Jumpshot",
              "Fastest Dribbler",
              "Best Build",
              "GMAN",
              "Best Custom Jumpshot On NBA 2K20",
              "Best Dribble Moves",
              "NBA 2K20",
              "NBA",
              "2K",
              "20",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            defaultLanguage: "en",
            localized: {
              title: "its been a while..",
              description:
                "the storm is coming.. \n\n2nd Channel : https://www.youtube.com/channel/UCj_fBfX3y5cop2rrDTQ4GOg\n\nTwitch : https://www.twitch.tv/lifeofgman\n\r\n\r\nthe homies that be in the vids sometimes\r\nDerek : http://bit.ly/37ufRin\r\nJosh(TheGameBroke) : http://bit.ly/2D5mM3D\r\nAnthony : http://bit.ly/3632X9p\r\n2Gs : http://bit.ly/2OdGArM\r\nMarshawn : http://bit.ly/2pOrgIf\r\nMarcus : http://bit.ly/2KMXfQT\r\nUniverse (Vinyl) : http://bit.ly/338OHKp \r\nNasty : http://bit.ly/2D5n8Y1\r\n\r\niF YOU rEADING tHIS, yOU cUTE.",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "JNLUbYmBj2fsH7mLyxmgNat4Uy0",
          id: "AqfdbWZXTkE",
          snippet: {
            publishedAt: "2021-09-06T20:07:24Z",
            channelId: "UCBODyKF0JMbUd6D9Bklyzbw",
            title: "The tournament that broke Smash Bros",
            description:
              "[SPONSORED] The first 1,000 people to sign up for Skillshare 1 month free trial! http://skillshare.com/alpharad\nI got invited to Beyond the Summit for Smash Ultimate Summit 3 and they let me host a side tournament... with a twist... portals. \nIn the year 2053, this will be the competitive standard and it will break Smash Bros wide open.\n\n#SmashBrosUltimate #Portal #Alpharad\n\n➤ THE PLAYERS\n@MKLeo: https://twitter.com/Mkleosb\n@Panda | Marss: https://twitter.com/Marss_NE\n@gsmVoiD: https://twitter.com/gsmVoiD\n@CosmosZR: https://twitter.com/CosmosZR\n@AaronFGC: https://twitter.com/AaronFGC\n@Riddles: https://twitter.com/Riddlesmk\nCharliedaking: https://twitter.com/CharlieHaruno\nKola: https://twitter.com/Kola_irl\n\n➤ THE COMMENTATORS\n@CONEY: https://twitter.com/CONEY\n@EEvisu: https://twitter.com/EEvisu\n@TKbreezy: https://twitter.com/TKbreezy\n\n➤ LIVE PRODUCTION\nBeyond the Summit\nhttps://www.twitch.tv/btssmash\nhttps://twitter.com/BTSsmash\n@Beyond the Summit - Smash \n\n➤ THUMBNAIL\nAster: https://twitter.com/Asteryia\r\n\r\n➤ Music Used:\nEvening Star (Touhou 15.5): https://www.youtube.com/watch?v=Oy7EQzN_QCw\nGet Over the Barrier: https://www.youtube.com/watch?v=-azjB3lsUTU\nDSi Shop Theme (Remastered): https://www.youtube.com/watch?v=VsGQ-O9lEcA\nDating Start: https://www.youtube.com/watch?v=dtYwq4aBr0E\nAmong Us Trap Remix: https://www.youtube.com/watch?v=grd-K33tOSM\nTrainer School: https://www.youtube.com/watch?v=m5Jq4hwfnnA\nAtelier City Zweis: https://www.youtube.com/watch?v=zbKUtDXAkO8\nSonic Riders ZG Main Menu: https://www.youtube.com/watch?v=8Vv6BSDJ8aw\nRope Burn (Ambience): https://www.youtube.com/watch?v=QmY7Xwq-I2I\nFossil Fighters Hotel Theme: https://www.youtube.com/watch?v=aYdITelPteA\nGet It Together (Title): https://www.youtube.com/watch?v=vLE1QLSYsIw",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/AqfdbWZXTkE/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/AqfdbWZXTkE/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/AqfdbWZXTkE/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/AqfdbWZXTkE/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/AqfdbWZXTkE/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Alpharad",
            tags: [
              "alpharad",
              "super smash bros ultimate",
              "smash bros",
              "not",
              "not alpharad",
              "alpharad smash",
              "nintendo",
              "nintendo switch",
              "panda",
              "marss",
              "mkleo",
              "competitive smash",
              "portal",
              "breaking smash bros",
              "void",
              "gsmvoid",
              "clg",
              "t1",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            localized: {
              title: "The tournament that broke Smash Bros",
              description:
                "[SPONSORED] The first 1,000 people to sign up for Skillshare 1 month free trial! http://skillshare.com/alpharad\nI got invited to Beyond the Summit for Smash Ultimate Summit 3 and they let me host a side tournament... with a twist... portals. \nIn the year 2053, this will be the competitive standard and it will break Smash Bros wide open.\n\n#SmashBrosUltimate #Portal #Alpharad\n\n➤ THE PLAYERS\n@MKLeo: https://twitter.com/Mkleosb\n@Panda | Marss: https://twitter.com/Marss_NE\n@gsmVoiD: https://twitter.com/gsmVoiD\n@CosmosZR: https://twitter.com/CosmosZR\n@AaronFGC: https://twitter.com/AaronFGC\n@Riddles: https://twitter.com/Riddlesmk\nCharliedaking: https://twitter.com/CharlieHaruno\nKola: https://twitter.com/Kola_irl\n\n➤ THE COMMENTATORS\n@CONEY: https://twitter.com/CONEY\n@EEvisu: https://twitter.com/EEvisu\n@TKbreezy: https://twitter.com/TKbreezy\n\n➤ LIVE PRODUCTION\nBeyond the Summit\nhttps://www.twitch.tv/btssmash\nhttps://twitter.com/BTSsmash\n@Beyond the Summit - Smash \n\n➤ THUMBNAIL\nAster: https://twitter.com/Asteryia\r\n\r\n➤ Music Used:\nEvening Star (Touhou 15.5): https://www.youtube.com/watch?v=Oy7EQzN_QCw\nGet Over the Barrier: https://www.youtube.com/watch?v=-azjB3lsUTU\nDSi Shop Theme (Remastered): https://www.youtube.com/watch?v=VsGQ-O9lEcA\nDating Start: https://www.youtube.com/watch?v=dtYwq4aBr0E\nAmong Us Trap Remix: https://www.youtube.com/watch?v=grd-K33tOSM\nTrainer School: https://www.youtube.com/watch?v=m5Jq4hwfnnA\nAtelier City Zweis: https://www.youtube.com/watch?v=zbKUtDXAkO8\nSonic Riders ZG Main Menu: https://www.youtube.com/watch?v=8Vv6BSDJ8aw\nRope Burn (Ambience): https://www.youtube.com/watch?v=QmY7Xwq-I2I\nFossil Fighters Hotel Theme: https://www.youtube.com/watch?v=aYdITelPteA\nGet It Together (Title): https://www.youtube.com/watch?v=vLE1QLSYsIw",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "9R-byDAySFEhEyVnXJKNu0NLXkQ",
          id: "E0gW1wPH9y0",
          snippet: {
            publishedAt: "2021-09-06T21:30:13Z",
            channelId: "UCHI08eUeImjSW6x9LJP02LA",
            title: 'B Lovee - "Neaky" (OFFICIAL VIDEO)',
            description: "IG : Blovee.1\nTwitter: Blovee.10",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/E0gW1wPH9y0/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/E0gW1wPH9y0/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/E0gW1wPH9y0/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/E0gW1wPH9y0/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "B Lovee",
            tags: [
              "B lovee - NEAKY (OFFICIAL VIDEO)",
              "kay flock",
              "b lovee",
              "kay flock x blovee -opp spotter",
              "SPIKE TARANTINO",
              "reggae mix",
              "BRONX DRILL",
              "DRILL POP",
              "ROCKSTAR",
              "VIRAL",
              "LIL TJAY",
              "KAY FLOCK BEING HONEST",
              "REGGAE",
              "ROCK AND ROLL",
              "TRENDING",
              "DRAKE",
              "DONDA",
              "certified lover boy",
              "clb drake",
              "nba 2k22",
              "NBA",
              "jamaican music",
              "CHINA",
              "JAPAN",
              "GLOBAL",
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
              title: 'B Lovee - "Neaky" (OFFICIAL VIDEO)',
              description: "IG : Blovee.1\nTwitter: Blovee.10",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "RLKSYPSfEda7WWLRqXh8ylrocks",
          id: "OGCx_qzONYw",
          snippet: {
            publishedAt: "2021-09-06T20:00:13Z",
            channelId: "UCfbnTUxUech4P1XgYUwYuKA",
            title: "Don't Put This in a Chocolate Fountain...",
            description:
              "We Bought a Fountain Meant for Chocolate and Put Everything but Chocolate in it! \n🌈 BUY WHAT WE'RE WEARING FOR 10% OFF  👉 https://bit.ly/codecoldones\n\n🅿️ Pledge to our patreon for extended videos and deleted footage :https://www.patreon.com/coldones\n\nSEND STUFF TO OUR PO BOX AND IT MIGHT BE FEATURED IN A VID: ✉️📬\nPO Box 5091\nGlenferrie south\nVIC 3122\nAustralia\n_______________________________________________________________\nSOCIAL MEDIA LINKS\nTwitter⇨ https://twitter.com/ColdOnes\nReddit⇨ https://www.reddit.com/r/ColdOnes/\nDiscord⇨ https://discord.com/invite/coldones\n_______________________________________________________________\nTHE BOYS' SOLO CHANNELS\nChad - https://www.youtube.com/anything4views\u200b\u200b\nMax - https://www.youtube.com/maxmoefoepokemon\n_______________________________________________________________\n\nEdited by  ⇨ https://twitter.com/prezoh\n_______________________________________________________________\n\n#fountain #fondue #mukbang",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/OGCx_qzONYw/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/OGCx_qzONYw/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/OGCx_qzONYw/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/OGCx_qzONYw/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/OGCx_qzONYw/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Cold Ones",
            tags: [
              "will it fountain",
              "fondue",
              "fondue challenge",
              "will it fondue",
              "cold ones",
              "cold ones challenge",
              "cold ones funny moments",
              "cold ones best moments",
              "will it fondue vat19",
              "will it fountain vat19",
              "fountain challenge chocolate",
              "cheese fountain",
              "fountain challenge",
              "fountain challenge weird food",
              "cold ones maxmoefoe",
              "cold ones anything4views",
              "Anything4Views",
              "food challenge",
              "vat19",
              "gross fountain challenge",
              "rhett and link will it fountain",
              "crazy fountain",
              "chocolate fountain",
              "will it blend",
            ],
            categoryId: "23",
            liveBroadcastContent: "none",
            defaultLanguage: "en-GB",
            localized: {
              title: "Don't Put This in a Chocolate Fountain...",
              description:
                "We Bought a Fountain Meant for Chocolate and Put Everything but Chocolate in it! \n🌈 BUY WHAT WE'RE WEARING FOR 10% OFF  👉 https://bit.ly/codecoldones\n\n🅿️ Pledge to our patreon for extended videos and deleted footage :https://www.patreon.com/coldones\n\nSEND STUFF TO OUR PO BOX AND IT MIGHT BE FEATURED IN A VID: ✉️📬\nPO Box 5091\nGlenferrie south\nVIC 3122\nAustralia\n_______________________________________________________________\nSOCIAL MEDIA LINKS\nTwitter⇨ https://twitter.com/ColdOnes\nReddit⇨ https://www.reddit.com/r/ColdOnes/\nDiscord⇨ https://discord.com/invite/coldones\n_______________________________________________________________\nTHE BOYS' SOLO CHANNELS\nChad - https://www.youtube.com/anything4views\u200b\u200b\nMax - https://www.youtube.com/maxmoefoepokemon\n_______________________________________________________________\n\nEdited by  ⇨ https://twitter.com/prezoh\n_______________________________________________________________\n\n#fountain #fondue #mukbang",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "g1CcoP2weor4jwG3u_b8m-O3vG8",
          id: "-TMnvi3kdQU",
          snippet: {
            publishedAt: "2021-09-06T16:59:30Z",
            channelId: "UC2V6TA0OqHr9BojcHz9az-w",
            title: "“Back From The Dead” - Being The Elite Ep. 272",
            description:
              '#bte #beingtheelite #AEWALLOUT\n\nThe guys throw a seance & an old spirit from the past resurrects from the dead. Go behind the scenes at AEW All Out!\n\nSUBSCRIBE TO THE OFFICIAL AEW YOUTUBE CHANNEL\nhttp://www.youtube.com/aew\n-------\nCONNECT WITH US\nhttps://www.facebook.com/TheYoungBucks\nhttps://facebook.com/allelitewrestling\nhttps://twitter.com/BeingTheElite\nhttps://twitter.com/YoungBucks\nhttps://twitter.com/AEW\nhttps://www.instagram.com/mattjackson13\nhttps://www.instagram.com/nickjacksonyb\nhttps://www.instagram.com/allelitewrestling\n-------\nSHOP OUR MERCH\nhttps://www.ShopAEW.com\nhttp://www.prowrestlingtees.com/beingtheelite \n-------\n“Being The Elite Theme Song”\n“Warrior’s Cry”\nBy Matthew Lee Massie\nhttps://MatthewLeeMassie.com\n\nCover of "Warriors Cry" By Dillon Spears\nhttps://www.patreon.com/dillonspears\n\nIntro Animation By Wrestling Arcade (@wrestlingarcade)\nOutro Animation By Maria Lyng (@MariaLyngPoulse)',
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/-TMnvi3kdQU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/-TMnvi3kdQU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/-TMnvi3kdQU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/-TMnvi3kdQU/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/-TMnvi3kdQU/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Being The Elite",
            tags: [
              "indies",
              "Nxt",
              "nick jackson",
              "matt jackson",
              "kenny omega",
              "the elite",
              "bullet club",
              "njpw",
              "new japan pro wrestling",
              "roh",
              "ring of honor",
              "PWG",
              "tna",
              "impact",
              "wwe",
              "intergender",
              "shoot",
              "shoots",
              "women",
              "The",
              "Revival",
              "Being the elite",
              "Cody",
              "Rhodes",
              "Bullet",
              "Club",
              "New",
              "Japan",
              "NJPW",
              "BTE",
              "kenny",
              "omega",
              "aew",
              "all elite wrestling",
              "aew dynamite",
              "young bucks",
              "john cena",
              "the rock",
              "pro wrestling",
              "Aew all our",
              "Aewallout",
              "All out",
              "Adam come",
              "Adam cole",
              "Bay bay",
              "Wwe",
              "Steel cage",
              "Bryan Danielson",
              "Young bucks vs Lucha bros",
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            defaultLanguage: "en",
            localized: {
              title: "“Back From The Dead” - Being The Elite Ep. 272",
              description:
                '#bte #beingtheelite #AEWALLOUT\n\nThe guys throw a seance & an old spirit from the past resurrects from the dead. Go behind the scenes at AEW All Out!\n\nSUBSCRIBE TO THE OFFICIAL AEW YOUTUBE CHANNEL\nhttp://www.youtube.com/aew\n-------\nCONNECT WITH US\nhttps://www.facebook.com/TheYoungBucks\nhttps://facebook.com/allelitewrestling\nhttps://twitter.com/BeingTheElite\nhttps://twitter.com/YoungBucks\nhttps://twitter.com/AEW\nhttps://www.instagram.com/mattjackson13\nhttps://www.instagram.com/nickjacksonyb\nhttps://www.instagram.com/allelitewrestling\n-------\nSHOP OUR MERCH\nhttps://www.ShopAEW.com\nhttp://www.prowrestlingtees.com/beingtheelite \n-------\n“Being The Elite Theme Song”\n“Warrior’s Cry”\nBy Matthew Lee Massie\nhttps://MatthewLeeMassie.com\n\nCover of "Warriors Cry" By Dillon Spears\nhttps://www.patreon.com/dillonspears\n\nIntro Animation By Wrestling Arcade (@wrestlingarcade)\nOutro Animation By Maria Lyng (@MariaLyngPoulse)',
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "dnGvBCsdvZVZTaQhYlUbLAgVfsI",
          id: "CRIefdcUhmE",
          snippet: {
            publishedAt: "2021-09-06T16:30:00Z",
            channelId: "UCsAJ-ixo0XLqMmiJkH-e1cA",
            title: "Rick and Morty's Finale Changes EVERYTHING (Spoilers!)",
            description:
              'Get Surfshark VPN at https://Surfshark.deals/Cellos and enter promo code Cellos for 83% off and 3 extra months for FREE!\n\nY\'all please forgive how absolutely tired I sound in this video! Rick and Morty season 5 has come to a close with probably the biggest season finale we’ve ever seen from the series. Honestly, this might be the biggest EPISODE in the entire series, in just about every measurable way. The scale was massive, the storylines it followed up were the most desired, the back story reveals were incredibly thorough, and the cliffhanger left us with some of the biggest and most fascinating implications of any Rick and Morty story so far. So let’s dive in and not only talk about this finale, but season 5 as a whole and our expectations for season 6. Aka, Rick and Morty Season 5\'s Ending Explained\n\nListen to Cartoons That Curse!- https://www.youtube.com/channel/UCnuuGsGdTmJ3sTbgKnbYD4w\n\nSUPPORT ME ON PATREON!- https://www.patreon.com/Johnny2Cellos\nFollow me on Twitter: https://twitter.com/Johnny2Cellos\n\nEdited by Joe Murphy\n\nMusic:\nJohnny 2 Cellos Theme Music - Norman Marston\n\nVideo Used:\nRick and Morty (2013-2021)\n\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted.\n"Fair Use" guidelines: www.copyright.gov/fls/fl102.html',
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/CRIefdcUhmE/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/CRIefdcUhmE/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/CRIefdcUhmE/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/CRIefdcUhmE/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/CRIefdcUhmE/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Johnny 2 Cellos",
            tags: [
              "Rick and Morty",
              "Rick and Morty season 5",
              "Rick and Morty Season 5 review",
              "Rick and Morty Season 5 Finale",
              "Rickmurai Jack",
              "Forgetting Sarick Mortshall",
              "Rickturnal Friendshine of the Spotless Mort",
              "Rick and Morty season 6",
              "Evil Morty Theory",
              "Evil Morty Leaves",
              "Evil Morty Finale",
              "Evil Morty Leaves Multiverse",
              "Central Finite Curve",
              "Evil Morty Explained",
              "Evil Morty Ending",
              "Rick's Backstory",
              "analysis",
              "breakdown",
              "Rick Sanchez Backstory",
              "Rick and Morty Season 5 Ending Explained",
            ],
            categoryId: "24",
            liveBroadcastContent: "none",
            localized: {
              title: "Rick and Morty's Finale Changes EVERYTHING (Spoilers!)",
              description:
                'Get Surfshark VPN at https://Surfshark.deals/Cellos and enter promo code Cellos for 83% off and 3 extra months for FREE!\n\nY\'all please forgive how absolutely tired I sound in this video! Rick and Morty season 5 has come to a close with probably the biggest season finale we’ve ever seen from the series. Honestly, this might be the biggest EPISODE in the entire series, in just about every measurable way. The scale was massive, the storylines it followed up were the most desired, the back story reveals were incredibly thorough, and the cliffhanger left us with some of the biggest and most fascinating implications of any Rick and Morty story so far. So let’s dive in and not only talk about this finale, but season 5 as a whole and our expectations for season 6. Aka, Rick and Morty Season 5\'s Ending Explained\n\nListen to Cartoons That Curse!- https://www.youtube.com/channel/UCnuuGsGdTmJ3sTbgKnbYD4w\n\nSUPPORT ME ON PATREON!- https://www.patreon.com/Johnny2Cellos\nFollow me on Twitter: https://twitter.com/Johnny2Cellos\n\nEdited by Joe Murphy\n\nMusic:\nJohnny 2 Cellos Theme Music - Norman Marston\n\nVideo Used:\nRick and Morty (2013-2021)\n\nCopyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted.\n"Fair Use" guidelines: www.copyright.gov/fls/fl102.html',
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "TXMoIwJizyJNcweOuOH2ZBUwp8Y",
          id: "5jyj5aJaLfc",
          snippet: {
            publishedAt: "2021-09-03T23:45:01Z",
            channelId: "UCl3bsUXkHZac9bsppHLnGww",
            title: "Minecraft But Blocks Randomly Change When You Look At Them",
            description:
              "Minecraft But Blocks Randomly Change When You Look At Them\nEverywhere you look in minecraft, the block will change to a completely new and random block. Can the best minecraft player in the world (me) find minecraft diamonds with these random blocks spawning over the place, or will I fail like I usually do?\n#shorts #minecraft",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/5jyj5aJaLfc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/5jyj5aJaLfc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/5jyj5aJaLfc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Jaavelin",
            tags: [
              "Minecraft",
              "Minecraft but",
              "Minecraft shorts",
              "Minecraft But Blocks Randomly Change When You Look At Them",
              "Minecraft challenge",
              "1.17",
              "Minecraft 1.17 challenge",
              "minecraft randomizer",
              "minecraft but challenge",
              "challenge",
              "minecraft but everywhere",
              "minecraft but everywhere we look turns to random blocks",
              "minecraft but everywhere you look turns to random blocks",
              "jaavelin",
              "shorts",
              "jaavelin minecraft",
              "minecraft jaavelin",
              "georgenotfound",
              "minecraft tiktok",
              "minecraft new challenge",
              "block game",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Minecraft But Blocks Randomly Change When You Look At Them",
              description:
                "Minecraft But Blocks Randomly Change When You Look At Them\nEverywhere you look in minecraft, the block will change to a completely new and random block. Can the best minecraft player in the world (me) find minecraft diamonds with these random blocks spawning over the place, or will I fail like I usually do?\n#shorts #minecraft",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "uduNBb5f7Vr4P00p7G0ruMe4A8o",
          id: "6FIrzuYMmxs",
          snippet: {
            publishedAt: "2021-09-06T20:03:28Z",
            channelId: "UCmS-OqHBmZxT80GO-QdIIzA",
            title: "Speed And I Became Parents For A Day**We Not Ready**",
            description:
              "follow me on instagram : https://www.instagram.com/pontiacmadeteetee/?hl=en\r\n\r\nfor all business inquires : GranberryTiarra21@gmail.com\n\nhttps://instagram.com/nyomiedream?utm_medium=copy_link",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/6FIrzuYMmxs/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/6FIrzuYMmxs/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/6FIrzuYMmxs/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/6FIrzuYMmxs/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/6FIrzuYMmxs/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Tee Tee",
            tags: [
              "tee tee",
              "Pontiac made",
              "tee tee ddg",
              "ddg sister",
              "dub family",
              "funny",
              "family friendly",
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
              title: "Speed And I Became Parents For A Day**We Not Ready**",
              description:
                "follow me on instagram : https://www.instagram.com/pontiacmadeteetee/?hl=en\r\n\r\nfor all business inquires : GranberryTiarra21@gmail.com\n\nhttps://instagram.com/nyomiedream?utm_medium=copy_link",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "zZaJKTcFejZIQbtXi_VtrmFva3s",
          id: "A-Uva3rlc8s",
          snippet: {
            publishedAt: "2021-09-06T00:00:01Z",
            channelId: "UCETZ7OiW7-wqwb-6hsz3C4w",
            title: "Minecraft, But You Can Shear Any Block...",
            description:
              "Minecraft, But You Can Shear Any Block...\n\n💥 NEW CHANNEL! - @Bonc \n\nIn todays MInecraft Challenge, we can shear any block! Using a custom OP pair of shears, we can shear blocks. Shearing blocks drops custom OP items. Our goal is to use these new custom items to help us defeat the Ender Dragon! Can we do it? Like and subscribe to help us get Trending #1!\n\n👀 FOLLOW ME PLS\nTikTok: @dannybionic\nTwitter: @dannybionic\nInstagram: @danny.bionic\nDiscord: https://discord.gg/bionic\nMy Editor: @Saf \n\n👕 MY MERCH! - https://bionicware.net\n\n#minecraft #MinecraftBut #MinecraftChallenge",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/A-Uva3rlc8s/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/A-Uva3rlc8s/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/A-Uva3rlc8s/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/A-Uva3rlc8s/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/A-Uva3rlc8s/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Bionic",
            tags: [
              "minecraft",
              "Minecraft But You Can Shear Any Block",
              "Minecraft But",
              "minecraft but you can shear any",
              "minecraft mod",
              "mods",
              "mod",
              "minecraft mods",
              "bionic",
              "challenge",
              "family friendly",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            localized: {
              title: "Minecraft, But You Can Shear Any Block...",
              description:
                "Minecraft, But You Can Shear Any Block...\n\n💥 NEW CHANNEL! - @Bonc \n\nIn todays MInecraft Challenge, we can shear any block! Using a custom OP pair of shears, we can shear blocks. Shearing blocks drops custom OP items. Our goal is to use these new custom items to help us defeat the Ender Dragon! Can we do it? Like and subscribe to help us get Trending #1!\n\n👀 FOLLOW ME PLS\nTikTok: @dannybionic\nTwitter: @dannybionic\nInstagram: @danny.bionic\nDiscord: https://discord.gg/bionic\nMy Editor: @Saf \n\n👕 MY MERCH! - https://bionicware.net\n\n#minecraft #MinecraftBut #MinecraftChallenge",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "bO4nkXWsdtEFodylkHsVHqTGHME",
          id: "uLp-ajyFWaI",
          snippet: {
            publishedAt: "2021-09-06T00:25:12Z",
            channelId: "UCOKaio-UVsbbHGqcoBiR9cA",
            title: "I can't even defend myself anymore... #Shorts",
            description:
              "Thank you guys so much for watching my short ❤️. \n\nCheck out my main channel! I post daily Rebirth Island 25+ kill games and would love to see you! https://www.youtube.com/c/tctekk\n\nI stream daily at 9:00 PM EST on my Twitch, come stop by and chat! https://www.twitch.tv/tctekk\n\n\u200b\u200b\u200b\u200b\u200b\u200b🐦 Twitter: https://www.twitter.com/tctekk_\n📸 Tiktok: https://www.tiktok.com/@tctekk?lang=en\n___________________________________________\n#Gaming\u200b\u200b\u200b\u200b #CoDWarzone\u200b\u200b\u200b\u200b #Warzone\n\nCall Of Duty\nWarzone Clips\nWarzone Season 4\nRebirth Island Gameplay\nWarzone Tips and Tricks\nModern Warfare Warzone\nCold War Warzone\nBest Warzone Loadout\nRebirth Island Warzone",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/uLp-ajyFWaI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/uLp-ajyFWaI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/uLp-ajyFWaI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "tcTekk Shorts",
            tags: [
              "warzone",
              "call of duty best",
              "call of duty funny",
              "call of duty daily",
              "cod",
              "top call of duty plays",
              "call of duty warzone",
              "call of duty battle royale",
              "warzone highlights",
              "warzone best moments",
              "warzone battle royale",
              "warzone funny moments",
              "warzone best plays",
              "cod warzone",
              "top warzone plays",
              "warzone best",
              "warzone funny",
              "Warzone clips",
              "Warzone Best clips",
              "Warzone best highlights",
              "modern warfare highlights",
              "shorts",
              "#shorts",
              "warzone rebirth island",
              "rebirth island warzone",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            localized: {
              title: "I can't even defend myself anymore... #Shorts",
              description:
                "Thank you guys so much for watching my short ❤️. \n\nCheck out my main channel! I post daily Rebirth Island 25+ kill games and would love to see you! https://www.youtube.com/c/tctekk\n\nI stream daily at 9:00 PM EST on my Twitch, come stop by and chat! https://www.twitch.tv/tctekk\n\n\u200b\u200b\u200b\u200b\u200b\u200b🐦 Twitter: https://www.twitter.com/tctekk_\n📸 Tiktok: https://www.tiktok.com/@tctekk?lang=en\n___________________________________________\n#Gaming\u200b\u200b\u200b\u200b #CoDWarzone\u200b\u200b\u200b\u200b #Warzone\n\nCall Of Duty\nWarzone Clips\nWarzone Season 4\nRebirth Island Gameplay\nWarzone Tips and Tricks\nModern Warfare Warzone\nCold War Warzone\nBest Warzone Loadout\nRebirth Island Warzone",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "_qpL5_9TuQE7qwFHEdRAk9tkm8E",
          id: "4fcb07k4a-s",
          snippet: {
            publishedAt: "2021-09-06T06:00:01Z",
            channelId: "UCJsUvAqDzczYv2UpFmu4PcA",
            title: "Why I Never Smoke",
            description: "#shorts",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/4fcb07k4a-s/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/4fcb07k4a-s/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/4fcb07k4a-s/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Nas Daily",
            tags: [
              "Nas Daily",
              "Nasmeanspeople",
              "1minute",
              "Travel",
              "Nuseir Yassin",
              "Nas Studio",
              "英語学習",
              "people",
              "Nas Academy",
              "Lesan.io",
              "shorts",
              "smoke",
              "cigarette",
              "smoking",
              "Why I Never Smoke",
            ],
            categoryId: "19",
            liveBroadcastContent: "none",
            localized: {
              title: "Why I Never Smoke",
              description: "#shorts",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "yxBkEiRlOj0_yecZMripskiw83U",
          id: "_dmJu4EZGic",
          snippet: {
            publishedAt: "2021-09-07T00:00:12Z",
            channelId: "UCaYxyR9mzVlTrOOyZD0XAmA",
            title: "Madden 22 Wheel of MUT Season Opener!",
            description:
              "its BACK baby... the worlds greatest MUT content for madden to ever grace this planet. madden youtubers tremble, as papa meags is back in business and ready to clap cheeks all ogre again in madden 22.... DIAL IN BABY\n\nwow, you stud - thanks for clicking this video. quite simply, i cant help but notice how handsome you look right now - great job sport. keep up the nice work!\n\n#mmg\n\nSocial Medias -\n https://twitter.com/papameagzz\n https://www.instagram.com/matthewmeagher\n\nShow love to my AMAZING editors below!\n\nTy - https://www.youtube.com/channel/UCMoI_Mjgnw45coKZL3v5QUQ\n\nMusic: \nOutro - https://www.instagram.com/jamesonmcd/?hl=en\nChuki makes incredible beats that I use all the time. Check him out here - https://www.youtube.com/user/CHUKImusic",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/_dmJu4EZGic/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/_dmJu4EZGic/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/_dmJu4EZGic/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/_dmJu4EZGic/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "MMG",
            tags: [
              "mmg",
              "madden 22",
              "madden 22 gameplay",
              "madden 22 mmg",
              "madden 22 mut",
              "madden 22 next gen",
              "madden 22 ultimate team",
              "madden nfl 22",
              "mmg wheel of mut",
              "wheel of mut",
              "wheel of mut episode 1",
              "madden 22 wheel of mut",
              "mmg wheel of mut madden 22",
            ],
            categoryId: "17",
            liveBroadcastContent: "none",
            localized: {
              title: "Madden 22 Wheel of MUT Season Opener!",
              description:
                "its BACK baby... the worlds greatest MUT content for madden to ever grace this planet. madden youtubers tremble, as papa meags is back in business and ready to clap cheeks all ogre again in madden 22.... DIAL IN BABY\n\nwow, you stud - thanks for clicking this video. quite simply, i cant help but notice how handsome you look right now - great job sport. keep up the nice work!\n\n#mmg\n\nSocial Medias -\n https://twitter.com/papameagzz\n https://www.instagram.com/matthewmeagher\n\nShow love to my AMAZING editors below!\n\nTy - https://www.youtube.com/channel/UCMoI_Mjgnw45coKZL3v5QUQ\n\nMusic: \nOutro - https://www.instagram.com/jamesonmcd/?hl=en\nChuki makes incredible beats that I use all the time. Check him out here - https://www.youtube.com/user/CHUKImusic",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "ylKOJjsx7zay2vVh1B9-r4p6Emo",
          id: "PMSJLW-dxng",
          snippet: {
            publishedAt: "2021-09-06T14:43:44Z",
            channelId: "UCq8jp0E99ELBvmBxjJ-JLgA",
            title: "Ups & Downs From AEW All Out 2021",
            description:
              "Our Review as Simon Miller runs down everything from last nights show.\n\nFor more awesome WWE, AEW and other wrestling content check out: https://whatculture.com/wwe\nListen to our daily wrestling PODCASTS: https://whatculture.com/wrestleculture \n\nFollow us!\nFacebook: https://www.facebook.com/whatculturewwe \nTwitter: https://twitter.com/whatculturewwe \nInstagram: https://www.instagram.com/whatculturewrestling",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/PMSJLW-dxng/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/PMSJLW-dxng/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/PMSJLW-dxng/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/PMSJLW-dxng/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/PMSJLW-dxng/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "WhatCulture Wrestling",
            tags: [
              "wwe",
              "wrestling",
              "what culture",
              "whatculture",
              "whatculture wrestling",
              "whatculture wwe",
            ],
            categoryId: "17",
            liveBroadcastContent: "none",
            defaultLanguage: "en-GB",
            localized: {
              title: "Ups & Downs From AEW All Out 2021",
              description:
                "Our Review as Simon Miller runs down everything from last nights show.\n\nFor more awesome WWE, AEW and other wrestling content check out: https://whatculture.com/wwe\nListen to our daily wrestling PODCASTS: https://whatculture.com/wrestleculture \n\nFollow us!\nFacebook: https://www.facebook.com/whatculturewwe \nTwitter: https://twitter.com/whatculturewwe \nInstagram: https://www.instagram.com/whatculturewrestling",
            },
            defaultAudioLanguage: "en-GB",
          },
        },
        {
          kind: "youtube#video",
          etag: "jP_FHcRvgk4mrGUCKxqnP1084NQ",
          id: "L3naN_LG_sU",
          snippet: {
            publishedAt: "2021-09-06T19:00:06Z",
            channelId: "UCgPClNr5VSYC3syrDUIlzLw",
            title:
              "Rick and Morty | S5 Finale Cold Open: The Crow Man | adult swim",
            description:
              "Rick fights the evil owls as his anti-heroic alter ego, The Crow Man. Stream seasons 1-4 now on HBO Max.\n\n#AdultSwim #RickAndMorty \n\nSUBSCRIBE: https://youtube.com/adultswim1?sub_confirmation=1\n\nWhat to watch next: more Rick and Morty clips!\nhttps://youtube.com/playlist?list=PLQl8zBB7bPvI_iYCe4LT8HHfjonOog4u3\n\nFind Rick and Morty on Adult Swim: https://www.adultswim.com/videos/rick-and-morty \n\nAbout Adult Swim:\nGet your Adult Swim fix whenever and wherever you want at www.adultswim.com, or by downloading the Adult Swim app. Binge marathons or watch selected episodes of many of your favorite shows including Rick and Morty, Robot Chicken, Venture Bros., Aqua Teen Hunger Force and many more. \n\nConnect with Adult Swim Online:\nDownload the APPS: http://www.adultswim.com/apps/\nVisit Adult Swim WEBSITE: http://www.adultswim.com \nLike Adult Swim on FACEBOOK: https://facebook.com/adultswim\nFollow Adult Swim on TWITTER: https://twitter.com/adultswim\nFollow Adult Swim on INSTAGRAM: http://instagram.com/adultswim\n\nWatch Adult Swim in your country:\nUnited Kingdom: https://bit.ly/AS_UK\nRepublic of Ireland: https://bit.ly/AS_UK\nFrance: https://bit.ly/AS_FR\nSpain: https://bit.ly/AS_SPA\nGermany: https://bit.ly/AS_GE\nSweden: https://bit.ly/AS_NORDIC\nNorway: https://bit.ly/AS_NORDIC\nDenmark: https://bit.ly/AS_NORDIC\nFinland: https://bit.ly/AS_NORDIC\nSouth Africa: https://bit.ly/AS_SA\n\nRick and Morty | S5 Finale Cold Open: The Crow Man | adult swim",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/L3naN_LG_sU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/L3naN_LG_sU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/L3naN_LG_sU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/L3naN_LG_sU/sddefault.jpg",
                width: 640,
                height: 480,
              },
            },
            channelTitle: "Adult Swim",
            tags: [
              "adult swim",
              "animation",
              "adult animation",
              "comedy",
              "animated",
              "funny",
              "animated series",
              "comedy series",
              "watch adult swim",
              "watch animation",
              "watch comedy",
              "animated show",
              "adult swim official",
              "animation series",
              "Rick and Morty",
              "Rick & Morty",
              "Season 5",
              "Rick and Morty Season 5",
              "Watch Rick and Morty",
              "watch rick and morty",
              "Dan Harmon",
              "Justin Roiland",
              "Rick Sanchez",
              "science fiction",
              "sci-fi",
              "multiverse",
              "Morty Smith",
              "Rick and Morty episodes",
              "Rick and Morty season 5 episode 10",
              "Cold Open",
              "Finale",
            ],
            categoryId: "24",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Rick and Morty | S5 Finale Cold Open: The Crow Man | adult swim",
              description:
                "Rick fights the evil owls as his anti-heroic alter ego, The Crow Man. Stream seasons 1-4 now on HBO Max.\n\n#AdultSwim #RickAndMorty \n\nSUBSCRIBE: https://youtube.com/adultswim1?sub_confirmation=1\n\nWhat to watch next: more Rick and Morty clips!\nhttps://youtube.com/playlist?list=PLQl8zBB7bPvI_iYCe4LT8HHfjonOog4u3\n\nFind Rick and Morty on Adult Swim: https://www.adultswim.com/videos/rick-and-morty \n\nAbout Adult Swim:\nGet your Adult Swim fix whenever and wherever you want at www.adultswim.com, or by downloading the Adult Swim app. Binge marathons or watch selected episodes of many of your favorite shows including Rick and Morty, Robot Chicken, Venture Bros., Aqua Teen Hunger Force and many more. \n\nConnect with Adult Swim Online:\nDownload the APPS: http://www.adultswim.com/apps/\nVisit Adult Swim WEBSITE: http://www.adultswim.com \nLike Adult Swim on FACEBOOK: https://facebook.com/adultswim\nFollow Adult Swim on TWITTER: https://twitter.com/adultswim\nFollow Adult Swim on INSTAGRAM: http://instagram.com/adultswim\n\nWatch Adult Swim in your country:\nUnited Kingdom: https://bit.ly/AS_UK\nRepublic of Ireland: https://bit.ly/AS_UK\nFrance: https://bit.ly/AS_FR\nSpain: https://bit.ly/AS_SPA\nGermany: https://bit.ly/AS_GE\nSweden: https://bit.ly/AS_NORDIC\nNorway: https://bit.ly/AS_NORDIC\nDenmark: https://bit.ly/AS_NORDIC\nFinland: https://bit.ly/AS_NORDIC\nSouth Africa: https://bit.ly/AS_SA\n\nRick and Morty | S5 Finale Cold Open: The Crow Man | adult swim",
            },
            defaultAudioLanguage: "en",
          },
        },
        {
          kind: "youtube#video",
          etag: "eO_T3Yyf4Tpcm2yt3CScHTlV0ts",
          id: "rfszDuS27Xo",
          snippet: {
            publishedAt: "2021-09-06T22:40:58Z",
            channelId: "UCVC5-Y6ez4sk3mtbUmN-SUQ",
            title: "YOU CAN BE A 101 OVERALL IN 2K22 IF YOU PAY FOR IT",
            description:
              "I think NBA 2K22 just snuck in a way to make 2K22 pay-to-win. Yall worried or no?\n\n👉 SECOND CHANNEL: https://www.youtube.com/channel/UCpmGbhQHg0nf3Ec2OreFHoQ?sub_confirmation=1\n\n🔴 Playback Channel: https://www.youtube.com/channel/UCPfetHIjFUSSUxWLs-2zhlA?sub_confirmation=1\n\n⚡ AMP CHANNEL: https://www.youtube.com/channel/UCJbYdyufHR-cxOuY96KIoqA?sub_confirmation=1\n\n🎤 NEW PODCAST: https://www.youtube.com/channel/UC_q9jnFFLHSHgtVDc0ERNlg?sub_confirmation=1\n\n👕  Merch: http://www.agent.clothing/\n\n🔴 SUBSCRIBE: http://goo.gl/s8cskJ\n\n 🐦 TWITTER: https://twitter.com/CallMeAgent00\n\n 📸 INSTAGRAM: https://www.instagram.com/callmeagentzero/ 👉",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/rfszDuS27Xo/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/rfszDuS27Xo/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/rfszDuS27Xo/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/rfszDuS27Xo/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/rfszDuS27Xo/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Agent 00",
            tags: [
              "agent 00",
              "nba 2k22",
              "nba 2k22 park city",
              "nba 2k22 gameplay",
            ],
            categoryId: "20",
            liveBroadcastContent: "none",
            defaultLanguage: "en",
            localized: {
              title: "YOU CAN BE A 101 OVERALL IN 2K22 IF YOU PAY FOR IT",
              description:
                "I think NBA 2K22 just snuck in a way to make 2K22 pay-to-win. Yall worried or no?\n\n👉 SECOND CHANNEL: https://www.youtube.com/channel/UCpmGbhQHg0nf3Ec2OreFHoQ?sub_confirmation=1\n\n🔴 Playback Channel: https://www.youtube.com/channel/UCPfetHIjFUSSUxWLs-2zhlA?sub_confirmation=1\n\n⚡ AMP CHANNEL: https://www.youtube.com/channel/UCJbYdyufHR-cxOuY96KIoqA?sub_confirmation=1\n\n🎤 NEW PODCAST: https://www.youtube.com/channel/UC_q9jnFFLHSHgtVDc0ERNlg?sub_confirmation=1\n\n👕  Merch: http://www.agent.clothing/\n\n🔴 SUBSCRIBE: http://goo.gl/s8cskJ\n\n 🐦 TWITTER: https://twitter.com/CallMeAgent00\n\n 📸 INSTAGRAM: https://www.instagram.com/callmeagentzero/ 👉",
            },
            defaultAudioLanguage: "en-CA",
          },
        },
        {
          kind: "youtube#video",
          etag: "RWnzfkEWLkDK5Odc3xOgXuf84bQ",
          id: "mu4xGNwz0OY",
          snippet: {
            publishedAt: "2021-09-06T04:07:06Z",
            channelId: "UC0hy7TcR1gGD8nQBqrF2FaA",
            title:
              "Notre Dame vs. Florida State Condensed Game | 2021 ACC Football",
            description:
              "The Florida State Seminoles lost in overtime against the reloaded Notre Dame Fighting Irish who went to the CFP last season.  The game featured 79 points, including 5 touchdowns by each team, 873 combined yards of offense and countless great plays.  Included in the excitement was McKenzie Milton returning to college football action two years after a catastrophic knee injury and leading FSU on a key touchdown drive and down the field for the game-tying field goal.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/mu4xGNwz0OY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/mu4xGNwz0OY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/mu4xGNwz0OY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/mu4xGNwz0OY/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/mu4xGNwz0OY/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "ACC Digital Network",
            tags: [
              "Florida State Seminoles",
              "Notre Dame Fighting Irish",
              "Notre Dame Fighting Irish vs. Florida State Seminoles",
              "ACC",
              "ACCDN",
              "ACC Digital Network",
              "Atlantic Coast Conference",
              "Football",
              "ACC Football",
              "College Football",
              "Highlights",
              "Game highlights",
              "FSU",
              "Seminoles",
              "Noles",
              "Florida State",
              "FSU Seminoles",
              "Notre Dame",
              "ND",
              "The Irish",
              "Fighting Irish",
            ],
            categoryId: "17",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Notre Dame vs. Florida State Condensed Game | 2021 ACC Football",
              description:
                "The Florida State Seminoles lost in overtime against the reloaded Notre Dame Fighting Irish who went to the CFP last season.  The game featured 79 points, including 5 touchdowns by each team, 873 combined yards of offense and countless great plays.  Included in the excitement was McKenzie Milton returning to college football action two years after a catastrophic knee injury and leading FSU on a key touchdown drive and down the field for the game-tying field goal.",
            },
          },
        },
        {
          kind: "youtube#video",
          etag: "D0gyEBmH9aglnnD3cQ_ZCicbTvo",
          id: "Ots6Qh_7u5g",
          snippet: {
            publishedAt: "2021-09-07T12:13:22Z",
            channelId: "UC-SJ6nODDmufqBzPBwCvYvQ",
            title:
              "\"We've never seen this”: Texas doctor struggles to save patients as COVID-19 overwhelms hospitals",
            description:
              'A Texas emergency room doctor is racing against the clock to find open beds for his sickest patients. Hospitals across the region are short on beds as COVID-19 patients strain available capacity. David Begnaud reports.\n\nEach weekday morning, "CBS Mornings” co-hosts Gayle King, Tony Dokoupil and Nate Burleson bring you the latest breaking news, smart conversation and in-depth feature reporting. "CBS Mornings" airs weekdays at 7 a.m. on CBS and 8 a.m. ET on CBSN.\n\n\nSubscribe to “CBS Mornings” on YouTube: https://www.youtube.com/CBSMornings \nWatch CBSN live: http://cbsn.ws/1PlLpZ7c\u200b\nDownload the CBS News app: http://cbsn.ws/1Xb1WC8\u200b\nFollow "CBS Mornings" on Instagram: http://bit.ly/1Q7NGnY\nLike "CBS Mornings" on Facebook: http://on.fb.me/1LhtdvI\nFollow "CBS Mornings" on Twitter: http://bit.ly/1Xj5W3p\nSubscribe to our newsletter: http://cbsn.ws/1RqHw7T\u200b\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com',
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Ots6Qh_7u5g/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Ots6Qh_7u5g/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Ots6Qh_7u5g/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "CBS Mornings",
            tags: [
              "video",
              "cbs",
              "news",
              "texas",
              "texas doctor",
              "patients",
              "covid19",
              "coronavirus",
              "virus",
              "hospitals",
              "struggles",
              "emergency room",
            ],
            categoryId: "25",
            liveBroadcastContent: "none",
            localized: {
              title:
                "\"We've never seen this”: Texas doctor struggles to save patients as COVID-19 overwhelms hospitals",
              description:
                'A Texas emergency room doctor is racing against the clock to find open beds for his sickest patients. Hospitals across the region are short on beds as COVID-19 patients strain available capacity. David Begnaud reports.\n\nEach weekday morning, "CBS Mornings” co-hosts Gayle King, Tony Dokoupil and Nate Burleson bring you the latest breaking news, smart conversation and in-depth feature reporting. "CBS Mornings" airs weekdays at 7 a.m. on CBS and 8 a.m. ET on CBSN.\n\n\nSubscribe to “CBS Mornings” on YouTube: https://www.youtube.com/CBSMornings \nWatch CBSN live: http://cbsn.ws/1PlLpZ7c\u200b\nDownload the CBS News app: http://cbsn.ws/1Xb1WC8\u200b\nFollow "CBS Mornings" on Instagram: http://bit.ly/1Q7NGnY\nLike "CBS Mornings" on Facebook: http://on.fb.me/1LhtdvI\nFollow "CBS Mornings" on Twitter: http://bit.ly/1Xj5W3p\nSubscribe to our newsletter: http://cbsn.ws/1RqHw7T\u200b\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com',
            },
            defaultAudioLanguage: "en",
          },
        },
      ],
      nextPageToken: "CBkQAA",
      pageInfo: {
        totalResults: 200,
        resultsPerPage: 25,
      },
    };
    const items = result.items;
    return (
      <>
        <Navbar search={this.reqSearch}></Navbar>
        <Content items={items}></Content>
      </>
    );
  }
}
export default App;

/* 
items : [
    {
      channelTitle: "NBA 2K",
      description:
        "The next evolution of The City 🏙  Experience the new layout and architecture as you journey through 2K22 MyCAREER on #2KDay 9/10\n\nPre-Order Now: https://nba.2k.com/buy",
      localized: {
        title: "NBA 2K22: The City",
        description:
          "The next evolution of The City 🏙  Experience the …2KDay 9/10\n\nPre-Order Now: https://nba.2k.com/buy",
      },
      publishedAt: "2021-09-07T15:01:26Z",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-KDasyD5m1g/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/-KDasyD5m1g/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        high: {
          url: "https://i.ytimg.com/vi/-KDasyD5m1g/mqdefault.jpg",
          width: 320,
          height: 180,
        },
      },
    }
  ]
*/
