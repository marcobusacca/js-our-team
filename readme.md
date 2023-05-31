PROBLEMA: 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0: Creare l’array di oggetti con le informazioni fornite (file: informazioni_team.png).

MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe.


- MILESTONE 0:

    - Creare l'Array che conterrà gli Oggetti (let teamArray = []):

        - Dichiarare l'Oggetto [i = 0]{
            
            'name' : '', (chiave : valore)

            'role' : '',

            'image' : ''
        },

        - Dichiarare l'Oggetto [i = 1]{
            
            'name' : '',

            'role' : '',

            'image' : ''
        },

        - Dichiarare l'Oggetto [i = 2]{
            
            'name' : '',

            'role' : '',

            'image' : ''
        },
        
        - Dichiarare l'Oggetto [i = 3]{
            
            'name' : '',

            'role' : '',

            'image' : ''
        },

        - Dichiarare l'Oggetto [i = 4]{
            
            'name' : '',

            'role' : '',

            'image' : ''
        },

        - Dichiarare l'Oggetto [i = 5]{
            
            'name' : '',

            'role' : '',

            'image' : ''
        }



- MILESTONE 1:

    - Creare un CICLO FOR che scorre tutti gli Elementi del teamArray:

        - Inserire dentro una Variabile ogni Elemento della seguente iterazione: let teamObject = teamArray[i];

        - Creare un CICLO FOR IN che stampa in Console le Chiavi e i Valori di ogni Oggetto:

            - console.log(`Chiave: ${key} - Valore: ${teamObject[key]}`).
