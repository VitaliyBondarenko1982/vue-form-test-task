<template>
  <div class="container">
    <form class="form" @submit.prevent="submitHandler" method="POST" action="#">
      <TopForm v-bind:changeValue="this.changeValue"/>

      <div class="form__bottom">
        <FromField
          v-bind:isError="isError"
          v-bind:from="from"
          v-bind:filterFrom="this.filterFrom"
          v-bind:clickFromField="this.clickFromField"
          v-bind:clickReverse="this.clickReverse"
          v-bind:fromBlur="this.fromBlur"
        />
        <ToField
          v-bind:isError="isError"
          v-bind:to="to"
          v-bind:filterTo="this.filterTo"
          v-bind:clickToField="this.clickToField"
          v-bind:toBlur="this.toBlur"
        />
        <div
          class="form__field depart"
          @click="clickToDepart"
        >
          <datepicker
            :placeholder="placeholderDepart"
            v-on:selected="highlightFrom"
            :highlighted="highlighted"
          >
          </datepicker>
            <span
              class="from__error-text"
              v-if="highlighted.from === '' && isError"
            >
              Select date
            </span>
          <img class="depart__icon" src="../assets/calendar-icon.png">
        </div>
        <div class="form__field return">
          <datepicker
            :placeholder="placeholderReturn"
            :disabled="disabledInput"
            v-on:selected="highlightTo"
            :highlighted="highlighted"
          ></datepicker>
          <span
            class="from__error-text"
            v-if="highlighted.to === '' && isError && !disabledInput"
          >
            Select date
          </span>
          <img
            class="return__icon"
            :class="{'return__icon--disabled': disabledInput}"
            src="../assets/calendar-icon.png"
          >
        </div>
        <SelectField />
        <button class="form__button" type="submit">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import TopForm from '../components/TopForm.vue';
import FromField from '../components/FromField.vue';
import ToField from '../components/ToField.vue';
import SelectField from '../components/SelectField.vue';
import filterAirports from '../utils/filter';

const airports = require('airport-data');

export default {
  name: 'Form',
  data: () => ({
    placeholderDepart: 'Date',
    placeholderReturn: 'Return',
    disabledInput: false,
    from: {
      query: '',
      isVisibleCities: false,
      filteredAirports: [],
      iata: '',
    },

    to: {
      query: '',
      isVisibleCities: false,
      filteredAirports: [],
      iata: '',
    },

    highlighted: {
      to: '',
      from: '',
    },

    isDisableReturn: false,
    isError: false,
    isVisibleSelect: false,
  }),

  methods: {
    submitHandler() {
      if (this.from.query === ''
        || this.to.query === ''
        || this.highlighted.from === ''
        || this.highlighted.to === '') {
        this.isError = true;
        return;
      }

      this.from.query = '';
      this.to.query = '';
      this.highlighted.from = '';
      this.highlighted.to = '';
      this.isError = false;
    },

    fromBlur() {
      this.from.isVisibleCities = false;
    },

    toBlur() {
      this.to.isVisibleCities = false;
    },

    filterFrom() {
      this.from.isVisibleCities = true;
      this.from.filteredAirports = filterAirports(airports, this.from.query);
      this.isVisibleSelect = false;
    },

    clickFromField(event) {
      const [cityName, iata] = event.target.innerText.split(',');
      this.from.query = cityName;
      this.from.iata = iata;
      this.from.isVisibleCities = false;
    },

    filterTo() {
      this.to.isVisibleCities = true;
      this.to.filteredAirports = filterAirports(airports, this.to.query);
    },

    clickToField(event) {
      const [cityName, iata] = event.target.innerText.split(',');
      this.to.query = cityName;
      this.to.iata = iata;
      this.to.isVisibleCities = false;
    },

    clickReverse() {
      const tempQuery = this.to.query;
      this.to.query = this.from.query;
      this.from.query = tempQuery;

      const tempIata = this.to.iata;
      this.to.iata = this.from.iata;
      this.from.iata = tempIata;
    },

    highlightTo(val) {
      this.highlighted.to = val;
    },

    highlightFrom(val) {
      this.highlighted.from = val;
    },

    clickToDepart() {
      this.isClickToDepart = true;
    },

    changeValue() {
      this.disabledInput = !this.disabledInput;
    },
  },

  components: {
    TopForm,
    FromField,
    ToField,
    Datepicker,
    SelectField,
  },
};
</script>

<style lang="scss">
  .depart,
  .return {
    position: relative;
  }

  .depart__icon,
  .return__icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  .return__icon--disabled {
    opacity: 0.5;
  }

  .vdp-datepicker {

  & input {
    width: 280px;
    border: none;
    border-radius: 5px;
    padding: 10px 0 10px 40px;
    font-size: 17px;
    color: #000;
    line-height: 20px;
    outline: none;

    &::placeholder {
      color: #c2c2c2;
      content: 'Depart';
    }
  }
    &__calendar {
      border: none !important;
      width: 280px !important;
      box-shadow: 0 0 8px lightgrey;

      & .cell {
        color: #b1b1b1;
        cursor: pointer;
        transition: color 400ms ease, transform 400ms ease;

        &:hover {
          color: grey;
          border-color: #fff !important;
          transform: scale(1.1);
        }

      &.highlighted {
          background-color: #fff !important;
          color: #000;
      }
    }
  }
}
  @media (min-width: 1140px) {
    .vdp-datepicker {
      & input {
        width: 145px;
        line-height: 40px;
        font-size: 14px;
      }

      &__calendar {
        width: 340px !important;
      }
    }
  }

</style>
