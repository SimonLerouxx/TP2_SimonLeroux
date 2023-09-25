import MathModel from '../models/math.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new MathModel()));
    }

    get(){

        let op =this.HttpContext.path.params["op"];
        let x=this.HttpContext.path.params["x"];
        let y=this.HttpContext.path.params["y"];
        let n = this.HttpContext.path.params["n"];

        if(x != undefined){
            if(op =="-"){
                this.HttpContext.response.JSON("[op:"+op+",x:"+x+",y:"+y+",value"+(x-y)+"]");
            }
        }
       

    }
    
}