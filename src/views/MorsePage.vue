<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Morse Code Translator</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        v-model="text"
        label="Enter text"
        label-placement="floating"
        fill="outline"
        class="ion-margin-bottom"
      ></ion-input>

      <ion-button expand="block" @click="translate">Translate</ion-button>

      <p class="ion-text-center" style="font-size: 36px; font-weight: bold; font-family: monospace; letter-spacing: 4px; word-wrap: break-word;">
        {{ result }}
      </p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const codes = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--',
               '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

const text = ref('');
const result = ref('');

function translate() {
  if (text.value.trim() === '') {
    result.value = 'Please enter some text.';
    return;
  }

  const upper = text.value.toUpperCase();
  let morse = '';

  for (let i = 0; i < upper.length; i++) {
    const ch = upper[i];

    if (ch === ' ') {
      morse += '/ ';
    } else {
      const index = letters.indexOf(ch);
      if (index === -1) {
        morse += '? ';
      } else {
        morse += codes[index] + ' ';
      }
    }
  }

  result.value = morse;
}
</script>