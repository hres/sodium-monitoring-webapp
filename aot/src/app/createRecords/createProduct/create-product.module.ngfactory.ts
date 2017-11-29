/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../src/app/createRecords/createProduct/create-product.module';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/cdk';
import * as i4 from '@angular/platform-browser';
import * as i5 from '@angular/common';
import * as i6 from '@angular/material';
import * as i7 from '@angular/animations/browser';
import * as i8 from '@angular/platform-browser/animations';
import * as i9 from '@angular/http';
import * as i10 from '@angular/animations';
import * as i11 from '../../../../../src/app/services/getRecord.service';
import * as i12 from '../../../../../src/app/services/search.service';
import * as i13 from '../../../../../src/app/confirmbox/confirm-box.module';
import * as i14 from '@angular/router';
import * as i15 from '../../../../../src/app/editForms/editSales/edit-sales.module';
import * as i16 from '../../../../../src/app/classification-center/add-classification/add-classification.module';
import * as i17 from '../../../../../src/app/modal-box/modal-box.module';
import * as i18 from '../../../../../src/app/views/viewSales/view-sales.module';
import * as i19 from '../../../../../src/app/views/viewPackage/view-package.module';
import * as i20 from '../../../../../src/app/table/table.module';
import * as i21 from '../../../../../src/app/editForms/editProduct/edit-product.module';
import * as i22 from '../../../../../src/app/views/viewProduct/view-product.module';
export const CreateProductModuleNgFactory:i0.NgModuleFactory<i1.CreateProductModule> = i0.ɵcmf(i1.CreateProductModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.FormBuilder,i2.FormBuilder,([] as any[])),i0.ɵmpd(4608,i2.ɵi,i2.ɵi,([] as any[])),
          i0.ɵmpd(6144,i3.DIR_DOCUMENT,(null as any),[i4.DOCUMENT]),i0.ɵmpd(4608,i3.Directionality,
              i3.Directionality,[[2,i3.DIR_DOCUMENT]]),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,
              [[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i5.NgLocalization,i5.NgLocaleLocalization,
              [i0.LOCALE_ID]),i0.ɵmpd(4608,i3.Platform,i3.Platform,([] as any[])),
          i0.ɵmpd(5120,i6.FocusOriginMonitor,i6.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY,
              [[3,i6.FocusOriginMonitor],i0.NgZone,i3.Platform]),i0.ɵmpd(4608,i4.HAMMER_GESTURE_CONFIG,
              i4.HammerGestureConfig,([] as any[])),i0.ɵmpd(4608,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,
              i0.IterableDiffers,i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,
              i0.ɵl,([] as any[])),i0.ɵmpd(4608,i4.DomSanitizer,i4.ɵe,[i5.DOCUMENT]),
          i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i4.DomSanitizer]),i0.ɵmpd(5120,
              i4.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i4.ɵDomEventsPlugin(p0_0),new i4.ɵKeyEventsPlugin(p1_0),
                    new i4.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i5.DOCUMENT,i5.DOCUMENT,i5.DOCUMENT,i4.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i4.EventManager,i4.EventManager,[i4.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i4.ɵDomSharedStylesHost,i4.ɵDomSharedStylesHost,[i5.DOCUMENT]),
          i0.ɵmpd(4608,i4.ɵDomRendererFactory2,i4.ɵDomRendererFactory2,[i4.EventManager,
              i4.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i7.AnimationDriver,i8.ɵc,([] as any[])),
          i0.ɵmpd(5120,i7.ɵAnimationStyleNormalizer,i8.ɵd,([] as any[])),i0.ɵmpd(4608,
              i7.ɵAnimationEngine,i8.ɵb,[i7.AnimationDriver,i7.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i8.ɵe,[i4.ɵDomRendererFactory2,i7.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i4.ɵSharedStylesHost,(null as any),[i4.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i4.Meta,
              i4.Meta,[i5.DOCUMENT]),i0.ɵmpd(4608,i4.Title,i4.Title,[i5.DOCUMENT]),
          i0.ɵmpd(5120,i6.MdIconRegistry,i6.ICON_REGISTRY_PROVIDER_FACTORY,[[3,i6.MdIconRegistry],
              [2,i9.Http],i4.DomSanitizer]),i0.ɵmpd(5120,i6.ScrollDispatcher,i6.ɵe,
              [[3,i6.ScrollDispatcher],i0.NgZone,i3.Platform]),i0.ɵmpd(5120,i6.ViewportRuler,
              i6.ɵc,[[3,i6.ViewportRuler],i6.ScrollDispatcher]),i0.ɵmpd(4608,i6.ScrollStrategyOptions,
              i6.ScrollStrategyOptions,[i6.ScrollDispatcher,i6.ViewportRuler]),i0.ɵmpd(4608,
              i3.InteractivityChecker,i3.InteractivityChecker,[i3.Platform]),i0.ɵmpd(4608,
              i3.FocusTrapFactory,i3.FocusTrapFactory,[i3.InteractivityChecker,i3.Platform,
                  i0.NgZone]),i0.ɵmpd(5120,i3.LiveAnnouncer,i3.LIVE_ANNOUNCER_PROVIDER_FACTORY,
              [[3,i3.LiveAnnouncer],[2,i3.LIVE_ANNOUNCER_ELEMENT_TOKEN],i3.Platform]),
          i0.ɵmpd(5120,i6.OverlayContainer,i6.ɵa,[[3,i6.OverlayContainer]]),i0.ɵmpd(4608,
              i6.ɵt,i6.ɵt,[i6.ViewportRuler]),i0.ɵmpd(4608,i6.Overlay,i6.Overlay,[i6.ScrollStrategyOptions,
              i6.OverlayContainer,i0.ComponentFactoryResolver,i6.ɵt,i0.ApplicationRef,
              i0.Injector,i0.NgZone]),i0.ɵmpd(4608,i10.AnimationBuilder,i8.ɵBrowserAnimationBuilder,
              [i0.RendererFactory2]),i0.ɵmpd(4608,i11.GetRecordService,i11.GetRecordService,
              [i9.Http]),i0.ɵmpd(4608,i12.SearchService,i12.SearchService,[i9.Http]),
          i0.ɵmpd(512,i2.ɵba,i2.ɵba,([] as any[])),i0.ɵmpd(512,i2.ReactiveFormsModule,
              i2.ReactiveFormsModule,([] as any[])),i0.ɵmpd(512,i2.FormsModule,i2.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i6.CompatibilityModule,i6.CompatibilityModule,
              ([] as any[])),i0.ɵmpd(512,i3.BidiModule,i3.BidiModule,([] as any[])),
          i0.ɵmpd(256,i6.MATERIAL_SANITY_CHECKS,true,([] as any[])),i0.ɵmpd(512,i6.MdCommonModule,
              i6.MdCommonModule,[[2,i4.DOCUMENT],[2,i6.MATERIAL_SANITY_CHECKS]]),i0.ɵmpd(512,
              i6.MdCardModule,i6.MdCardModule,([] as any[])),i0.ɵmpd(512,i5.CommonModule,
              i5.CommonModule,([] as any[])),i0.ɵmpd(512,i6.MdProgressBarModule,i6.MdProgressBarModule,
              ([] as any[])),i0.ɵmpd(512,i3.PlatformModule,i3.PlatformModule,([] as any[])),
          i0.ɵmpd(512,i6.StyleModule,i6.StyleModule,([] as any[])),i0.ɵmpd(512,i6.MdSliderModule,
              i6.MdSliderModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i4.ɵa,
              ([] as any[])),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any) => {
            return [i4.ɵc(p0_0,p0_1)];
          },[[2,i4.NgProbeToken],[2,i0.NgProbeToken]]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i4.BrowserModule,i4.BrowserModule,[[3,i4.BrowserModule]]),i0.ɵmpd(512,
              i13.ConfirmBoxModule,i13.ConfirmBoxModule,([] as any[])),i0.ɵmpd(512,
              i6.MdIconModule,i6.MdIconModule,([] as any[])),i0.ɵmpd(512,i14.RouterModule,
              i14.RouterModule,[[2,i14.ɵa],[2,i14.Router]]),i0.ɵmpd(512,i15.EditSalesModule,
              i15.EditSalesModule,([] as any[])),i0.ɵmpd(512,i6.MdInputModule,i6.MdInputModule,
              ([] as any[])),i0.ɵmpd(512,i6.ScrollDispatchModule,i6.ScrollDispatchModule,
              ([] as any[])),i0.ɵmpd(512,i6.MdRippleModule,i6.MdRippleModule,([] as any[])),
          i0.ɵmpd(512,i6.MdButtonModule,i6.MdButtonModule,([] as any[])),i0.ɵmpd(512,
              i3.A11yModule,i3.A11yModule,([] as any[])),i0.ɵmpd(512,i3.PortalModule,
              i3.PortalModule,([] as any[])),i0.ɵmpd(512,i6.OverlayModule,i6.OverlayModule,
              ([] as any[])),i0.ɵmpd(512,i6.MdSidenavModule,i6.MdSidenavModule,([] as any[])),
          i0.ɵmpd(512,i6.MdSelectionModule,i6.MdSelectionModule,([] as any[])),i0.ɵmpd(512,
              i6.MdOptionModule,i6.MdOptionModule,([] as any[])),i0.ɵmpd(512,i6.MdSelectModule,
              i6.MdSelectModule,([] as any[])),i0.ɵmpd(512,i16.AddClassificationModule,
              i16.AddClassificationModule,([] as any[])),i0.ɵmpd(512,i8.BrowserAnimationsModule,
              i8.BrowserAnimationsModule,([] as any[])),i0.ɵmpd(512,i17.ModalBoxModule,
              i17.ModalBoxModule,([] as any[])),i0.ɵmpd(512,i18.ViewSalesModule,i18.ViewSalesModule,
              ([] as any[])),i0.ɵmpd(512,i19.ViewPackageModule,i19.ViewPackageModule,
              ([] as any[])),i0.ɵmpd(512,i20.CustumTableModule,i20.CustumTableModule,
              ([] as any[])),i0.ɵmpd(512,i21.EditProductModule,i21.EditProductModule,
              ([] as any[])),i0.ɵmpd(512,i22.ViewProductModule,i22.ViewProductModule,
              ([] as any[])),i0.ɵmpd(512,i1.CreateProductModule,i1.CreateProductModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvY3JlYXRlUmVjb3Jkcy9jcmVhdGVQcm9kdWN0L2NyZWF0ZS1wcm9kdWN0Lm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3JvbWFyaW8vYW5ndWxhcmFwaS9zcmMvYXBwL2NyZWF0ZVJlY29yZHMvY3JlYXRlUHJvZHVjdC9jcmVhdGUtcHJvZHVjdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
