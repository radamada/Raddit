const posts = [
    {
        topicId: 1,
        posts: [
            {
                id: 1,
                username: 'SANDROID20',
                since: '2 days ago',
                description: 'If you were in charge of the FINAL update to Minecraft, what would you do?',
                link: 'https://preview.redd.it/ibjng21a90da1.png?width=640&crop=smart&auto=webp&s=b8f1d0c17bc307eee616f373a32150bc66f2e0ee',
                days: 2.0,
                comments: []
            },
            {
                id: 2,
                username: 'Hammster_95',
                since: '1 month ago',
                description: 'What do we think will be the next game/instalment after Halo Infinite???',
                link: 'https://preview.redd.it/fqd8316b5d7a1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=46ed342400ab8d16350c26ccc3a3931d10fb8f20',
                days: 30.0,
                comments: []
            },
            {
                id: 3,
                username: 'Caide_n',
                since: '3 months ago',
                description: 'The back of the PS5 & Xbox game boxes. In bold it says “Call of Duty HQ and Call of Duty: Warzone 2.0 included.”',
                link: 'https://preview.redd.it/99p9vvuyrvv91.jpg?width=640&crop=smart&auto=webp&s=aa0180e1c77ca5996ff0e4dec4f630b13047c66c',
                days: 90.0,
                comments: []
            },
            {
                id: 4,
                username: 'Garret_Poe',
                since: '13 days ago',
                description: 'The Path of Exile Experience.',
                link: 'https://preview.redd.it/ipwvcrlq0uaa1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=799d593e9c8e8898ab87379a6416c951fe767878',
                days: 13.0,
                comments: []
            },
            {
                id: 5,
                username: 'LastNickLeft',
                since: '6 months ago',
                description: 'Updated Full Map of Escape From Tarkov V4 [All Maps]',
                link: 'https://external-preview.redd.it/M8Uq5eTLaXgWJGGGdWMB3SeIUeTyLgh86VybuGJY3m4.jpg?auto=webp&v=enabled&s=3596085a213b7ef0dfeb0b4a04fbbe1e7d981676',
                days: 180.0,
                comments: []
            }
        ]
    },
    {
        topicId: 2,
        posts: [
            {
                id:1,
                username: 'gusfring88',
                since: '16 hours ago',
                description: 'When Bill and Ryen start their weekly NBA pod',
                link: 'https://preview.redd.it/nuirippvhida1.jpg?width=640&crop=smart&auto=webp&s=d6e9155c38f58354f69904550885e844dc27574b',
                days: 0.66,
                comments: []
            },
            {
                id:2,
                username: 'Jarl_Balgruf',
                since: '23 hours ago',
                description: 'Graphic found on the Ravens sub regarding Kyle Hamilton 👀 Ended up as the #1 rated Safety across the NFL for the 2022-2023 season.',
                link: 'https://external-preview.redd.it/BH_AXXYGi-JjTk36ymFa9TNyVnVZYWF_za1iQYUWSjE.jpg?width=960&crop=smart&auto=webp&v=enabled&s=58f470e072f41922f057183ace358c4c32bdcf75',
                days: 0.95,
                comments: []
            },
            {
                id:3,
                username: 'EG7585',
                since: '7 days ago',
                description: 'Premier League table after Matchweek 20',
                link: 'https://preview.redd.it/6gx4k13rtaca1.jpg?width=640&crop=smart&auto=webp&s=cd0b549b48c860b003bfba8607053fee5678cef0',
                days: 7.0,
                comments: []
            },
            {
                id:4,
                username: 'HippoSpecific4020',
                since: '7 days ago',
                description: 'Francis is stripped and released from the UFC',
                link: 'https://preview.redd.it/jr1go04406ca1.jpg?width=640&crop=smart&auto=webp&s=312cb9492a8fa4a8110a17419786f2061a27fd83',
                days: 7.0,
                comments: []
            },
            {
                id:5,
                username: 'emotional_damage_me',
                since: '5 days ago',
                description: '[FOX Sports: MLB] Which 4 teams do you want to see in the semifinals?',
                link: 'https://preview.redd.it/rl71z66xipca1.jpg?width=640&crop=smart&auto=webp&s=d79aee5c521944fe8dd5ec8e477f16abcf1310c3',
                days: 5.0,
                comments: []
            }
        ]
    },
    {
        topicId: 3,
        posts: [
            {
                id:1,
                username: '_MrImFine_',
                since: '1 month ago',
                description: 'Free Christmas 69 Dogecoin Giveaway!!!!!!!',
                link: 'https://preview.redd.it/lukyf558dz7a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=e66e05da15d6b2bece88632011b5791c48d69fbd',
                days: 30.0,
                comments: []
            },
            {
                id:2,
                username: 'Background_Math_715',
                since: '4 days ago',
                description: 'Bitcoin fixes this',
                link: 'https://preview.redd.it/7ax5q4asvxca1.jpg?width=640&crop=smart&auto=webp&s=b63a289b84a41cf93bed9d5f8a79ebda6d281ead',
                days: 4.0,
                comments: []
            },
            {
                id:3,
                username: 'Egon_1',
                since: '4 months ago',
                description: '“I look forward to see the part of the documentary where Charlie Lee begs you to list Litecoin, promptly wash trades 99% of the volume to manipulate the market, and then dumps all his litecoins onto your customers at all time highs, then Coinbase pays millions in fines.”',
                link: 'https://preview.redd.it/jb43rapt9yr91.jpg?width=640&crop=smart&auto=webp&s=4fd69b0872295569cbcf97cdc22584fe905ecec9',
                days: 120.0,
                comments: []
            },
            {
                id:4,
                username: 'SofiaCBCH',
                since: '15 days ago',
                description: 'Bitcoin Cash was the secret Santa for needy children in Venezuela!',
                link: 'https://preview.redd.it/oeltypbl5naa1.jpg?width=640&crop=smart&auto=webp&s=2a418c6aa185276317edc04fa69515ac5caade01',
                days: 15,
                comments: []
            },
            {
                id:5,
                username: 'Cheesy_Big_Green',
                since: '22 hours ago',
                description: 'Weekend Crypto Pump',
                link: 'https://external-preview.redd.it/KkxqndepMO5U-0QXOOCiJ9Kr05lmMuiZZtONxRF7uvc.jpg?width=640&crop=smart&auto=webp&s=9f163edef64361eb5327762a2a6e4b6124eeda56',
                days: 0.91,
                comments: []
            }
        ]
    },
    {
        topicId: 4,
        posts: [
            {
                id:1,
                username: 'handlit33',
                since: '14 days ago',
                description: '[MLB Metrics] Every current MLB television scorebug',
                link: 'https://preview.redd.it/s9x2b9ltewaa1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=0322b70896606feae69da9d3f0fb991541acda99',
                days: 14.0,
                comments: []
            },
            {
                id:2,
                username: 'NoPokerDick',
                since: '12 days ago',
                description: 'I guess her antivaxxer television time was worth it. Herman Cain award for this one.',
                link: 'https://preview.redd.it/2xvm3bd6b6ba1.jpg?width=640&crop=smart&auto=webp&s=cc62a7c08e08875c1be7c463515b105e112c9462',
                days: 12.0,
                comments: []
            },
            {
                id:3,
                username: 'rn3122',
                since: '2 days ago',
                description: 'Bollywood stars and when they tried reality television. Any particular show that you find memorable or had the best experience with?',
                link: 'https://preview.redd.it/429s5md40bda1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=28a74003abb4fb4793d639021f67918e3ee82b69',
                days: 2.0,
                comments: []
            },
            {
                id:4,
                username: 'TheAwesomeMan123',
                since: '6 days ago',
                description: 'It is just good television Lauren.',
                link: 'https://preview.redd.it/2yxtsxqnxfca1.jpg?width=640&crop=smart&auto=webp&s=a5506d96eaf1434b1755ac7be4f6787ef9e1b9df',
                days: 6.0,
                comments: []
            },
            {
                id:5,
                username: 'azurelynx-12',
                since: '7 days ago',
                description: 'The sky above the port was the colour of television, tuned to a dead channel',
                link: 'https://preview.redd.it/xjg0fht899ca1.png?width=640&crop=smart&auto=webp&s=0db5c5efa3e3c2490549d517c615c7d89edab773',
                days: 7.0,
                comments: []
            }
        ]
    },
    {
        topicId: 5,
        posts: [
            {
                id:1,
                username: 'parishilton2',
                since: '4 days ago',
                description: 'Celebrity Engagement Rings: The Good, The Bad, & The Megan Fox',
                link: 'https://preview.redd.it/gkh8q3fnlsca1.jpg?width=640&crop=smart&auto=webp&s=d2f97bedbe7b7ee5088bba798926f9b847e778ce',
                days: 4.0,
                comments: []
            },
            {
                id:2,
                username: 'parishilton2',
                since: '6 days ago',
                description: 'Surprising Celebrity Connection',
                link: 'https://preview.redd.it/d5nr3ozeteca1.jpg?width=640&crop=smart&auto=webp&s=aa68240fd0f032a159bb79baddb11afdfeb5e367',
                days: 6.0,
                comments: []
            },
            {
                id:3,
                username: 'SouthernVaper',
                since: '8 months ago',
                description: 'Who is your town/city street legend that only locals know? Not celebrity etc.',
                link: 'https://preview.redd.it/d7od0arlajda1.jpg?width=640&crop=smart&auto=webp&s=ecf8c96640450eb4a7780b2379fbf802396a2252',
                days: 240.0,
                comments: []
            },
            {
                id:4,
                username: 'Siya_32',
                since: '1 month ago',
                description: '2022 was a big year for celebrity death. Which one hit you the hardest?',
                link: 'https://preview.redd.it/vhnoe4j34y7a1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=d56427b488aea47520a9d2554e332f0353248fd9',
                days: 30.0,
                comments: []
            },
            {
                id:5,
                username: 'RCOkey',
                since: '2 months ago',
                description: 'Moo: Name this celebrity impression.',
                link: 'https://preview.redd.it/jq49s1gwvh3a1.jpg?width=640&crop=smart&auto=webp&s=e99dd437b3f890f6914d0a36d5f4d08048a52af3',
                days: 60.0,
                comments: []
            }
        ]
    }
];

function compare( a, b ) {
    if ( a.days < b.days ){
      return -1;
    }
    if ( a.days > b.days ){
      return 1;
    }
    return 0;
}

export function getPostsFromTopic(topicId) {
    const topic = posts.find((topic) => topic.topicId === parseInt(topicId));
    return topic.posts.sort( compare );
}

export function getPostByTopicIdAndPostId(topicId, postId) {
    const topic = posts.find((topic) => topic.topicId === parseInt(topicId));
    return topic.posts.find((posts) => posts.id === parseInt(postId));
}

export function getAllPostOrderedByDate() {
    let allPosts = [];

    posts.forEach(topicPosts => {
        allPosts = allPosts.concat(topicPosts.posts);
    });

    return allPosts.sort( compare )
}

export function getTopicIdForPost( post ) {
    let topic = [];

    posts.forEach(topicPosts => {
        const isFound = topicPosts.posts.some(element => {
            if (element === post) {
              return true;
            }
        
            return false;
        });

        if(isFound) {
            topic = topicPosts;
        }
    });

    return topic.topicId;
}

export default posts;