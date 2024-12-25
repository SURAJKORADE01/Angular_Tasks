import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReaddataComponent } from './readdata/readdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { CreatedataComponent } from './createdata/createdata.component';
import { DeletedataComponent } from './deletedata/deletedata.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },

    {
        path: 'getbatches',
        component: ReaddataComponent
    },

    {
        path: 'updatedata',
        component : UpdatedataComponent
    },

    {
        path: 'insertdata',
        component : CreatedataComponent
    },

    {
        path : 'deletedata',
        component : DeletedataComponent
    }
];
