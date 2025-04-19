import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MaiMenuComponent } from './header/mai-menu/mai-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeatureBrandsComponent } from './container/feature-brands/feature-brands.component';
import { StyleBackground } from './Custom Directive/stylebackgroud.directive';
import { HighlightDirective } from './Custom Directive/highlight.directive';
import { AppHoverDirective } from './Custom Directive/app-hover.directive';
import { DisableProductDirective } from './Custom Directive/disable-product.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MaiMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeatureBrandsComponent,
    StyleBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
