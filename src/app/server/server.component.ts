import { Component ,OnInit} from "@angular/core";

@Component(
    {
        selector:'app-server',
        
        // styleUrls: ['.././app.component.css'],
        templateUrl:"./server.component.html",

        styles:[
            `
            h3{
                color:red
            }
            `
        ],
        // template:'<app-server></app-server><app-server></app-server>',
    }
)
export class ServerComponent
{
    constructor()
    {

    }
    ngOnInit()
    {

    }

}