# Range With Step

You can set a step for the range input by using the `step` prop. The step value is used to increment or decrement the value of the range input.

## Basic Usage
<div class="mb-5">Input: {{input}}</div>
<CStepRange v-model="input" step="5"/>

```vue 
const input = ref(5);

<CStepRange v-model="input" step="5"/>
```

## Usage With Min Max
<div class="mb-5">Input: {{input2}}</div>
<CStepRange v-model="input2" step="1" min="0" max="7"/>

```vue
const input = ref(5);

<CStepRange v-model="input" step="1" min="0" max="7"/>
```
##  Props

| Prop | Type   | Default | Description         |
|------|--------|---------|---------------------|
| min  | number | 0       | Minimal steps value |
| max  | number | 100     | Maximal steps value |
| step | number | 10      | Steps               |

<script setup>
import CStepRange from '../../../src/components/Form/StepRange/CStepRange.vue'; 
import {ref} from "vue"; 
const input = ref(5);
const input2 = ref(5);
</script>