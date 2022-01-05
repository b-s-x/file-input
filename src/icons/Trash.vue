<script lang="ts" setup>
import { IIcon } from '../types/icon';

const icon: IIcon = {
  width: 448,
  height: 512,
  name: 'Trash',
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
      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
    />
  </svg>
</template>
