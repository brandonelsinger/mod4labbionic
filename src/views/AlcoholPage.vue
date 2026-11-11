<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>When Can I Buy Alcohol?</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-select
        v-model="selectedIndex"
        label="Country"
        label-placement="floating"
        fill="outline"
        placeholder="Choose a country"
        class="ion-margin-bottom"
      >
        <ion-select-option v-for="(country, index) in countries" :key="country" :value="index">
          {{ country }}
        </ion-select-option>
      </ion-select>

      <ion-input
        v-model="birthday"
        type="date"
        label="Date of birth"
        label-placement="stacked"
        fill="outline"
        class="ion-margin-bottom"
      ></ion-input>

      <ion-button expand="block" @click="calculate">Calculate</ion-button>

      <p class="ion-text-center" style="font-size: 18px; white-space: pre-line;">
        {{ result }}
      </p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonSelect, IonSelectOption, IonInput, IonButton,
} from '@ionic/vue';

const countries = ['United States', 'United Kingdom', 'Japan', 'Cuba'];
const legalAges = [21, 18, 20, 16];

const selectedIndex = ref(-1);
const birthday = ref('');
const result = ref('');

function calculate() {
  if (selectedIndex.value === -1) {
    result.value = 'Please select a country.';
    return;
  }

  if (birthday.value === '') {
    result.value = 'Please select your date of birth.';
    return;
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const parts = birthday.value.split('-');
  const birth = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));

  if (birth > today) {
    result.value = "Your birthday can't be in the future.";
    return;
  }

  const country = countries[selectedIndex.value];
  const legalAge = legalAges[selectedIndex.value];

  let age = today.getFullYear() - birth.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hadBirthdayThisYear) {
    age--;
  }

  const legalDate = new Date(birth.getFullYear() + legalAge, birth.getMonth(), birth.getDate());

  if (today >= legalDate) {
    result.value =
      `You must be ${legalAge} to buy alcohol in ${country}.\n` +
      `You are ${age} years old.\n` +
      `Cheers!`;
  } else {
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.round((legalDate.getTime() - today.getTime()) / msPerDay);
    const formatted = legalDate.toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
    });

    result.value =
      `You must be ${legalAge} to buy alcohol in ${country}.\n` +
      `You are ${age} years old.\n` +
      `You have to wait ${daysLeft} more days.\n` +
      `You can buy alcohol there on ${formatted}.`;
  }
}
</script>