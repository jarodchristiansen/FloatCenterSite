
const muscleHeader = document.getElementById('physicalBenefits');
const muscleRecovery = document.getElementById('muscleRecovery');

muscleHeader.addEventListener('click', function(){
 muscleRecovery.style.display = 'block';
 muscleRecovery.style.color = "white";
});


document.getElementById('muscleRecovery').addEventListener('click', function(){
        document.getElementById('muscleRecovery').style.display = 'none';
})

function myFunction() {
        if (muscleRecovery.style.display === "block") {
          muscleRecovery.style.display = "none";
        } else {
          muscleRecovery.style.display = "none";
        }
      }