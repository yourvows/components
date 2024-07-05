<template>
  <div v-html="body" class="rich-text"></div>
</template>

<script lang="ts" setup>

interface Props {
  body: string
}
defineProps<Props>()
</script>

<style>
.rich-text p {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #c2c4c5;
  word-break: break-word;
}
.rich-text a {
  color: #1c92e0;
}
.rich-text a:hover {
  text-decoration: underline;
}
.rich-text img,
.rich-text iframe {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 20px 0;
}

.rich-text iframe{
  aspect-ratio: 16 / 9;
}

.rich-text blockquote {
  margin: 20px 0;
  padding: 16px 16px 16px 64px;
  position: relative;
  background: #1a2226;
  border-radius: 20px;
}
.rich-text blockquote p {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 8px;
}
.rich-text blockquote p,
.rich-text blockquote {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #f7f9fa;
  font-style: italic;
}
.rich-text blockquote:after {
  content: "\e947";
  font-family: icomoon;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #1c92e0;
  font-size: 20px;
  line-height: 20px;
}

.rich-text ol li,
.rich-text ul li {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #c2c4c5;
}
.rich-text ul,
.rich-text ol {
  padding-left: 20px;
  margin: 20px 0;
}
.rich-text ul {
  list-style: disc;
}
.rich-text ol {
  list-style: auto;
}

@media screen and (max-width: 768px) {
  .rich-text p,
  .rich-text blockquote {
    font-size: 16px;
    line-height: 140%;
  }
  .rich-text img,
  .rich-text blockquote,
  .rich-text ul,
  .rich-text ol {
    margin: 12px 0;
  }
}
@media (max-width: 640px) {
  .rich-text ol li,
  .rich-text blockquote,
  .rich-text ul li {
    font-size: 14px !important;
  }
}
</style>


