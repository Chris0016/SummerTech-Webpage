# SummerTech Info Page


## Requirements
[Nodejs](https://nodejs.org/en/download/)
Node.JS modules:
- csvtojson (run "npm install csvtojson")
	
	

## Files

**Index.html**
**styles.css**
**script.js**
**loader.js**


## Updating the Events Schedule

Script.js has a const variable named **events** from which it dynamically adds the correct html to the page. This variable needs to be updated every week in order to reflect the new events. However, the new events are in a new csv file. 

loader.js is a script responsible for taking in a csv file and printing out the Json represention of the csv. 

To update the **events** variable in script.js simply run "loader.js"(node loader.js), copy the output of the program, and replace the value of the **events** variable in script.js.

> Note it is important to also replace the csv file as well and that it's name is Week_Events.csv 
