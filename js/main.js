function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn" +i,choices[i]);
        }
        showProgress();
    }
};

function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
    var currentQuestionIndex = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionIndex + " of " + quiz.questions.length;
}

function showScores(){
    var questionsOver = "<h2>Result</h2>";
    var btnRetake = "<a href='prof-level.html'> <button  type='Submit' id='btnOp'> Retake </button>";
    var btnReview = "<a href='reviewer.html'> <button  type='Submit' id='btnOp'> Review </button>";
    questionsOver += "<h3 id='score'> Your score: " + quiz.score + "</h3>"
    + btnRetake + btnReview;
    var element = document.getElementById("quiz");
    element.innerHTML = questionsOver;
};


var questions = [
    /* Question - Choices [Array] - Answer */
    new Question ("1. Which sentence uses “famish” correctly?", ["1. After the straight exam, I felt too exhausted and famished to eat my favourite foods." ,"2. I could eat a horse, I am famish now." ,"3. I famished my stomach next time you treat me to a meal out." ,"4. I will bring lots of pizza, that’s a famish."] ,"1. After the straight exam, I felt too exhausted and famished to eat my favourite foods."),
    new Question ("2. Priscila _______ rather not invest her savings in the stock market.", ["1. must" ,"2. has to" ,"3. could" ,"4. would"] , "4. would"),
    new Question ("3. Did you have any problem ______ our house?", ["1. search" ,"2. to search" ,"3. searching" ,"4. for searching"] , "3. searching"),
    new Question ("4. I hope you don’t mind _____ joining you.", ["1. to be" ,"2. I had been" ,"3. that I may" ,"4. me"] , "4. me"),
    new Question ("5. Most basketball players are 6 ____ tall or more.", ["1. foot" ,"2. feet" ,"3. foots" ,"4. feets"] , "2. feet"),
    new Question ("6. These children _____ how to improvise more props for the play.", ["1. knew" ,"2. knows" ,"3. know" ,"4. known"] , "3. know"),
    new Question ("7. The company will upgrade ______ computer systems next week.", ["1. there" ,"2. their" ,"3. its" ,"4. it's"] , "3. its"),
    new Question ("8. You have too many _______ but few time to prove you’re right.", ["1. hypothesis" ,"2. hypotheses" ,"3. hyphothesises" ,"4. hypothesess"] , "2. hypotheses"),
    new Question ("9. Neither Sarah nor Tina _______ the crime yesterday.", ["1. witness" ,"2. witnesses" ,"3. witnessed" ,"4. witnessing"] , "3. witnessed"),
    new Question ("10. You do like going to the party alone. _____ you?.", ["1. Does" ,"2. Doesn’t" ,"3. Do" ,"4. Don’t"] , "4. Don't"),
    new Question ("11. We had our house _______ in yellow.", ["1. painting" ,"2. painted" ,"3. paint" ,"4. to paint"] , "2. painted"),
    new Question ("12. He has been exercising but his immune system was steadily _________.", ["1. weak" ,"2. weaken" ,"3. weakened" ,"4. weakining"] , "4. weakening"),
    new Question ("13. I was ______ that the weather would be sunny and we would be able to enjoy our swimming.", ["1. hopeless" ,"2. hopeful" ,"3. hopelike" ,"4. hopely"] , "2. hopeful"),
    new Question ("14. I think it’s not a great idea. I totally ______.", ["1. misagree" ,"2. unagree" ,"3. inagree" ,"4. disagree"] , "4. disagree"),
    new Question ("15 So many ___________ I found in the library, now I’m ready to report.", ["1. information" ,"2. informations" ,"3. infoes" ,"4. infos"] , "4. information"),
    new Question ("16. My grandpa always feed his flock of _______ early in the morning.", ["1. sheeps" ,"2. sheep" ,"3. ships" ,"4. ship"] , "2. sheep"),
    new Question ("17. Happy memories are always remembered, not ________.", ["1. forget" ,"2. forgets" ,"3. forgot" ,"4. forgotten"] , "4. forgotten"),
    new Question ("18. Flight Z735 ______ yesterday. 350 passengers died in that accident.", ["1. crush" ,"2. crushed" ,"3. crash" ,"4. crashed"] , "4. crashed"),
    new Question ("19. There is a ________ message when you look closely at her painting.", ["1. hid" ,"2. hide" ,"3. hided" ,"4. hidden"] , "4. hidden"),
    /*English Vocabulary*/
    new Question ("20. If you are (ambivalent) with the answers, analyze the given problem.", ["1. confusion" ,"2. innocent" ,"3. uncertain" ,"4. unaware"] , "3. uncertain"),
    new Question ("21. He left the country because of the (ominous) experiences he had in the past.", ["1. unforgettable" ,"2. threatening" ,"3. ugly" ,"4. remarkable"] , "2. threatening"),
    new Question ("22. Teenagers are easily (susceptible) to peer influence.", ["1. flexible" ,"2. inspired" ,"3. dependable" ,"4. inclined"] , "4. inclined"),
    new Question ("23. My mother is always (adamant) in eating breakfast before leaving the house.", ["1. resolute" ,"2. uncertain" ,"3. forgetful" ,"4. clueless"] , "1. resolute"),
    new Question ("24. Reading words without understanding their meaning is (futile).", ["1. helpless" ,"2. useless" ,"3. unnecessary" ,"4. avoidable"] , "2. useless"),
    new Question ("25. She wears gold but people knows how (ostentatious) she can be.", ["1. pretentious" ,"2. ambitious" ,"3. gorgeous" ,"4. rebellious"] , "1. pretentious"),
    new Question ("26. He submitted a (grotesque) artwork that nobody in the class could relate to.", ["1. different" ,"2. weird" ,"3. beautiful" ,"4. colorful"] , "2. weird"),
    new Question ("27. Their (clandestine) affair remained unknown for three years.", ["1. forbidden" ,"2. surprise" ,"3. secret" ,"4. unacceptable"] , "3. secret"),
    new Question ("28. They say love is like a firework, a (fleeting) moment.", ["1. brief" ,"2. unforgettable" ,"3. shinny" ,"4. remarkable"] , "1. brief"),
    new Question ("29. Cara is repulsive and rebellious. She always speaks (sordid) words.", ["1. dirty" ,"2. vulgar" ,"3. weird" ,"4. bizarre"] , "2. vulgar"),
    new Question ("30. Every time I see Cathy looking at me, I feel (Euphoria) in my bones.", ["1. gravity" ,"2. ecstasy" ,"3. erotic" ,"4. numb"] , "2. ecstasy"),
    new Question ("31. I bought this book because when I read the (blurb) at the back, I fell in love with it.", ["1. summary" ,"2. teaser" ,"3. blog" ,"4. plot"] , "2. teaser"),
    new Question ("32. Finding a way out of the (labyrinth) is the last challenge of the competition.", ["1. castle" ,"2. forest" ,"3. maze" ,"4. box"] , "3. maze"),
    new Question ("33. There is still love in our hearts amidst our seemingly (mundane) existence.", ["1. complicated" ,"2. modern" ,"3. worldly" ,"4. wealthy"] , "3. worldly"),
    new Question ("34. Cassy has a strong (penchant) in collecting cars.", ["1. belief" ,"2. fondess" ,"3. hobby" ,"4. route"] , "2. fondess"),
    new Question ("35. Diskettes and CDs are going (obsolete).", ["1. recycled" ,"2. refurbished" ,"3. updated" ,"4. outdated"] , "4. outdated"),
    new Question ("36. The Queen of the Night dances (vivaciously).", ["1. lively" ,"2. awkward" ,"3. kindly" ,"4. sweetly"] , "1. lively"),
    new Question ("37. The court released a (dogmatic) statement that made people more hopeful.", ["1. naive" ,"2. unbelievable" ,"3. assertive" ,"4. unclear"] , "3. assertive"),
    new Question ("38. This generation is prone to (plethoric) use of mobile gadgets.", ["1. essential" ,"2. crucial" ,"3. important" ,"4. excessive"] , "4. excessive"),
    new Question ("39. I am usually (haphazard) in composing my poetry but they turn out so well anyway.", ["1. disorganized" ,"2. blank" ,"3. puzzled" ,"4. strategic"] , "1. disorganized"),
    /*Correct Spelling and Idiomatic*/
    new Question ("40. If you don’t (spill the beans) now, you might gonna regret it.", ["1. spread rumors" ,"2. let out a secret" ,"3. plant some seeds" ,"4. none of the above"] , "2. let out a secret"),
    new Question ("41. Hey, man, you are absolutely (barking up the wrong tree) here because I’m innocent.", ["1. choosing the wrong dog" ,"2. giving up a fight" ,"3. accusing the wrong person" ,"4. setting up an event in a tree"] , "3. accusing the wrong person"),
    new Question ("42. One proven way to beat an enemy is find his (Achilles heel).", ["1. secret strategy" ,"2. amulet" ,"3. strong point" ,"4. weak spot"] , "4. weak spot"),
    new Question ("43. His new Ferrari (costs an arm and a leg) so he is now looking for another job.", ["1. very expensive" ,"2. got fired" ,"3. met an accident" ,"4. was stolen"] , "1. very expensive"),
    new Question ("44. He married a woman who was (born with a silver spoon in her mouth).", ["1. born very beautiful" ,"2. born very poor" ,"3. born into a very rich family" ,"4. born very talkative"] , "3. born into a very rich family"),
    new Question ("45. She has different investments because she (doesn’t want to put all eggs in one basket).", ["1. Doesn’t want to put all resources in one possibility" ,"2. doesn’t want to cook everything at once" ,"3. doesn’t want to go bankrupt" ,"4. none of the above"] , "1. Doesn’t want to put all resources in one possibility"),
    new Question ("46. Whenever his crush passes by the hallway, he’s having (butterflies on his stomach).", ["1. he feels sick" ,"2. he feels nervous" ,"3. he feels like flying" ,"4. he feels so handsome"] , "2. he feels nervous"),
    new Question ("47. Even though they had a nasty fight, they decided to (bury the hatchet) and move on.", ["1. kill the enemy" ,"2. remember the past" ,"3. bury the dead" ,"4. forgot the past quarrel"] , "4. forgot the past quarrel"),
    new Question ("48. My father always reminds us, (don’t count your chickens before the eggs have hatched).", ["1. Don’t eat your eggs before they are cooked." ,"2. Don’t make plan for something that might not happen." ,"3. Don’t deal with your problems before they are solved." ,"4. All of the above."] , "2. Don’t make plan for something that might not happen."),
    new Question ("49. iphones became so popular not only to teens, even my grandparents (jumped on the bandwagon) and bought some.", ["1. ride on the gadget and sell Apple" ,"2. jump for technology and sell iphones" ,"3. joined the new trend and bought apple" ,"4. bought apple and android"] , "3. joined the new trend and bought apple"),
    /*Analogy and Logic*/
    new Question ("50. Iron: metal: : granite: ______ ", ["1. rock" ,"2. sand" ,"3. solid" ,"none"] , "1. rock"),
    new Question ("51. Decibel: sound: : volt: ______ ", ["1. watts" ,"2. fire" ,"3. electricity" ,"4. lightning"] , "3. electricity"),
    new Question ("52. Coward: brave: : philanthropist: _______ ", ["1. selfish" ,"2. kind" ,"3. pessimist" ,"4. optimist"] , "1. selfish"),
    new Question ("53. Logic: reasoning: : ethics: _______ ", ["1. character" ,"2. behaviour" ,"3. subject" ,"4. traits"] , "2. behaviour"),
    new Question ("54. Antenna: signal: : net: ______ ", ["1. web" ,"2. catch" ,"3. gross" ,"4. fish"] , "4. fish"),
    new Question ("55. Stanza: poem: : act: ______ ", ["1. movie" ,"2. opera" ,"3. song" ,"4. lyric"] , "2. opera"),
    new Question ("56. Astrology: Astronomy: :Alchemy: _________ ", ["1. Chemistry" ,"2. Biology" ,"3. Physics" ,"4. Science"] , "1. Chemistry"),
    new Question ("57. Census: population: : inventory: __________ ", ["1. accounting" ,"2. merchandise" ,"3. cost" ,"4. list"] , "2. merchandise"),
    new Question ("58. Oath: promise: : contract: __________ ", ["1. license" ,"2. contact" ,"3. agreement" ,"4. paper"] , "3. agreement"),
    new Question ("59. Glimmer: Flicker: : murmur: _______ ", ["1. whisper" ,"2. shout" ,"3. rumor" ,"4. speak"] , "1. whisper"),
    new Question ("60. Bouquet: flowers: : flock: _______ ", ["1. dogs" ,"2. sheep" ,"3. ship" ,"4. cats"] , "2. sheep"),
    new Question ("61. Rescind: law: : withdraw: _______ ", ["1. bank" ,"2. candidacy" ,"3. deposit" ,"4. resume"] , "2. candidacy"),
    new Question ("62. Hoax: deceive: : filibuster: ______ ", ["1. delay" ,"2. refuse" ,"3. stop" ,"4. none"] , "1. delay"),
    new Question ("63. Syllabus: course: :agenda: _______ ", ["1. subject" ,"2. platform" ,"3. meeting" ,"4. lesson"] , "3. meeting"),
    new Question ("64. Cat: kitten: :horse: _______ ", ["1. cab" ,"2. puppy" ,"3. stallion" ,"4. pony"] , "4. pony"),
    new Question ("65. Evaporate: vapor: : petrify: _______ ", ["1. liquid" ,"2. stone" ,"3. magnify" ,"4. cold"] , "2. stone"),
    new Question ("66. Canvas: painter: : marble: ________ ", ["1. sculptor" ,"2. rock" ,"3. statue" ,"4. form"] , "1. sculptor"),
    new Question ("67. Hammer: anvil: : pestle: _________ ", ["1. ground" ,"2. grinder" ,"3. mortar" ,"4. knife"] , "3. mortar"),
    new Question ("68. Librarian: books: : curator: _______ ", ["1. atlas" ,"2. encyclopedia" ,"3. room" ,"4. paintings"] , "4. paintings"),
    new Question ("69. Archive: manuscript: arsenal: ________ ", ["1. soldier" ,"2. weapon" ,"3. castle" ,"4. king"] , "2. weapon"),
    new Question ("70. Bodyguard: protection: : mentor: _______ ", ["1. advice" ,"2. counsel" ,"3. teacher" ,"4. leader"] , "2. counsel"),
    new Question ("71. Novelist: plot: : Architect: _______ ", ["1. building" ,"2. design" ,"3. blueprint" ,"4. house"] , "3. blueprint"),
    new Question ("72. Molecule: atoms: : tissue: _______ ", ["1. organ" ,"2. cells" ,"3. body" ,"4. neutrons"] , "2. cells"),
    new Question ("73. Call: telephone: : type: ________ ", ["1. cellphone" ,"2. ipad" ,"3. keyboard" ,"4. piano"] , "3. keyboard"),
    new Question ("74. Eavesdrop: conversation: : trespass: _________ ", ["1. property" ,"2. house" ,"3. land" ,"4. assets"] , "1. property"),
    /*Paragraph Organization*/
    new Question ("75. A. One effective way is to diversify his funds to different investments like real estate, stocks and money instruments like bonds and trust funds. B. It is always best to expand money to different investment wheels. C. A wise investor must not put all his eggs in one basket. D. He should always consider the risks involved in investing his money.", ["1. CBAD" ,"2. CBDA" ,"3. CDAB" ,"4. CDBA"] , "3. CDAB"),
    new Question ("76. A. It is very vital to have social media presence however personal blogs serve as web domains. B. Most people including celebrities and businessmen have blogs nowadays. C. Therefore, building them will help anyone in promoting himself or his business. D. Apparently blogs are like our offices only they are in the internet.", ["1. BDAC" ,"2. BADC" ,"3. BACD" ,"4. BDCA"] , "2. BADC"),
    new Question ("77. A. The basic steps in building a website are easy to remember and registering a domain name is the usual priority. B. Designing a layout will come after that. C. Finally, adding more content and social media presence are required to keep your site active. D. Then you need a hosting provider to host your site’s content in the World Wide Web.", ["1. ABCD" ,"2. ADBC" ,"3. ACBD" ,"4. ADCB"] , "2. ADBC"),
    /*Numerical Reasoning*/
    new Question ("78. 2187, 729, 243, 81, 27, 9, ____?", ["1. 6" ,"2. 3" ,"3. 4" ,"4. 2"] , "2. 3"),
    new Question ("79. 1, 4, 9, 16, 25, 36, 49, 64, ___ ?", ["1. 72" ,"2. 75" ,"3. 81" ,"4. 90"] , "3. 81"),
    new Question ("80. 13 -21 34 -55 89 ___?", ["1. -95" ,"2. 104" ,"3. -123" ,"4. -144"] , "4. -144"),
    new Question ("81. AZ CX EV GT ____?", ["1. IR KP" ,"2. IR KQ" ,"3. IS KQ" ,"4. IS KP"] , "1. IR KP"),
    new Question ("82. A5 D25 G125 J625 M3125 ____?", ["1. P15525" ,"2. P15625" ,"3. O15525" ,"4. O15625"] , "2. P15625"),
    new Question ("83. What is -25 + 16?", ["1. 9" ,"2. -9" ,"3. -41" ,"4. 41"] , "2. -9"),
    new Question ("84. What is 107 – (-17) ?", ["1. -90" ,"2. 90" ,"3. 124" ,"4. -124"] , "3. 124"),
    new Question ("85. (-9) (-22) = ____?", ["1. 198" ,"2. -198" ,"3. 31" ,"4. -31"] , "1. 198"),
    new Question ("86. (21) (-4) + (8) (-2) = ____?", ["1. -100" ,"2. 100" ,"3. -23" ,"4. 23"] , "1. -100"),
    new Question ("87. (-560) ÷ 7 = ___?", ["1. -80" ,"2. 80" ,"3. -553" ,"4. 553"] , "1. -80"),
    new Question ("88. 6/8 + 2 ½ + 4/12 is also the same as?", ["1. ½ + 2.5 + ¼" ,"2. ½ + 5/2 + 1/6" ,"¾ + 2.5 + 1/6" ,"4. ¾ + 5/2 + 1/3"] , "4. ¾ + 5/2 + 1/3"),
    new Question ("89. What is the Least Common Denominator of 1/8, ¾, and 1/16?", ["1. 4" ,"2. 8" ,"3. 16" ,"4. 2"] , "3. 16"),
    new Question ("90. What is the Greatest Common Factor of 36 and 54?", ["1. 6" ,"2. 12" ,"3. 18" ,"4. 9"] , "3. 18"),
    new Question ("91. What is the sum of ½ + 8/4 + 6/12 ?", ["1. 15/12" ,"2. 3/12" ,"3. 3" ,"4. 3 1/12"] , "3. 3"),
    new Question ("92. ¾ ÷ 1/8 = ____", ["1. 8" ,"2. 4" ,"3. 12" ,"4. 6"] , "4. 6"),
    new Question ("93. What is the decimal form of ¾ %?", ["1. .0075" ,"2. .075" ,"3. .75" ,"4. .00075"] , "1. .0075"),
    new Question ("94. Convert 3.4% as a fraction.", ["1. 34/100" ,"2. .34/100" ,"3. 3.4/1000" ,"4. 3.4/100"] , "4. 3.4/100"),
    new Question ("95. What is ¼ in decimal?", ["1. .025" ,"2. .25" ,"3. 2.5" ,"4. .0025"] , "2. .25"),
    new Question ("96. 2.12 is multiplied by 10 to the sixth power is?", ["1. 212.000" ,"2. 2,120,000" ,"3. 212,000" ,"4. 21,200"] , "2. 2,120,000"),
    new Question ("97. 25 is multiplied by 10 to the fifth power is?", ["1. 2,500,000" ,"2. 250,000" ,"3. 25,000" ,"4. .000025"] , "1. 2,500,000"),
    new Question ("98. Find the value of x in the equation: 5x + 25 =10", ["1. 5" ,"2. 3" ,"3. -3" ,"4. -5"] , "3. -3"),
    new Question ("99. If x=8, find the value of y in the equation: 4x – 2y = 28.", ["1. -4" ,"2. -2" ,"3. 4" ,"4. 2"] , "4. 2"),
    new Question ("100. Find the value of x if y= 8 in the equation: 2x + 4y = 50", ["1. 9" ,"2. 8" ,"3. 10" ,"4. 4"] , "1. 9"),
    new Question ("101. Kit is twice as old as his friend Sam. Sam is 5 years older than Cara. In 5 years, Kit will be three times as old as Cara. How old is Sam?", ["1. 2 years old" ,"2. 3 years old" ,"3. 4 years old" ,"4. 5 years old"] , "4. 5 years old"),
    new Question ("102. James’s dad is 5 times older than James and James is twice as old as his sister Sara. In two years, the sum of their ages will be 58. How old is James now?", ["1. 6 years old" ,"2. 7 years old" ,"3. 8 years old" ,"4. 9 years old"] , "3. 8 years old"),
    new Question ("103. Cathy scored 85, 87, 90, 95, and 100 in her Math exams. What will be her average grade in Math from this period?", ["1. 91.40" ,"2. 91.50" ,"3. 92" ,"4. 93.50"] , "1. 91.40"),
    new Question ("104. Letty left home and drove at the rate of 50 miles per hour for 2 hours. She stopped for lunch then drove for another 4 hours at 65 mph to reach Los Angeles. How many miles did Letty drive to reach LA?", ["1. 115 miles" ,"2. 360 miles" ,"3. 310 miles" ,"4. 100 miles"] , "2. 360 miles"),
    new Question ("105. Michelle went to SM for the 3-day sale. She bought a new pair of shoes and paid only P2,450 discounted for 20% off. What was the original price of the shoes?", ["1. P3,062.50" ,"2. P3,260.50" ,"3. P3,620.50" ,"4. P3,026.50"] , "1. P3,062.50"),
    /*Clerical Operations / Clerical Reasoning */
    new Question ("106. Which department of an office is responsible for hiring new personnel?", ["1. Office of the President" ,"2. Accounting Department" ,"3. Logistic and Supply" ,"4. Human Resource Department"] , "4. Human Resource Department"),
    new Question ("107. Which computer program should you go if you want to email a company?", ["1. Word" ,"2. Excel" ,"3. Outlook" ,"4. Powerpoint"] , "3. Outlook"),
    new Question ("108. This is a telephonic transmission of scanned documents of texts and images to a telephone number connected to a printer.", ["1. Photocopying Machine" ,"2. Fax Machine" ,"3. Typewriter" ,"4. Inkjet Printer"] , "2. Fax Machine"),
    new Question ("109. The chief financial officer is responsible for the financial matters and financial management of a corporation, she is also known as the _______.", ["1. Auditor" ,"2. Treasurer" ,"3. Chief Executive Officer" ,"4. Manager"] , "2. Treasurer"),
    new Question ("110. Which department of a company is responsible for cash register operations and payment processing?", ["1. Cashier" ,"2. Billing" ,"3. Accounting" ,"4. Budget"] , "1. Cashier"),
    new Question ("111. What is the correct filing arrangement for the following names? 1. Angeles, Mario P. 2. Angeles, Maricel P. 3. Angeles, Marissa P. 4. Angeles, Maria P.", ["1. 4,2,1,3" ,"2. 4,1,2,3" ,"3. 4,3,2,1" ,"4. 4,1,3,2"] , "1. 4,2,1,3"),
    new Question ("112. All of the following items are found in the Official Receipt form except _____.", ["1. Name and address of the buyer" ,"2. Signature of the recipient" ,"3. Quantity of the items paid" ,"4. Credit Card Number of the customer"] , "4. Credit Card Number of the customer"),
    new Question ("113. The method of indexing and filing where names are in alphabetized order.", ["1. Numeric" ,"2. Metric" ,"3. Geographic" ,"4. Alphabetic"] , "4. Alphabetic"),
    new Question ("114. Which is the best way to address a correspondence for the President of the Philippines?", ["1. His Excellency Rodrigo Duterte" ,"2. His Excellency President Rodrigo Duterte" ,"3. President Rodrigo Duterte" ,"4. President Digong"] , "2. His Excellency President Rodrigo Duterte"),
    new Question ("115. How do you address the Queen of England when you talk about her?", ["1.  Her Highness the Queen" ,"2. Her Majesty Queen Elizabeth II" ,"3. Queen Elizabeth II her Highness" ,"4. Queen Elizabeth II her Majesty"] , "2. Her Majesty Queen Elizabeth II"),
    new Question ("116. Your boss asked you to send her a soft copy of your latest résumé. An example of a soft copy is:", ["1. A print out copy usually in a paper" ,"2. Original copy written in a paper" ,"3. A copy saved in a computer and sent through email" ,"4. A copy from a Xerox machine"] , "3. A copy saved in a computer and sent through email"),
    new Question ("117. When a company asked you to submit your latest CV, what does CV stand for?", ["1. Curriculum Vitum" ,"2. Curriculum Virtue" ,"3. Curriculum Vitae" ,"4. Curriculum Vital"] , "3. Curriculum Vitae"),
    new Question ("118. It is the section of Accounting Department in a company that records goods and services that it receives and the payments it owes.", ["1. Budget" ,"2. Payroll" ,"3. Accounts Payable and Receivable" ,"4. Inventory"] , "3. Accounts Payable and Receivable"),
    new Question ("119. Which of the following is not a function of Accounting Department in a big corporation?", ["1. Prepare Interim Financial Statements" ,"2. Inventory Management" ,"3. Bank Reconciliation" ,"4. Internal and External Auditing"] , "4. Internal and External Auditing"),
    new Question ("120. He is the highest ranking executive manager in a corporation and he is the top person in command in an organization.", ["1. Chief Financial Executive" ,"2. Chief Executive Officer" ,"3. Executive Admin. Officer" ,"4. Chief Executive Assistant"] , "2. Chief Executive Officer"),
    new Question ("121. Which of the following is not a responsibility of a clerical worker?", ["1. Marketing and promotion for customers" ,"2. Filing and updating purchase orders" ,"3. Updating and billing buyer’s account" ,"4. Answering business emails"] , "1. Marketing and promotion for customers"),
    new Question ("122. Arrange the proper filing of the following in alphabetical order: A. Lieutenant Colonel Mark David B. Atty. Elen Rodriguez C. Captain Max Aquino D. Dr. Juan Castro", ["1. CDAB" ,"2. CDBA" ,"3. BDCA" ,"4. BCDA"] , "4. BCDA"),
    new Question ("123. Arrange the proper filing of the following in alphabetical order: A. Sec. Dinky Soliman B. Sec. Richard Gordon C. Sec. Voltaire Gazmin D. Sec. Armin Luistro", ["1. DABC" ,"2. DACB" ,"3. CBDA" ,"4. CBAD"] , "1. DABC"),
    new Question ("124. How much is the present Value-Added-Tax in the Philippines?", ["1. 12% of gross profit" ,"2. 12% of cost of goods sold" ,"3. 12% of gross sales" ,"4. 12% of net income"] , "3. 12% of gross sales"),
    new Question ("125. This department of the company is responsible for preparing and updating customers’ accounts:", ["1. Purchasing section" ,"2. Cashier section" ,"3. Billing Section" ,"4. Releasing section"] , "3. Billing Section"),
    new Question ("126. This is a type of document issued by a seller to a buyer relating to a sale transaction and indicating the products, quantities and prices sold to the buyer.", ["1. Check voucher" ,"2. Purchase order" ,"3. Delivery receipt" ,"4. Sales invoice"] , "4. Sales invoice"),
    new Question ("127. Which of the following is not a usual document used in a sales company?", ["1. Form 137" ,"2. Delivery receipt" ,"3. Sales invoice" ,"4. Purchase order"] , "1. Form 137"),
    new Question ("128. One of the responsibilities of a clerical job is answering and tending phone calls. Which is the best way to answer a phone call in a company?", ["1. Say “Hello,” and wait for the caller to speak." ,"2. Run and get a pen and notebook then pick up the phone." ,"3. Answer the phone politely and give your department or company name." ,"4. Wait for fellow employees to answer the phone."] , "3. Answer the phone politely and give your department or company name."),
    new Question ("129. An example of a hard copy document is:", ["1. PDF file letter" ,"2. Company email message" ,"3. A business letter saved in USB" ,"4. Business letter in a paper"] , "4. Business letter in a paper"),
    new Question ("130. What does a CC means in an email message?", ["1. Copy sent" ,"2. Copy furnished" ,"3. . Copy cat" ,"4. Client copy"] , "2. Copy furnished"),
    /*Philippine Constitution, General Information, Current Events*/
    new Question ("131. What are the 3 main branches of the Government of the Philippines?", ["1. Senate, Supreme Court, Congress" ,"2. Presidential, Unicameral- Parliamentary, Bicameral-Parliamentary" ,"3. Legislative, Executive, Judicial" ,"4. The Legislature, The Senate, The Supreme Court"] , "3. Legislative, Executive, Judicial"),
    new Question ("132. The Supreme Court shall be composed of a Chief Justice and how many Associates Justices?", ["1. 12" ,"2. 13" ,"3. 14" ,"4. 15"] , "3. 14"),
    new Question ("133. The Commander-in-Chief of all armed forces of the Philippines this 2017 is _________.", ["1. Air Force Commanding General Jeffrey Delgado" ,"2. Rodrigo Duterte" ,"3. Chief Justice Maria Lourdes Sereno" ,"4. AFP Chief Lieutenant Gen. Emmanuel Bautista"] , "2. Rodrigo Duterte"),
    new Question ("134. The executive power shall be vested in the _________.", ["1. President of the Philippines" ,"2. House of Representatives" ,"3. The Supreme Court" ,"4. The Congress"] , "1. President of the Philippines"),
    new Question ("135. The legislative power shall be vested in the _________ which shall consist of a Senate and a House of Representatives.", ["1. Congress of the Philippines" ,"2. House of Ombudsman" ,"3. The Supreme Court" ,"4. Bureau of Internal Revenue"] , "1. Congress of the Philippines"),
    new Question ("136. The Senate shall be composed of how many senators elected at large by voters of the Philippines?", ["1. 21" ,"2. 22" ,"3. 23" ,"4. 24"] , "4. 24"),
    new Question ("137. How long shall the term of office of the senators be commenced?", ["1. 3 years" ,"2. 4 years" ,"3. 5 years" ,"4. 6 years"] , "4. 6 years"),
    new Question ("138. The term of office of the President and Vice-president of the Philippines shall be up to how many years?", ["1. 3 years" ,"2. 4 years" ,"3. 5 years" ,"4. 6 years"] , "4. 6 years"),
    new Question ("139. The members of the House of Representatives shall be elected for a term of _______.", ["1. 3 years" ,"2. 4 years" ,"3. 5 years" ,"4. 6 years"] , "1. 3 years"),
    new Question ("140. The following shall be exempted from taxation except:", ["1. Lands and buildings" ,"2. Churches and convents" ,"3. Charitable institutions" ,"4. Non-profit cemeteries"] , "1. Lands and buildings"),
    new Question ("141. The Congress, by a vote of ____ of both Houses in joint session assembled, voting separately, shall have the sole power to declare a state of war.", ["1. Two-thirds" ,"2. One-half" ,"3. Three quarters" ,"4. Minority"] , "1. Two-thirds"),
    new Question ("142. It states that “no person shall be deprived of life, liberty, or property without due process of law, nor any person be denied the equal protection of the laws.”", ["1. Article VI" ,"2. Bill of Rights" ,"3. Republic Act" ,"4. Court Order"] , "2. Bill of Rights"),
    new Question ("143. All of the following is TRUE except:", ["1. No person shall be compelled to be a witness against himself." ,"2. No person shall be imprisoned for non-payment of debt or poll tax." ,"3. No ex post facto law or bill of attainder shall not be enacted." ,"4. No person shall be detained solely by reason of his political beliefs and aspirations."] , "3. No ex post facto law or bill of attainder shall not be enacted."),
    new Question ("144. The following are citizens of the Philippines except:", ["1. Those fathers or mothers are citizens of the Philippines" ,"2. . Those who are born before January 17, 1973, of Filipino mothers, who elect Philippine citizenship upon reaching the age of majority" ,"3. Those who are naturalized citizens of the Philippines in accordance with law." ,"4. All of the above are true."] , "4. All of the above are true."),
    new Question ("145. It is the right and obligation by all citizens, who are at least 18 years of age, and qualified by law, to vote in the election of national and local officials of the government without literacy,, property, or other substantive requirement. ", ["1. Suffrage" ,"2. Election" ,"3. Voting power" ,"4. Civil Right"] , "1. Suffrage"),
    new Question ("146. The three inherent powers of the state are the following except one:", ["1. Police Power" ,"2. Power of Eminent Domain" ,"3. Power of Taxation" ,"4. Power to Impeach"] , "4. Power to Impeach"),
    new Question ("147. It is the power of the State to promote public welfare by restraining the use of both liberty and property of all people.", ["1. Police Power" ,"2.  Power of Eminent Domain" ,"3. Power if Taxation" ,"4. Power to Impeach"] , "1. Police Power"),
    new Question ("148. It is the power of the State to take properties for the purpose of public use upon payment of just compensation.", ["1. Police Power" ,"2. Power of Eminent Domain" ,"3. Power if Taxation" ,"4. Power to Impeach"] , "2. Power of Eminent Domain"),
    new Question ("149. It is the power of the State to impose charge or burden to persons and properties, and property rights for the purpose of raising revenues to protect the people and extend public projects and services.", ["1. Police Power" ,"2. Power of Eminent Domain" ,"3. Power if Taxation" ,"4. Power to Impeach"] , "3. Power if Taxation"),
    new Question ("150. The following are members of the Constitutional Commission except:", ["1. Commission on Civil Rights" ,"2. Commission on Elections" ,"3. Civil Service Commission" ,"4. Commission on Audit"] , "1. Commission on Civil Rights"),
    new Question ("151. It states that public office is public trust and that public officers and employees must, at all times, be accountable to the people, serve them with utmost responsibility, integrity, loyalty and efficiency; act with patriotism and justice and lead modest lives.", ["1. Public Trust" ,"2. Constitutional Rights" ,"3. Accountability" ,"4. Responsibility"] , "3. Accountability"),
    new Question ("152. Who shall have the exclusive power to initiate all cases of impeachment?", ["1. House of Blue Ribbon Committee" ,"2. . House of Representatives" ,"3. House of the Senate" ,"4. Speaker of the House"] , "2. . House of Representatives"),
    new Question ("153. R.A. 6713 is an act to uphold the time-honored principle of public office being a public trust, granting incentives and rewards for exemplary service, enumerating prohibited acts and providing penalties for violations thereof and for other purposes.", ["1. Preamble" ,"2. Code of Ethics" ,"3. Code of Government Officials" ,"4. Code of Conduct and Ethical Standards for Public Officials and Employees"] , "4. Code of Conduct and Ethical Standards for Public Officials and Employees"),
    new Question ("154. The following are duties and responsibilities of Public officials and Employees except:", ["1. Act promptly on letters, inquiries, calls or any other form of communications sent by the public." ,"2. Submit performance reports of the agency or office regularly" ,"3. Accept gifts from the public upon prioritizing their queries" ,"4. Process documents and papers expeditiously"] , "3. Accept gifts from the public upon prioritizing their queries"),
    new Question ("155. It is a written instrument containing the proposition and required number of signatories and shall be in a form determined by and submitted to the Commission on Elections.", ["1. Bill" ,"2. Law" ,"3. Proposition" ,"4. Petition"] , "4. Petition"),
    new Question ("156. It is the electoral process by which an initiative on the Constitution is either approved or rejected by the people.", ["1. Referendum" ,"2. Plebiscite" ,"3. Petition" ,"4. Initiative"] , "2. Plebiscite"),
    new Question ("157. It is the power of the electorate to approve or reject a legislation through an election called for the purpose.", ["1. Referendum" ,"2. Plebiscite" ,"3. Petition" ,"4. Initiative"] , "1. Referendum"),
    new Question ("158. This law promotes responsible family planning and proper use of reproductive methods to eliminate over-population growth.", ["1. RH Bill" ,"2. Responsible Parenthood and Reproductive Health Law" ,"3. Reproductive Law" ,"4. Family Planning"] , "2. Responsible Parenthood and Reproductive Health Law"),
    new Question ("159. It is a specialized agency of the United Nations that concerns international public health.", ["1. Department of Health" ,"2. World Health Organization" ,"3. International Health Organization" ,"4. All of the above"] , "2. World Health Organization"),
    new Question ("160. APEC is a summit that promotes free trade and economic cooperation throughout the Asia-Pacific region countries. APEC stands for:", ["1. Asia Pacific Economic Corporation" ,"2. Asia Pacific Economic Cooperation" ,"3. Asia Pacific Economic Council" ,"4. Asia Pacific Economic Countries"] , "2. Asia Pacific Economic Cooperation"),
    new Question ("161. Association of Southeast Asian Nations (ASEAN) aims to accelerate economic growth, stability, social progress and cultural development in the spirit of equality and partnership to strengthen prosperous and peaceful community along Southeast Asian Nations. Which of the following countries is not a member of ASEAN?", ["1. Hong Kong" ,"2. Philippines" ,"3. Singapore" ,"4. Thailand"] , "1. Hong Kong"),
    new Question ("162. It is a law in the Philippines that aims to address legal issues concerning online interactions and harmful internet behavior in the Philippines. It aims to prevent and punish cybercrime in the country.", ["1. Cybersquatting" ,"2. Cybercrime Act" ,"3. Cybercrime Prevention Act" ,"4. Cyber Identity Theft Act"] , "3. Cybercrime Prevention Act"),
    new Question ("163. __________waste breaks down into natural components and can be recycled into the life cycle naturally.", ["1. Bio-chemical" ,"2. Recyclable" ,"3. Biodegradable" ,"4. Non-biodegradable"] , "3. Biodegradable"),
    new Question ("164. The following are examples of non-biodegradable waste except:", ["1. Plastics" ,"2. Metals" ,"3. Styrofoam" ,"4. Papers"] , "4. Papers"),
    new Question ("165. It is a project of DOST for more accurate, integrated and responsive disaster prevention and mitigation system especially in high-risk calamity areas of the Philippines.", ["1. PAGASA" ,"2. I am Ready" ,"3. DOST-Advanced Disaster Program" ,"4. Project NOAH"] , "4. Project NOAH"),
    new Question ("166. PAGASA is the official government agency for weather forecasting, flood control, astronomical observations, and time service. PAGASA stands for _______?", ["1. Philippine Atmospheric Geographical and Astronomical Services Administration" ,"2. Philippine Atmospheric Geophysical and Astronomical Services Administration" ,"3. Philippine Atmospheric Geological and Astronomical Services Association" ,"4. Philippine Atmospheric Geophysical and Astronomical Services Association"] , "2. Philippine Atmospheric Geophysical and Astronomical Services Administration"),
    new Question ("167. PHIVOLCS is a branch of DOST to moderate disasters that may arise from volcanic eruptions, earthquakes, tsunami and other related geotectonic phenomena in the Philippines. What is PHIVOLCS?", ["1. Philippine Institute of Volcanology and Seismology" ,"2. Philippine Institute of Volcanic and Seismic Services" ,"3. Philippine Institute of Volcanic and Seismology Services" ,"4. Philippine Institute of Volcano and Seismic System"] , "1. Philippine Institute of Volcanology and Seismology"),
    new Question ("168. Which of the following is a renewable source of energy?", ["1. Geothermal energy" ,"2. Solar energy" ,"3. Wind energy" ,"4. All of the above"] , "4. All of the above"),
    new Question ("169. It is a process by which thermal radiation from the earth’s surface is absorbed by atmospheric greenhouse gases and is re-radiated in all directions. ", ["1. Global Warming" ,"2. Greenhouse Effect" ,"3. Ozone Layer" ,"4. . Solar Radiation"] , "2. Greenhouse Effect"),
    new Question ("170. USB is an industry standard that connects computers and electronic devices like keyboards, digicams, portable media devices, disk drivers, smartphones, and network adapters to any computer. USB stands for?", ["1. Unit Serial Box" ,"2. Unit Serial Bolt" ,"3. Universal Serial Bin" ,"4. Universal Serial Bus"] , "4. Universal Serial Bus"),
];
    
var quiz = new Quiz(questions);

populate();                                 