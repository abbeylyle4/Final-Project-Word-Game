// dependencies / things imported
  import { LitElement, html, css } from 'lit';
 
   export class woordle extends LitElement {
     static get tag() {
       return 'woord-le';
     }
    constructor() {
         super();
  
         this.endpoint = 'https://random-word-api.herokuapp.com/word?number=1&length=5';
         this.word = '';
         this.day = new Date();
        
       }
     static get properties() {
     return{
       endpoint: {type: String},
       word: {type: String, reflect: true},
  
     }
   }
 /*   firstUpdated(changedProperties) {
     if (super.firstUpdated) {
       super.firstUpdated(changedProperties);
     }
     this.getWordData();
    } */
 
   updated(changedProperties) {
     changedProperties.forEach((oldValue, propName) => {
       if (propName === 'word') {
         this.getWordData(this[propName]);
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
      
 
      this.word = data.word;
      console.log(data);
 
       return data;
     });
     
       ;} 
       //  async getWordData() {
       //   return fetch(`${this.endpoint}`)
       //     .then(resp => resp.json())
       //     .then(data => {
       //       this.word =data.word;
       //     }
       //     );}
    
   
 
     render() {
       return html  `
       word:"${this.word}"
  
 
  
       `;
     }}
    
    
   customElements.define(woordle.tag, woordle);
 
