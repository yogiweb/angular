import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent }from './components/page-not-found/page-not-found.component';


import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormTestComponent } from './extra/form-test/form-test.component';
import { Form2Component } from './extra/form2.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { TitleHeaderComponent } from './components/common/title-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostPageComponent } from './components/single-page/post-page/post-page.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { ModelPopupComponent } from './components/common/model-popup/model-popup.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Page' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'list',
    component: ListEmployeesComponent,
    data: { title: 'Employees List Page' }
  },
  { path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us Page' }
  },
  { path: 'blog',
    component: SinglePageComponent,
    data: { title: 'Blog Page' }
  },
  { path: 'blog/:id',
    component: PostPageComponent,
    data: { title: 'Post Page' }
  },
  { path: 'test',
    component: FormTestComponent,
    data: { title: 'Test Page' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListEmployeesComponent,
    ContactComponent,
    FormTestComponent,
    Form2Component,
    SinglePageComponent,
    TitleHeaderComponent,
    FooterComponent,
    PostPageComponent,
    BreadcrumbComponent,
    ModelPopupComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
