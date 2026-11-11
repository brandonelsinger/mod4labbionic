<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="bmi" href="/tabs/bmi">
          <ion-icon :icon="calculator"></ion-icon>
          <ion-label>BMI</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="morse" href="/tabs/morse">
          <ion-icon :icon="radio"></ion-icon>
          <ion-label>Morse</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="alcohol" href="/tabs/alcohol">
          <ion-icon :icon="wine"></ion-icon>
          <ion-label>Alcohol</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';
import { calculator, radio, wine } from 'ionicons/icons';
</script>