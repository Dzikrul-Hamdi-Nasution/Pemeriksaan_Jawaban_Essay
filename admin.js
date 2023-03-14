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
  
   
  
  $(document).ready(function() {
    

   alert("Welcome")
  }); 
  
 
  


function okay_soal() {
  soal_input = document.getElementById("soal").value;
  nomor_soal_input = document.getElementById("nomor_soal").value;

  firebase.database().ref("Soal").child(nomor_soal_input).update({
    soal: soal_input,
    nomor_soal: nomor_soal_input,
  });
}
  
function okay_keyword() {
  soal_input = document.getElementById("soal").value;
  key_word_1 = document.getElementById("key_word_1").value;
  key_word_2 = document.getElementById("key_word_2").value;
  key_word_3 = document.getElementById("key_word_3").value;
  key_word_4 = document.getElementById("key_word_4").value;
  key_word_5 = document.getElementById("key_word_5").value;
  firebase.database().ref("Soal").child(nomor_soal_input).update({
    key_1: key_word_1,
    key_2: key_word_2,
    key_3: key_word_3,
    key_4: key_word_4,
    key_5: key_word_5,
  });
}

function okay_jawaban() {
  soal_input = document.getElementById("soal").value;
  jawaban_input = document.getElementById("jawaban").value;
  firebase.database().ref("Soal").child(nomor_soal_input).update({
    jawaban: jawaban_input,
  });
}



  var dbRef = firebase.database();
  var statusAlat = dbRef.ref("Soal");
   
  // Dapatkan referensi table
  var table = document.getElementById("tabel-status-alat").getElementsByTagName('tbody')[0];;
   
  var total_harga=0,nomor=0;
  // Memuat Data
  statusAlat.on("child_added", function(data, prevChildKey) {

  var data_soal = data.val();
   
  var row = table.insertRow(table.rows.length);
   
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  //var cell4 = row.insertCell(3);
 // var cell5 = row.insertCell(4);
 // var cell6 = row.insertCell(5);
 // var cell7 = row.insertCell(6);
 // var cell8 = row.insertCell(7);
 
  
  
  cell1.innerHTML = data_soal.nomor_soal;
  cell2.innerHTML = data_soal.soal;
  cell3.innerHTML = data_soal.jawaban;
 // cell4.innerHTML = data_soal.key_1;
 // cell5.innerHTML = data_soal.key_2;
 // cell6.innerHTML = data_soal.key_3;
  //cell7.innerHTML = data_soal.key_4;
  //cell8.innerHTML = data_soal.key_5;

  });
  
  function hapus() {
   // let userRef1 = firebase.database().ref("Soal");
   // userRef1.remove()
   // alert("Data berhasil dihapus, Silahkan Reload halaman")

   const text1 = "saya naik kereta api makan";
    const text2 = "kereta makan, naik saya makan";
    const similarity = getSimilarityScore(textCosineSimilarity(text1,text2));
   alert(similarity)
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
  