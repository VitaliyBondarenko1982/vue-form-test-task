<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  .container {
    margin: auto;
    width: 320px;
  }

  .form {
    font-family: 'Open Sans', sans-serif;
    padding: 20px;
    background-color: #cc0000;
    border-radius: 6px;

  &__field {
    position: relative;
    margin-bottom: 10px;
  }

   &__input-bottom {
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
    }
   }

   &__icon {
     position: absolute;
     top: 50%;
     left: 13px;
     transform: translateY(-50%);

     &-depart {
       opacity: 0.5;
     }
   }

    &__button-arrows {
      width: 25px;
      height: 21px;
      border: none;
      background-color: inherit;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      outline: none;
      cursor: pointer;
    }

    &__icon-arrows {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      object-fit: cover;
    }

    &__button {
      margin: auto;
      display: block;
      border: none;
      width: 120px;
      font-size: 17px;
      line-height: 30px;
      text-transform: uppercase;
      background-color: #3399ff;
      color: #fff;
      border-radius: 6px;
      transition: background-color 400ms ease;
      cursor: pointer;

      &:hover {
        background-color: #2380dd;
      }
    }

    &__city-list,
    &__select-content {
      position: absolute;
      list-style: none;
      top: 40px;
      left: 0;
      z-index: 1;
      padding: 0;
      margin: 0;
      background-color: #fff;
      width: 280px;
    }

    &__iata {
      display: none;
    }
  }

  .city-list__item {
    border-bottom: 1px solid #d0d0d0;
    font-size: 15px;
    line-height: 45px;
    padding: 0 15px;
    cursor: pointer;
    transition: background-color 500ms ease;

    &:hover {
      background-color: #f3f9ff;
    }
  }


  @media (min-width: 1140px) {
    .container {
      width: 1140px;
      margin-top: 50px;
    }

    .form {
      &__bottom {
        display: flex;
        width: 1100px;
        justify-content: space-between;
        margin-bottom: 0;
      }

      &__input-from,
      &__input-to {
        width: 240px;
      }

      &__field {
        margin-bottom: 0;
      }

      &__input-bottom {
        line-height: 40px;
      }

      &__button {
        margin: 0;
      }

      &__city-list {
        top: 60px;
        width: 360px;
      }

      &__select-content {
        top: 60px;
        width: 175px;
      }

      &__iata {
        display: block;
        position: absolute;
        top: 50%;
        right: 45px;
        transform: translateY(-50%);
        font-weight: 600;
        font-size: 13;
        color: #acacac;

        &-to {
          right: 10px;
        }
      }
    }
  }
</style>
