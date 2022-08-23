

<template>

<div id="container">
    <div id="containerTimeDescription">

    <div id="dayName">
        <p>year</p>
        <p>month</p>
        <p>day</p>
    </div>
    <div id="dayPicker">
        <div class="custom-select">
            <select v-model="yearVar">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>

        <div class="custom-select">
            <select v-model="monthVar">
                <option value=1>JAN</option>
                <option value=2>FEB</option>
                <option value=3>MAR</option>
                <option value=4>APR</option>
                <option value=5>MAY</option>
                <option value=6>JUN</option>
                <option value=7>JUL</option>
                <option value=8>AUG</option>
                <option value=9>SEP</option>
                <option value=10>OKT</option>
                <option value=11>NOV</option>
                <option value=12>DEZ</option>
            </select>
        </div>

        <div class="custom-select">
            <select v-model="dayVar">
                <option value=1>1</option>
                <option value=2>2</option>
                <option value=3>3</option>
                <option value=4>4</option>
                <option value=5>5</option>
                <option value=6>6</option>
                <option value=7>7</option>
                <option value=8>8</option>
                <option value=9>9</option>
                <option value=10>10</option>
                <option value=11>11</option>
                <option value=12>12</option>
                <option value=13>13</option>
                <option value=14>14</option>
                <option value=15>15</option>
                <option value=16>16</option>
                <option value=17>17</option>
                <option value=18>18</option>
                <option value=19>19</option>
                <option value=20>20</option>
                <option value=21>21</option>
                <option value=22>22</option>
                <option value=23>23</option>
                <option value=24>24</option>
                <option value=25>25</option>
                <option value=26>26</option>
                <option value=27>27</option>
                <option value=28>28</option>
                <option value=29>29</option>
                <option value=30>30</option>
                <option value=31>31</option>
            </select>
        </div>
    </div>

    <label for="ftime">Time: </label>
    <input class="textInp" type="text" v-model="timeVar"> <br><br>
    <label for="ldescription">Description: </label>
    <input class="textInp" type="text" v-model="descriptionVar">

    </div>
    <button id="submitButton" value="Submit" @click="addToDatabase">Submit</button>

</div>
<div id="topBar">
    <div class="actionButton" style="background-color: #FF5E57;"> </div>
    <div class="actionButton" style="background-color: #FFBB2E;"> </div>
    <div class="actionButton" style="background-color: #38C149;"> </div>
    <p>Add new Event</p>
</div>
</template>




<script>
import {addToFirebase, db} from './firebase.js'
export default {
  data() {
    return {
      timeVar: "ALL DAY",
      descriptionVar: "",
      yearVar: 2022,
      dayVar: 1,
      monthVar: 1
    }
  },
   methods: {
    addToDatabase() {
        const newEvent = {
            year: parseInt(this.yearVar),
            month: parseInt(this.monthVar),
            day: parseInt(this.dayVar),
            time: this.timeVar,
            description: this.descriptionVar
        };
        addToFirebase(db, newEvent);
        setTimeout(function(){
        window.location.reload(1);
        }, 1000);
    },
  },
}
</script>





<style scoped>
#container {    
    position: absolute;
    right: 10px;
    left: 70vw;
    height: 300px;
    top: 40px;
    background-color: #282828;
    border-radius: 10px; 
    padding-top: 25px;
    padding-left: 10px;
}

#topBar {
    position: absolute;
    right: 10px;
    left: 70vw;
    height: 25px;
    top: 40px;
    background-color: #1E1E1E;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;

}

.actionButton {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    margin-top: 6.5px;
    border-radius: 6px;
}

#topBar p {
    position: absolute;
    right: calc(10px + 15vw - 50px); 
}

/* MOBILE VERSION */
@media only screen and (max-width: 1000px) {
    #container {
        /* CSS */
        position: relative;
        left: calc(50vw - 400px/2);
        width: 400px;
        top: 100px;
    }

    #topBar {
        position: relative;
        width: 400px;
        height: 25px;
        left: calc(50vw - 400px/2);
        right: auto;
        top: -200px;
    }
    #topBar p {
        right: 150px;
    }
}

#dayPicker {
    display: flex;
    justify-content: space-around;
    height: 50px;
}

#dayName {
    justify-content: space-around;
    display: flex;
    margin-top: 10px;
}

.textInp {
    position: absolute;
    width: 280px;
    height: 30px;
    right: 10px;
    margin-bottom: 50px;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px;
    background-color: #1E1E1E;
    border: none;
    color: white;
}

label {
    top: 50px;
}

#containerTimeDescription {
    margin-top: 25px;
}

select {
    border-radius: 10px;
    width: 50px;
    height: 40px;
    background-color: #1E1E1E;
    border: none;
    color: rgb(0, 123, 255);
}

button {
    position: absolute;
    bottom: 10px;
    width: 100px;
    left: calc(150px);
    border-radius: 5px;
    height: 40px;
    background-color: #1E1E1E;
    border: none;
    color: rgb(0, 123, 255);
}
</style>

