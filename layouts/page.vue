<template>
  <div class="overflow-none">
    <LayoutPageNavbar class="h-[64px] max-h-[64px] w-full" />
    <LayoutPageContent class="flex-col">
    <!-- <LayoutPageFooter class="flex mx-auto allign-bottom mt-10" /> -->
      <slot />
    </LayoutPageContent>
  </div>
</template>
