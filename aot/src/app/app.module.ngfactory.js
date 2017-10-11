"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../src/app/app.module");
var i2 = require("../../../src/app/app.component");
var i3 = require("../../node_modules/@angular/material/typings/index.ngfactory");
var i4 = require("./forms/productForm/form.component.ngfactory");
var i5 = require("./forms/salesForm/sales-form.component.ngfactory");
var i6 = require("./views/viewProduct/view-product.component.ngfactory");
var i7 = require("./radio-button/radio-button.component.ngfactory");
var i8 = require("./app.component.ngfactory");
var i9 = require("@angular/common");
var i10 = require("@angular/platform-browser");
var i11 = require("@angular/animations/browser");
var i12 = require("@angular/platform-browser/animations");
var i13 = require("@angular/animations");
var i14 = require("@angular/forms");
var i15 = require("@angular/cdk");
var i16 = require("@angular/material");
var i17 = require("@angular/http");
var i18 = require("../../../src/app/services/search.service");
var i19 = require("@angular/router");
var i20 = require("../../../src/app/services/add-classification.service");
var i21 = require("../../../src/app/forms/productForm/form.component");
var i22 = require("../../../src/app/forms/salesForm/sales-form.component");
var i23 = require("../../../src/app/views/viewProduct/view-product.component");
var i24 = require("../../../src/app/radio-button/radio-button.component");
var i25 = require("../../../src/app/shared/shared.module");
var i26 = require("../../../src/app/pagination/pagination.model");
var i27 = require("../../../src/app/forms/productForm/form.module");
var i28 = require("../../../src/app/forms/salesForm/sales-form.module");
var i29 = require("../../../src/app/forms/labelForm/label-form.module");
var i30 = require("../../../src/app/forms-center/forms-center.module");
var i31 = require("../../../src/app/radio-button/radio-button.module");
var i32 = require("../../../src/app/table/table.module");
var i33 = require("../../../src/app/classification-center/add-classification/add-classification.module");
var i34 = require("../../../src/app/modal-box/modal-box.module");
var i35 = require("../../../src/app/views/viewProduct/view-product.module");
exports.AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MdDialogContainerNgFactory, i3.MdDatepickerContentNgFactory, i4.FormComponentNgFactory,
                    i5.SalesFormComponentNgFactory, i6.ViewProductComponentNgFactory, i7.RadioButtonComponentNgFactory,
                    i8.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i9.NgLocalization, i9.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []),
        i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i10.DomSanitizer, i10.ɵe, [i9.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i10.DomSanitizer]),
        i0.ɵmpd(4608, i10.HAMMER_GESTURE_CONFIG, i10.HammerGestureConfig, []),
        i0.ɵmpd(5120, i10.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i10.ɵDomEventsPlugin(p0_0), new i10.ɵKeyEventsPlugin(p1_0),
                new i10.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i9.DOCUMENT, i9.DOCUMENT, i9.DOCUMENT, i10.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i10.EventManager, i10.EventManager, [i10.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i10.ɵDomSharedStylesHost, i10.ɵDomSharedStylesHost, [i9.DOCUMENT]),
        i0.ɵmpd(4608, i10.ɵDomRendererFactory2, i10.ɵDomRendererFactory2, [i10.EventManager,
            i10.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i11.AnimationDriver, i12.ɵc, []),
        i0.ɵmpd(5120, i11.ɵAnimationStyleNormalizer, i12.ɵd, []), i0.ɵmpd(4608, i11.ɵAnimationEngine, i12.ɵb, [i11.AnimationDriver, i11.ɵAnimationStyleNormalizer]),
        i0.ɵmpd(5120, i0.RendererFactory2, i12.ɵe, [i10.ɵDomRendererFactory2, i11.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(6144, i10.ɵSharedStylesHost, null, [i10.ɵDomSharedStylesHost]),
        i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i10.Meta, i10.Meta, [i9.DOCUMENT]), i0.ɵmpd(4608, i10.Title, i10.Title, [i9.DOCUMENT]),
        i0.ɵmpd(4608, i13.AnimationBuilder, i12.ɵBrowserAnimationBuilder, [i0.RendererFactory2]),
        i0.ɵmpd(4608, i14.FormBuilder, i14.FormBuilder, []), i0.ɵmpd(4608, i14.ɵi, i14.ɵi, []), i0.ɵmpd(6144, i15.DIR_DOCUMENT, null, [i10.DOCUMENT]), i0.ɵmpd(4608, i15.Directionality, i15.Directionality, [[2,
                i15.DIR_DOCUMENT]]), i0.ɵmpd(4608, i15.Platform, i15.Platform, []),
        i0.ɵmpd(4608, i15.InteractivityChecker, i15.InteractivityChecker, [i15.Platform]),
        i0.ɵmpd(4608, i15.FocusTrapFactory, i15.FocusTrapFactory, [i15.InteractivityChecker,
            i15.Platform, i0.NgZone]), i0.ɵmpd(5120, i15.LiveAnnouncer, i15.LIVE_ANNOUNCER_PROVIDER_FACTORY, [[3, i15.LiveAnnouncer], [2, i15.LIVE_ANNOUNCER_ELEMENT_TOKEN], i15.Platform]),
        i0.ɵmpd(5120, i16.ScrollDispatcher, i16.ɵe, [[3, i16.ScrollDispatcher], i0.NgZone,
            i15.Platform]), i0.ɵmpd(5120, i16.ViewportRuler, i16.ɵc, [[3, i16.ViewportRuler],
            i16.ScrollDispatcher]), i0.ɵmpd(4608, i16.ScrollStrategyOptions, i16.ScrollStrategyOptions, [i16.ScrollDispatcher, i16.ViewportRuler]), i0.ɵmpd(5120, i16.OverlayContainer, i16.ɵa, [[3, i16.OverlayContainer]]), i0.ɵmpd(4608, i16.ɵt, i16.ɵt, [i16.ViewportRuler]),
        i0.ɵmpd(4608, i16.Overlay, i16.Overlay, [i16.ScrollStrategyOptions, i16.OverlayContainer,
            i0.ComponentFactoryResolver, i16.ɵt, i0.ApplicationRef, i0.Injector, i0.NgZone]),
        i0.ɵmpd(5120, i16.FocusOriginMonitor, i16.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY, [[3, i16.FocusOriginMonitor], i0.NgZone, i15.Platform]), i0.ɵmpd(4608, i9.CurrencyPipe, i9.CurrencyPipe, [i0.LOCALE_ID]), i0.ɵmpd(4608, i16.MdDialog, i16.MdDialog, [i16.Overlay, i0.Injector, [2, i9.Location], [3, i16.MdDialog]]), i0.ɵmpd(4608, i16.MdDatepickerIntl, i16.MdDatepickerIntl, []), i0.ɵmpd(4608, i17.BrowserXhr, i17.BrowserXhr, []), i0.ɵmpd(4608, i17.ResponseOptions, i17.BaseResponseOptions, []), i0.ɵmpd(5120, i17.XSRFStrategy, i17.ɵb, []), i0.ɵmpd(4608, i17.XHRBackend, i17.XHRBackend, [i17.BrowserXhr,
            i17.ResponseOptions, i17.XSRFStrategy]), i0.ɵmpd(4608, i17.RequestOptions, i17.BaseRequestOptions, []), i0.ɵmpd(5120, i17.Http, i17.ɵc, [i17.XHRBackend,
            i17.RequestOptions]), i0.ɵmpd(4608, i16.MdIconRegistry, i16.MdIconRegistry, [[2, i17.Http], i10.DomSanitizer]), i0.ɵmpd(4608, i16.DateAdapter, i16.NativeDateAdapter, []), i0.ɵmpd(4608, i15.MdMutationObserverFactory, i15.MdMutationObserverFactory, []), i0.ɵmpd(5120, i16.UniqueSelectionDispatcher, i16.ɵh, [[3,
                i16.UniqueSelectionDispatcher]]), i0.ɵmpd(4608, i18.SearchService, i18.SearchService, [i17.Http]), i0.ɵmpd(5120, i19.ActivatedRoute, i19.ɵf, [i19.Router]), i0.ɵmpd(4608, i19.NoPreloading, i19.NoPreloading, []), i0.ɵmpd(6144, i19.PreloadingStrategy, null, [i19.NoPreloading]), i0.ɵmpd(135680, i19.RouterPreloader, i19.RouterPreloader, [i19.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i19.PreloadingStrategy]), i0.ɵmpd(4608, i19.PreloadAllModules, i19.PreloadAllModules, []), i0.ɵmpd(5120, i19.ROUTER_INITIALIZER, i19.ɵi, [i19.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i19.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i20.AddClassificationService, i20.AddClassificationService, [i17.Http]), i0.ɵmpd(512, i9.CommonModule, i9.CommonModule, []),
        i0.ɵmpd(1024, i0.ErrorHandler, i10.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i19.ɵb()];
        }, []), i0.ɵmpd(512, i19.ɵg, i19.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i10.ɵc(p0_0, p0_1), i19.ɵh(p1_0)];
        }, [[2, i10.NgProbeToken], [2, i0.NgProbeToken], i19.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i10.BrowserModule, i10.BrowserModule, [[3, i10.BrowserModule]]),
        i0.ɵmpd(512, i12.BrowserAnimationsModule, i12.BrowserAnimationsModule, []),
        i0.ɵmpd(1024, i19.ɵa, i19.ɵd, [[3, i19.Router]]), i0.ɵmpd(512, i19.UrlSerializer, i19.DefaultUrlSerializer, []), i0.ɵmpd(512, i19.ChildrenOutletContexts, i19.ChildrenOutletContexts, []), i0.ɵmpd(256, i19.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i9.LocationStrategy, i19.ɵc, [i9.PlatformLocation,
            [2, i9.APP_BASE_HREF], i19.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i9.Location, i9.Location, [i9.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i19.ROUTES, function () {
            return [[{ path: 'search', component: i21.FormComponent }, { path: 'salesSearch',
                        component: i22.SalesFormComponent }, { path: 'viewproduct/:id', component: i23.ViewProductComponent },
                    { path: 'radiobutton', component: i24.RadioButtonComponent }, { path: '',
                        redirectTo: '/radiobutton', pathMatch: 'full' }]];
        }, []), i0.ɵmpd(1024, i19.Router, i19.ɵe, [i0.ApplicationRef, i19.UrlSerializer,
            i19.ChildrenOutletContexts, i9.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i19.ROUTES, i19.ROUTER_CONFIGURATION, [2, i19.UrlHandlingStrategy],
            [2, i19.RouteReuseStrategy]]), i0.ɵmpd(512, i19.RouterModule, i19.RouterModule, [[2, i19.ɵa], [2, i19.Router]]), i0.ɵmpd(512, i14.ɵba, i14.ɵba, []),
        i0.ɵmpd(512, i14.ReactiveFormsModule, i14.ReactiveFormsModule, []),
        i0.ɵmpd(512, i14.FormsModule, i14.FormsModule, []), i0.ɵmpd(512, i16.CompatibilityModule, i16.CompatibilityModule, []), i0.ɵmpd(512, i15.BidiModule, i15.BidiModule, []), i0.ɵmpd(256, i16.MATERIAL_SANITY_CHECKS, true, []),
        i0.ɵmpd(512, i16.MdCommonModule, i16.MdCommonModule, [[2, i10.DOCUMENT], [2, i16.MATERIAL_SANITY_CHECKS]]),
        i0.ɵmpd(512, i16.MdCardModule, i16.MdCardModule, []), i0.ɵmpd(512, i16.MdProgressBarModule, i16.MdProgressBarModule, []), i0.ɵmpd(512, i15.PlatformModule, i15.PlatformModule, []), i0.ɵmpd(512, i15.A11yModule, i15.A11yModule, []), i0.ɵmpd(512, i15.PortalModule, i15.PortalModule, []), i0.ɵmpd(512, i16.ScrollDispatchModule, i16.ScrollDispatchModule, []), i0.ɵmpd(512, i16.OverlayModule, i16.OverlayModule, []),
        i0.ɵmpd(512, i16.MdSidenavModule, i16.MdSidenavModule, []), i0.ɵmpd(512, i16.StyleModule, i16.StyleModule, []), i0.ɵmpd(512, i16.MdSliderModule, i16.MdSliderModule, []), i0.ɵmpd(512, i25.SharedModule, i25.SharedModule, []), i0.ɵmpd(512, i26.PaginationModelModule, i26.PaginationModelModule, []), i0.ɵmpd(512, i27.FormModule, i27.FormModule, []),
        i0.ɵmpd(512, i16.MdInputModule, i16.MdInputModule, []), i0.ɵmpd(512, i16.MdRippleModule, i16.MdRippleModule, []), i0.ɵmpd(512, i16.MdButtonModule, i16.MdButtonModule, []), i0.ɵmpd(512, i16.MdSelectionModule, i16.MdSelectionModule, []), i0.ɵmpd(512, i16.MdOptionModule, i16.MdOptionModule, []), i0.ɵmpd(512, i16.MdSelectModule, i16.MdSelectModule, []), i0.ɵmpd(512, i16.MdDialogModule, i16.MdDialogModule, []),
        i0.ɵmpd(512, i16.MdDatepickerModule, i16.MdDatepickerModule, []),
        i0.ɵmpd(512, i28.SalesFormModule, i28.SalesFormModule, []), i0.ɵmpd(512, i29.LabelFormModule, i29.LabelFormModule, []), i0.ɵmpd(512, i30.FormsCenterModule, i30.FormsCenterModule, []), i0.ɵmpd(512, i17.HttpModule, i17.HttpModule, []), i0.ɵmpd(512, i16.MdIconModule, i16.MdIconModule, []),
        i0.ɵmpd(512, i16.NativeDateModule, i16.NativeDateModule, []), i0.ɵmpd(512, i16.MdNativeDateModule, i16.MdNativeDateModule, []), i0.ɵmpd(512, i15.ObserveContentModule, i15.ObserveContentModule, []), i0.ɵmpd(512, i16.MdTabsModule, i16.MdTabsModule, []), i0.ɵmpd(512, i16.MdRadioModule, i16.MdRadioModule, []), i0.ɵmpd(512, i31.RadioButtonModule, i31.RadioButtonModule, []), i0.ɵmpd(512, i32.CustumTableModule, i32.CustumTableModule, []), i0.ɵmpd(512, i33.AddClassificationModule, i33.AddClassificationModule, []), i0.ɵmpd(512, i34.ModalBoxModule, i34.ModalBoxModule, []),
        i0.ɵmpd(512, i35.ViewProductModule, i35.ViewProductModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i16.MD_DATE_FORMATS, i16.MD_NATIVE_DATE_FORMATS, [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3JvbWFyaW8vYW5ndWxhcmFwaS9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
//# sourceMappingURL=app.module.ngfactory.js.map