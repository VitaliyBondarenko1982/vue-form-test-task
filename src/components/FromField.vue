<template>
    <div class="form__field from">
    <label class="form__label-bottom"  for="from">
      <input
        id="from"
        type="text"
        class="form__input-bottom form__input-from"
        v-model="from.query"
        @input="filterFrom"
        placeholder="From"
        autocomplete="off"
      >
    </label>
    <span
      class="from__error-text"
      v-if="from.query === '' && isError"
    >
      Select city, please
    </span>
    <span class="form__iata">{{ from.iata }}</span>
    <img class="form__icon form__icon-from" src="../assets/placeholder-filled-point.png">
    <button
      type="button"
      class="form__button-arrows"
      @click="clickReverse"
    >
      <img class="form__icon-arrows" src="../assets/arrows.png">
    </button>
    <ul
      class="form__city-list city-list"
      v-if="from.isVisibleCities"
    >
      <li class="city-list__item"
        v-for="airport in from.filteredAirports"
        :key="airport.id"
        @click="clickFromField"
      >
        {{ airport.city }}, {{ airport.iata }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'FromField',
  props: {
    from: {
      query: String,
      isVisibleCities: Boolean,
      filteredAirports: Array,
      iata: String,
    },
    isError: Boolean,
    fromBlur: Function,
    filterFrom: Function,
    clickFromField: Function,
    clickReverse: Function,
  },
};
</script>

<style lang="scss">
  .from {
    position: relative;

    &__error-text {
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translate(-50%);
      color: red;
      font-size: 12px;
    }
  }
</style>
