(function(){
var initial = "&lt;!DOCTYPE html&gt;\n" +
    "&lt;html lang=&quot;sv&quot;&gt;\n" +
    "    &lt;head&gt;\n" +
    "        &lt;meta charset=&quot;UTF-8&quot;&gt;\n" +
    "        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;\n" +
    "        &lt;title&gt;V:s te&lt;/title&gt;\n" +
    "    &lt;/head&gt;\n" +
    "    &lt;body&gt;\n" +
    "        &lt;h1&gt;V:s tebutik&lt;/h1&gt;\n" +
    "        &lt;p&gt;Välkommen till min tebutik där enbart te finns på menyn.&lt;/p&gt;\n" +
    "        &lt;section&gt;\n" +
    "            &lt;h2&gt;Grönt te&lt;/h2&gt;\n" +
    "            &lt;p&gt;Passar utmärkt för en varm eftermiddag med nya vänner där teet inte ska vara för hett eller för oförutsägbart. En mysig stund med andra ord.&lt;/p&gt;               \n" +
    "            \n" +
    "            &lt;h3&gt;Innehållsförteckning&lt;/h3&gt;\n" +
    "            &lt;p&gt;Släkt-historia, nya recept, nya hobbys och nyligen utförda utflykter.&lt;/p&gt;\n" +
    "        &lt;/section&gt;\n" +
    "        &lt;section&gt;\n" +
    "            &lt;h2&gt;Rött te&lt;/h2&gt;\n" +
    "            &lt;p&gt;Ska undvikas i nya-vänkretsar men fungerar utmärkt i sällskap med mycket goda vänner.&lt;/p&gt;\n" +
    "            \n" +
    "            &lt;h3&gt;Innehållsförteckning&lt;/h3&gt;\n" +
    "            &lt;p&gt;Exet som försöker återfå kontakten, moraliska dilemman, familjeproblem, inblandningen i det senaste skolbråket.&lt;/p&gt;\n" +
    "        &lt;/section&gt;\n" +
    "    &lt;/body&gt;\n" +
    "&lt;/html&gt;";
var parsonsPuzzle = new ParsonsWidget({
    "sortableId": "ovning2-sortable",
    "max_wrong_lines": 10,
    "grader": ParsonsWidget._graders.LineBasedGrader,
    "exec_limit": 2500,
    "can_indent": true,
    "x_indent": 50,
    "lang": "en",
    "show_feedback": true,
    "python3": true,
    "trash_label": "Dra från detta block",
    "solution_label": "Konstruera din lösning här"
});
parsonsPuzzle.init(initial);
parsonsPuzzle.shuffleLines();
$("#ovning2-newInstanceLink").click(function(event){ 
    event.preventDefault(); 
    parsonsPuzzle.shuffleLines(); 
}); 
$("#ovning2-feedbackLink").click(function(event){ 
    event.preventDefault(); 
    parsonsPuzzle.getFeedback(); 
}); 
})();
