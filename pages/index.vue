<script setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: '' })
</script>
<template >
    <AwesomeWelcome :with-alert="true" class="min-h-[100vh]"/>
  <AwesomeProducts class="min-h-[100vh]" />
  <AwesomeSubscription class="min-h-[100vh]"/>
</template>