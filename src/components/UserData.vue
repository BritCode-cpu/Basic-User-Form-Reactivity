<template>
<!--HTML Form that collects user input such as name, email, phoneNumber, and message-->
<div class="container">
        <h1>Send us a message</h1>
        <form ref="anyName" @submit.prevent="submitData">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required v-model="this.name">
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required v-model="this.email">
            </div>

            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required v-model="this.phoneNumber">
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required v-model="this.message"></textarea>
            </div>

            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>

        
    </div>

  
</template>

<script>
export default {

//emits function takes an array containing the custom event listener called 'set-data'. when sumit button is clicked 
//the 'sumitData' function will send the 'set-data' custom event data to the App.vue parent component.
emits: ['set-data'],


//The data(){} function contanins Data points which are bind to the html text in <template><template/>
//v-model is used to bind name, email, phoneNumber, and message to the html
//input fields.
    data(){
    return{
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    }
},

//Method/functions

methods: {

    //SubmitData emits a custom event listner 'set-data' which sends data to the parent company 'App.vue'

    submitData(){

        //The Vuejs this.$emit() fuction sends our custom name 'set-data' along with
        //user inputted data from the input fields name, email, phoneNumber, and 
        //message to 'App.vue'. The 'set-data' custom event is then attached to the 'UserData' component
        //in App.vue for e.g: <user-data @set-data="callback"/>

        this.$emit('set-data', this.name, this.email, this.phoneNumber, this.message);
        //The this.$refs.anyName.reset() clears input fields once the submit button is click. ref="anyName" is linked
        //to the form element in the template fields. this binds the two together.
        this.$refs.anyName.reset();
    }
}

  
};


</script>



<style scoped>
        
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .form-group textarea {
            resize: vertical;
        }
        .form-group button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .form-group button:hover {
            background-color: #218838;
        }


</style>






