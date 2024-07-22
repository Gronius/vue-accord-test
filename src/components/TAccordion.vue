<template>
  <div class="my-accordion">
    <div class="accordion-life">
      <p class="accordion-text">
        Some of life's best lessons <br />
        are learnt at the worst times.
      </p>
    </div>
    <div class="accordion">
      <div class="accordion-item" v-for="(item, index) in accData">
        <div class="header">
          <div class="header-title">{{ item.header }}</div>
          <div class="header-button">
            <span @click="onClick(index)">+</span>
          </div>
        </div>
        <transition
          name="accordion"
          @before-enter="console.log('before-enter')"
          @after-enter="console.log('after-enter')"
        >
          <div class="content" v-if="show[index]">
            <div class="inner">
              {{ contents[index] }}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getData } from "@/data.js";
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  accData: Array,
});

const show = ref([]);
const contents = ref([]);

onBeforeMount(() => {
  props.accData.forEach(() => {
    show.value.push(false);
    contents.value.push("");
  });
});

const onClick = (index) => {
  show.value.forEach((item, i) => {
    if (index !== i || show.value[index]) {
      show.value[i] = false;
      return;
    }
    getData(props.accData[index].id).then((result) => {
      contents.value[index] = result;
      show.value[index] = true;
    });
  });
};
</script>

<style scoped>
.my-accordion {
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-left: auto;
  margin-right: 1.25rem;
  margin-bottom: 100px;
}
.accordion-life {
  margin-top: 1.25rem;
  text-align: center;
}
.accordion-text {
  min-width: 360px;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #efefef;
  font-weight: 600;
}
.accordion {
  border: 1px solid rgb(121, 121, 121);
  min-width: 360px;
}
.accordion-item {
  border-bottom: 1px solid rgb(121, 121, 121);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.65rem;
  background: #efefef;
}
.accordion-item:last-child {
  border-bottom: none;
}
.header {
  display: flex;
  height: 3rem;
  background: #efefef;
}
.header-title {
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.header-button {
  width: 3rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 400ms ease;
}
.header-button span {
  transform: rotate(45deg);
}
.content {
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
}
.inner {
  box-sizing: border-box;
  overflow: hidden;
}
.accordion-enter-from {
  grid-template-rows: 0fr;
}
.accordion-enter-to {
  grid-template-rows: 2fr;
}
.accordion-leave-from {
  grid-template-rows: 2fr;
}
.accordion-leave-to {
  grid-template-rows: 0fr;
}
.accordion-enter-active {
  transition: all 1s ease;
}
.accordion-leave-active {
  transition: all 1s ease;
}
</style>
