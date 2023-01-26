import { faBaseball, faCoins, faDesktop, faFaceGrinStars, faGamepad } from "@fortawesome/free-solid-svg-icons";


const topics = [
    {
        id: 1,
        name: 'Gaming',
        icon: faGamepad
    },
    {
        id: 2,
        name: 'Sports',
        icon: faBaseball
    },
    {
        id: 3,
        name: 'Crypto',
        icon: faCoins
    },
    {
        id: 4,
        name: 'Television',
        icon: faDesktop
    },
    {
        id: 5,
        name: 'Celebrity',
        icon: faFaceGrinStars
    }
];

export const getTopicById = (id) => {
    return topics.find((topic) => topic.id === parseInt(id));
};

export const getTopicIdByName = (topicName) => {
    const topic = topics.find((topic) => topic.name.toLowerCase() === topicName.toLowerCase());

    if(topic) {
        return topic.id;
    } else {
        return;
    }

}

export default topics;