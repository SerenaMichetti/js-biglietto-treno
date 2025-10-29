# Traccia

Realizzerete il vostro primo piccolo programma, in JS.
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65
- il risultato dovrà essere un numero con due decimali dopo la virgola
- potete stampare il risultato tramite un alert o in console

# Bonus
Scrivete il risultato in un elemento in pagina (es. un tag div)

# Consigli:
- Ricordatevi di lavorare un passo alla volta. Partite con l'approccio "intro-svolgimento-conclusione" che vi ho mostrato, scrivendo dei commenti segnaposto.
- Non vi sarà chiaro subito cosa fare e in alcuni casi non saprete come realizzarlo: Google e la documentazione sono vostri amici!
- Potete procedere stampando in console.log man mano che accadono eventi, per verificare cosa succede (es. calcolo il prezzo e lo stampo. calcolo lo sconto e lo stampo. applico lo sconto e stampo il nuovo prezzo)
- Fate attenzione a NON creare variabili all'interno di un if. Createle prima e nell'if assegnate un valore, come visto in live coding.

# Verifica di funzionamento:
Per verificare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

- 100km, 10 anni => prezzo corretto:  €16.80
- 100km, 30 anni => prezzo corretto: €21.00
- 100km, 70 anni => prezzo corretto: €12.60