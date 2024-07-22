<template>

<TAccordion :accData="accData" />

</template>

<script>
import TAccordion from '@/components/TAccordion.vue'
export default {
  name: 'App',
  data () {
    return {
      accData: [
        { header: 'accordion', id: 1 },
        { header: 'accordion', id: 2 },
        { header: 'accordion', id: 3 },
        { header: 'accordion', id: 4 },
      ]
    }
  },
  components: { TAccordion }
}

</script>