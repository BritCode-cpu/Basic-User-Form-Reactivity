<template>
<!--App.vue is the parent component which comsumes both the
user-data and active-user component-->

<!--The user-data component listens for a custom event called 'set-data' which passes
data the user entered such as their name, email, phonennumber, and message in the form of arguments 
to the 'pushContact' function-->

<user-data @set-data="pushContact"/>

<!--The active-user component has 4 different properties that the parent component shares
these are: name, email, phoneNumber, and message. This properties can be used in the active-user
component by means of interpolation etc..-->

<active-user :name="newUser.name" :email="newUser.email" :phoneNumber="newUser.phoneNumber" :message="newUser.message"/>


</template>

<script>

export default{
    //'App.vue' manages the data points name, email, phoneNumber, and message which is passed to the 
    //'ActiveUser.vue' as props
    data(){
        return{
            newUser: {
                name: '',
                email: '',
                phoneNumber: '',
                message: ''
            }
        }
    },

    //PushContact is the callback fuction that listens for a custom event on the 'UserData.vue' component.
    //The custom event that pushContact listens for is 'set-data'. 'set-data' passess 4 agruments to the pushContact function
    //The pushContact function accesses the App.vue data points and update the data to the 4 arguments received from the 'set-data' custom event 
    methods: {
        pushContact(name, email, phoneNumber, message){
          this.newUser ={
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
          }
        },
    }

}
 





 
</script>