
export const MODIFY='MODIFY'
export class AppActions {
    static modify(delta:number){
        var faction=3;
        console.log("AppActions:modify factor faction:", faction)
        return {type:MODIFY,delta:delta*faction}
    }
}
