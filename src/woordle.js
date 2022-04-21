 // dependencies / things imported
   import { LitElement, html, css } from 'lit';
 
   export class woordle extends LitElement {
     static get tag() {
       return 'woord-le';
     }
    constructor() {
         super();
  
         this.endpoint = '../api/wordGenerate';
         this.word = '';
         this.day = new Date();
         this.getWordData();
        
       }
     static get properties() {
     return{
       endpoint: {type: String},
       word: {type: String, reflect: true},
  
     }
   }
 
   updated(changedProperties) {
     changedProperties.forEach((oldValue, propName) => {
       if (propName === 'word') {
    
       }
     });
   }
     async getWordData() {
  
     return fetch(`${this.endpoint}`)
       .then(resp => {
         if (resp.ok) {
           return resp.json();
         }
         return false;
       })
       .then(data => {
         console.log(data);
 
         this.word= data[0];
 
 
       return data;
     });
     
       ;} 
 
     render() {
       return html  `
       word: ${this.word}
       `;
     }}
    
    
   customElements.define(woordle.tag, woordle);
