
<template>
   <h1 :style="{background: 'red'}" class="happy">Hello from the Vue Component {{message}}</h1>
</template>
<script>
export default {
   props: ['message'],
}
</script>
<style lang="less">
.happy {
    color: #fff
}
</style>
