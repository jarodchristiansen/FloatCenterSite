        onmouseover="document.getElementById('div1').style.display = 'block';"

const muscleHeader = document.getElementById('physicalBenefits');
const muscleRecovery = document.getElementById('muscleRecovery');

muscleHeader.addEventListener('click', function(){
 muscleRecovery.style.display = 'block';
 muscleRecovery.style.color = "white";
});


document.getElementById('muscleRecovery').addEventListener('click', function(){
        document.getElementById('muscleRecovery').style.display = 'none';
})