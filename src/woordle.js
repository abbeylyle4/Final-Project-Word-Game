// dependencies / things imported
   import { LitElement, html, css } from 'lit';
 
   // EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
   // which has the magic life-cycles and developer experience below added
  
   /**
    * @todo For lab 2 see homework for week two of class
    */
   export class woordle extends LitElement {
     // a convention I enjoy so you can change the tag name in 1 place
     static get properties() {
   
     return{
       endpoint: {type: String},
  
     }
   }
       constructor() {
         super();
         this.endpoint ='/api/wordGenerate';
         this.word = [];
       }
     
  
     updated(changedProperties) {
      
       changedProperties.forEach((oldValue, propName) => {
    
         if (propName === 'word' && this[propName]) {
        
           const evt = new CustomEvent('word-changed', {
         
             bubbles: true,
        
             composed: true,
            
             cancelable: true,
           
             detail: {
               value: this.ip,
             },
           });
  
           this.dispatchEvent(evt);
         }
       });
     }
  
  
  
     firstUpdated(changedProperties) {
  
       if (super.firstUpdated) {
         super.firstUpdated(changedProperties);
       }
    
       if (this.word === null) {
         this.updateWord();
       }
     }
  
     async updateWord() {
       return fetch(this.wordLookUp)
         .then(resp => {
           if (resp.ok) {
             return resp.json();
           }
           return false;
         })
         .then(data => {
           this.word = data.word;
           this.wordLength = data.wordLength;
  
  
           return data;
         });
     }
   
      static get styles() {
       return [
         css`
           :host {
             display: block;
           }
        
           ul {
             margin: 0 8px;
             list-style-type: square;
             font-size: 20px;
           }
       
           li {
             margin: 0;
             padding: 0;
           }
           .ipaddress {
             font-style: var(--user-ip-ipaddress-font-style, italic);
           }
         `,
       ];
     }
    
  
     render() {
       // this function runs every time a properties() declared variable changes
       // this means you can make new variables and then bind them this way if you like
  
       const url = `https://random-word-api.herokuapp.com/all`;
       // var wordList = await fetch(url).then(res => res.json());
       // filter array to just 5 letter words
       //wordList = wordList.filter(item => item.length === 5);
 
  
  
       return html  `<iframe title="Word" src = ${url}></iframe> `;
     }}
    
   customElements.define('woord-le', woordle);
