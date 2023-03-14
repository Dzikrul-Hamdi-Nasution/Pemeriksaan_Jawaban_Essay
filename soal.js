var config = {
    apiKey: "AIzaSyBAjW2GvqxaKuMbEScZYA45SqmGRM0rR5g",
    authDomain: "essay-cbt.firebaseapp.com",
    databaseURL: "https://essay-cbt-default-rtdb.firebaseio.com",
    projectId: "essay-cbt",
    storageBucket: "essay-cbt.appspot.com",
    messagingSenderId: "67438651443",
    appId: "1:67438651443:web:2033cc4afd6e15936cdb46",
    measurementId: "G-HH76GCD94E"
  };
    firebase.initializeApp(config);
    
     
    pecah_id="";
    firebase.auth().onAuthStateChanged(function(user) {
        var user = firebase.auth().currentUser;
        if (user) {
            var email_id = user.email;           
            var res = email_id.split("@");
            pecah_id = res[0];  
            var messagesRef = firebase.database().ref("user").child(pecah_id).child("nama");
            messagesRef.on('value', (snapshot) => {
                const data = snapshot.val();
                document.getElementById("nama_user").innerHTML ="Selamat Datang, "+data;
            });
            
           
           
        } else {
            window.location.replace("index.html")
            
        }
      });
    
    $(document).ready(function() {
        kunci_jawaban_1="";
        kunci_jawaban_2="";
        kunci_jawaban_3="";
        kunci_jawaban_4="";
        kunci_jawaban_5="";
        kunci_jawaban_6="";
        kunci_jawaban_7="";
        kunci_jawaban_8="";
        kunci_jawaban_9="";
        kunci_jawaban_10="";

        cek_soal();
       // document.getElementById("nama_user").innerHTML ="Selamat Datang, Hamdi ";
    });
    
   
    
  function cek_soal(){
    var messagesRef = firebase.database().ref("Soal").child("1").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_1").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("2").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_2").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("3").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_3").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("4").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_4").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("5").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_5").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("6").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_6").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("7").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_7").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("8").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_8").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("9").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_9").innerHTML =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("10").child("soal");
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("soal_10").innerHTML =data;
    });



    var messagesRef = firebase.database().ref("Soal").child("1").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_1 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("2").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_2 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("3").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_3 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("4").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_4 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("5").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_5 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("6").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_6 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("7").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_7 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("8").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_8 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("9").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_9 =data;
    });
    var messagesRef = firebase.database().ref("Soal").child("10").child("jawaban");
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            kunci_jawaban_10 =data;
    });
  }
  
  
    function finish() {

        var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
        var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
    
        jawaban_1 = document.getElementById("jawaban_1").value;
        jawaban_2 = document.getElementById("jawaban_2").value;
        jawaban_3 = document.getElementById("jawaban_3").value;
        jawaban_4 = document.getElementById("jawaban_4").value;
        jawaban_5 = document.getElementById("jawaban_5").value;
        jawaban_6 = document.getElementById("jawaban_6").value;
        jawaban_7 = document.getElementById("jawaban_7").value;
        jawaban_8 = document.getElementById("jawaban_8").value;
        jawaban_9 = document.getElementById("jawaban_9").value;
        jawaban_10 = document.getElementById("jawaban_10").value;

        
        

    
      

        const koreksi_soal_1 = getSimilarityScore(textCosineSimilarity(jawaban_1,kunci_jawaban_1));
        const koreksi_soal_2 = getSimilarityScore(textCosineSimilarity(jawaban_2,kunci_jawaban_2));
        const koreksi_soal_3 = getSimilarityScore(textCosineSimilarity(jawaban_3,kunci_jawaban_3));
        const koreksi_soal_4 = getSimilarityScore(textCosineSimilarity(jawaban_4,kunci_jawaban_4));
        const koreksi_soal_5 = getSimilarityScore(textCosineSimilarity(jawaban_5,kunci_jawaban_5));
        const koreksi_soal_6 = getSimilarityScore(textCosineSimilarity(jawaban_6,kunci_jawaban_6));
        const koreksi_soal_7 = getSimilarityScore(textCosineSimilarity(jawaban_7,kunci_jawaban_7));
        const koreksi_soal_8 = getSimilarityScore(textCosineSimilarity(jawaban_8,kunci_jawaban_8));
        const koreksi_soal_9 = getSimilarityScore(textCosineSimilarity(jawaban_9,kunci_jawaban_9));
        const koreksi_soal_10 = getSimilarityScore(textCosineSimilarity(jawaban_10,kunci_jawaban_10));

        

        skor_nilai = Math.round((koreksi_soal_1 + koreksi_soal_2 + koreksi_soal_3 + koreksi_soal_4 + koreksi_soal_5 + koreksi_soal_6 + koreksi_soal_7 + koreksi_soal_8 + koreksi_soal_9 + koreksi_soal_10)/10);
        
        alert("soal 1 = "+koreksi_soal_1)
        alert("soal 2 = "+koreksi_soal_2)
        alert("soal 3 = "+koreksi_soal_3)
        alert("soal 4 = "+koreksi_soal_4)
        alert("soal 5 = "+koreksi_soal_5)
        alert("soal 6 = "+koreksi_soal_6)
        alert("soal 7 = "+koreksi_soal_7)
        alert("soal 8 = "+koreksi_soal_8)
        alert("soal 9 = "+koreksi_soal_9)
        alert("soal 10 = "+koreksi_soal_10)
        alert("Total Skor Anda = "+skor_nilai)

   

        firebase.database().ref("user").child(pecah_id).update({
            nilai: skor_nilai,
            waktu: today,
          });
    }
    
    
    function keluar() {
        firebase.auth().signOut();
      }
      
    
  
  
  
  
  
  
  
  
  
  function getSimilarityScore(val){
    return Math.round(val * 100)
  }
  
  function wordCountMap(str){
    let words = str.split(' ');
    let wordCount = {};
    words.forEach((w)=>{
        wordCount[w] = (wordCount[w] || 0) +1;
  
    });
  return wordCount;
  }
    
  function addWordsToDictionary(wordCountmap, dict){
    for(let key in wordCountmap){
        dict[key] = true;
    }
  }
  
  function wordMapToVector(map,dict){
    let wordCountVector = [];
    for (let term in dict){
        wordCountVector.push(map[term] || 0);
    }
    return wordCountVector;
  }
    
  function dotProduct(vecA, vecB){
    let product = 0;
    for(let i=0;i<vecA.length;i++){
        product += vecA[i] * vecB[i];
    }
    return product;
  }
  
  function magnitude(vec){
    let sum = 0;
    for (let i = 0;i<vec.length;i++){
        sum += vec[i] * vec[i];
    }
    return Math.sqrt(sum);
  }
  
  function cosineSimilarity(vecA,vecB){
    return dotProduct(vecA,vecB)/ (magnitude(vecA) * magnitude(vecB));
  }
    
  function textCosineSimilarity(txtA,txtB){
    const wordCountA = wordCountMap(txtA);
    const wordCountB = wordCountMap(txtB);
    let dict = {};
    addWordsToDictionary(wordCountA,dict);
    addWordsToDictionary(wordCountB,dict);
    const vectorA = wordMapToVector(wordCountA,dict);
    const vectorB = wordMapToVector(wordCountB,dict);
    return cosineSimilarity(vectorA, vectorB);
  }
    