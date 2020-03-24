<template>
    <div class="form__field">
          <label class="form__label-bottom"  for="to">
            <input
              id="to"
              type="text"
              class="form__input-bottom form__input-to"
              v-model="to.query"
              @input="filterTo"
              placeholder="To"
              autocomplete="off"
            >
          </label>
          <span
            class="from__error-text"
            v-if="to.query === '' && isError"
          >
            Select city, please
          </span>
          <span class="form__iata form__iata-to">{{ to.iata }}</span>
          <img class="form__icon form__icon-to" src="../assets/placeholder-filled-point.png">
          <ul
            class="form__city-list city-list"
            v-if="to.isVisibleCities"
          >
            <li class="city-list__item"
              v-for="airport in to.filteredAirports"
              :key="airport.id"
              @click="clickToField"
            >
              {{ airport.city }}, {{ airport.iata }}
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'ToField',
  props: {
    to: {
      query: String,
      isVisibleCities: Boolean,
      filteredAirports: Array,
      iata: String,
    },

    isError: Boolean,
    toBlur: Function,
    filterTo: Function,
    clickToField: Function,
  },
};
</script>
