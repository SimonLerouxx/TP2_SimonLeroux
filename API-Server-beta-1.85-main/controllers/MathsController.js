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
        let x=this.HttpContext.path.params["x"];
        let y=this.HttpContext.path.params["y"];
        let n = this.HttpContext.path.params["n"];

        if(op == undefined){
            console.log("fvhb");

            //window.location.href ="http://localhost:5000/api/maths/maths.html";
        }


        if(op =="-"){
            this.HttpContext.response.JSON("[op:"+op+",x:"+x+",y:"+y+",value:"+(x-y)+"]");
        }
        else if(op ==" "){
            this.HttpContext.response.JSON("[op:+"+",x:"+x+",y:"+y+",value:"+(x+y)+"]");
        }
        else if(op=="/"){
            this.HttpContext.response.JSON("[op:+"/",x:"+x+",y:"+y+",value:"+(x / y)+"]");
        }
        else if(op=="/"){
            this.HttpContext.response.JSON("[op:+"*",x:"+x+",y:"+y+",value:"+(x * y)+"]");
        }

       
       

    }
    
}