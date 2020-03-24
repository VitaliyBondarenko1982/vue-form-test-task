<template>
  <div class="form__top">
    <div class="form__radio-wrapper">
      <label class="form__label-radio" for="round-trip">
        <input
          class="form__input-top"
          type="radio"
          id="round-trip"
          name="trip"
          value="round"
          @change="changeValue"
          checked
        >
        <span class="form__text-radio">Round trip</span>
      </label>
      <label class="form__label-radio" for="one-way">
        <input
          class="form__input-top"
          type="radio"
          id="one-way"
          name="trip"
          value="one"
          @change="changeValue"
        >
        <span class="form__text-radio">One way</span>
      </label>
    </div>
    <div class="form__checkbox-wrapper">
      <label class="form__label-checkbox" for="direction">
        <input
          class="form__input-top"
          type="checkbox"
          id="direction"
          name="direction"
          checked
        >
        <span class="form__text-checkbox">Direct flights only</span>
      </label>
      <label class="form__label-checkbox" for="find-hotels">
        <input
          class="form__input-top"
          type="checkbox"
          id="find-hotels"
          name="find-hotels"
        >
        <span class="form__text-checkbox">Find hotels</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopForm',
  props: {
    changeValue: Function,
  },
};
</script>

<style lang="scss">
  .form {
      &__top {
      color: #fff;
      font-size: 15px;
      line-height: 22px;
    }

    &__radio-wrapper {
      margin-bottom: 10px;
    }

    &__label-radio {
      position: relative;
      padding-left: 30px;
      cursor: pointer;
      margin-right: 30px;
    }

    &__input-top {
      display: none;
    }

    &__input-top:checked + .form__text-radio::after,
    &__input-top:checked + .form__text-checkbox::after{
      display: block;
    }

    &__text-radio {

       &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 6px;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #3399ff;
        border-radius: 50%;
        display: none;
      }
    }

    &__label-checkbox {
      display: block;
      position: relative;
      padding-left: 30px;
      cursor: pointer;
      margin-bottom: 10px;
    }

    &__text-checkbox {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 2px;
     }

     &::after {
        content: "";
        position: absolute;
        top: 5px;
        left: 4px;
        width: 12px;
        height: 6px;
        border-left: 1.5px solid #3399ff;
        border-bottom: 1.5px solid #3399ff;
        transform: rotate(-45deg);
        background-color: #fff;
        display: none;
      }
    }
  }

@media (min-width: 1140px) {
  .form {
    &__top {
      display: flex;
      margin-bottom: 7px;
    }

    &__checkbox-wrapper {
      display: flex;
      width: 840px;
      justify-content: space-between;
    }
  }
}
</style>
