<script setup lang="ts">

</script>

<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Subscription Card</title>
    </head>
    <body>

    <div class="card">
        <div class="card-content">
            <div class="card-amount">
                ₹
                <span class="card-amount-main">300</span>
                <span class="card-amount-sub">.00</span>
            </div>
            <div class="card-premium">
                PREMIUM
            </div>
            <div class="card-duration">
                    SIX MONTHS
                </div>
            <div class="card-description">
                You will be added to a Family membership plan. YOUTUBE MUSIC Included
            </div>
        </div>
    </div>

    </body>
    </html>



</template>

<style >
 body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
        }

        .card {
            width: 350px;
            text-align: center;
            height: 200px;
            border-radius: 10px;
            overflow: hidden;
            background-color: white;
            transition: transform 0.3s ease-in-out, background-size 1s ease-in-out; /* Adjusted background-size transition duration */
            background-image: url('./../awesome/ytp.png'); /* Replace with your local image file name and extension */
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .card:hover {
            text-align: center;

            transform: scale(1.1);
            background-size: 80%;
            transition: transform 1s ease-in-out, background-size 1s ease-in-out; /* Adjusted both transform and background-size transition durations */
            background-image: url('./../awesome/ytp.png');
            background-color: #B80505;
        }

        .card-content {
            text-align: center;

            padding: 20px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0); /* Semi-transparent white background for better readability */
        }

        .card-amount {
            font-size: 28px;
            text-align: center;

            font-weight: bold;
            text-align: center;
            display: flex;
            align-items: baseline;
            color: white;
        }

        .card-amount-main {
            text-align: center;
            margin-right: 5px;
            color: white;
        }

        .card-amount-sub {
            text-align: center;
            font-size: 18px;
            color: white;
        }

        .card-duration {
            text-align: center;
            font-size: 16px;
            margin-top: 10px;
        }

        .card-premium {
            font-size: 20px;
            font-weight: bold;
            margin-top: 10px;
            color: white;
            text-align: center;
        }

        .card-description {
            text-align: center;
            font-size: 14px;
            color: #555;
            margin-top: 10px;
            color: white;
        }
    </style>