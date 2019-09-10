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

import {AjfWidgetSerializer, AjfWidgetType, createWidgetInstance} from '@ajf/core/reports';
import {TestBed} from '@angular/core/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {AjfReportWidget, AjfReportsModule} from './public-api';

describe('AjfReportWidget', () => {
  let ts: TranslateService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AjfReportsModule,
        TranslateModule.forRoot(),
      ],
    });

    ts = TestBed.get(TranslateService);
    await TestBed.compileComponents();
  });

  it('should respect widget visibility', async () => {
    const widget = AjfWidgetSerializer.fromJson({
      widgetType: AjfWidgetType.Text,
      htmlText: 'foo',
      visibility: {condition: 'false'}
    } as any);
    const instance = createWidgetInstance(widget, {}, ts);

    const fixture = TestBed.createComponent(AjfReportWidget);
    const cmp = fixture.componentInstance;
    cmp.instance = instance;

    fixture.detectChanges();
    await fixture.whenRenderingDone();

    const el = fixture.nativeElement as HTMLElement;
    const cmps = el.getElementsByTagName('ng-component');
    expect(cmps.length).toBe(0);
  });
});
