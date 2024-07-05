# Utility functions

## Format number
Number formatter is used to format big numbers like 1K or 1M

<CInput v-model="formatNumber" type="number" placeholder="Number" />
<h3 >{{nFormatter(formatNumber)}}</h3>

```vue
<CInput v-model="formatNumber" type="number" placeholder="Number" />
<h3>{{nFormatter(formatNumber)}}</h3>

```

::: details Function
```javascript
export function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k +" },
    { value: 1e6, symbol: "M +" },
    { value: 1e9, symbol: "G +" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /.0+$|(.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}
```
:::
<script setup>
import CInput from '../../src/components/Form/Input/CInput.vue';
import {vMaska} from 'maska';
import {ref} from "vue"; 
import {nFormatter,} from "../../src/utils/formatters"; 


const formatNumber = ref();
const moneyDecimal = ref();
const validateUrl = ref();
const moneyMaskInput = ref();
const formatPhone = ref('998901234567');

const input = ref('');
</script>