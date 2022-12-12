const initialState = {
    developers: [
        { imageSrc: 'https://avatars.githubusercontent.com/u/50217581?v=4', githubSrc: 'https://github.com/RBELS' },
        { imageSrc: 'https://m.media-amazon.com/images/I/41R7eDvFFZL._AC_SY580_.jpg', githubSrc: 'https://github.com/Nikstanov' },
        { imageSrc: 'https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg', githubSrc: 'https://github.com/IntensioT' }
    ]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default dataReducer