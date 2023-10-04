import MathModel from '../models/math.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';
import fs from "fs";


export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new MathModel()));
    }

    get(){

        let op =this.HttpContext.path.params["op"];
        let x= parseInt( this.HttpContext.path.params["x"]);

        
        if(this.HttpContext.path.params["x"] ==undefined){
            x= parseInt( this.HttpContext.path.params["X"]);
        }
       
        let y=parseInt(this.HttpContext.path.params["y"]);

        if(this.HttpContext.path.params["y"] ==undefined){
            y= parseInt( this.HttpContext.path.params["Y"]);
        }
        
        let n = this.HttpContext.path.params["n"];




        if(op == undefined && (!isNaN(x) || n!= undefined)){
            
            this.HttpContext.response.JSON({error: "you need a operator"});

            //window.location.href ="http://localhost:5000/api/maths/maths.html";
        }

        

        if(op =="-"){
            this.HttpContext.response.JSON({op: op ,x: x,y:y,value:(x-y)});
        }
        else if(op ==" "){
            this.HttpContext.response.JSON({op: "+" ,x: x,y:y,value:(x+y)});
        }
        else if(op=="/"){
            if(y==0){
                this.HttpContext.response.JSON({op: op ,x: x,y:y,value:"NaN"});
            }
            else{
                this.HttpContext.response.JSON({op: op ,x: x,y:y,value:(x/y)});
            }
            
        }
        else if(op=="*"){
            this.HttpContext.response.JSON({op: op ,x: x,y:y,value:(x*y)});
        }
        else if(op=="%"){
            if(y==0){
                this.HttpContext.response.JSON({op: op ,x: x,y:y,value:"NaN"});
            }
            else{
                this.HttpContext.response.JSON({op: op ,x: x,y:y,value:(x%y)});
            }
        }
        else if(op=="!"){
            if(n==0){
                this.HttpContext.response.JSON({op: op ,n: n,error:"No 0"});
            }
            else{
                this.HttpContext.response.JSON({op: op ,n: n,value:(factorial(n))});
            }
            
        }
        else if(op=="p"){
            if(n==0){
                this.HttpContext.response.JSON({op: op ,n: n,error:"No 0"});
            }
            else if((n - Math.floor(n)) !== 0){
                this.HttpContext.response.JSON({op: op ,n: n,error:"Number cant have decimals"});
            }
            else{
                this.HttpContext.response.JSON({op: op ,n: n,value:(isPrime(n))});
            }
            
        }
        else if(op=="np"){
            this.HttpContext.response.JSON({op: op ,n: n,value:(findPrime(n))});
        }
        else{
            this.HttpContext.response.JSON({error: "Bad request"});
        }

        
       
        function isPrime(value) {
            for (var i = 2; i < value; i++) {
                if (value % i === 0) {
                    return false;
                }
            }
            return value > 1;
        }

        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * factorial(n - 1);
        }

        function findPrime(n) {
            let primeNumer = 0;
            for (let i = 0; i < n; i++) {
                primeNumer++;
                while (!isPrime(primeNumer)) {
                    primeNumer++;
                }
            }
            return primeNumer;
        }

    }




    

    
    
}