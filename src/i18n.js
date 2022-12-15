import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            'websiteLogo': 'Photographers',
            'homeLinkText': 'Home',
            'peopleLinkText': 'People',
            'searchButtonText': 'Search',
            'personalPageText': 'Personal page',
            'biographyText': 'Biography',
            'additionalInfoText': 'Additional info',
            'youthText': 'Youth',
            'adulthoodText': 'Adulthood',
            'oldageText': 'Old age',
            'artistOfTheDayText': 'Artist of the day',
            'welcomeHeaderText': 'Belarusian Photographers',
            'welcomeText': 'Welcome to this internet portal! Here you can find information about the most famous Belarusian photographers. Read and enjoy!'
        }
    },
    by: {
        translation: {
            'websiteLogo': 'Фатографы',
            'homeLinkText': 'Дамашняя',
            'peopleLinkText': 'Людзі',
            'searchButtonText': 'Пошук',
            'personalPageText': 'Персанальная старонка',
            'biographyText': 'Біяграфія',
            'additionalInfoText': 'Дадатковая інфармацыя',
            'youthText': 'Маладосць',
            'adulthoodText': 'Даросласць',
            'oldageText': 'Старасць',
            'artistOfTheDayText': 'Фатограф дня',
            'welcomeHeaderText': 'Фатографы Беларусі',
            'welcomeText': 'Сардэчна запрашаем на гэты інтэрнэт-партал! Тут вы можаце знайсьці інфармацыю пра найбольш знакамітых беларускіх фатографаў. Чытайце і атрымлівайце асалоду!'
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'by',

        interpolation: {
            escapeValue: false
        }
    })


export default i18n