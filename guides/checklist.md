# Checklist

## General

| Name                                                                                                                                                                     | Tags                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Elementlar Component based bo’lishi                                                                                                                                      | General                    |
| Barcha hoverlar ishlayotganligi                                                                                                                                          | General                    |
| Font smoothing qo’yilganligi                                                                                                                                             | General                    |
| Favicon qo’yilganligi                                                                                                                                                    | General                    |
| Home pageda va talab qilinadigan boshqa qismlarda preloader mavjudligi                                                                                                   | General                    |
| robots.txt mavjudligi                                                                                                                                                    | General                    |
| sitemap.xml ishlashi                                                                                                                                                     | General                    |
| Ad/ads va shunga o’xshash (ADBLOCK) nomli class lardan foydalanilmaganligi                                                                                               | General, Security          |
| Rasmlar optimize qilinganligi, iloji bo’lsa WebP formatda ishlatilishi (<https://squoosh.app/editor>, <https://compresspng.com/>)                                        | General                    |
| 404,500,502 linklar mavjud emasligi                                                                                                                                      | General, Pages             |
| Buttonlarda pointer                                                                                                                                                      | General                    |
| Bitta funksiya faqatgina bitta vazifani bajarishi kerak. Must be short, ideally **between 2-15 lines. (**<https://github.com/ryanmcdermott/clean-code-javascript>)       | General, Coding Principles |
| Hardcoding qilmaslik. Fake datalar ham props / data ni ichida bo’lishi kerak. Backendga request yuborishda ham .ENV dan foydalanishlik                                   | General, API               |
| Bitta narsani ikkita joyda yozmaslik. Don’t repeat yourself.                                                                                                             | General                    |
| Retina support fotolar hisobga olinganligi                                                                                                                               | General                    |
| Console.log larni qolib ketmaganligi                                                                                                                                     | General
| SRR=True bo’lishi kerak                                                                                                                                                  | General, Nuxt.configPagesGeneral    |
| ecosystem.config.js mavjudligi                                                                                                                                           | General, Nuxt.config                |
| Yandex.metrika/Google anaylitcs qo’shilganligi                                                                                                                           | General, Nuxt.config                |
| Sentry ulanganligi                                                                                                                                                       | General, Nuxt.config                |
| Meta taglar qo’yilganligi (title,desc,og:image)                                                                                                                          | General, Nuxt.config                |
| Axios/port .env ga sozlanganligi.                                                                                                                                        | General, Nuxt.config                |
| Back route eslab qolish, page alishtirganda til parametrlarini eslab qolish                                                                                              | Pages                      |
| Self XSS mavjudligini tekshirish                                                                                                                                                     | Security                   |
| Barcha xatoliklarni ko’rsatilishi (qandaydir xatolik yuz berdi deyish mumkin emas)                                                                                       | API                        |
| Backend ga request yuborgandan doim .catch() qo’yish.                                                                                                                    | API, Form                  |
| Tushunarsiz, kod yozmaslik. **KISS: Keep It Simple, Stupid**                                                                                                             | Coding Principles          |
| Funktsiya nomlari va o’zgaruvchilar manoli va qidirishga oson bo’lishi                                                                                                   | Coding Principles, General |
| Aos animation                                                                                                                                                            |                            |
| Pagination ishlashi (agar bitta bo’lsa chiqmasligi)                                                                                                                      |                            |
| Header va Footer dagi logolarni localePath(”/”) yozib ketish ( umuman barcha nuxt-link larni)                                                                            |                            |
| Financial raqamlarda divider (10 000, 100 000) ishlatilinishi                                                                                                            |                            |
| SVG icon/btn larda pointer buttonga nisbatan qo’yilishi svgga emas                                                                                                       |                            |
| Xatoliklarda ixtisoslashgan text mavjudligi (Masalan: “Xatolik!“ o’rniga “Kiritilgan login ma’lumotlari topilmadi“)                                                      |                            |
| Har bir project'da readme.md to'g'ri yozilganligini check qilish, [More info](https://ui-kit.uicgroup.tech/guides/how-to-write-md-file.md)                                                   |                            |

## Form
| Name                                                                                                                                                                     | Tags                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Placeholderlar mavjudligi (image, text)                                                                                                                                  | Form                       |
| Auth va Registration qismlariga (serverga yuklama yuborish mumkin bo’lgan qismlarda) reCaptcha ishlatish, agar dizaynda mavjud bo’lmasa “hidden” variantidan foydalanish | Form                       |
| Formalarda validatsiyalar mavjudligi va validatsiya xatoliklarini ko’rsatishi. Inputlarga doim min, max length qo’yish.                                                  | Form                       |
| Calendar pickerda text formatida yozganda ham qabul qilishi                                                                                                              | Form                       |
| Fayl yuklanayotganda aniq format qabul qilishi, MAX FILE SIZE, TYPE                                                                                                      | Form                       |
| Focus style ishlatilishi                                                                                                                                                 | Form                       |
| Autocomplete bo’lmaydigan inputlarda autocompleteni o’chirib qo’yish                                                                                                     | Form                       |
| Mobile responsiveda form inputda 16px dan kichik bo’lmagan font-size ishlatish (yo’qsa zoom bo’ladi)                                                                     | Responsive,Form            |
| Agar, 2 ta parol input bo’lsa va password hide/show eye bo’lsa, 1ta show ga bossa, 2 ta inputdagi value’lar ham show bo’lishi kerak.                                     |   Form                 |



## Git
| Name                                                                                                                                                                     | Tags                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Git commitda tushunarli commit yozilishi. (<https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13>)                                                            | Git                        |
| Doim push qilishdan olish pull qilish. Agarda conflict chiqadigan bo’lsa boshqa developerlar bilan maslahatlashib resolve qilish.                                        | Git                        |


## Translation
| Name                                                                                                                                                                     | Tags                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Tarjimalarning barchasi mavjudligi va keylar JSON ga yig’ilganligi                                                                                                       | Translation                |
| Calendar tarjimalari mavjudligi                                                                                                                                          | Translation                |
| Til almashtirilganda Layoutdagi componentlarda ham dynamic o’zgarishi                                                                                                    | Translation                |
| Ko’plik qo’shimchalari, **-LAR, SONLAR** ruscha uchun internationalization qilinganligi.                                                                                 | Translation                |
| Tarjimalarda key markazlashgan bo’lishi                                                                                                                                  |                            |


## Test
| Name                                                                                                                                                                     | Tags                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| Autamated Test yozishlik. (<https://www.youtube.com/watch?v=QzAk9ngoeb4>)                                                                                                | Test                       |
| ESLint / CSS linter mavjudligi va doim ishlab turishi                                                                                                                    | Test                       |
| Sentry qo’shilganligi                                                                                                                                                    | Test                       |
| Wave Evaluation Tool da check qilish                                                                                                                                     | Test                       |
| Test serverga chiqarilgan loyihani Gmetrix/Lighthouse da testlash     
