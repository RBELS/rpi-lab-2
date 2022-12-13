const dataSelectors = {
    developers: ({ developers }) => developers,
    celebrities: ({ celebrities }) => celebrities,
    celebritiesCount: ({ celebrities }) => celebrities.length,

    celebrityByIdSC: (id) => ({ celebrities }) => id ? celebrities[id] : null,
    celOfTheDay: ({ celebrities }) => {
        const date = new Date()
        const index = (date.getMonth()*30 + date.getDay()) % celebrities.length;
        return celebrities[index]
    }

}


export default dataSelectors