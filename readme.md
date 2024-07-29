L'obiettivo di questo esercizio è generare 5 numeri casuali lato CPU.
Dobbiamo mostrare questi numeri all'utente per tot secondi poi nasconderli.
Dopo aver nascosto i numeri chiediamo all'utente quali numeri erano comparsi.
In base alla risposta comparirà un alert HAI VINTO! / HAI PERSO!

FASE 1 
Ho creato una funzione randomNumber che mi permette di creare 5 numeri casuali tramite un ciclo for, controllando che:
- i numeri fossero numeri e non stringhe;
- il numero fosse intero;
- il numero fosse compreso tra 1 e 100;
- il numero non fosse già stato generato;

Ho stampato in pagina.

 FASE 2 
 Ho creato una funzione promptUtente che tramite dei prompt in un ciclo for chiedo all'utente di scrivere i numeri che ha visto in pagina.
 Anche in questo caso sono stati effettuati dei controlli affinchè:
 - di non ripetere numeri già scritti
 - l'utente non potesse inserire lettere al posto di numeri o stringhe vuote;

 FASE 3 
 Ho creato una funzione onPage che è collegata tramite un input button in pagina, in mode che al click sul bottone invochi la funzione randomNumber tramite la funzione di setInterval faccia partire un conto alla rivescia che al raggiungimento dello 0 cambiasse la stringa dei numeri con `Mettiti alla prova e scrivi i numeri`;
 Tramite un setTimeout invoco la funzione promptUtente dopo che la randomNumber ha finito i suoi compiti.
 Una volta che ho ottenuto i numeri da parte CPU e utente, li confronto per vedere se i numeri sono gli stessi.
 Anche in questo caso faccio partire il controllo con un setTimeout dopo la fine di promptUtente.
