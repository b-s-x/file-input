
<script lang="ts" setup>
import { IIcon } from '../types/icon';

const icon: IIcon = {
  width: 35,
  height: 36,
  name: 'IconPDFPlus',
};

</script>

<template>
  <svg
    v-bind="$attrs"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="none"
    role="presentation"
    height="1em"
    :viewBox='`0 0 ${icon.width} ${icon.height}`'
    :width='`${icon.width / icon.height}em`'
    :aria-labelledby="icon.name"
  >
    <path
      d="M 15.5,14 H 24 V 34.5 C 24,35.3312 23.3312,36 22.5,36 H 1.5 C 0.66875,36 0,35.3312 0,34.5 V 5.5 C 0,4.66875 0.66875,4 1.5,4 H 14 v 8.5 c 0,0.825 0.675,1.5 1.5,1.5 z m 8.0625,-3.4375 -6.125,-6.125 C 17.1562,4.15625 16.775,4 16.375,4 H 16 v 8 h 8 v -0.3812 c 0,-0.3938 -0.1562,-0.775 -0.4375,-1.0563 z M 31,0 c -0.4142,0 -0.75,0.335786 -0.75,0.75 v 2.5 h -2.5 C 27.3358,3.25 27,3.58579 27,4 c 0,0.41421 0.3358,0.75 0.75,0.75 h 2.5 v 2.5 C 30.25,7.66421 30.5858,8 31,8 31.4142,8 31.75,7.66421 31.75,7.25 v -2.5 h 2.5 C 34.6642,4.75 35,4.41421 35,4 35,3.58579 34.6642,3.25 34.25,3.25 h -2.5 V 0.75 C 31.75,0.335786 31.4142,0 31,0 Z"
    />
  </svg>
</template>

