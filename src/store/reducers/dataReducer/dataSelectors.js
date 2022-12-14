const dataSelectors = {
    developers: ({ developers }) => developers,
    celebrities: ({ celebrities }) => celebrities,
    celebritiesFiltered: (filterStr) => ({ celebrities }) => celebrities.filter((el) => el.name.toLowerCase().includes(filterStr.toLowerCase())),
    celebritiesCount: ({ celebrities }) => celebrities.length,

    celebrityByIdSC: (id) => ({ celebrities }) => id ? celebrities[id] : null,
    celOfTheDay: ({ celebrities }) => {
        const date = new Date()
        const index = (date.getMonth() + date.getDay()) % celebrities.length;
        return celebrities[index]
    }

}

export default dataSelectors