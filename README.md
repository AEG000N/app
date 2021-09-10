# Obiettivo 

1. l'utente deve accedere al frontend utilizzando il browser
2. l'utente deve inserire due parametri, valori interi
3. l'utente dovrebbe essere in grado di inviare questi due parametri al backend e vedere il risultato
4. il backend deve convalidare due parametri come interi
5. il backend risponderà all'utente con la somma dei due parametri
6. l'utente dovrebbe essere in grado di ripristinare due parametri e risultato e ricominciare

# Front-End con Angular 12.x
Pagina iniziale che permette di inserire due numeri interi e inviarli al Server tramite una POST. In particolare abbiamo: 
* component.html: mostra un semplice form in cui possiamo inserire due numeri interi e inviarli,
* component.ts: contiene la funzione check() che permette di fare un controllo sui valori inseriti dall'utente e la funzione send() che implementa una richiesta POST verso il Server,
* component.css: attribuisce un tocco di stile alla nostra pagina html
* data.model.ts: modello che permette di immagazzinare la risposta dal server e utilizzarla all'interno del client.
# Back-End con Spring Boot
Riceve l'input dal client, somma i due interi e invia la risposta con la somma.
In particolare abbiamo:
* controller (RestController): classe che implementa un metodo che soddisfi la richiesta ricevuta dal client,
* Value: classe che definisce il modello dei dati ricevuti,
* Sum: classe che definisce il modello dei dati di risposta al client.
