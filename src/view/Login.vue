<template>
  <v-form @submit.prevent='submitHandler'>
    <v-container v-flex>
      <v-text-field label='E-mail' v-model='email'></v-text-field>
      <v-text-field label='Password' v-model='password'></v-text-field>
      <v-checkbox v-model='checkbox' label='Запомнить меня'></v-checkbox>
      <v-btn type='submit' color='success'>Войти</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    submitHandlers,
  },
}
</script>

<style>
</style>