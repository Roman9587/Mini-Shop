<template>
  <component :is='"EmptyLayout"' />
</template>

<script>
import MainLaayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  components: {
    MainLaayout,
    EmptyLayout,
  },
}
</script>

<style>
</style>