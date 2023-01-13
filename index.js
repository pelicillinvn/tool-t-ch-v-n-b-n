//const paragraphText = 'Việc định hướng, xây dựng kế hoạch kiểm tra, giám sát phải khả thi, thực chất, phù hợp với điều kiện, tình hình địa phương, đơn vị. Giám sát phải mở rộng để kịp thời phát hiện, cảnh báo vi phạm, không để vi phạm nhỏ tích tụ thành sai phạm lớn, kéo dài, lan rộng. Kiểm tra có trọng tâm và kỷ luật phải nghiêm minh.';
//const amountWord = 7;

//document.getElementById("result").innerHTML = myArray[0];
const buttonSubmit= document.getElementById('button_submit');
buttonSubmit.onclick = function() {
const paragraphText = document.getElementById('input_text').value.trim().replace(/\r?\n/g, "");
const amountWord = document.getElementById("amount_word").value;
//console.log(amountWord );
console.log(paragraphText);
const paragraphArray = paragraphText.split('.');
const lengthParagraph = paragraphArray.length; 
console.log(paragraphArray);

    console.log('click')
    for(let i=0; i<lengthParagraph; i++) {
        const sentenceText = paragraphArray[i].trim();
        //console.log(sentenceText)
        const wordArray = sentenceText.split(' ');
        const arrayLength= wordArray.length;
        var r = arrayLength % amountWord;
        var z = (arrayLength- r)/amountWord;
       // console.log('z:', z)
       var resultArray=[];
       if (r == 0) {
        for (let t= 0; t < z; t++) {
            const sentence = wordArray.slice(t*amountWord, (t+1)*amountWord);
            const resultSentence = sentence.join(' ');
           //document.getElementById('result').innerHTML=`<p>${resultSentence}</p>`;
            resultArray.push(resultSentence); 
       } }  else {

           if (z>1) {
            
               for (let a= 0; a < z-1; a++) {
                  const sentence = wordArray.slice(a*amountWord, (a+1)*amountWord);
                  const resultSentence = sentence.join(' ');
                 //document.getElementById('result').innerHTML=`<p>${resultSentence}</p>`;
                  resultArray.push(resultSentence); 
                  //console.log("resultArrayfor",resultArray);
              }
              const lastResult = wordArray.slice((z-1)*amountWord).join(" ");
              //console.log("lastResult", lastResult)
               resultArray.push(lastResult);
           } else {            
               resultArray.push(wordArray.join(' ')); 
        }
       }
        console.log('resultArray',resultArray);
        for(let b=0; b<resultArray.length; b++) {
             const p =document.createElement('p');
             p.textContent= resultArray[b];
             document.getElementById('result').append(p);
        }
          
    }
}

