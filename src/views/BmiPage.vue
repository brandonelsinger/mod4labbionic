<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>BMI Calculator</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        v-model="weight"
        type="number"
        label="Weight (lbs)"
        label-placement="floating"
        fill="outline"
        class="ion-margin-bottom"
      ></ion-input>

      <ion-input
        v-model="height"
        type="number"
        label="Height (inches)"
        label-placement="floating"
        fill="outline"
        class="ion-margin-bottom"
      ></ion-input>

      <ion-button expand="block" @click="calculateBmi">Calculate BMI</ion-button>

      <p class="ion-text-center">{{ result }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';

const weight = ref('');
const height = ref('');
const result = ref('');

function calculateBmi() {
  const w = Number(weight.value);
  const h = Number(height.value);

  if (w <= 0 || h <= 0) {
    result.value = 'Please enter a valid weight and height.';
    return;
  }

  const bmi = (w * 703) / (h * h);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  result.value = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}
</script>