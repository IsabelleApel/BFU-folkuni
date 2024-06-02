const programmingJokes = [
    {id: 0, 
    question:"Why don't programmers like nature?",
    answer: "It has too many bugs."},
    {id: 1,
    question:"Why did the CSS developer go to therapy?" ,
    answer: "To get rid of his margins."},
    {id: 2,
    question:"How do you comfort a JavaScript developer?",
    answer: "You console them."},
    {id: 3,
    question: "Why did the CSS developer leave the restaurant?",
    answer: "Because it had no class."},
    {id: 4,
    question: "Why did the JavaScript developer go missing?",
    answer: "Because he didn't know when to return."},
    {id: 5,
    question: "Why did the HTML tag go to the party?",
    answer: "Because it wanted to break the line."},
    {id: 6,
    question: "Why do JavaScript developers wear glasses?",
    answer: "Because they don't C#."},
    {id: 7,
    question: "Why don't programmers like to use inline styles?",
    answer: "Because they want to be classy."},
    {id: 8,
    question: "Why did the CSS selector break up with the HTML element?",
    answer: "It found someone more specific."},
    {id: 9,
    question: "Why did the CSS developer apply for a job?",
    answer: "They wanted to get a position."},
  ];


  function slumpa(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);}

    let joke1 = slumpa(0,10)
    let joke2 = slumpa(0,10)

    while(joke1 == joke2){
        joke2 = programmingJokes[slumpa(0,10)]
    }

   
  
  console.log('Hi, and welcome to the JOKSEMACHINE!')
  console.log('Let me tell you a joke!')
  console.log()
  console.log('Joke # ' + (joke1 + 1))
  console.log('Question: ' + programmingJokes[joke1].question)
  console.log('Answer: ' + programmingJokes[joke1].answer)
  console.log()
  console.log('And here comes another one, just for you:')
  console.log()
  console.log('Joke # ' + (joke2 + 1))
  console.log('Question: ' + programmingJokes[joke2].question)
  console.log('Answer: ' + programmingJokes[joke2].answer)



