<template>
  <v-app-bar app dense clipped-left>
    <v-icon color='purple' class='mr-2'>mdi-shopping</v-icon>
    <v-toolbar-title>название</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon :to='{name: "Login"}'>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>