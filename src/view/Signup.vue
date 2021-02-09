<template>
  <v-form @submit.prevent='signUpHandler'>
    <v-container>
      <v-text-field
        label='E-mail'
        v-model='email'
        :error='$v.email.$dirty && !$v.email.required || $v.email.$dirty && !$v.email.email'
      ></v-text-field>
      <v-text-field
        label='Пароль'
        v-model='password'
        type='password'
        :error='$v.password.$dirty && !$v.password.required'
      ></v-text-field>
      <v-text-field
        label='Повторите пароль'
        type='password'
        :error='$v.password.$dirty && !$v.password.required'
      ></v-text-field>
      <input type='checkbox' /> Согласен с
      <a href>правилами</a>
      <br />
      <v-btn type='submit' color='success' class='my-2'>Зарегистрироваться</v-btn>
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
    signUpHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          // Signed in
          var user = userCredential.user
          // ...
        })
    },
  },
}
</script>

<style>
</style>