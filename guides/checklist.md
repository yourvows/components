# Checklist

## General

| Name                                                                                                                                                                  | Tags                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| Make sure that elements are component based                                                                                                                           | General                    |
| Make sure that all hovers is working                                                                                                                                  | General                    |
| Make sure that font smoothing is set                                                                                                                                  | General                    |
| Make sure that favicon set                                                                                                                                            | General                    |
| Make sure that preloader is working                                                                                                                                   | General                    |
| Make sure that robots.txt exist                                                                                                                                       | General                    |
| Make sure that sitemap.xml is working                                                                                                                                 | General                    |
| Make sure that classes as **"Ad/ads"** not used                                                                                                                       | General, Security          |
| Make sure that pictures are optimized and used as WebP format (<https://squoosh.app/editor>, <https://compresspng.com/>)                                              | General                    |
| Make sure that links as **404, 500, 502** not used                                                                                                                    | General, Pages             |                                                                                                                                              | General                          |
| Make sure that all functions responsible for only one task. Must be short, ideally **between 2-15 lines. (**<https://github.com/ryanmcdermott/clean-code-javascript>) | General, Coding Principles |
| Make sure that code satisfy for **DRY(Don't repeat yourself)** principle                                                                                              | General                    |
| Make sure that code satisfy for **KISS(Keep it simple/stupid)** principle                                                                                             | General                    |
| Make sure that you removed all console.logs                                                                                                                           | General                    |
| Make sure that Yandex.metrika/Google anaylitcs configs are set                                                                                                        | General, Nuxt.config       |
| Make sure that all meta tags are set **(title,desc,og:image)**                                                                                                        | General, Nuxt.config       |
| Make sure that all errors are shown (Do not show text like: Something went wrong)                                                                                     | API                        |
| Always use .catch() when you doing request                                                                                                                            | API, Form                  | 
| Make sure that you set meaningful names to functions or variables                                                                                                     | Coding Principles, General |
| Aos animation                                                                                                                                                         |                            |
| Always use divider for financial numbers (10 000, 100 000)                                                                                                            |                            |

## Form
| Name                                                                                | Tags |
|-------------------------------------------------------------------------------------|------|
| Make sure that placeholders are exist                                               | Form |
| Make sure that required fields are validating. Always set min/max length for inputs | Form |
| Make sure that validation errors are shown                                          | Form |
| Always set attributes as: **MAX FILE SIZE, TYPE** when using input type file        | Form |



## Git
| Name                                                                                  | Tags |
|---------------------------------------------------------------------------------------|------|
| Git commit style. (<https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13>) | Git  |
| Always pull changes from dev/prod tree. if you face conflicts, resolve them           | Git  |


## Translation
| Name                                               | Tags        |
|----------------------------------------------------|-------------|
| Make sure that all translations exist in JSON file | Translation |
| Make sure that pluarization is used                | Translation |


[//]: # (## Test)

[//]: # (| Name                                                                      | Tags |)

[//]: # (|---------------------------------------------------------------------------|------|)

[//]: # (| Autamated Test yozishlik. &#40;<https://www.youtube.com/watch?v=QzAk9ngoeb4>&#41; | Test |)

[//]: # (| ESLint / CSS linter mavjudligi va doim ishlab turishi                     | Test |)

[//]: # (| Wave Evaluation Tool da check qilish                                      | Test |)

[//]: # (| Test serverga chiqarilgan loyihani Gmetrix/Lighthouse da testlash         |      |)
