<template>

<!--The HTML mark-up displays a digital info card that output data the user input by means of interpolations of the props data
points passed from the parent component 'App.vue'-->

<div class="card">
        <h2>New User Information</h2>
        <div class="info">
            <label for="name">Name:</label>
            <p id="name">{{ name }}</p>
        </div>
        <div class="info">
            <label for="email">Email:</label>
            <p id="email">{{ email }}</p>
        </div>
        <div class="info">
            <label for="phone">Phone Number:</label>
            <p id="phone">{{ phoneNumber }}</p>
        </div>
        <div class="info">
            <label for="message">Message:</label>
            <p id="message">{{ message }}</p>
        </div>
    </div>

</template>

<script>

export default{
    //The props method takes an array with the properties passed from the parent component 'App.vue', allowing the 'activeUser'
    //component to use the dynamic properties from 'ActiveUser'
    props:['name', 'email','phoneNumber', 'message'],
}


</script>

<style scoped>
body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: rgb(197, 238, 219);
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            margin: 15px auto;
            
        }
        .card h2 {
            margin-top: 0;
            color: #333;
        }
        .card p {
            margin: 8px 0;
            color: #555;
        }
        .card label {
            font-weight: bold;
        }
        .card .info {
            margin-bottom: 12px;
        }





</style>