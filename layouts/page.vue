<template>
  <div class="overflow-none">
    <LayoutPageNavbar class="h-[64px] max-h-[64px]" />
    <LayoutPageContent class="flex-col">
      <slot />
    </LayoutPageContent>
    <LayoutPageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>
