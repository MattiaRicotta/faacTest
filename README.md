# EnhancersDesignSistem

Lo scopo di questo progetto è quello di creare una libreria grafica utlizzando Angular come framework e StoryBook come tool di documentazione.
Viene utilizzato l'atomic design, che ha come obiettivo quello di realizzare un progetto pensando al quadro completo: si parla di progettare il nucleo del sistema.

Le cinque fasi della progettazione atomica sono:
- Atomi
- Molecole
- Organismi
- Template
- Pagine
  

  ![alt text](https://miro.medium.com/max/2880/1*OwjMmIOi9rN5XwSOxZxT-g.png)

Dall'immagine possiamo notare che:
- Tanti atomi formano le molecole
- Tante molecole formano gli organismi
- Gli organismi insieme formano i Template
- Infine i template vengono raggruppati per comporre le pagine

Altre informazioni su questo design e su come utilizzarlo al meglio possono essere trovate al seguente url: https://medium.com/@nicolasciotti/atomic-design-dfafdb379432

## Creazione di un componente 
I nuovi componenti possono essere generati da riga di comando spostandosi sulla directory del progetto e digitando `ng generate component components/tipo-componente/nome-component`

Ad esempio l'atomo "button" è stato generato con il comando (forma breve) `ng g c components/atoms/button`

Questo comando genererà 4 file:
- nome-componente.component.html > Dove andremo a scrivere il nostro html 
- nome-componente.component.scss > Qui scriveremo il nostro codice scss
- nome-componente.component.ts > Qui scriveremo la logica del componente
- nome-componente.component.spec-ts -> Per eseguire degli unit test

Ogni componente deve avere un file nome-componente.module.ts, chiamato modulo, elemento che permetterà a chi utilizzerà la libreria in futuro di importare solo quel determinato componente. Il modulo può essere creato con `ng generate module components/tipo-componente/nome-component` oppure con la sua forma breve `ng g m components/tipo-componente/nome-component`.
Questo file dovrà poi importare al suo interno il componente realizzato.

La console di generazione dei componenti/moduli (La angular cli) è progettata in modo da importare i componenti generati nel modulo più vicino, quindi il mio consiglio è quello di generare prima il modulo e successivamente il componente in modo da avere tutto pronto con solo due righe di comando.

Prendendo in considerazione l'esempio di prima, il modo migliore per generare il componete button è il seguente:
1. `ng g m components/atoms/button`
2. `ng g c components/atoms/button`


## Creazione elemento su storybook
Per creare la documentazione del componente su storybook è sufficiente creare un file chiamato nome-component.stories.ts all'interno della directory del componente, e inserire al suo interno le specifiche del componente.

Ulteriori informazioni possono essere trovare qui: https://storybook.js.org/docs/angular/writing-stories/introduction


## Development server
Dopo averlo scaricato, per avviare il nostro progetto è fondamentale installare le dipendenze, è possibile farlo con il comando `npm install`. Bisogna tenere presente che per eseguire questo comando bisogna che sul nostro terminale sia posizionato sul root del progetto e che sul nostro pc sia installato node.

Per avviare storybook sul nostro browser è sufficiente lanciare il comando `npm run storybook` all'interno della directory del progetto





## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

