<template>
  <v-form @submit.prevent='submitHandler'>
    <v-container>
      <v-text-field
        label='E-mail'
        v-model='email'
        :error='$v.email.$dirty && !$v.email.required || $v.email.$dirty && !$v.email.email'
      ></v-text-field>
      <v-text-field
        label='Password'
        v-model='password'
        type='password'
        :error='$v.password.$dirty && !$v.password.required'
      ></v-text-field>
      <v-checkbox v-model='checkbox' label='Запомнить меня'></v-checkbox>
      <v-btn type='submit' color='success' class='my-2 mx-2'>Войти</v-btn>
      <v-btn
        type='submit'
        color='warning'
        class='my-2'
        :to='{name: "Signup"}'
      >Зарегистрироваться</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import firebase from 'firebase/app'

export default {
  data: () => ({
    email: '',
    password: '',
  }),

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.push({
          name: 'Home',
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
</style>