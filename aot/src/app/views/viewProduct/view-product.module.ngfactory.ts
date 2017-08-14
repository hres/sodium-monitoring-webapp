/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../src/app/views/viewProduct/view-product.module';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser';
import * as i4 from '@angular/material';
import * as i5 from '@angular/animations/browser';
import * as i6 from '@angular/platform-browser/animations';
import * as i7 from '@angular/cdk';
import * as i8 from '@angular/http';
import * as i9 from '@angular/forms';
import * as i10 from '@angular/animations';
import * as i11 from '../../../../../src/app/services/search.service';
import * as i12 from '../../../../../src/app/table/table.module';
import * as i13 from '../../../../../src/app/classification-center/add-classification/add-classification.module';
import * as i14 from '../../../../../src/app/modal-box/modal-box.module';
export const ViewProductModuleNgFactory:i0.NgModuleFactory<i1.ViewProductModule> = i0.ɵcmf(i1.ViewProductModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(5120,
          i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i2.NgLocalization,i2.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(4608,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(5120,
          i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i3.DomSanitizer,
              i3.ɵe,[i2.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i3.DomSanitizer]),
          i0.ɵmpd(4608,i3.HAMMER_GESTURE_CONFIG,i4.GestureConfig,([] as any[])),i0.ɵmpd(5120,
              i3.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i3.ɵDomEventsPlugin(p0_0),new i3.ɵKeyEventsPlugin(p1_0),
                    new i3.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i2.DOCUMENT,i2.DOCUMENT,i2.DOCUMENT,i3.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i3.EventManager,i3.EventManager,[i3.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i3.ɵDomSharedStylesHost,i3.ɵDomSharedStylesHost,[i2.DOCUMENT]),
          i0.ɵmpd(4608,i3.ɵDomRendererFactory2,i3.ɵDomRendererFactory2,[i3.EventManager,
              i3.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i5.AnimationDriver,i6.ɵc,([] as any[])),
          i0.ɵmpd(5120,i5.ɵAnimationStyleNormalizer,i6.ɵd,([] as any[])),i0.ɵmpd(4608,
              i5.ɵAnimationEngine,i6.ɵb,[i5.AnimationDriver,i5.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i6.ɵe,[i3.ɵDomRendererFactory2,i5.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i3.ɵSharedStylesHost,(null as any),[i3.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i3.Meta,
              i3.Meta,[i2.DOCUMENT]),i0.ɵmpd(4608,i3.Title,i3.Title,[i2.DOCUMENT]),
          i0.ɵmpd(6144,i7.DIR_DOCUMENT,(null as any),[i3.DOCUMENT]),i0.ɵmpd(4608,i7.Directionality,
              i7.Directionality,[[2,i7.DIR_DOCUMENT]]),i0.ɵmpd(5120,i4.MdIconRegistry,
              i4.ICON_REGISTRY_PROVIDER_FACTORY,[[3,i4.MdIconRegistry],[2,i8.Http],
                  i3.DomSanitizer]),i0.ɵmpd(4608,i9.FormBuilder,i9.FormBuilder,([] as any[])),
          i0.ɵmpd(4608,i9.ɵi,i9.ɵi,([] as any[])),i0.ɵmpd(4608,i7.Platform,i7.Platform,
              ([] as any[])),i0.ɵmpd(5120,i4.ScrollDispatcher,i4.ɵe,[[3,i4.ScrollDispatcher],
              i0.NgZone,i7.Platform]),i0.ɵmpd(5120,i4.ViewportRuler,i4.ɵc,[[3,i4.ViewportRuler],
              i4.ScrollDispatcher]),i0.ɵmpd(4608,i4.ScrollStrategyOptions,i4.ScrollStrategyOptions,
              [i4.ScrollDispatcher,i4.ViewportRuler]),i0.ɵmpd(5120,i4.FocusOriginMonitor,
              i4.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY,[[3,i4.FocusOriginMonitor],
                  i0.NgZone,i7.Platform]),i0.ɵmpd(4608,i7.InteractivityChecker,i7.InteractivityChecker,
              [i7.Platform]),i0.ɵmpd(4608,i7.FocusTrapFactory,i7.FocusTrapFactory,
              [i7.InteractivityChecker,i7.Platform,i0.NgZone]),i0.ɵmpd(5120,i7.LiveAnnouncer,
              i7.LIVE_ANNOUNCER_PROVIDER_FACTORY,[[3,i7.LiveAnnouncer],[2,i7.LIVE_ANNOUNCER_ELEMENT_TOKEN],
                  i7.Platform]),i0.ɵmpd(5120,i4.OverlayContainer,i4.ɵa,[[3,i4.OverlayContainer]]),
          i0.ɵmpd(4608,i4.ɵt,i4.ɵt,[i4.ViewportRuler]),i0.ɵmpd(4608,i4.Overlay,i4.Overlay,
              [i4.ScrollStrategyOptions,i4.OverlayContainer,i0.ComponentFactoryResolver,
                  i4.ɵt,i0.ApplicationRef,i0.Injector,i0.NgZone]),i0.ɵmpd(4608,i10.AnimationBuilder,
              i6.ɵBrowserAnimationBuilder,[i0.RendererFactory2]),i0.ɵmpd(4608,i11.SearchService,
              i11.SearchService,[i8.Http]),i0.ɵmpd(512,i2.CommonModule,i2.CommonModule,
              ([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i3.ɵa,([] as any[])),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any) => {
                return [i3.ɵc(p0_0,p0_1)];
              },[[2,i3.NgProbeToken],[2,i0.NgProbeToken]]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i3.BrowserModule,i3.BrowserModule,[[3,i3.BrowserModule]]),i0.ɵmpd(512,
              i4.CompatibilityModule,i4.CompatibilityModule,([] as any[])),i0.ɵmpd(512,
              i7.BidiModule,i7.BidiModule,([] as any[])),i0.ɵmpd(256,i4.MATERIAL_SANITY_CHECKS,
              true,([] as any[])),i0.ɵmpd(512,i4.MdCommonModule,i4.MdCommonModule,
              [[2,i3.DOCUMENT],[2,i4.MATERIAL_SANITY_CHECKS]]),i0.ɵmpd(512,i4.MdIconModule,
              i4.MdIconModule,([] as any[])),i0.ɵmpd(512,i12.CustumTableModule,i12.CustumTableModule,
              ([] as any[])),i0.ɵmpd(512,i9.ɵba,i9.ɵba,([] as any[])),i0.ɵmpd(512,
              i9.ReactiveFormsModule,i9.ReactiveFormsModule,([] as any[])),i0.ɵmpd(512,
              i9.FormsModule,i9.FormsModule,([] as any[])),i0.ɵmpd(512,i4.MdCardModule,
              i4.MdCardModule,([] as any[])),i0.ɵmpd(512,i4.MdProgressBarModule,i4.MdProgressBarModule,
              ([] as any[])),i0.ɵmpd(512,i7.PlatformModule,i7.PlatformModule,([] as any[])),
          i0.ɵmpd(512,i4.MdInputModule,i4.MdInputModule,([] as any[])),i0.ɵmpd(512,
              i4.ScrollDispatchModule,i4.ScrollDispatchModule,([] as any[])),i0.ɵmpd(512,
              i4.MdRippleModule,i4.MdRippleModule,([] as any[])),i0.ɵmpd(512,i4.StyleModule,
              i4.StyleModule,([] as any[])),i0.ɵmpd(512,i4.MdButtonModule,i4.MdButtonModule,
              ([] as any[])),i0.ɵmpd(512,i7.A11yModule,i7.A11yModule,([] as any[])),
          i0.ɵmpd(512,i7.PortalModule,i7.PortalModule,([] as any[])),i0.ɵmpd(512,i4.OverlayModule,
              i4.OverlayModule,([] as any[])),i0.ɵmpd(512,i4.MdSidenavModule,i4.MdSidenavModule,
              ([] as any[])),i0.ɵmpd(512,i4.MdSelectionModule,i4.MdSelectionModule,
              ([] as any[])),i0.ɵmpd(512,i4.MdOptionModule,i4.MdOptionModule,([] as any[])),
          i0.ɵmpd(512,i4.MdSelectModule,i4.MdSelectModule,([] as any[])),i0.ɵmpd(512,
              i4.MdSliderModule,i4.MdSliderModule,([] as any[])),i0.ɵmpd(512,i13.AddClassificationModule,
              i13.AddClassificationModule,([] as any[])),i0.ɵmpd(512,i6.BrowserAnimationsModule,
              i6.BrowserAnimationsModule,([] as any[])),i0.ɵmpd(512,i14.ModalBoxModule,
              i14.ModalBoxModule,([] as any[])),i0.ɵmpd(512,i1.ViewProductModule,i1.ViewProductModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvdmlld3Mvdmlld1Byb2R1Y3Qvdmlldy1wcm9kdWN0Lm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3JvbWFyaW8vYW5ndWxhcmFwaS9zcmMvYXBwL3ZpZXdzL3ZpZXdQcm9kdWN0L3ZpZXctcHJvZHVjdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9