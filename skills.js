function calculateSkillPoints() {
    var skillPoints = 0;
    for (var i = 0; i < 10; i++) {
        skillPoints += parseInt(document.getElementById("skill" + i).value);
    }
    document.getElementById("skillPoints").innerHTML = skillPoints;
}