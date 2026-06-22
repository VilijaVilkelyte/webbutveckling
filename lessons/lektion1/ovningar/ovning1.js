(function(){
  var initial = "&lt;!DOCTYPE html&gt;\n" +
    "&lt;html lang=&quot;en&quot;&gt;\n" +
    "  &lt;head&gt;\n" +
    "    &lt;meta charset=&quot;UTF-8&quot;&gt;\n" +
    "    &lt;title&gt;Page Title&lt;/title&gt;\n" +
    "  &lt;/head&gt;\n" +
    "  &lt;body&gt;\n" +
    "    &lt;h1&gt;Min titel&lt;/h1&gt;\n" +
    "    &lt;p&gt;Min paragraf&lt;/p&gt;\n" +
    "  &lt;/body&gt;\n" +
    "&lt;/html&gt;";
  var parsonsPuzzle = new ParsonsWidget({
    "sortableId": "Lektion1_o1-sortable",
    "max_wrong_lines": 1,
    "grader": ParsonsWidget._graders.LineBasedGrader,
    "exec_limit": 2500,
    "can_indent": true,
    "x_indent": 50,
    "lang": "en",
    "show_feedback": true,
    "python3": true,
    "trashId": "Lektion1_o1-sortableTrash",
    "trash_label": "Dra från detta block",
    "solution_label": "Konstruera din lösning här"
  });
  parsonsPuzzle.init(initial);
  parsonsPuzzle.shuffleLines();
  $("#Lektion1_o1-newInstanceLink").click(function(event){ 
      event.preventDefault(); 
      parsonsPuzzle.shuffleLines(); 
  }); 
  $("#Lektion1_o1-feedbackLink").click(function(event){ 
      event.preventDefault(); 
      parsonsPuzzle.getFeedback(); 
  }); 
})();
