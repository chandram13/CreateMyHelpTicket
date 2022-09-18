// Marvish Chandra



class createHelpTicket{
    function statedIssue(client,clientProblem){
        document.getElementById("demo").innerHTML = "The employee who has requested a issue is" + client + "."
        document.getElementById("demo").innerHTML = "The employee's current issue is" + clientProblem + "."
        currentDate = new Date();
        issueDate = currentDate.getDate();
        issueMonth = currentDate.getMonth() + 1
        issueYear = currentDate.getFullYear()
        document.getElementById("demo").innerHTML = "The employee's submitted problem is: " + <b> +  issueDate + "/" issueMonth + "/" issueYear + </b>;
     }
    function curentIssue(issueState,technican){
        if issueState == "not resolved":
        document.getElementById("demo").innerHTML = "The employee's issue needs correction, please assign " + technican + "to resolve the matter."
        if issueState == "in progress":
        document.getElementById("demo").innerHTML = "The employee's issue is in progress and currently being worked on by" + technican + "to resolve the matter."
        if issueState == "Resolved":
        document.getElementById("demo").innerHTML = "The employee's issue was resolved. The technican who resolved it was: " + technican + "."
    }
    function issueDetails(eventList,comments){
        document.getElementById("demo").innerHTML = "The list of events that occurred from the issue is: " + eventList + "."
        document.getElementById("demo").innerHTML = "The technician's suggestions and discussion is included here" + comments + "."
    }
}