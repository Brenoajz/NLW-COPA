function createGame(player1, hour, player2) {
  return `
            <li>
              <img src="./assets/paises/${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/paises/${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}

function createCard(date, day, games) {
  return `
          <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
        <header>
        <img src="./assets/logo.svg" alt="" />
      </header>
      <main id="cards">
      ${createCard("24/11","quinta", createGame("brasil", "16:00", "servia"))}
      ${createCard("28/11","segunda", createGame("brasil", "13:00", "switzerland"))}
      ${createCard("02/12","sexta", createGame("brasil", "16:00", "cameroon"))}
      </main>
`
