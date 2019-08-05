/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of the Advanced JSON forms (ajf).
 *
 * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
 * General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Advanced JSON forms (ajf).
 * If not, see http://www.gnu.org/licenses/.
 *
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {GicModule} from '@gic/angular';

import {TranslateModule} from '@ngx-translate/core';

import {AjfCommonModule} from '@ajf/core/common';
import {AjfFormsModule as AjfCoreFormsModule} from '@ajf/core/forms';
import {AjfCalendarModule} from '@ajf/ionic/calendar';
import {AjfCheckboxGroupModule} from '@ajf/ionic/checkbox-group';
import {AjfPageSliderModule} from '@ajf/ionic/page-slider';

import {AjfFormField} from './field';
import {AjfFormPage} from './form-page';
import {AjfFormRenderer} from './form';
import {AjfSelectHasSearchBarPipe} from './select-has-search-bar.pipe';
import {AjfSelectUseVirtualScroll} from './select-use-virtual-scroll.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    GicModule,
    TranslateModule,
    AjfCommonModule,
    AjfCoreFormsModule,
    AjfCalendarModule,
    AjfCheckboxGroupModule,
    AjfPageSliderModule,
  ],
  declarations: [
    AjfFormField,
    AjfFormPage,
    AjfFormRenderer,
    AjfSelectHasSearchBarPipe,
    AjfSelectUseVirtualScroll,
  ],
  exports: [
    AjfFormField,
    AjfFormRenderer,
  ]
})
export class AjfFormsModule { }
