import Barazna1 from '../../../assets/Barazna1.jpg'
import Barazna2 from '../../../assets/Barazna2.jpg'
import Barazna3 from '../../../assets/Barazna3.jpg'
import Barazna4 from '../../../assets/Barazna4.jpg'

import Alexeev1 from '../../../assets/Alexeev1.jpg'
import Alexeev2 from '../../../assets/Alexeev2.jpg'
import Alexeev3 from '../../../assets/Alexeev3.jpg'
import Alexeev4 from '../../../assets/Alexeev4.jpg'

import Anempadystau1 from '../../../assets/Anempadystau1.jpg'
import Anempadystau2 from '../../../assets/Anempadystau2.jpg'
import Anempadystau3 from '../../../assets/Anempadystau3.jpg'
import Anempadystau4 from '../../../assets/Anempadystau4.jpg'

import Kaltovich1 from '../../../assets/Kaltovich1.jpg'
import Kaltovich2 from '../../../assets/Kaltovich2.jpg'
import Kaltovich3 from '../../../assets/Kaltovich3.jpg'
import Kaltovich4 from '../../../assets/Kaltovich4.jpg'

import Likhtarovich1 from '../../../assets/Likhtarovich1.jpg'
import Likhtarovich2 from '../../../assets/Likhtarovich2.jpg'
import Likhtarovich3 from '../../../assets/Likhtarovich3.jpg'
import Likhtarovich4 from '../../../assets/Likhtarovich4.jpg'

import Klinov1 from '../../../assets/Klinov1.JPG'
import Klinov2 from '../../../assets/Klinov2.jpeg'
import Klinov3 from '../../../assets/Klinov3.jpeg'
import Klinov4 from '../../../assets/Klinov4.jpeg'



const initialState = {
    developers: [
        { imageSrc: 'https://avatars.githubusercontent.com/u/50217581?v=4', githubSrc: 'https://github.com/RBELS' },
        { imageSrc: 'https://m.media-amazon.com/images/I/41R7eDvFFZL._AC_SY580_.jpg', githubSrc: 'https://github.com/Nikstanov' },
        { imageSrc: 'https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg', githubSrc: 'https://github.com/IntensioT' }
    ],
    celebrities: [
        {
            id: 0,
            name: 'Міхаіл Рыгоравіч Баразна',
            shortBio:'Мастацтвазнавец, мастацкі крытык, фотамастак',
            years: '(1962 - ... )',
            sliderTxt:'Беларускi плакат',
            photo: Barazna1,
            text: [
                'Нарадзіўся ў 1962 г. в. Ліхінічы. Акадэмік Беларускай Акадэміі выяўленчага мастацтва. Закончыў Круглянскую сярэднюю школу, Мінскі тэатральна-мастацкі інстытут, аддзяленне дызайну. За ўдзел ва Усесаюзным конкурсе студэнтаў мастацкіх устаноў атрымаў дыплом І ступені. З 1985 па 1992 гг. працуе мастацкім рэдактарам выдавецтва “Беларусь”. З 1992 г. пасля заканчэння аспірантуры працуе ў Беларускай акадэміі мастацтваў, з 1996 г. – выконваючы абавязкі загадчыка кафедры гісторыі і тэорыі мастацтва.',
                'З 1998 г. па сумяшчальніцтву выкладае ў Еўрапейскім гуманітарным універсітэце імя М. Танка. Кандыдат мастацтвазнаўства, дацэнт. З 1995 г. з’яўляецца членам праўлення музея сучаснага выяўленчага мастацтва ў Мінску, куратарам выставак у музеі сучаснага выяўленчага мастацтва, вольным куратарам усіх мастацкіх выставак у рэспубліцы і за яе межамі. 1995 г. – пераможца конкурсу Беларускага фонду Сораса “Вялікія гарады” на творчую паездку ў Рым. Вынік гэтай паездкі – монавыстаўка М. Баразны “Вечны горад – вечны...”. У 2001 г. выдаў кнігу “Беларуская кніжная графіка 1960-1990 гг.”, за якую ў 2002 годзе атрымаў спецыяльную прэмію прэзідэнта краіны А.Р. Лукашэнка і дыплом “За высокія дасягненні ў вобласці мастацтва”.',
                'У 2002 г. прысвоена званне акадэміка Беларускай Акадэміі выяўленчага мастацтва. Міхаіл Баразна – аўтар многіх фотапраектаў, упершыню ў нашай краіне распрацаваў камп’ютэрны дызайн. Асноўны напрамак творчасці – прамысловая графіка. Яго праекты закуплены і захоўваюцца ў фондах музеяў г.Магілёва, Мінска, Віцебска. Пастаянна супрацоўнічае з нямецкім культурным цэнтрам імя Гётэ ў Мінску: арганізоўвае сумесныя выставы, выдае мастацка-фатаграфічныя праекты, мастацкія альбомы, прапагандуе дасягненні беларускіх мастакоў. Працуе прарэктарам па навукова-творчай рабоце ў Беларускай Акадэміі мастацтваў. Жыве ў г. Мінску.'
            ],
            works: [
                'http://catalog.library.mogilev.by/kray/Znak_new/krugloe/r13p24_1.files/image003.jpg'
            ],
            youtubeVideoUrl: '4O_1ywxjNn0',
            wikipediaUrl: '',
            carouselImages: [ Barazna2, Barazna3, Barazna4 ],
            olEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=27.590934634208683%2C53.919656807748034%2C27.595440745353702%2C53.9220766912116&amp;layer=mapnik'
        },
        {
            id: 1,
            name: 'Аляксандр Аляксеевіч Аляксееў',
            photo: Alexeev1,
            shortBio:'Фатограф, выдавец, дызайнер, рэжысёр, журналіст',
            years: '(1978 - ... )',
            sliderTxt:'Фатаграфii архiтэктуры',
            text: [
                'Нарадзіўся 14 лістапада 1978 года ў г. Казань, у сям’і вайскоўца. З 1979 года сям’я пераехала ў Беларусь. У 2000 годзе скончыў факультэт менеджменту Беларускага дзяржаўнага эканамічнага ўніверсітэта. У 2000 годзе ўзнагароджаны медалём Міністэрства адукацыі і навукі Расійскай Федэрацыі «За лепшую навуковую працу» сярод маладых вучоных па выніках адкрытага ўсерасійскага конкурсу. У 2004 годзе абараніў дысертацыю, прысуджана навуковая ступень кандыдата эканамічных навук.',
                'З 2001 года пачаў працаваць на беларускім тэлебачанні. З’яўляўся вядучым і рэжысёрам праграмы «Знята!», рэдактарам тэлевізійных праектаў «Наша спадчына», «Новая калекцыя», «Эпоха». З 2001 года акрэдытаваны ў якасці беларускага фатографа і журналіста на міжнародных кінафестывалях у Кане, Берліне і Венецыі. З 2003 года ў якасці сааўтара сумесна з Алегам Лукашэвічам рэалізуе мастацкі праект «Спадчына Беларусі» (па міжнароднаму прадстаўленні гістарычнай і культурнай спадчыны Беларусі), які ўключае выданне прэзентацыйных альбомаў, правядзенне міжнародных фотавыставак, вытворчасць дакументальных фільмаў і тэлевізійных праграм для міжнароднай аўдыторыі. У студзені 2005 года стаў Лаўрэатам Прэміі Прэзідэнта Рэспублікі Беларусь «За духоўнае адраджэнне».',
                'З 2007 года з’яўляецца беларускім выдаўцом. Сумесна з Алегам Лукашэвічам арганізаваў адкрыццё першага Нацыянальнага павільёна Рэспублікі Беларусь на 64 Канскім кінафестывалі. У маі 2011 года стаў намеснікам кіраўніка Нацыянальнага павільёна. З 2012 года працуе ў беларускай дакументалістыцы ў якасці рэжысёра. У 2014 годзе скончыў Беларускую дзяржаўную акадэмію мастацтваў па спецыяльнасці рэжысёр.'
            ],
            works: [
                'http://спадчына.бел/assets/heritage-_of_belarus_homel_04.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_hrodna_03_big.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_minsk_02_big.jpg'
            ],
            youtubeVideoUrl: 'usU-Sgpr4LQ',
            wikipediaUrl: '',
            carouselImages: [Alexeev2, Alexeev3, Alexeev4],
            olEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=27.590934634208683%2C53.919656807748034%2C27.595440745353702%2C53.9220766912116&amp;layer=mapnik'
        },
        {
            id: 2,
            name: 'Міхаіл Уладзіміравіч Анемпадыстаў',
            photo: Anempadystau1,
            shortBio:'Перакладчык, паэт, графічны дызайнер',
            years: '(1964 - 2018)',
            sliderTxt:'Фотавыстаўка «Under Ground»',
            text: [
                'Нарадзіўся 16 сакавіка 1964 года ў Мінску ў рускай сям’і. Спачатку Міхал з бацькамі жыў у Мінску на бульвары Шаўчэнкі, а пасля сям’я пераехала ў раён Камароўкі. У дзяцінстве Міхал марыў стаць заолагам альбо біёлагам, вандроўнікам і шукальнікам скарбаў. Добра маляваць пачаў у дзяцінстве — свае першыя малюнкі Міхал размяшчаў у сваіх энцыклапедыях пра жывёл, якія рабіў сам: рабіў старонкі з уласна намаляванымі малюскамі, іншымі рознымі жывёламі і асабіста падпісваў. Вучыўся ў дзіцячай народнай студыі выяўленчага мастацтва пры Палацы культуры тэкстыльшчыкаў (1965—1985) у Мінску, якой кіраваў беларускі жывапісец Васіль Сумараў. У 1979—1983 гг. вучыўся і скончыў Мінскае мастацкае вучылішча (цяпер — Мінскі дзяржаўны мастацкі каледж імя А. К. Глебава), дзе панавала пэўная свабода і плюралізм, а само вучылішча стала прыкметнай кузняй творчых асоб.',
                'У першую чаргу Міхал лічыў сябе мастаком, але стаў таксама вядомы як паэт, фатограф, культуролаг і публіцыст. Працаваў у жанрах ужытковай графікі, ілюстрацыі, плаката, фатаграфіі: пачынаў з плаката, пасля зацікавіўся графікай, а пазней і фатаграфіяй. Удзельнічаў у калектыўных і персанальных выстаўках у Беларусі і за мяжой. З сакавіка 1987 г. быў членам арт-лабараторыі «Галіна» (нефармальнай мастацкай суполкі) у Мінску, якая сваёй платформай абвясціла «неакрытычны рэалізм як метад, скіраваны на бічаванне застойных з’яў у нашым грамадскім жыцці». З 1989 па 1994 г. працаваў мастацкім рэдактарам у беларускім часопісе «Бярозка», дзе рэалізоўваў сябе супольна з такімі талентамі як Адам Глобус, Уладзімір Сіўчыкаў, Ігар Бабкоў, Максім Клімковіч, Алесь Бадак і інш. З 1997 г. быў членам Беларускага саюза дызайнераў, а з 2011 г. членам яго праўлення. Быў дызайнерам вядомых лагатыпаў — у тым ліку, лагатыпа беларускай грамадска-культурнай кампаніі «Будзьма беларусамі!», беларускага рок-фестывалю «Басовішча-2007» і «Басовішча-2008» і інш. Стварыў серыю анімаваных паштовак «Будзьма з беларускімі святамі», а таксама іншыя серыі. Стаў аўтарам ілюстрацый для кнігі Сяржука Вітушкі «Дзінь-дзілінь: пара гуляць у казкі» (2011) і інш. Аўтар альбомных вокладак для CD-дыскаў гурта «N.R.M.», гурта «Партызанская школа», спевака Зміцера Вайцюшкевіча і інш. Зрабіў беларускамоўны дызайн этыкеткі для маркі гарэлкі і вокладкі для кружэлак.',
                'У 2011 г. дэбютаваў як фатограф, прэзентаваўшы фотавыстаўку «Under Ground»: у фотапрацах засяродзіўся на беларускай гародніны, каб такім спосабам адкрыць глыбейшае вымярэнне беларускай культуры. Выбар сваёй тэматыкі патлумачыў тым, што беларусы, на думку Анемпадыстава, як гародніна, хаваюць цікавыя рэчы ў сабе, не паказваюць іх навонкі — нацыя заглыбленых у сябе людзей: выглядаюць звычайна, а ўнутры фантастычныя — пад запэцканай (ад глебы) кажурой бульбы схавана «залатое сонца»'
            ],
            works: [
                'http://спадчына.бел/assets/heritage-_of_belarus_homel_04.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_hrodna_03_big.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_minsk_02_big.jpg'
            ],
            youtubeVideoUrl: 'ChXvR3ps1oM',
            wikipediaUrl: '',
            carouselImages: [Anempadystau2, Anempadystau3, Anempadystau4],
            olEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=27.590934634208683%2C53.919656807748034%2C27.595440745353702%2C53.9220766912116&amp;layer=mapnik'
        },
        {
            id: 3,
            name: 'Сяргей Уладзіміравіч Калтовіч',
            photo: Kaltovich1,
            shortBio:'Дызайнер, фатограф',
            years: '(1961 - 2022)',
            sliderTxt:'Насценныя календары, плакаты, буклеты',
            text: [
                'Нарадзіўся ў сям’і службоўцаў. Бацька — інжынер Уладзімір Мікалаевіч Калтовіч (1937—1979). Маці — Іна Мікалаеўна Калтовіч (нар. 1935). У 1968—1977 гадах навучаўся ў СШ № 6 Мінска. У 1980 годзе скончыў Мінскае мастацкае вучылішча па спецыяльнасьці «харавое дырыжаванне»',
                '1980—1982 гг. — служба ў шэрагах Савецкай арміі. 1984—1987 гг. — фатограф у БелНДІП горадабудаўніцтва. 1987—1990 гг. — загадчык фоталабараторыі ў агенцтве «Прапанова».',
                '1990—1993 гг. — фатограф у музеі П. Броўкі. 1993—1997 гг. — фатограф у ТАА «Солвіс». З 1997 г. — фатограф на Мінскім мастацкім камбінаце. З 1995 г. — супольна з В. Сядых творчая фотастудыя «Секо»'            
            ],
            works: [
                'http://спадчына.бел/assets/heritage-_of_belarus_homel_04.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_hrodna_03_big.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_minsk_02_big.jpg'
            ],
            youtubeVideoUrl: 'BHGn4Zk49vY',
            wikipediaUrl: '',
            carouselImages: [Kaltovich2, Kaltovich3, Kaltovich4],
            olEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=27.590934634208683%2C53.919656807748034%2C27.595440745353702%2C53.9220766912116&amp;layer=mapnik'
        },
        {
            id: 4,
            name: 'Георгій Леанардавіч Ліхтаровіч',
            photo: Likhtarovich1,
            shortBio:'Фотамастак белорусского Полесья',
            years: '(1947 - ... )',
            sliderTxt:'Беларускi плакат',
            text: [
                'У 1965—1966 гадах працаваў асістэнтам кінааператара на Мінскай студыі навукова-папулярных і хранікальна-дакументальных фільмаў. У 1966—1968 гадах служыў у войску у п. Печы, в/ч 43064. Друкаваўся ў перыядычных выданнях. У 1969—1972 гадах працаваў фатографам у Інстытуце мастацтвазнаўства, этнаграфіі і фальклору Акадэміі навук. Ілюстраваў першыя тамы «Збору помнікаў гісторыі і культуры Беларусі». У 1970—1974 гадах вучыўся на архітэктурным факультэце БПІ. З 1972 года выкладаў фотаграфіку ў Тэатральна-мастацкім інстытуце.',
                'У 1973—1974 гадах фотакарэспандэнт газеты «Голас Радзімы». У 1974—1992 гадах працаваў фотакарэспандэнтам у дзяржаўных выдавецтвах. Шматлікія фотаальбомы, манаграфіі беларускіх мастакоў, энцыклапедычныя выданні, плакаты, камплекты паштовак, буклеты. З 1992 года на творчай працы. У 2000 годзе як фотамастак выдаў фотаальбом «Добры дзень, Беларусь» — «Лепшая кніга года» на беларускім конкурсе «Мастацтва кнігі». У 2001—2006 гадах прымаў удзел у фатаграфічных і мастацкіх выставах. Пленэры памяці Язэпа Драздовіча, Васіля Быкава, Уладзіміра Караткевіча. Удзельнічаў у перадачах беларускага Радыё Свабода: «Верш на Свабоду», «Прыватны дзённік», «Магія мовы»',
                'У 2002 годзе выдаў кнігу паэзіі «Агульны сшытак». Прадмова Рыгора Барадуліна. У 2003 годзе абраны ў Раду беларускай інтэлігенцыі. З 2004 года член Рады Беларускага грамадскага аб"яднання «Фотамастацтва». У 2004 годзе вершамі і перакладамі ўдзельнічаў у выданні дыска беларускіх песень Галіны і Барыса Вайханскіх «Вяртанне». У 2005 годзе выдаў кнігу вершаў «Ліхтарыкі» з прадмовай Рыгора Барадуліна. У 2008 годзе ў выдавецтве «Эксмо» (Масква) выдаў дэтэктыўны раман «Газ».'
            ],
            works: [
                'http://спадчына.бел/assets/heritage-_of_belarus_homel_04.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_hrodna_03_big.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_minsk_02_big.jpg'
            ],
            youtubeVideoUrl: '1PgqAVZpcTU',
            wikipediaUrl: '',
            carouselImages: [Likhtarovich2, Likhtarovich3, Likhtarovich4],
            olEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=27.590934634208683%2C53.919656807748034%2C27.595440745353702%2C53.9220766912116&amp;layer=mapnik'
        },
        {
            id: 5,
            name: 'Артур Аляксандравіч Клінаў',
            photo: Klinov1,
            shortBio:'Мастак, пісьменнік, архітэктар',
            years: '(1965 - ... )',
            sliderTxt:'«Горадабудаўніцтва»',
            text: [
                'Маці была інжынерам-праграмістам і членам камуністычнай партыі. Пра сваю маці Артур у інтэрв’ю сказаў: «Працаголік. Усё жыццё аддала працы і мне». Бацька Артура быў спартсменам і мастаком: у маладосці займаўся боксам, стаў майстрам спорту, а пасля займаўся мастацтвам прыкладнога характару — рабіў замовы для калгасаў, саўгасаў, розных інстытутаў. У бацькі Артура былі антысавецкія настроі.',
                'Пасля заканчэння інстытута ўцягнуўся ў сваю спецыяльнасць «горадабудаўніцтва». Яшчэ ў студэнцкія гады Артур Клінаў займаўся навуковым даследаваннем беларускай архітэктуры савецкага перыяду (асабліва т.зв. мінскага «сталінскага ампіру» — 1930—1950-я гады), што пазней рэалізуецца ў значныя праекты: студэнцкае даследаванне стала канцэптуальным падмуркам для стварэння фотаальбома «Горад Сонца» (2005), аўтабіяграфічнага рамана «Мінск. Горад Сонца» (2006) і ўрбаністычна-культурнай канцэпцыі «Горад Сонца-2».',
                '1986: персанальная кватэрная выстаўка (г. Мінск, кватэра Артура Клінава). 1987: «Вясновыя песні звышчалавека» (г. Мінск, кватэрная выстаўка). 1994: галерея «Vita Nova» (г. Мінск, Беларусь). 1995: праект «Смерць Піянера» — галерэя незалежнага мастацтва «Шостая лінія» (г. Мінск, Беларусь). 1996: праект «Смерць Піянера-2» — галерэя незалежнага мастацтва «Шостая лінія» (г. Мінск, Беларусь).'
            ],
            works: [
                'http://спадчына.бел/assets/heritage-_of_belarus_homel_04.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_hrodna_03_big.jpg',
                'http://спадчына.бел/assets/heritage-_of_belarus_minsk_02_big.jpg'
            ],
            youtubeVideoUrl: 'BHGn4Zk49vY',
            wikipediaUrl: '',
            carouselImages: [Klinov2, Klinov3, Klinov4],
            olEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=27.590934634208683%2C53.919656807748034%2C27.595440745353702%2C53.9220766912116&amp;layer=mapnik'
        },
    ]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default dataReducer