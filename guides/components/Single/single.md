
# Rich Text Component

The Rich Text component renders HTML content dynamically. It accepts a `body` prop, which is a string containing the HTML content to be rendered.

## Props

- `body` (string): HTML content to be rendered within the component.

## Example

<CSingle :body="text" />

## Usage

```vue
<CSingle body="<p>This is a <a href='#'>link</a> and this is an <img src='image.jpg' alt='image'>.</p>" />
```

## Styling

The component applies default styles to various HTML elements within the rendered content. These styles can be customized by targeting the appropriate CSS classes.

- Paragraph (`<p>`): Styled with a specific font, size, color, and line height.
- Links (`<a>`): Colored with a specific color and underlined on hover.
- Images (`<img>`): Set to occupy 100% width with auto height and a border radius.
- Iframes (`<iframe>`): Set to occupy 100% width 16/9 ratio and a border radius.
- Blockquotes (`<blockquote>`): Styled with a background color, padding, and quotation icon.
- Lists (`<ul>` and `<ol>`): Styled with specific font properties and margin/padding.

### Responsive Styles

- Responsive styles are applied to adjust font sizes and margins for different screen sizes.
- Media queries are used to adjust styles for screens smaller than 768px and 640px.

<script setup>
import CSingle from "../../../src/components/Single/CSingle.vue";

const text = `<p>Oʻzbekistonlik Humoyun Bekmurodov dunyoning 576 nafar kuchli shaxmatchilar orasida 3-oʻrinni egalladi. Bu haqda Yoshlar ishlari agentligi direktori Alisher Saʼdullayev maʼlum qildi.<br />Kuni kecha Chess.com da dunyo miqyosida 576 nafar kuchli shaxmatchi oʻrtasida &ldquo;Titled Tuesday&rdquo; onlayn turniri boʻlib oʻtdi. Unda ishtirok etgan Bekmurodov 3-oʻrinni qoʻlga kiritdi.</p><p>Maʼlumot uchun, Humoyun 6 yoshidayoq shaxmat boʻyicha avvaliga mamlakat, soʻngra Osiyo chempionligini qoʻlga kiritgan.<br />2020 yilda Humoyun shaxmat boʻyicha havaskorlar oʻrtasida Oʻzbekiston chempionatida gʻolib chiqdi va &ldquo;Spark&rdquo; avtomashinasi bilan taqdirlandi.<br />U oʻtgan yil fevralida Xalqaro shaxmat federatsiyasi (FIDE) sport ustasi unvoniga sazovor boʻlgan.</p><p>Shuningdek, u Gretsiyadagi shaxmat boʻyicha yoshlar oʻrtasidagi jahon chempionatida &quot;Open12&quot; guruhida ham rapid, ham blits boʻyicha kumush medal sohibiga aylangan.<br />Bu yil rapid va blits boʻyicha Olmaotada (Qozogʻiston) boʻlib oʻtgan jahon chempionatida Bekmurodov hammani hayratga soldi. U Uels vakili Elijah Everettga qarshi oʻyinda chiroyli gʻalabasi bilan yakun yasashga muvaffaq boʻldi.</p><p></p><blockquote><p>Maʼlumot uchun, Humoyun 6 yoshidayoq shaxmat boʻyicha avvaliga mamlakat, soʻngra Osiyo chempionligini qoʻlga kiritgan.<br />2020 yilda Humoyun shaxmat boʻyicha havaskorlar oʻrtasida Oʻzbekiston chempionatida gʻolib chiqdi va &ldquo;Spark&rdquo; avtomashinasi bilan taqdirlandi.<br />U oʻtgan yil fevralida Xalqaro shaxmat federatsiyasi (FIDE) sport ustasi unvoniga sazovor boʻlgan.</p></blockquote><p></p><ul><li>Maʼlumot uchun, Humoyun 6 yoshidayoq shaxmat boʻyicha avvaliga mamlakat, soʻngra Osiyo chempionligini qoʻlga kiritgan.</li><li>2020 yilda Humoyun shaxmat boʻyicha havaskorlar oʻrtasida Oʻzbekiston chempionatida gʻolib chiqdi va &ldquo;Spark&rdquo; avtomashinasi bilan taqdirlandi.</li><li>U oʻtgan yil fevralida Xalqaro shaxmat federatsiyasi (FIDE) sport ustasi unvoniga sazovor boʻlgan.</li><li>Shuningdek, u Gretsiyadagi shaxmat boʻyicha yoshlar oʻrtasidagi jahon chempionatida &quot;Open12&quot; guruhida ham rapid, ham blits boʻyicha kumush medal sohibiga aylangan.</li><li>Bu yil rapid va blits boʻyicha Olmaotada (Qozogʻiston) boʻlib oʻtgan jahon chempionatida Bekmurodov hammani hayratga soldi. U Uels vakili Elijah Everettga qarshi oʻyinda chiroyli gʻalabasi bilan yakun yasashga muvaffaq boʻldi.</li></ul><p><img alt=\\"El Classico\\" src="\https://i.ytimg.com/vi/Yb073Sce-XM/maxresdefault.jpg" /></p><ol><li>Oʻzbekistonlik Humoyun Bekmurodov dunyoning 576 nafar kuchli shaxmatchilar orasida 3-oʻrinni egalladi. Bu haqda Yoshlar ishlari agentligi direktori Alisher Saʼdullayev maʼlum qildi.</li><li>Kuni kecha Chess.com da dunyo miqyosida 576 nafar kuchli shaxmatchi oʻrtasida &ldquo;Titled Tuesday&rdquo; onlayn turniri boʻlib oʻtdi. Unda ishtirok etgan Bekmurodov 3-oʻrinni qoʻlga kiritdi.</li></ol><iframe width="560" height="315" src="https://www.youtube.com/embed/ISAB9W9NsYA?si=YG1v7upVZ3hliFak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
</script>

