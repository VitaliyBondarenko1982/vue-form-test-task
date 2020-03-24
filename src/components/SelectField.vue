<template>
  <div class="form__field">
      <div
        class="select"
        @click="selectHandler"
      >
        <span class="select__total">
          {{ adults + children + infants }}, {{ currentClass }}
        </span>
      </div>
    <img class="form__icon form__icon-select" src="../assets/user.png">
    <img class="select__sort-down" src="../assets/sort-down.png">
    <ul
      v-if="isVisibleSelect"
      class="select__content"
    >
      <li class="select__item adults">
        Adults
        <div class="select__counter adults__wrapper">
          <button
            type="button"
            class="select__button select__button--dec"
            :class="{'select__button--disable': adults === 0}"
            @click="decrementAdults"
          ></button>
          <span class="adults__value">{{adults}}</span>
          <button
            type="button"
            class="select__button"
            @click="incrementAdults"
          ></button>
        </div>
      </li>
      <li class="select__item children">
        Children (0 - 12)
        <div class="select__counter children__wrapper">
          <button
            type="button"
            class="select__button select__button--dec"
            :class="{'select__button--disable': children === 0}"
            @click="decrementChildren"
          ></button>
          <span>{{ children }}</span>
          <button
            type="button"
            class="select__button"
            :class="{'select__button--disable': children === 12}"
            @click="incrementChildren"
          >
          </button>
        </div>
      </li>
      <li class="select__item children">
        Infants (0 - 2)
        <div class="select__counter infants__wrapper">
          <button
            type="button"
            class="select__button select__button--dec"
            :class="{'select__button--disable': infants === 0}"
            @click="decrementInfants"
          ></button>
          <span>{{ infants }}</span>
          <button
            type="button"
            class="select__button"
            :class="{'select__button--disable': infants === 2}"
            @click="incrementInfants"
          ></button>
        </div>
      </li>
      <li
        class="select__item select__item--active class-select"
        :class="{'class-select--active': isVisibleClassSelect}"
        @click="classSelectHandler"
      >
        {{ currentClass }}
         <ul
           class="class-select__list"
           v-if="isVisibleClassSelect"
           @click="onClassSelect"
           v-on:blur="blurHandler"
          >
           <li class="class-select__item">Economy</li>
           <li class="class-select__item">Premium economy</li>
           <li class="class-select__item">Business</li>
           <li class="class-select__item">First</li>
         </ul>
         <img class="class-select__sort-down" src="../assets/sort-down.png">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectField',

  data: () => ({
    adults: 1,
    children: 0,
    infants: 0,
    currentClass: 'economy',
    isVisibleClassSelect: false,
    isVisibleSelect: false,
  }),

  methods: {
    incrementAdults() {
      this.adults += 1;
    },

    decrementAdults() {
      if (this.adults === 0) {
        return;
      }
      this.adults -= 1;
    },

    incrementChildren() {
      if (this.children === 12) {
        return;
      }

      this.children += 1;
    },

    decrementChildren() {
      if (this.children === 0) {
        return;
      }

      this.children -= 1;
    },

    incrementInfants() {
      if (this.infants === 2) {
        return;
      }

      this.infants += 1;
    },

    decrementInfants() {
      if (this.infants === 0) {
        return;
      }

      this.infants -= 1;
    },

    classSelectHandler() {
      this.isVisibleClassSelect = true;
    },

    onClassSelect(event) {
      event.stopPropagation();
      const [currentClass] = event.target.innerText.split(' ');
      this.currentClass = currentClass;
      this.isVisibleClassSelect = false;
      this.isVisibleSelect = false;
    },

    selectHandler() {
      this.isVisibleSelect = true;
    },
  },
};
</script>

<style lang="scss">
  .select {
    width: 280px;
    position: relative;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px 0 10px 45px;
    line-height: 20px;
    height: 40px;

    &__total {
      position: absolute;
      top: 50%;
      left: 45px;
      transform: translateY(-50%);
    }

    &__sort-down {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      cursor: pointer;
    }

    &__content {
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 40px;
      left: 0;
      width: 225px;
      background-color: #fff;
      padding: 15px;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      line-height: 40px;
    }

    &__counter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80px;
    }

    &__button {
      position: relative;
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      background-color: #3399ff;

      &::after,
      &::before {
        content: "";
        position: absolute;
        width: 6px;
        height: 2px;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }

      &::before {
        transform: translate(-50%) rotate(90deg);
      }

      &--dec::before {
        display: none;
      }

      &--disable {
        background-color: #acacac;
        cursor: initial;
      }
    }
  }

  .class-select {
    position: relative;
    padding-left: 10px;

    &--active {
      border: 1px solid #3399ff;
      border-radius: 4px;
    }

    &__list {
      list-style: none;
      position: absolute;
      padding: 0 10px 10px 10px;
      margin: 0;
      top: 40px;
      left: 0;
      width: 193px;
    }

    &__item {
      height: 27px;
      cursor: pointer;
    }

    &__sort-down {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      cursor: pointer;
    }
  }


  @media (min-width: 1140px) {
    .select {
      width: 195px;
      height: 60px;


      &__input {
        width: 195px;
        line-height: 40px;
      }

      &__content {
        top: 60px;
      }
    }
  }
</style>
