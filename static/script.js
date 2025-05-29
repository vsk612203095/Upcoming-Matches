document.addEventListener("DOMContentLoaded" , function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "/api/matches" , true);

    xhr.onload = function(){
        if(xhr.status === 200){
            const matches = JSON.parse(xhr.responseText);
            const tbody = document.getElementById("matches");

            matches.forEach(match => {
                const row = document.createElement("tr");

                const home = document.createElement("td");
                home.innerHTML = `<img src="${match.strHomeTeamBadge}" alt="Home Team Badge" width="40" height="40"> ${match.strHomeTeam}`;
                home.classList.add("team-name");
                
                
                const away = document.createElement("td");
                away.innerHTML = `<img src="${match.strAwayTeamBadge}" alt="Away Team Badge" width="40" height="40"> ${match.strAwayTeam}`;
                away.classList.add("team-name");

                const date = document.createElement("td");
                date.textContent = match.dateEvent;
                date.classList.add("date");

                const time = document.createElement("td");
                time.textContent = match.strTime;
                time.classList.add("time");

                const venue = document.createElement("td");
                venue.textContent = match.strVenue || "N/A";
                venue.classList.add("venue");

                row.appendChild(home);
                row.appendChild(away);
                row.appendChild(date);
                row.appendChild(time);
                row.appendChild(venue);

                tbody.appendChild(row);
            });             
        }else{
            console.error("Failed to load matches");    
        }
    };

    xhr.onerror = function(){
        console.error("Request error...");
    };

    xhr.send();
});