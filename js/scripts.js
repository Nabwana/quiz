$("#forms").ready(function(){
  $("input[type='button']").click(function(event){

    var Question1 = $("question1:checked").val();
    var Question2= $("question2:checked").val();
    var Question3 = $("question3:checked").val();
    var Question4 = $("question4:checked").val();

    var total=0;

    if (Question1==="c"){
      total+=20;
    }
    else {
    total+=0;
    }

    if (Question2==="c"){
      total+=20;
    }
    else {
    total+=0;
    }

    if (Question3==="c"){
      total+=20;
    }
    else {
    total+=0;
    }

    if (Question4==="c"){
      total+=20;
    }
    else {
    total+=0;
    }
    $(".result").text("your score is " + total);
event.preventDefault();
  });
});
