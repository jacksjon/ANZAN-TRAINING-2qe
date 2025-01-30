let tim = 0;
let answertime = 0;
let notanswertime = 0;
let answerseetime = 0;
let question1 = 0;
let question2 = 0;
let a = 0;
let b = 0;
let questions = '';
function $(id) {
  return document.getElementById(id);
}
function questionGenerate() {
  tim = 0;
  question1 = (Math.floor(Math.random() * 20) + -20);
  question2 = (Math.floor(Math.random() * 10) + -2);
  a = -(question1 + question2);
  b = question1 * question2;
  questions = 'x<sup>2</sup>';
  if (a !== 0) {
  questions += a > 0 ? ` + ${a}x` : ` - ${Math.abs(a)}x`;
  }
  if (b !== 0) {
    questions += b > 0 ? ` + ${b}` : ` - ${Math  .abs(b)}`;
  }
    $('question').innerHTML = (questions);
    $('answer-display').innerHTML = 'NO COMMENTS';
   $('answer-display').style.color = 'gray';
   $('answer').value = ''; 
}
function answerCheck() {
  if ((($('answer').value) == ((question1) + ',' + (question2))) || ($('answer').value) == ((question2) + ',' + (question1))) {
    $('answer-display').innerHTML = '正解！';
    $('answer-display').style.color = 'red';
    console.log('正解');
    if (tim < 1) {
      answertime = answertime + 1;
    }
    result();
  }
  else {
    $('answer-display').innerHTML = '不正解...';
    $('answer-display').style.color = 'blue';
    console.log('不正解')
    if (tim < 1) {
      notanswertime = notanswertime + 1;
    }
    result();
  }
}
function answerDisplay() {
  $('answer-display').innerHTML = '答えは' + ((question1) + ',' + (question2));
  $('answer-display').style.color = 'orange';
  if (tim < 1) {
    answerseetime = answerseetime + 1;
  }
  result();
}
function result() {
  tim = tim + 1;
  $('times').innerHTML = '正解数:' + answertime + '不正解数:' + notanswertime + '答えを見た回数:' + answerseetime;
}
window.onload = function() {
  $('times').innerHTML = '正解数:0 不正解数:0 答えを見た回数:0';
  questionGenerate();
}
function Leload() {
  window.location.reload();
}
