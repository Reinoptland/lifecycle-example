# LifeCycle

Geboren worden:
initialiseren
mounting,

Leven:
updating,

Dood gaan:
unmounting

## Waarom moet je dat weten

- Als je de lifecycle niet begrijpt voelt wat wel en niet mag in React een beetje "magisch" aan

### Mounting

Data (state, props) -> Component -> JSX -> Gebruiker

### Updating

Scenario: Een gebruiker klikt op een knopje

Gebruiker -> Knopje -> setCounter -> Data verandert -> Component -> JSX -> Gebruiker

Scenario: We gaan data ophalen uit een api

useEffect -> request -> response -> setPokemon -> Data verander -> Component -> JSX -> Gebruiker

Wanneer update je component

- Als je een setter aan roept, zoals setCounter
- Wanneer een Component nieuwe props krijgt

### Unmounting

Gebruiker gaat naar een andere pagina -> Component niet meer nodig -> opgeruimd

### Infinite loop

Mounting -> setCounter -> Component -> setCounter -> Component
